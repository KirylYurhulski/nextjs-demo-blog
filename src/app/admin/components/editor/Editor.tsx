'use client'

import { FC, FormEvent, useState } from 'react'
import { MessageAlert } from '../../../components/ui/MessageAlert'
import { CKEditorTemplate } from './CKEditorTepmlate'
import { HTTPPostsRequest } from '@/api/HTTPPostsRequest'
import { Post } from '@/models/Post'

/**
 *  Component params
 *
 * @interface Props
 * @typedef {Props}
 */
interface Props {
  /**
   * Post Data
   *
   * @type {Post}
   */
  data: Post
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
 * Client components for Modify Post Data
 *
 * @param {{ data: any; }} Component params
 * @param {Post} @param.data Post Data
 * @returns {JSX.Element}
 */
export const Editor: FC<Props> = ({ data }) => {
  const [title, setTitle] = useState<string>(data.title)
  const [body, setBody] = useState<string>(data.body)
  const [message, setMessage] = useState<message>({ value: '', variant: '' })

  const onSave = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    new HTTPPostsRequest()
      .Modify({ ...data, title, body })
      .then(() =>
        setMessage({ value: 'Data saved successfully', variant: 'success' }),
      )
      .catch(error => setMessage({ value: error.message, variant: 'success' }))
  }

  return (
    <>
      {message.value && (
        <MessageAlert message={message.value} variant={message.variant} />
      )}

      <CKEditorTemplate
        title={title}
        body={body}
        onTitleChange={setTitle}
        onBodyChange={setBody}
        onSave={onSave}
      />
    </>
  )
}
