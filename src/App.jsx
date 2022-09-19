import React from "react"
import About from "./components/About"
import Work from "./components/Work"
import Footer from "./components/Footer"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

function App() {

  return (
    <Wrapper>
      <About />
      <Work />
      <Footer />
    </Wrapper>
  )
}

export default App