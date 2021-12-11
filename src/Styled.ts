import styled from 'styled-components';
import { COLORS, QUERIES } from './constants';

type ButtonProps = {
  primary?: boolean;
};

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

export const Button = styled.button<ButtonProps>`
  padding: 16px 40px;
  border: none;
  border-radius: 30px;
  font-weight: 900;
  color: ${COLORS.neutral.white};
  cursor: pointer;
  background-color: ${({ primary }) => primary ? COLORS.primary.green : COLORS.primary.violet};
`;

export const DownloadButton = styled(Button)`
  transition: all .2s ease-in;

  &:hover {
  background-color: ${COLORS.neutral.lightGreen};

  &:hover span {
    color: ${COLORS.primary.green};
  }
}

  span {
    color: ${({ primary }) => primary ? COLORS.neutral.lightGreen : COLORS.neutral.lightViolet};
    margin-left: 4px;
    transition: all .3s ease-in;
  }
`;

export const QuestionButton = styled(Button)`
  background-color: ${COLORS.primary.violet};
  padding-left: 29px;
  padding-right: 29px;
  transition: all .2s ease-in;

  &:hover {
    background-color: ${COLORS.neutral.lightViolet};
  };
`;

