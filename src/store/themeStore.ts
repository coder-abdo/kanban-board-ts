import { ITheme, IThemeAction } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useThemeStore = create<ITheme & IThemeAction>()(
  persist(
    immer(set => ({
      theme: "light",
      changeTheme: () => set(state => {
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
