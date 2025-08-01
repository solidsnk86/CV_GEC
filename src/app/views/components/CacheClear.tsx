import { openDialog } from "@/dialog";
import { InfoIcon, Trash2 } from "lucide-react";

export const CacheClear = () => {
  const clearCache = async () => {
    try {
      const cacheName = "csv-cache";
      const success = await caches.delete(cacheName);
      if (success) {
        openDialog({
          content: (
            <div className="p-6">
              <p>Se ha limpiado la caché con éxito</p>
            </div>
          ),
        });
      } else {
        openDialog({
          content: (
            <div className="p-6">
              <p>No se encontraron datos en la caché</p>
            </div>
          ),
        });
      }
    } catch (error) {
      console.error("Error al eliminar la caché:", error);
    }
  };

  return (
    <div className="p-4 rounded border border-red-200 bg-red-100 my-16">
      <h3 className="flex gap-2 items-center text-lg font-semibold">
        <InfoIcon size={18} />
        Limpiar datos
      </h3>
      <article className="flex justify-between gap-3 mt-2">
        <small>
          Esta acción eliminará los datos almacenados en la caché del navegador,
          lo cual es útil si has realizado cambios recientes en tu CV. Al
          limpiar la caché, te aseguras de ver siempre la versión más
          actualizada y evitar conflictos con datos antiguos.
        </small>
        <aside>
          <button
            onClick={clearCache}
            className="flex gap-1 text-zinc-50 items-center border border-red-400 bg-gradient-to-b from-red-400 to-red-600 px-4 py-1 rounded hover:brightness-110"
          >
            <Trash2 size={16} />
            Limpiar
          </button>
        </aside>
      </article>
    </div>
  );
};
