// ─── Auth ──────────────────────────────────────────────────────────────────
export interface LoginPayload {
  username: string
  password: string
  expiresInMins?: number
}

export interface AuthUser {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  image: string
  accessToken: string
  refreshToken: string
}

// ─── Site Content ──────────────────────────────────────────────────────────
export interface StatItem {
  label: string
  value: string
}

export interface PhotoItem {
  id: number
  direction: string
  caption: string
  src: string
  alt: string
}
