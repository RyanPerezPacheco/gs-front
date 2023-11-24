import { Container } from './styles'

export function Input({ ...rest }) {
  return (
    <Container >
      <input
        autoComplete="off"
        {...rest}
      />
    </Container>
  )
}