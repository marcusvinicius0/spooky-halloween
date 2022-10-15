import batsImg from '../../assets/images/bats.png';
import cauldronImg from '../../assets/images/cauldron.png';
import cobwebImg from '../../assets/images/cobweb.png';
import zombieHandImg from '../../assets/images/zombie-hand.png';
import pumpkinImg from '../../assets/images/pumpkin.png';
import spookyImg from '../../assets/images/spooky.png';
import scorchingcauldronImg from '../../assets/images/scorchingcauldron.png';
import witchhatImg from '../../assets/images/witchhat.png';
import pumpkinsImg from '../../assets/images/pumpkins.png';
import graveyardImg from '../../assets/images/graveyard.png';

import { AiFillHeart } from 'react-icons/ai';
import { Container, ProductCard } from './style';
import { useState } from 'react';

export function Products() {
    const [liked, setLiked] = useState(false);

    const controlLike = () => setLiked(!liked);

    const products = [
        {
            id: 1,
            img: batsImg,
            name: "Morcegos Arrepiantes",
            price: "$5.99",
            liked: <AiFillHeart color={liked ? 'var(--red)' : 'var(--whitesmoke)'} />
        },
        {
            id: 2,
            img: cauldronImg,
            name: "Caldeirão da bruxa",
            price: "$49.99",
            liked: <AiFillHeart color={liked ? 'var(--red)' : 'var(--whitesmoke)'} />
        },
        {
            id: 3,
            img: cobwebImg,
            name: "Teia de aranha velha",
            price: "$0.99",
            liked: <AiFillHeart color={liked ? 'var(--red)' : 'var(--whitesmoke)'} />
        },
        {
            id: 4,
            img: zombieHandImg,
            name: "Mão de zumbi podre",
            price: "$14.99",
            liked: <AiFillHeart color={liked ? 'var(--red)' : 'var(--whitesmoke)'} />
        },
        {
            id: 5,
            img: pumpkinImg,
            name: "Abóbora suculenta",
            price: "$18.99",
            liked: <AiFillHeart color={liked ? 'var(--red)' : 'var(--whitesmoke)'} />
        },
        {
            id: 6,
            img: spookyImg,
            name: "Kit assustador",
            price: "$18.99",
            liked: <AiFillHeart color={liked ? 'var(--red)' : 'var(--whitesmoke)'} />
        },
        {
            id: 7,
            img: scorchingcauldronImg,
            name: "Caldeirão escaldante",
            price: "$18.99",
            liked: <AiFillHeart color={liked ? 'var(--red)' : 'var(--whitesmoke)'} />
        },
        {
            id: 8,
            img: witchhatImg,
            name: "Chapéu da bruxa",
            price: "$18.99",
            liked: <AiFillHeart color={liked ? 'var(--red)' : 'var(--whitesmoke)'} />
        },
        {
            id: 9,
            img: pumpkinsImg,
            name: "Abóboras horripilantes",
            price: "$18.99",
            liked: <AiFillHeart color={liked ? 'var(--red)' : 'var(--whitesmoke)'} />
        },
        {
            id: 10,
            img: graveyardImg,
            name: "Cemitério",
            price: "$18.99",
            liked: <AiFillHeart color={liked ? 'var(--red)' : 'var(--whitesmoke)'} />
        },
    ];

    return (
        <>
            <Container>
                {products.map((item, index) => {
                    return (
                        <ProductCard key={index}>
                            <img src={item.img} alt="Produtos" width="130px" height="110px" />
                            <p><b>{item.name}</b></p>
                            <div className="infoBox">
                                <p>{item.price}</p>
                                <label onClick={controlLike}>{item.liked}</label>
                            </div>
                            <button type="button">Adicionar ao carrinho</button>
                        </ProductCard>
                    )
                })}
            </Container>
        </>
    )
}