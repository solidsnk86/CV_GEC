

import { useState, useEffect, useCallback } from "react";
import Papa from "papaparse";

export const useFetchData = (columnNamesFetch, customURL) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const parseCsv = useCallback(
    (csvText) => {
      const parsedCsv = [];
      let firstLineSkipped = false;

      Papa.parse(csvText, {
        header: false,
        dynamicTyping: true,
        skipEmptyLines: true,
        step: (results) => {
          if (!firstLineSkipped) {
            firstLineSkipped = true;
            return;
          }

          const rowData = columnNamesFetch.reduce((acc, columnName, index) => {
            let value = results.data[index];

            if (typeof value === "string") {
              value = value.replace(/""/g, '"').replace(/(?:\r\n|\r|\n)/g, " ");
            }

            acc[columnName] = value;
            return acc;
          }, {});
          parsedCsv.push(rowData);
        },
        complete: () => {
          setData(parsedCsv);
          setLoading(false);
        },
        error: (error) => {
          console.error("Error parsing CSV 😢:", error);
          setLoading(false);
        },
      });
    },
    [columnNamesFetch]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cacheKey = Array.isArray(columnNamesFetch)
          ? columnNamesFetch.join("-")
          : String(columnNamesFetch);

        const cache = await caches.open("csv-cache");
        const cachedResponse = await cache.match(cacheKey);

        if (cachedResponse) {
          const cachedCsv = await cachedResponse.text();
          if (cachedCsv.length > 0) {
            parseCsv(cachedCsv);
            return;
          }
        }

        const res = await fetch(customURL);
        const csvText = await res.text();

        const cacheResponse = new Response(csvText, {
          headers: { "Content-Type": "text/csv" },
        });
        await cache.put(cacheKey, cacheResponse.clone());

        parseCsv(csvText);
      } catch (error) {
        console.error("Error fetching data 🤔:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [columnNamesFetch, customURL, parseCsv]);

  return { data, loading };
};
