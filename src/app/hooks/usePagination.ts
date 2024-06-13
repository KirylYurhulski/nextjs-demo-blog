import { useMemo, useState } from 'react'

/**
 * Result
 *
 * @interface Customizing
 * @typedef {Customizing}
 */
interface Customizing<T> {
  /**
   * Items for display for single page
   *
   * @type {any[]}
   */
  currentItems: T[]
  /**
   * Number of pages
   *
   * @type {number}
   */
  pageCount: number
  /**
   * Handler for select page number
   *
   * @type {(event: { selected: number }) => void}
   */
  onPageNumberClick: (event: { selected: number }) => void
}

/**
 * Custom Hook for create pagination settings
 *
 * @export
 * @param {any[]} data
 * @param {number} [itemsPerPage=20]
 * @returns {Customizing}
 */
export function usePagination<T>(
  dataSet: Array<T>,
  itemsPerPage: number = 20,
): Customizing<T> {
  const [itemOffset, setItemOffset] = useState(0)
  const endOffset = itemOffset + itemsPerPage

  const pageCount = Math.ceil(dataSet.length / itemsPerPage)

  return {
    currentItems: dataSet.slice(itemOffset, endOffset),
    pageCount: pageCount,
    onPageNumberClick: (event: { selected: number }) => {
      const newOffset = (event.selected * itemsPerPage) % dataSet.length
      setItemOffset(newOffset)
    },
  }
}
