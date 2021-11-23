import Link from 'next/link';
import React from 'react';
import { Container, Div1, Span } from './HeaderStyles';
import { MdDashboard } from 'react-icons/md';
import { Post } from '../../styles/GlobalComponents/styleIndex';


const Header = () => (
    <Container>
        <Post>
            <Div1>
                <Link href="/">
                    <a style={{ display: "flex", alignItems: "center", color: 'black', marginBottom: '20px', paddingTop: '20px' }}>
                        <MdDashboard size="3rem" /> <Span>Corkboard</Span>
                    </a>
                </Link>
            </Div1>
        </Post>
        <Post>
            
        </Post>

    </Container>
)

export default Header
