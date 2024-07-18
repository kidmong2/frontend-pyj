// auth: 관리 허가 인증

import { create } from "zustand";

//! 사용자 인증 관리
interface AuthState {
  user: string | null;
  login: (user: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (user) => set({user}),
  logout: () => set({user: null})
}));

