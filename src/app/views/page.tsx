"use client";

import React, { useState, useEffect, useCallback } from "react";
import { BackArrow } from "@/components/BackArrow";
import FormatDate from "../../components/FormatDate";
import { METADATA, YEAR } from "@/Constants";
import { DBLocationProps } from "../types/definitions.";
import { CacheClear } from "./components/CacheClear";
import { VisitCard } from "./components/VisitsCard";

const CACHE_NAME = "cv-gec";

const Views = () => {
  const [views, setViews] = useState<DBLocationProps[]>([]);
  const [mostVisitedCities, setMostVisitedCities] = useState<string[]>([]);
  const [mostVisitedCountries, setMostVisitedCountries] = useState<string[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [payload, setPayload] = useState<number>(20);

  const getAllVisits = useCallback(async () => {
    setIsLoading(true);

    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(CACHE_NAME);

    if (cachedResponse) {
      const dataFromCache: DBLocationProps[] = await cachedResponse.json();
      if (dataFromCache.length > 0) {
        setViews(dataFromCache);

        const mapCities = dataFromCache.reduce((acc, val) => {
          const city = val.city_name;
          acc[city] = acc[city] + 1 || 0;

          return acc;
        }, {} as Record<string, number>);

        const sortedCities = Object.keys(mapCities).sort(
          (a, b) => mapCities[b] - mapCities[a]
        );

        const mapCountries = dataFromCache.reduce((acc, val) => {
          const country = val.country_name;
          acc[country] = acc[country] + 1 || 0;

          return acc;
        }, {} as Record<string, number>);

        const sortedCountries = Object.keys(mapCountries).sort(
          (a, b) => mapCountries[b] - mapCountries[a]
        );
        setMostVisitedCountries(sortedCountries);
        setMostVisitedCities(sortedCities);
        setIsLoading(false);
        return;
      }
    }

    const response = await fetch("/api/supabase/get-all-visits");
    const allData: DBLocationProps[] = await response.json();

    const cacheResponse = new Response(JSON.stringify(allData), {
      headers: { "Content-Type": "application/json" },
    });
    await cache.put(CACHE_NAME, cacheResponse.clone());

    setViews(allData);

    const mapCities = allData.reduce((acc, val) => {
      const city = val.city_name;

      acc[city] = acc[city] + 1 || 1;
      return acc;
    }, {} as Record<string, number>);

    const sortedCities = Object.keys(mapCities).sort(
      (a, b) => mapCities[b] - mapCities[a]
    );

    const mapCountries = allData.reduce((acc, val) => {
      const country = val.country_name;
      acc[country] = acc[country] + 1 || 0;

      return acc;
    }, {} as Record<string, number>);

    const sortedCountries = Object.keys(mapCountries).sort(
      (a, b) => mapCountries[b] - mapCountries[a]
    );

    setMostVisitedCountries(sortedCountries);
    setMostVisitedCities(sortedCities);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getAllVisits();
  }, [getAllVisits]);

  return (
    <section className="xl:max-w-6xl lg:max-w-5xl md:w-full justify-center mx-auto">
      <div className="mt-2">
        <BackArrow className="" />
      </div>
      <div className="justify-center mx-auto flex my-2">
        <h2>Información de Visitantes del perfil</h2>
      </div>
      <div
        className="xl:grid mx-auto xl:justify-center text-zinc-900 h-full overflow-x-auto"
        id="section"
      >
        <div className="flex gap-2 items-center text-xs my-1">
          <span className="w-4 h-4 bg-[#c6feb8c3]" />
          País Frecuente
          <span className="w-4 h-4 bg-[#b8d9fec3]" />
          Ciudad Frecuente
        </div>
        <table className="border-zinc-400 border z-50 w-full">
          {isLoading ? (
            <>
              <thead className="border-zinc-400 border text-justify">
                <tr className="head-table">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <th
                      key={`th-${index}`}
                      className="animate-pulse bg-zinc-300 w-16 h-6"
                    >
                      &nbsp;
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 20 }).map((_, index) => (
                  <tr
                    key={index}
                    className="text-zinc-800 text-xs xl:text-sm result border border-zinc-300 bg-zinc-100"
                  >
                    {Array.from({ length: 9 }).map((_, index) => (
                      <td
                        key={`td-${index}`}
                        className="animate-pulse bg-zinc-300 w-16 h-6"
                      >
                        &nbsp;
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </>
          ) : (
            <>
              <thead className="border-zinc-400 border text-justify">
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
                {views.slice(0, payload).map((view, index) => {
                  const mostVisited = mostVisitedCities
                    .slice(0, 1)
                    .map((city) => city);
                  const country = mostVisitedCountries
                    .slice(0, 1)
                    .map((country) => country);
                  return (
                    <tr
                      key={view.id}
                      title={
                        mostVisited[0] === view.city_name
                          ? "Ciudad frecuente " + view.city_name
                          : "" || country[0] === view.country_name
                          ? "País frecuente " + view.country_name
                          : ""
                      }
                      style={{
                        background:
                          index % 2 === 0
                            ? "#f4f4f5"
                            : "#e4e4e7" && mostVisited[0] === view.city_name
                            ? "#b8d9fec3"
                            : "" || country[0] === view.country_name
                            ? "#c6feb8c3"
                            : "",
                      }}
                      className="text-zinc-800 text-xs xl:text-sm result border border-zinc-300"
                    >
                      <td>{view.id}</td>
                      <td
                        className="max-w-28 overflow-x-hidden"
                        title={view.ip_address}
                      >
                        {view.ip_address}
                      </td>
                      <td>{view.latitude}</td>
                      <td>{view.longitude}</td>
                      <td>{view.postal_code}</td>
                      <td className="max-w-44 overflow-x-hidden">
                        {view.city_name}
                      </td>
                      <td>{view.country_name}</td>
                      <td>{view.country_flag}</td>
                      <td>{FormatDate(view.created_at)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </>
          )}
        </table>
        <button
          onClick={() => {
            setPayload((prev) => prev + 10);
            document.querySelector("section")!.scrollIntoView({
              behavior: "smooth",
              block: "end",
            });
          }}
          disabled={payload > views.length}
          title={
            payload > views.length
              ? "No hay más visitantes que cargar"
              : "Cargar más visitantes"
          }
          className="flex justify-center mx-auto my-10 w-fit px-4 py-1 border bg-gradient-to-b bg-zinc-100 to-zinc-300 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-40"
        >
          Cargar más
        </button>
      </div>
      <VisitCard
        views={views}
        mostVisitedCities={mostVisitedCities}
        mostVisitedCountries={mostVisitedCountries}
      />
      <CacheClear />
      <footer className="justify-center mx-auto flex py-2">
        <p className="text-xs pt-4 pb-0 mb- no-print">
          &copy;{YEAR} • {METADATA.title}
        </p>
      </footer>
    </section>
  );
};

export default Views;
