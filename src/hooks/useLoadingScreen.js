import { useState, useEffect } from 'react'

const LOADING_DURATION_MS = 4000

export function useLoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, LOADING_DURATION_MS)
    return () => clearTimeout(timer)
  }, [])

  return { isLoading, duration: LOADING_DURATION_MS }
}
