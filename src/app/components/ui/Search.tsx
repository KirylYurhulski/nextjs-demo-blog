'use client'

import { FC } from 'react'

/**
 * Component params
 *
 * @interface Props
 * @typedef {Props}
 */
interface Props {
  /**
   * Handler for Create Search String
   *
   * @type {(str: string) => void}
   */
  search: (str: string) => void
}

/**
 * Client components for Search
 *
 * @param {{ search: any; }} Component params
 * @param {Function} @param.search Handler for Create Search String
 * @returns {JSX.Element}
 */
export const Search: FC<Props> = ({ search }) => {
  return (
    <div
      className="container-fluid"
      style={{ width: '40%', marginBottom: '4rem' }}
    >
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={event => {
          search(event.target.value)
        }}
      />
    </div>
  )
}
