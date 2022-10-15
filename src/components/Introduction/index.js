import { Box, Container } from './style';
import ghostspumpkingsImg from '../../assets/images/ghosts.png';

export function Introduction() {

  return (
    <Box>
      <Container>
        <img src={ghostspumpkingsImg} alt="Ghost & Pumpkin" />

        <div>
          <h1><i>A SPOOOOOOOKY HALLOWEEN!!!</i></h1>
          <p>Come check out the best and newest halloween products you have ever seen! Since creepy bats until a rotten zombie hand</p>
        </div>
      </Container>
    </Box>
  )
}