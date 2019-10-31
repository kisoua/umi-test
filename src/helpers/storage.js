import cookies from 'js-cookie'
import { STORAGE_DOMAIN, STORAGE_EXPIRE_DAYS, STORAGE_TOKEN_KEY } from '../config'

const DEFAULT_COOKIE_OPTS = {
  expires: STORAGE_EXPIRE_DAYS, // 49 days
  domain: STORAGE_DOMAIN,
  path: '/'
}

const { localStorage } = window

export function clearAll() {
  Object.keys(cookies.get()).forEach(name => {
    cookies.remove(name, DEFAULT_COOKIE_OPTS)
  })
  if (localStorage) {
    localStorage.clear()
  }
}

export function setToken(value) {
  return cookies.set(STORAGE_TOKEN_KEY, value, DEFAULT_COOKIE_OPTS)
}

export function getToken() {
  return cookies.get(STORAGE_TOKEN_KEY)
}
