import { IModal, IModalAction } from "@/types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";



export const modalStore = create<IModal & IModalAction>()(
  immer(set => ({
    isOpen: false,
    openModal: () => set((state: IModal) => {
      state.isOpen = true
    }),
    closeModal: () => set((state: IModal) => {
      state.isOpen = false
    }),
  }))
)
