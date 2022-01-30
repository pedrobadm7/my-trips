import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1100;
  width: 70rem;
  outline: 0;
`
export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1100;
`
export const StyledModal = styled.div`
  z-index: 100;
  height: 40rem;
  background: white;
  position: relative;
  margin: auto;
  border-radius: 8px;
`
export const Header = styled.div`
  border-radius: 8px 8px 0 0;
  height: 5rem;
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`
export const HeaderText = styled.div`
  background: #fff;
  align-self: center;
  color: lightgray;
  font-size: 2rem;
`
export const CloseButton = styled.button`
  font-size: 2rem;
  border: none;
  border-radius: 3px;
  margin-left: 0.5rem;
  background: none;
  :hover {
    cursor: pointer;
  }
`
export const Content = styled.div`
  padding: 10px;
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
`
