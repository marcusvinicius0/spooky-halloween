import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
    margin-top: 2rem;
`

export const ProductCard = styled.div`
    width: 220px;
    height: 260px;
    border-radius: 8px;
    border: 1px solid var(--softgray);
    background: var(--purple-800);
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    box-shadow: 5px 5px 5px var(--purple-900);

    img{
        margin-top: 0.5rem;
        object-fit: cover;
    }

    p{
        color: var(--whitesmoke);
    }

    .infoBox{
        display: flex;
        gap: 6rem;
    }

    button{
        border: 0;
        background: var(--orange-600);
        border-radius: 4px;
        width: 90%;
        height: 35px;
        color: var(--white);
        padding: 0.1rem;
        transition: all 1s;

        :hover{
            opacity: 0.8;
        }
    }

    label{
        height: 20px;

        svg{
            cursor: pointer;
        }
    }

    :hover{

    }
`