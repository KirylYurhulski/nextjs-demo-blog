'use client'

import { FC, ReactNode } from 'react'
import { Col, Form, Row } from 'react-bootstrap'

/**
 * Component params
 *
 * @interface Props
 * @typedef {Props}
 */
interface Props {
  /**
   * Form Group ID
   *
   * @type {string}
   */
  id: string
  /**
   * Label Title
   *
   * @type {?string}
   */
  title?: string
  /**
   * Content
   *
   * @type {ReactNode}
   */
  children: ReactNode
}

/**
 * Client components for Input Form Row with Title and Content
 *
 * @param {{ id: any; title: any; children: any; }} Component params
 * @param {string} @param.id Form Group ID
 * @param {string} @param.title Label Title
 * @param {reactNode} @param.children Content
 * @returns {JSX.Element}
 */
export const FormRow: FC<Props> = ({ id, title, children }) => {
  return (
    <Form.Group as={Row} className="mb-3" controlId={id}>
      <Form.Label column sm="2">
        {title}
      </Form.Label>
      <Col sm="10">{children}</Col>
    </Form.Group>
  )
}
