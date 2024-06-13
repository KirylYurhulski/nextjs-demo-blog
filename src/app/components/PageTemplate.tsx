'use client'

import { FC, ReactNode } from 'react'

/**
 * Component params
 *
 * @interface Props
 * @typedef {Props}
 */
interface Props {
  /**
   * Title
   *
   * @type {string}
   */
  title: string
  /**
   * Content
   *
   * @type {?ReactNode}
   */
  children?: ReactNode
}

/**
 * Client components for Page Template with Title and Content
 *
 * @param {{ title: any; children: any; }} Component params
 * @param {string} @param.title Title
 * @param {reactNode} @param.children Content
 * @returns {JSX.Element}
 */
export const PageTemplate: FC<Props> = ({ title, children }) => {
  return (
    <>
      <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          padding: '1rem 0',
        }}
      >
        {title}
      </h1>
      {children}
    </>
  )
}
