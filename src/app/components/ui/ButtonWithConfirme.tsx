'use client'

import { FC, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

/**
 * Component params
 *
 * @interface Props
 * @typedef {Props}
 */
interface Props {
  /**
   * Button`s caption
   *
   * @type {string}
   */
  caption: string
  /**
   * Confirme message
   *
   * @type {string}
   */
  confirmeMessage: string
  /**
   * Handler onConfirme
   *
   * @type {() => void}
   */
  onConfirme: () => void
}

/**
 * Client components for Button with Confirme Popup
 *
 * @param {{ caption: string; confirmeMessage: string; onConfirme: Function; }} Component params
 * @param {string} @param.caption Button`s caption
 * @param {string} @param.confirmeMessage Confirme message
 * @param {Function} @param.onConfirme Handler onConfirme
 * @returns {JSX.Element}
 */
export const ButtonWithConfirme: FC<Props> = ({
  caption,
  confirmeMessage,
  onConfirme,
}) => {
  const [showPopupConfirme, setShowPopupConfirme] = useState(false)

  return (
    <>
      <Button variant="danger" onClick={() => setShowPopupConfirme(true)}>
        {caption}
      </Button>

      <Modal
        show={showPopupConfirme}
        onHide={() => setShowPopupConfirme(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirme operation</Modal.Title>
        </Modal.Header>
        <Modal.Body>{confirmeMessage}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => {
              setShowPopupConfirme(false)
              onConfirme()
            }}
          >
            Ok
          </Button>
          <Button variant="primary" onClick={() => setShowPopupConfirme(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
