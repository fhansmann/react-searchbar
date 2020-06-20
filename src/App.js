import React from "react";
import "./App.css";

import styled from 'styled-components'
import { Buttons, SearchBar } from './styles/elements'
import searchIcon from './svg/search.svg'


const Container = styled.div`
  width: 1280px;
  min-width: 1280px;
  margin: 0 auto;
  .row {
    width: 100%;
    display: flex;
    align-items: center;
  }
`

const Subhead = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin: 160px 0 48px;
  `


function App() {
  return (
    <div className="App">
      <Container> 
        <Subhead> Button </Subhead>
          <div className='row'>
            <Buttons> Playlist </Buttons>
            <Buttons outline> Playlist </Buttons>
            <Buttons primary> Songs </Buttons>
            <Buttons secondary> Songs </Buttons>
          </div>
        <Subhead> Search Bar </Subhead>
          <div className = "row">
            <SearchBar>
              <img src={searchIcon} alt="search icon"/>
              <input placeholder = 'Search for podcasts' type='text'/>
            </SearchBar>
          </div>
      </Container> 
    </div>
  )
}

export default App;
