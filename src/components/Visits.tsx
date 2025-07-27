"use client";

import FormatDate from "./FormatDate";
import { useCallback, useEffect, useState } from "react";
import { GeolocationProps, DBLocationProps } from "@/app/types/definitions.";

const VisitSkeleton = () => (
  <div className="text-zinc-400 no-print mt-5 animate-pulse">
    {/* Skeleton para número de vistas */}
    <div className="flex justify-center mb-2">
      <div className="h-3 bg-gray-300 rounded w-12"></div>
    </div>

    <div id="visit" className="px-3 text-center text-xs">
      {/* Skeleton para la línea de última visita */}
      <div className="flex mx-auto justify-center">
        <div className="h-3 bg-gray-300 rounded w-64"></div>
      </div>
    </div>
  </div>
);

export const Visit = () => {
  const [currentVisit, setCurrentVisit] = useState<GeolocationProps>();
  const [lastVisit, setLastVisit] = useState<DBLocationProps>({
    id: 0,
    ip_address: "",
    city_name: "",
    country_name: "",
    country_flag: "",
    latitude: 0,
    longitude: 0,
    postal_code: "",
    created_at: new Date(),
  });
  const [loading, setLoading] = useState(true);

  const getLocation = useCallback(async () => {
    try {
      const res = await fetch("https://solid-geolocation.vercel.app/location");
      const data: GeolocationProps = await res.json();
      setCurrentVisit(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const sendData = useCallback(async () => {
    if (currentVisit) {
      try {
        await fetch("/api/supabase/send-visit", {
          method: "POST",
          body: JSON.stringify({
            ip_address: currentVisit.ip,
            city_name: currentVisit.city.name,
            country_name: currentVisit.country.name,
            country_flag: currentVisit.country.emojiFlag,
            latitude: currentVisit.coords.latitude,
            longitude: currentVisit.coords.longitude,
            postal_code: currentVisit.city.postalCode,
          }),
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [currentVisit]);

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  useEffect(() => {
    const getLastData = async () => {
      try {
        const res = await fetch("/api/supabase/get-visit");
        const data = await res.json();
        setLastVisit(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getLastData();
    if (lastVisit.ip_address !== currentVisit?.ip) {
      sendData();
    }
  }, [sendData, currentVisit, lastVisit]);

  // Mostrar skeleton mientras carga
  if (loading) {
    return <VisitSkeleton />;
  }

  return (
    <div className="text-zinc-400 no-print mt-5">
      <p className="text-xs text-center">Vistas {lastVisit.id}</p>
      <div id="visit" className="px-3 text-center text-xs">
        {currentVisit?.city.name && (
          <div className="flex mx-auto justify-center">
            <p className="text-xs">
              Última visita el {FormatDate(lastVisit.created_at)} desde{" "}
              {lastVisit.city_name}, {lastVisit.country_name}{" "}
              {lastVisit.country_flag}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Visit;
