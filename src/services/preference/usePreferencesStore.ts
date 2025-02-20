import { create, createStore } from "zustand";

export type PreferenceState = {
    language: string;
    theme: string;
    setPreference: (key: keyof PreferenceState, value: string) => void;
};

export const usePreferencesStore = createStore<PreferenceState>((set) => ({
    language: "en",
    theme: "light",
    setPreference: (key, value) => set({ [key]: value }),
}));
