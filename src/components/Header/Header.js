import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, Post, Img} from './HeaderStyles';
import { MdDashboard } from 'react-icons/md';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
// import { Post } from '../../styles/GlobalComponents/styleIndex';
// import thumbtack from '/images/thumbtack.png'


const Header = () => (
    <Container>
        <Post>
        <Img src = "/images/thumbtack.png"/>
        <Div1>
            
            <Link href="/">
                <a style={{ display: "flex", alignItems: "center", color: 'black', marginBottom: '20px', paddingTop: '20px' }}>
                    <MdDashboard size="3rem" /> <Span>Corkboard</Span>
                </a>
            </Link>
        </Div1>
        </Post>
        <Div2>
            <li>
                <Link href="#Todo">
                    <NavLink>ToDo</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#Quotes">
                    <NavLink>Quotes</NavLink>
                </Link>
            </li>

            <li>
                <Link href="#Dictionary">
                    <NavLink>Dictionary</NavLink>
                </Link>
            </li>

        </Div2>
        <Div3>
            <SocialIcons href="https://github.com/giancarlosbv">
                <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/giancarlos-blanco/">
                <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://twitter.com/BlancoGianca">
                <AiFillTwitterCircle size="3rem" />
            </SocialIcons>
        </Div3>



    </Container>
)

export default Header
