'use client'

import { FC } from 'react'
import { useSearch } from '@/app/hooks/useSearch'
import { Search } from '@/app/components/ui/Search'
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
 * Client components for Posts View With Search and Pagination
 *
 * @param {{ data: any; }} Component params
 * @param {Post[]} @param.data Posts Data
 * @returns {JSX.Element}
 */
export const Posts: FC<Props> = ({ data }) => {
  const { outtab, onSearch } = useSearch(data, 'title')

  return (
    <>
      <Search search={onSearch} />
      <Pagination data={outtab} />
    </>
  )
}
