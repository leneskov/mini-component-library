/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--height": 8 + "px",
    "--padding": "0",
    "--borderRadius": 4 + "px",
  },
  medium: {
    "--height": 12 + "px",
    "--padding": "0px",
    "--borderRadius": 4 + "px",
  },
  large: {
    "--height": 24 + "px",
    "--padding": "4px",
    "--borderRadius": 8 + "px",
  },
}

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  padding: var(--padding);
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

const Bar = styled.div`
  height: var(--height);
  width: ${props => props.value}%;
  background-color: ${COLORS.primary};
`;

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
  <Wrapper role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={styles}>
    <BarWrapper>
      <VisuallyHidden>{value}%</VisuallyHidden>
      <Bar value={value} />
    </BarWrapper>
  </Wrapper>
  );
};

export default ProgressBar;
