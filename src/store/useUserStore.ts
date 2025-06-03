import {create} from 'zustand';
interface UserState{
    user: {
        name: string, 
        photo: string,
    } | null;
    isLoggedIn: boolean;
    setUser: (name: string, photo: string) => void;
    logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
    user: null,
    isLoggedIn: true,
    setUser: ((name, photo)=> set({user: {name, photo}, isLoggedIn: true})),
    logout: () => set({user: null,  isLoggedIn: false})
}));