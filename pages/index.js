import styled from 'styled-components';

export default () => (
  <>
    <Container>
        <Main>
            <ContainerOne>
                <TitleOne>
                    Join our community
                </TitleOne>
                <SubTitleOne>
                    30-day, hassle-free money back guarantee
                </SubTitleOne>
                <ContentOne>
                    Gain access to our full library of tutorials along with expert code reviews. 
                    Perfect for any developers who are serious about honing their skills.
                </ContentOne>
            </ContainerOne>
            <ContainerTwo>
                <TitleTwo>
                    Monthly Subscription
                </TitleTwo>
                <SubscriptionPrice>&#36;29 <Span>per month</Span></SubscriptionPrice>
                <ContentTwo>
                    Full access for less than &#36;1 a day
                </ContentTwo>
                <ButtonContainer>
                    <Button>Sign Up</Button>
                </ButtonContainer>
            </ContainerTwo>
            <ContainerThree>
                <TitleThree>
                    Why Us
                </TitleThree>
                <LinkContainer>
                    <Links>Tutorials by industry experts</Links>
                    <Links>Peer &amp; expert code review</Links>
                    <Links>Coding exercises</Links>
                    <Links>Access to our GitHub repos</Links>
                    <Links>Community forum</Links>
                    <Links>Flashcard decks</Links>
                    <Links>New videos every week</Links>
                </LinkContainer>
            </ContainerThree>
        </Main>
    </Container>
  </>
);
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
    box-shadow: 0px 10px 10px hsl(218, 22%, 67%);
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
// border:1px solid black;
@media (min-width: 768px){
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
`;
const ContainerTwo = styled.div`
grid-area: Container2;
padding:25px;
// border:1px solid pink;
font-weight:400;
color:rgba(255,255,255,.9);
background-color:hsl(179, 62%, 43%);
@media (min-width: 768px){
    border-bottom-left-radius: 5px;
}
`;
const ContainerThree = styled.div`
grid-area: Container3;
padding:20px 25px 30px 25px;
// border:1px solid green;
background-color:hsl(179, 62%, 46%);
color:rgba(255,255,255,.7);
@media (min-width: 768px){
    border-bottom-right-radius: 5px;
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
const ContentTwo = styled.p`
padding-bottom:15px;
`;
const SubscriptionPrice=styled.div`
display:flex;
font-size:1.7em;
`;

const TitleTwo = styled.h1`
font-size:1.2em;
`;
const Span = styled.div`
color:rgba(255,255,255,.5);
font-size:.5em;
display:flex;
justify-content:center;
align-items:center;
padding-left:10px;
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
// padding:15px 120px 15px 120px;
color:white;
background-color:hsl(71, 73%, 54%);
border:none;
border-radius:5px;
box-shadow: 0px 10px 10px gray;
`;
const LinkContainer = styled.div``;

const Links = styled.div`
font-size:1.1em;
padding-bottom:5px;
@media (min-width: 768px) {
    font-size:.9em;
}
`;
