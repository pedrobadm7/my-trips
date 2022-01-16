import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size="32" aria-label="Close" />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>
    <S.Body>
      <p>
        Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia
        ce receita de bolis, mais bolis eu num gostis.Quem manda na minha terra
        sou euzis!Praesent malesuada urna nisi, quis volutpat erat hendrerit
        non. Nam vulputate dapibus.Detraxit consequat et quo num tendi nada.
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
