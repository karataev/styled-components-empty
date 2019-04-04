import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
color: blue;
`;

export default function BugPage() {

  return (
    <div>
      <StyledDiv>I am styled with styled components</StyledDiv>
      <div style={{color: 'tomato'}}>I have inline styles</div>
    </div>
  )
}
