import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

export type PagesTemplateProps = {
  heading: string
  body: string
}

const PagesTemplate = ({ heading, body }: PagesTemplateProps) => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} arial-label="Close" />
    </LinkWrapper>

    <S.Heading>heading</S.Heading>

    <S.Body>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </S.Body>
  </S.Content>
)

export default PagesTemplate
