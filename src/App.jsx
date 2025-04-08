import { useState } from 'react'

// Header
import Header from './components/Header';
// Main
import Main from './components/Main';

// languages list
import languagesList from './data/languages';

function App() {

  return (
    <>
      <Header />
      <Main list={languagesList}/>
    </>
  )
}

export default App
