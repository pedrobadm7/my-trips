import { FunctionComponent } from 'react'
import ReactDOM from 'react-dom'

import * as S from './styles'

export type ModalProps = {
  isShown: boolean
  hide: () => void
  modalContent: JSX.Element
  headerText: string
}

const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText
}) => {
  const modal = (
    <>
      <S.Backdrop onClick={hide} />
      <S.Wrapper>
        <S.StyledModal>
          <S.Header>
            <S.HeaderText>{headerText}</S.HeaderText>
            <S.CloseButton onClick={hide}>X</S.CloseButton>
          </S.Header>
          <S.Content>{modalContent}</S.Content>
        </S.StyledModal>
      </S.Wrapper>
    </>
  )

  return isShown ? ReactDOM.createPortal(modal, document.body) : null
}

export default Modal
