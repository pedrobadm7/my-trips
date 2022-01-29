import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import * as S from './styles'

const Modal = ({ show, onClose, children }: any) => {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const handleClose = (e: any) => {
    e.preventDefault()
    onClose()
  }

  const modalContent = show && (
    <S.Overlay>
      <S.Modal>
        <S.Header>
          <button type="button" onClick={handleClose}>
            <S.Button>Close</S.Button>
          </button>
        </S.Header>
        <S.Body>{children}</S.Body>
      </S.Modal>
    </S.Overlay>
  )

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')!
    )
  }
  return null
}

export default Modal
