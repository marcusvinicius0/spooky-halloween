import { Container } from "./style"

export function Header() {

  return (
    <Container>
      <nav>
        <ul>
          <li><i><a href="/" rel="noreferrer">Home</a></i></li>
          <li><i><a href="/" rel="noreferrer">Products</a></i></li>
        </ul>
      </nav>
    </Container>
  )
}