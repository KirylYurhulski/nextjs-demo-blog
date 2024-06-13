'use client'

import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { FC, FormEvent } from 'react'
import { FormRow } from './FormRow'

/**
 * Component params
 *
 * @interface Props
 * @typedef {Props}
 */
interface Props {
  /**
   * Post title
   *
   * @type {string}
   */
  title: string
  /**
   * Post body
   *
   * @type {string}
   */
  body: string
  /**
   * Handler for modify Post Title
   *
   * @type {(title: string) => void}
   */
  onTitleChange: (title: string) => void
  /**
   * Handler for modify Post Body
   *
   * @type {(title: string) => void}
   */
  onBodyChange: (title: string) => void
  /**
   * Handler for save Changes
   *
   * @type {(event: FormEvent<HTMLFormElement>) => void}
   */
  onSave: (event: FormEvent<HTMLFormElement>) => void
}

/**
 * Client components for Modify Post Data
 *
 * @param {{ title: any; body: any; onTitleChange: any; onBodyChange: any; onSave: any; }} Component params
 * @param {string} @param.title Post title
 * @param {string} @param.body Post body
 * @param {Function} @param.onTitleChange Handler for modify Post Title
 * @param {Function} @param.onBodyChange Handler for modify Post Body
 * @param {Save} @param.onSave Handler for save Changes
 * @returns {JSX.Element}
 */
export const CKEditorTemplate: FC<Props> = ({
  title,
  body,
  onTitleChange,
  onBodyChange,
  onSave,
}) => {
  return (
    <Form onSubmit={event => onSave(event)}>
      <FormRow id={'formButtonSave'}>
        <Button type="submit">Save</Button>
      </FormRow>

      <FormRow id={'formTitle'} title={'Title:'}>
        <Form.Control
          type="text"
          placeholder="Your title..."
          value={title}
          onChange={event => onTitleChange(event.target.value.trim())}
        />
      </FormRow>

      <FormRow id={'formBody'} title={'Body:'}>
        <CKEditor
          editor={ClassicEditor}
          data={body}
          onChange={(event, editor) => onBodyChange(editor.getData().trim())}
        />
      </FormRow>
    </Form>
  )
}
