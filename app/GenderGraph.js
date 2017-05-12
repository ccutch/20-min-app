import React from 'react';
import _ from 'lodash';
import { PieChart } from 'rd3';
import styled from 'styled-components';


const Container = styled.div``;

const GraphTitle = styled.h1`
  font-size: 1.2em;
  font-family: sans-serif;
  color: darkslategray;
`;

export const GenderGraph = ({ genders }) => {
    let data = [];
    let genderMap = _.reduce(
        genders,
        (t, g) => (t[g]++, t),
        {male: 0, female: 0})
    data.push({label: 'male', value: genderMap.male})
    data.push({label: 'female', value: genderMap.female})

  return (
    <Container>
      <GraphTitle>Genders</GraphTitle>
      <PieChart
        data={data}
        width={450}
        height={300} 
        radius={110}
        innerRadius={20} />
    </Container>
  )
}