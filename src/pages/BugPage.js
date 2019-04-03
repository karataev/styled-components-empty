import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
color: blue;
`;

export default function BugPage() {

  return (
    <div>
      <Div>I am styled with styled components</Div>
      <div style={{color: 'tomato'}}>I have inline styles</div>
    </div>
  )
}
