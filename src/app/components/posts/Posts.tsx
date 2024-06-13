'use client'

import { FC } from 'react'
import { useSearch } from '@/app/hooks/useSearch'
import { Search } from '../ui/Search'
import { Pagination } from './Pagination'
import { Post } from '@/models/Post'

/**
 * Component params
 *
 * @interface Props
 * @typedef {Props}
 */
interface Props {
  /**
   * Posts Data
   *
   * @type {Post[]}
   */
  data: Post[]
}

/**
 * Client components for Posts Display With Search and Pagination
 *
 * @param {{ data: any; itemsPerPage: any; }} Component params
 * @param {Post[]} @param.data Posts Data
 * @param {number} @param.itemsPerPage Posts Items on Single Page With Pagination
 * @returns {JSX.Element}
 */
export const Posts: FC<Props> = ({ data }) => {
  const { outtab, onSearch } = useSearch(data, 'title')

  return (
    <>
      <Search search={onSearch} />
      <Pagination posts={outtab} />
    </>
  )
}
