import React from 'react'
import styled from 'styled-components';
import { COLORS, QUERIES } from '../constants';
import { Title, Paragraph } from '../Styled';

const Wrapper = styled.section`
  padding: 64px 24px;
  max-width: 1100px;
  margin: 0 auto;

  @media ${QUERIES.tabletAndUp}{
    padding-left: 40px;
    padding-right: 40px;
  }
`;

const GridWrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 24px;
  margin-bottom: 64px;
`;

const ImageWrapper = styled.div`

  img {
      display: block;
      width: 100%;
      border-radius: 8px;
  }
`;

const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
`;

const SubTitle = styled.p`
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 900;
  color: ${COLORS.primary.green};
  letter-spacing: 4px;
  margin-bottom: 24px;
  text-align: center;
`;

const StyledTitle = styled(Title)`
  font-size: 2rem;

  @media ${QUERIES.tabletAndUp}{
    font-size: 2.5rem;
  }
`;

function GallerySection() {
  return (
    <Wrapper>
      <GridWrapper>
        <ImageWrapper>
          <img src="assets/desktop/image-woman-in-videocall.jpg" alt="" />
        </ImageWrapper>
        <ImageWrapper>
          <img src="assets/desktop/image-women-videochatting.jpg" alt="" />
        </ImageWrapper>
        <ImageWrapper>
          <img src="assets/desktop/image-men-in-meeting.jpg" alt="" />
        </ImageWrapper>
        <ImageWrapper>
          <img src="assets/desktop/image-man-texting.jpg" alt="" />
        </ImageWrapper>
      </GridWrapper>
      <ContentWrapper>
        <SubTitle>Built for modern use</SubTitle>
        <StyledTitle>Smarter meetings, all in one place</StyledTitle>
        <Paragraph>Send messages, share files, show your screen, and record your meetings —
          all in one workspace. Control who can join with invite-only team access, data encryption, and data export.
        </Paragraph>
      </ContentWrapper>
    </Wrapper>
  )
}

export default GallerySection;
