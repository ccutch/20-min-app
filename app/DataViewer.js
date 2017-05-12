import React from 'react';
import styled from 'styled-components';
import { GenderGraph } from './GenderGraph';


const Message = styled.h1`
  font-size: 1.5em;
  color: darkslategray;
`;


export const DataViewer = ({ people }) => {
  if (!people) {
    return <Message>Loading data</Message>
  }

  return <GenderGraph genders={people.map(p => p.sex)} />
}