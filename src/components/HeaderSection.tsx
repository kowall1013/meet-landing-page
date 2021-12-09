import styled from "styled-components";
import { COLORS } from '../constants';
import { Title, Paragraph, Button } from '../Styled';
import Indicator from "./Indicator";

const Header = styled.header`
  --padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
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
  margin: 54px -44px 48px -44px;
  flex: 1;

  img {
    object-fit: contain;
    display: block;
    width: 100%;
  }
`;

const StyledParagraph = styled(Paragraph)`
  padding: 0 var(--padding);
`;

const ActionBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 184px;
`;

const DownloadButton = styled(Button)`
  background-color: ${COLORS.primary.green};

  span {
    color: ${COLORS.neutral.lightGreen};
    margin-left: 4px;
  }
`;

const QuestionButton = styled(Button)`
  background-color: ${COLORS.primary.violet};
  padding-left: 29px;
  padding-right: 29px;
`;

function HeaderSection(): JSX.Element {
  return (
    <Header>
      <Logo>
        <img src="assets/logo.svg" alt="return home page" />
      </Logo>
      <ImageWrapper>
        <img src='assets/tablet/image-hero.png' alt="avatara of peoples" />
      </ImageWrapper>
      <Main>
        <Title>Group Chat for Everyone</Title>
        <StyledParagraph>Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</StyledParagraph>
        <ActionBtnWrapper>
          <DownloadButton>Download <span>v1.3</span></DownloadButton>
          <QuestionButton>What is it?</QuestionButton>
        </ActionBtnWrapper>
      </Main>
      <Indicator>1</Indicator>
    </Header>
  )
}

export default HeaderSection;
