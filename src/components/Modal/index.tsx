import { FunctionComponent } from 'react'
import ReactDOM from 'react-dom'

import * as S from './styles'

export type ModalProps = {
  isShown: boolean
  hide: () => void
  // children: JSX.Element
  children: React.ReactNode
  headerText: string
}

const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  children,
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
          <S.Content>{children}</S.Content>
        </S.StyledModal>
      </S.Wrapper>
    </>
  )

  return isShown ? ReactDOM.createPortal(modal, document.body) : null
}

export default Modal
