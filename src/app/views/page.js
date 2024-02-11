import React, { useState, useEffect } from "react";
import { BackArrow } from "@/components/BackArrow";
import FormatDate from "../../components/FormatDate";
import supabase from "../../components/utils/supabase";
import { METADATA, YEAR } from "@/Constants";

export const Views = () => {
  const [views, setViews] = useState([]);
  const [mostVisitedCities, setMostVisitedCities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from("address")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          throw error;
        }

        if (data) {
          setViews(data);

          const citiesMap = data.reduce((acc, view) => {
            const city = view.city_name;
            acc[city] = (acc[city] || 0) + 1;
            return acc;
          }, {});

          const sortedCities = Object.keys(citiesMap).sort(
            (a, b) => citiesMap[b] - citiesMap[a]
          );

          setMostVisitedCities(sortedCities);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <BackArrow className="" />
      <div className="justify-center mx-auto flex my-2">
        <h2>Información de Visitantes del perfil</h2>
      </div>
      <section className="xl:p-16 xl:flex mx-auto xl:justify-center text-zinc-900 h-full overflow-x-auto">
        <table className="border-zinc-800 border z-50">
          <thead className="border-zinc-800 border text-justify">
            <tr className="head-table">
              <th>ID</th>
              <th>Dirección IP</th>
              <th>Latitud</th>
              <th>Longitud</th>
              <th>Código Postal</th>
              <th>Ciudad</th>
              <th>País</th>
              <th>Bandera</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {views.map((view) => (
              <tr
                key={view.id}
                className="text-zinc-800 text-xs xl:text-sm result"
              >
                <td>{view.id}</td>
                <td>{view.ip_address}</td>
                <td>{view.latitude}</td>
                <td>{view.longitude}</td>
                <td>{view.postal_code}</td>
                <td>{view.city_name}</td>
                <td>{view.country_name}</td>
                <td>{view.country_flag}</td>
                <td>{FormatDate(view.created_at)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <div className="table-info text-center">
        <p>Total de Visitantes:</p>
        <p className="font-semibold border p-1 rounded-md bg-[#eee]">
          {views.length}
        </p>
        <p>Ciudad de dónde más han visitado el perfil:</p>
        {mostVisitedCities.map((city, index) => (
          <p
            className="font-semibold border p-1 rounded-md bg-[#eee]"
            key={index}
          >
            {city}
          </p>
        ))}
      </div>
      <footer className="justify-center mx-auto flex py-2">
        <p className="text-xs pt-4 pb-0 mb- no-print">
          &copy;{YEAR} • {METADATA.title}
        </p>
      </footer>
    </>
  );
};

export default Views;
