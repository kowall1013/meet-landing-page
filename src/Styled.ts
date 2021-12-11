import styled from 'styled-components';
import { COLORS, QUERIES } from './constants';

export const Title = styled.h1`
  text-align: center;
  color: ${COLORS.primary.black};
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 36px;
  margin-bottom: 32px;

  @media ${QUERIES.tabletAndUp}{
    font-size: 3rem;
    line-height: 48px;
  }

  @media ${QUERIES.laptopAndUp}{
    font-size: 4rem;
    line-height: 64px;
  }
`;

export const Paragraph = styled.p`
  color: ${COLORS.primary.gray};
  font-weight: 500;
  text-align: center;
  margin-bottom: 32px;
  line-height: 26px;
`;

export const Button = styled.button`
padding: 16px 40px;
border: none;
border-radius: 30px;
font-weight: 900;
color: ${COLORS.neutral.white};
`;

