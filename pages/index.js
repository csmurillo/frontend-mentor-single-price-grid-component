import Head from 'next/head'
import { Container,Main,ContainerOne,TitleOne,SubTitleOne,
    ContentOne,ContainerTwo,ContentTwo,SubscriptionPrice,TitleTwo,Span,
    ContainerThree,Button,ButtonContainer,Links,LinkContainer,TitleThree } from '../styles/mainStyles';
export default () => (
  <>
    <Head>
        <title>Frontend Mentor | Single Price Grid Component</title>
        <link rel="icon" href="/image/favicon-32x32.png"/>
    </Head>
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
