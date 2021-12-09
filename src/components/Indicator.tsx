import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../constants';

const Circle = styled.div`
  position: relative;
  border: 1px solid ${COLORS.primary.gray};
  color: ${COLORS.primary.gray};
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  background-color: ${COLORS.neutral.white};

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 1px;
    height: 84px;
    top: -84px;
    background-color: ${COLORS.primary.gray};
  }

`;

type IndicatorProps = {
  children: string,
}

function Indicator({ children }: IndicatorProps): JSX.Element {
  return (
    <Circle>{children}</Circle>
  )
};

export default Indicator;

