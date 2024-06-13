'use client'

import Link from 'next/link'
import { FC, useState } from 'react'
import { Table } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
import { usePagination } from '@/app/hooks/usePagination'
import { ButtonWithConfirme } from '../../../components/ui/ButtonWithConfirme'
import { MessageAlert } from '../../../components/ui/MessageAlert'
import { HTTPPostsRequest } from '@/api/HTTPPostsRequest'
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
 * Message for Message Alert component
 *
 * @typedef {message}
 */
type message = {
  value: string
  variant: string
}

/**
 * Client components for Posts View With Pagination
 *
 * @param {{ data: any; }} Component params
 * @param {Post[]} @param.data Posts Data
 * @returns {JSX.Element}
 */
export const Pagination: FC<Props> = ({ data }) => {
  const customPagination = usePagination(data, 7)
  const [message, setMessage] = useState<message>({ value: '', variant: '' })

  const onDelete = (id: number) => {
    new HTTPPostsRequest()
      .Delete(id.toString())
      .then(() => {
        setMessage({ value: 'Data saved successfully', variant: 'success' })
      })
      .catch(error => setMessage({ value: error.message, variant: 'danger' }))
  }

  return (
    <>
      {message.value && (
        <MessageAlert message={message.value} variant={message.variant} />
      )}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <Rows data={customPagination.currentItems} onDelete={onDelete} />
        </tbody>
      </Table>

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

const Rows: FC<{ data: Post[]; onDelete: (id: number) => void }> = ({
  data,
  onDelete,
}) => {
  return (
    <>
      {data.map(item => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>
            <Link href="/admin/post/[id]" as={`/admin/post/${item.id}`}>
              Edit
            </Link>
          </td>
          <td>
            <ButtonWithConfirme
              caption="Delete"
              confirmeMessage={
                'Are you sure you want to delete the selected blog post?'
              }
              onConfirme={() => onDelete(item.id)}
            />
          </td>
        </tr>
      ))}
    </>
  )
}
