import styled from "styled-components";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled.div`
  margin-top: 48px;
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImageWrapper = styled.div`
  margin: 54px -20px 48px -20px;

  img {
    display: block;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: ${40 / 16}rem;
`;
const ActionBtnWrapper = styled.div``;

function HeaderSection(): JSX.Element {
  return (
    <Header>
      <Logo>
        <img src="assets/logo.svg" alt="return home page" />
      </Logo>
      <Main>
        <ImageWrapper>
          <img src='assets/tablet/image-hero.png' alt="avatara of peoples" />
        </ImageWrapper>
        <Title>Group Chat for Everyone</Title>
        <p>Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</p>
        <ActionBtnWrapper>
          <button>Download v1.3</button>
          <button>What is it?</button>
        </ActionBtnWrapper>
      </Main>
    </Header>
  )
}

export default HeaderSection;
