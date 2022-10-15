import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-top: 5rem;
  width: 70rem;

  img{
    width: 500px;
    height: 340px;
    object-fit: cover;
    animation: move 1.5s infinite alternate;
    
    @keyframes move {
        from {
            transform: translateY(15px)
        }

        to {
            transform: translateY(-10px)
        }
    }
  }

  div{

    h1{
      color: var(--whitesmoke);
      font-size: 4rem;
      opacity: 0.9;
      
    }

    p{
      width: 33rem;
      color: var(--whitesmoke);
    }
  }

`