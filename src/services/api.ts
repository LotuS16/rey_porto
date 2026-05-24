import type { AuthUser, LoginPayload } from '@/types'

const BASE_URL = 'https://dummyjson.com'

/**
 * Authenticate a user and return their profile + JWT tokens.
 * Throws an Error with a descriptive message on failure.
 */
export async function loginUser(payload: LoginPayload): Promise<AuthUser> {
  const res = await fetch(`${BASE_URL}/user/login`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({
      username:      payload.username,
      password:      payload.password,
      expiresInMins: payload.expiresInMins ?? 30,
    }),
  })

  const data = await res.json()

  if (!res.ok || data.message) {
    throw new Error(data.message ?? `Login failed (${res.status})`)
  }

  return data as AuthUser
}
