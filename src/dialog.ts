import { ReactNode } from "react";
import { createRoot } from "react-dom/client";

export const openDialog = ({ content }: { content: ReactNode }) => {
  const dialog = document.createElement("dialog");
  const root = createRoot(dialog);

  document.body.appendChild(dialog);
  root.render(content);
  dialog.showModal();

  const controller = new AbortController();

  dialog.addEventListener(
    "click",
    (event) => {
      const dialogChild = dialog.querySelector("div");
      if (dialogChild && !dialogChild?.contains(event.target as Node)) {
        dialog.close();
        root.unmount();
        controller.abort();
      }
    },
    { signal: controller.signal }
  );
};
