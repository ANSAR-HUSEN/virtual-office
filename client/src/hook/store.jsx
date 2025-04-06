import { create } from 'zustand'

const useStore = create((set) => ({
    selected: "",
    setSelected: (selected) => set({ selected }),
}))


export default useStore