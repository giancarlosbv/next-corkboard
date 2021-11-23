import styled from "styled-components";

//this file is my "index" of styles for different things I suppose?

export const Section = styled.section`
display: ${(props) => props.grid ? "grid" : "flex" };
flex-direction: ${(props)=> props.row ? "row" : "column" };
padding: ${(props) => props.nopadding?"0":"32px 48px 0" };
margin: 0 auto;
max-width:1040px;
box-sizing:content-box;
position:relative;
overflow: hidden;
grid-template-columns: 1fr 1fr;
`
export const Post = styled.div`
    background:#ffc;
    box-shadow: 5px 5px 7px rgba(33,33,33,.7);
    padding-left: 20px;
    color:#03040c;
    `