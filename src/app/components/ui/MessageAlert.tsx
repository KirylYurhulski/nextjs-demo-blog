'use client'

import { FC, useState } from 'react'
import { Alert, Button } from 'react-bootstrap'

/**
 * Component params
 *
 * @interface Props
 * @typedef {Props}
 */
interface Props {
  /**
   * Message
   *
   * @type {string}
   */
  message: string
  /**
   * Alert Type
   *
   * @type {string}
   */
  variant: string
  /**
   * Optional Handler onClose Message Alert
   *
   * @type {?() => void}
   */
  onClose?: () => void
}

/**
 * Client components for Message Alert
 *
 * @param {{ message: string; variant: string; }} Component params
 * @param {string} @param.message Message
 * @param {string} @param.variant Type
 * @returns {JSX.Element}
 */
export const MessageAlert: FC<Props> = ({ message, variant, onClose }) => {
  const [show, setShow] = useState(true)

  const onCloseAlert = () => {
    setShow(false)

    if (onClose) {
      onClose()
    }
  }

  return (
    <>
      <Alert
        show={show}
        variant={variant}
        onClose={() => onCloseAlert()}
        dismissible
      >
        <Alert.Heading>Result of the operation:</Alert.Heading>
        <p>{message}</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => onCloseAlert()} variant={`outline-${variant}`}>
            Close me
          </Button>
        </div>
      </Alert>
    </>
  )
}
