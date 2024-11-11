import { create } from "zustand"

type NewAccountState = {
    isOpen:boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useOpenContactUs = create<NewAccountState>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true}),
    onClose: () => set({ isOpen: false}),
}));