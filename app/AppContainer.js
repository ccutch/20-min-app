import React from 'react';
import { DataViewer } from './DataViewer';
import styled from 'styled-components';

const dataURL = 'https://ccutch.runkit.io/quick-endpoint/branches/master/50';

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export class AppContainer extends React.Component {

  state = {
    people: null
  }

  componentWillMount() {
    this.loadPeople();
  }

  loadPeople() {
    fetch(dataURL)
      .then(res => res.json())
      .then(data => this.setState({ people: data.people }))
  }

  render() {
    return (
      <CenterContainer>
        <DataViewer {...this.state} />
      </CenterContainer>
    )
  }
}