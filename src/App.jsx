import React from 'react'
import Background from './components/Background.jsx'
import Header from './components/Header.jsx'
import Content from './components/Content.jsx'

const App = () => {
  return (
    <div className="container max-w-screen-xl mx-auto px-8 bg-black">
      <Background />
      <Header />
      <Content />
    </div>
  )
}

export default App