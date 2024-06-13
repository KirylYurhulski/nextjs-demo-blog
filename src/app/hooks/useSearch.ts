import { useState, useEffect } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

/**
 * Result
 *
 * @interface Customizing
 * @typedef {Customizing}
 */
interface Customizing {
  /**
   * Result DataSet
   *
   * @type {any[]}
   */
  outtab: any[]
  /**
   * Handler for search
   *
   * @type {(value: string) => void}
   */
  onSearch: (value: string) => void
}

/**
 * Custom Hook for search data from in custom DataSet
 *
 * @export
 * @param {any[]} data
 * @param {string} field
 * @returns {Customizing}
 */
export function useSearch(data: any[], field: string): Customizing {
  const [outtab, setOuttab] = useState(data)
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const onSearch = (value: string) => {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set(field, value)
    } else {
      params.delete(field)
    }
    replace(`${pathname}?${params.toString()}`)
  }

  useEffect(() => {
    const value = searchParams.get(field)
    if (value) {
      setOuttab(
        data.filter(item =>
          item[field].toLowerCase().includes(value.toLowerCase()),
        ),
      )
    } else {
      setOuttab(data)
    }
  }, [searchParams])

  return {
    outtab,
    onSearch,
  }
}
