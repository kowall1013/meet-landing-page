import React from 'react';
import styled from 'styled-components';
import { COLORS, QUERIES } from '../constants';
import { Title, Paragraph, Button } from '../Styled';
import Indicator from './Indicator';

const StyledFooter = styled.footer`
  margin-top: 176px;
  position: relative;
  background-image: url(assets/mobile/image-footer.jpg);
  background-size: cover;
  padding: 92px 24px 74px 24px;

  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: ${COLORS.primary.green};
    opacity: 0.8;
  }
`;

const Content = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;

`;

const StyledTitle = styled(Title)`
  font-size: 2rem;
  color: ${COLORS.neutral.white};

  @media ${QUERIES.tabletAndUp}{
    font-size: 2.5rem;
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 1.125rem;
  color: ${COLORS.neutral.white};
`;

const DownloadButton = styled(Button)`
  background-color: ${COLORS.primary.violet};

  span {
    color: ${COLORS.neutral.lightViolet};
    margin-left: 4px;
  }
`;

const IndicatorWrapper = styled.div`
  position: absolute;
  top: -28px;
  left: 50%;
  transform: translateX(-50%);

`;

function Footer(): JSX.Element {
  return (
    <StyledFooter>
      <IndicatorWrapper>
        <Indicator>02</Indicator>
      </IndicatorWrapper>
      <Content>
        <StyledTitle>Experience more together</StyledTitle>
        <StyledParagraph>Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</StyledParagraph>
        <DownloadButton>Download <span>v1.3</span></DownloadButton>
      </Content>
    </StyledFooter>
  )
}

export default Footer;