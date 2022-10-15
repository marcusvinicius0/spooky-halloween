import styled from "styled-components";

export const Container = styled.header`
  padding: 2rem;

  nav, ul{
    display: flex;
    justify-content: flex-end;
    
    li{
      list-style-type: none;

      & + li{
        margin-left: 1rem;
      }

      a{
        color: var(--whitesmoke);
        font-weight: bold;
        
        :hover{
          border-bottom: 1px solid var(--whitesmoke);
        }
      }
    }
  }

`