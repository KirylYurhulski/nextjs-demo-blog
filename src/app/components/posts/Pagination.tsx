'use client'

import { FC } from 'react'
import Link from 'next/link'
import ReactPaginate from 'react-paginate'
import { usePagination } from '@/app/hooks/usePagination'
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
  posts: Post[]
}

/**
 * Client components for Posts Display With Pagination
 *
 * @param {{ posts: any; itemsPerPage: any; }} Component params
 * @param {Post[]} @param.posts Posts Data
 * @param {number} @param.itemsPerPage Posts Items on Single Page With Pagination
 * @returns {JSX.Element}
 */
export const Pagination: FC<Props> = ({ posts }) => {
  const customPagination = usePagination(posts)

  return (
    <>
      <Items currentItems={customPagination.currentItems} />
      <ReactPaginate
        previousLabel="Previous"
        breakLabel={' ... '}
        nextLabel="Next >"
        onPageChange={customPagination.onPageNumberClick}
        pageRangeDisplayed={5}
        pageCount={customPagination.pageCount}
        renderOnZeroPageCount={null}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
      />
    </>
  )
}

/**
 * Client components for Posts Display for Current Page Number
 *
 * @param {{ currentItems: any; }} param0
 * @param {*} param0.currentItems
 * @returns {*}
 */
const Items: FC<{ currentItems: Post[] }> = ({ currentItems }) => {
  return (
    <ul
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {currentItems.map(item => (
        <li key={item.id}>
          <Link href={'/blog/[id]'} as={`/blog/${item.id}`}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
