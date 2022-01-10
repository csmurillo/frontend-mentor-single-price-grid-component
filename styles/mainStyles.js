import styled from 'styled-components';

const Container = styled.div`
width:100%; height:100%;
display:flex;
justify-content:center;
align-items:center;
`;
const Main = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap');    
    font-size:16px;
    font-family: 'Karla', sans-serif;
    box-shadow: 0px 10px 10px rgba(110,110,110,.2);

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-template-areas: 
        "Container1"
        "Container2"
        "Container3";

    @media (min-width: 768px) {
    max-width:600px;
    min-height:450px;
    max-height:500px;
    display: grid;
    grid-template-columns: 50%;
    grid-template-rows: 45%;
    grid-template-areas: 
        "Container1 Container1"
        "Container2 Container3";
    }
`;
const ContainerOne = styled.div`
grid-area: Container1;
padding:25px;
background-color:white;
@media (min-width: 768px){
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
`;
const TitleOne = styled.h1`
font-size:1.4em;
color:hsl(179, 62%, 43%);
`;
const SubTitleOne = styled.h2`
font-size:1.05em;
color:hsl(71, 73%, 54%);
`;
const ContentOne = styled.p`
font-size: 1.05em;
line-height:1.5em;
color:hsl(218, 22%, 67%);
`;
const ContainerTwo = styled.div`
grid-area: Container2;
padding:25px;
font-weight:400;
color:rgba(255,255,255,.9);
background-color:hsl(179, 62%, 43%);
@media (min-width: 768px){
    border-bottom-left-radius: 5px;
}
`;
const TitleTwo = styled.h1`
font-size:1.2em;
`;
const SubscriptionPrice=styled.div`
display:flex;
font-size:1.7em;
`;
const ContentTwo = styled.p`
padding-bottom:15px;
`;
const Span = styled.div`
color:rgba(255,255,255,.5);
font-size:.5em;
display:flex;
justify-content:center;
align-items:center;
padding-left:10px;
`;
const ContainerThree = styled.div`
grid-area: Container3;
padding:20px 25px 30px 25px;
background-color:hsl(179, 62%, 46%);
color:rgba(255,255,255,.7);
@media (min-width: 768px){
    border-bottom-right-radius: 5px;
}
`;
const TitleThree = styled.div`
font-size:1.2em;
color:rgba(255,255,255,.9);
padding:8px 0px 20px 0px;
`;
const ButtonContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
`;
const Button = styled.button`
font-size:1.1em;
width:100%;
padding: 15px 0px 15px 0px;
color:white;
background-color:hsl(71, 73%, 54%);
border:none;
border-radius:5px;
box-shadow: 0px 10px 10px rgba(110,110,110,.4);
`;
const LinkContainer = styled.div``;
const Links = styled.div`
font-size:1.1em;
padding-bottom:5px;
@media (min-width: 768px) {
    font-size:.9em;
}
`;

export{ Container,Main,ContainerOne,TitleOne,SubTitleOne,
    ContentOne,ContainerTwo,ContentTwo,SubscriptionPrice,TitleTwo,Span,
    ContainerThree,Button,ButtonContainer,Links,LinkContainer,TitleThree };
