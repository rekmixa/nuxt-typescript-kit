export function writeToLocalStorage(key: string, value: any): void {
  if (!process.browser) {
    return
  }

  localStorage.setItem(key, JSON.stringify(value))
}

export function readFromLocalStorage<T>(key: string, defaultValue: any = null): T {
  const value = process.browser ? localStorage.getItem(key) : null

  if (value === null) {
    return defaultValue
  }

  return value === null ? defaultValue : JSON.parse(value)
}

export function removeFromLocalStorate(key: string): void {
  if (!process.browser) {
    return
  }

  localStorage.removeItem(key)
}

export function clearLocalStorage(): void {
  if (!process.browser) {
    return
  }

  localStorage.clear()
}
