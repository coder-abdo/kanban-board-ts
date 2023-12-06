import { ITheme, IThemeAction } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";


const savedTheme = JSON.parse(localStorage.getItem("theme-storage")) as ITheme["theme"];
export const useThemeStore = create<ITheme & IThemeAction>()(
  persist(
    immer(set => ({
      theme: savedTheme.state.theme || "light",
      changeTheme: () => set((state: ITheme) => {
        if (state.theme === "light") {
          state.theme = "dark"
          document.documentElement.classList.add("dark");
        } else {
          state.theme = "light"
          document.documentElement.classList.remove("dark");
        }
      })
    })), {
    name: "theme-storage",
  }
  )
);
