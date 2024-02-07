import { useState, useEffect } from "react";
import Papa from "papaparse";

export const useData = (columnNamesFetch, customURL) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(customURL);
        const csv = await res.text();

        const parsedCsv = [];

        let firstLineSkipped = false;

        Papa.parse(csv, {
          header: false,
          dynamicTyping: true,
          skipEmptyLines: true,
          step: (results) => {
            if (!firstLineSkipped) {
              firstLineSkipped = true;
              return;
            }

            const rowData = columnNamesFetch.reduce(
              (acc, columnName, index) => {
                let value = results.data[index];

                if (typeof value === "string") {
                  value = value
                    .replace(/""/g, '"')
                    .replace(/(?:\r\n|\r|\n)/g, " ");
                }

                acc[columnName] = value;
                return acc;
              },
              {}
            );
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
      } catch (error) {
        console.error("Error fetching data 🤔:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [columnNamesFetch, customURL]);

  return { data, loading };
};

export default useData;
