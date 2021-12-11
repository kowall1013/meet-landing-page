import styled from "styled-components";
import { QUERIES } from '../constants';
import { Title, Paragraph, DownloadButton, QuestionButton } from '../Styled';
import Indicator from "./Indicator";

const TabletAndDownHeader = styled.div`
  display: block;

  @media ${QUERIES.laptopAndUp}{
    display: none;
  }
`

const DesktopHeaderWrapper = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp}{
    display: revert;
  }
`

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
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 110%;
  margin: 54px 0 48px 0;
  flex: 1;

  img {
    display: block;
    width: 100%;
  }
`;

const StyledParagraph = styled(Paragraph)`
  padding: 0 var(--padding);

  @media ${QUERIES.laptopAndUp}{
    font-size: 1.125rem;
  }
`;

const ActionBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 184px;

  @media ${QUERIES.tabletAndUp}{
    flex-direction: row;
  }
`;

const DesktopHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 170px 1fr;
  justify-items: center;
  align-items: center;
`;

const GridLogo = styled.div`
  width: 120px;
  grid-column-start: 1;
  grid-column-end: -1;

  img {
    max-width: 100%;
  }
`;

const GridImageWrapper = styled.div`
  align-self: start;
  img {
    max-width: 100%
  }
`;

const GridImageLeft = styled(GridImageWrapper)`
  justify-self: left;
  transform: translateX(-30px);
`
const GridImageRight = styled(GridImageWrapper)`
  justify-self: right;
  transform: translateX(30px);
`

function HeaderSection(): JSX.Element {
  return (
    <>
      <TabletAndDownHeader>
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
      </TabletAndDownHeader>
      <DesktopHeaderWrapper>
        <DesktopHeader>
          <GridLogo>
            <img src="assets/logo.svg" alt="return home page" />
          </GridLogo>
          <GridImageLeft>
            <img src='assets/desktop/image-hero-left.png' alt="avatars of smiling peoples" />
          </GridImageLeft>
          <Main>
            <Title>Group Chat for Everyone</Title>
            <StyledParagraph>Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</StyledParagraph>
            <ActionBtnWrapper>
              <DownloadButton primary>Download <span>v1.3</span></DownloadButton>
              <QuestionButton>What is it?</QuestionButton>
            </ActionBtnWrapper>
          </Main>
          <GridImageRight>
            <img src='assets/desktop/image-hero-right.png' alt="avatars of smiling peoples" />
          </GridImageRight>
        </DesktopHeader>
      </DesktopHeaderWrapper>
    </>
  )
}

export default HeaderSection;
