import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
  
`;
export const Post = styled.div`
  background:#ffc;
  box-shadow: 5px 5px 7px rgba(33,33,33,.7);
  /* padding-left: 20px; */
  color:#03040c;
  height:10vh;`

export const Span = styled.span`
font-size:2rem;
`;
export const Div1 = styled.div`
grid-area:1/1/2/2;
display:flex;
justify-content: center;
align-items: center;
@media ${(props) => props.theme.breakpoints.sm}{
  grid-area:1/1/2/3;
}
`
export const Div2 = styled.div`
background:#ffc;
box-shadow: 5px 5px 7px rgba(33,33,33,.7);
padding-left: 20px;
color:#03040c;
grid-area: 1/2/2/4;
display:flex;
justify-content: space-around;
align-items: center;
@media ${(props) => props.theme.breakpoints.sm}{
  grid-area:2/2/3/5;
}`

export const Img = styled.img`
  /* width:100%; */
  /* position: absolute; */
  height:5%;
  object-fit: cover;
  overflow: hidden;
  /* left:340px; */
`

// export const FilterDiv = styled.div`
// flex: 0 0 100%;
// /* height:10%; */
// `



export const Div3 = styled.div`
background:#ffc;
box-shadow: 5px 5px 7px rgba(33,33,33,.7);
padding-left: 20px;
color:#03040c;
grid-area: 1 / 5 / 2 / 6;
display: flex;
justify-content: space-around;
align-items: center;
@media ${(props) => props.theme.breakpoints.sm} {
  align-items: center;
  grid-area: 1 / 4 / 2 / 6;
}
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

//Social Icons

export const SocialIcons = styled.a`
transition: 0.3s ease;
color: black;
border-radius: 50px;
padding: 8px;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
    
  }
`