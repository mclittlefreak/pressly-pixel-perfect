import React from "react"
import Left from './components/Left';
import Right from './components/Right';
import Footer from "./components/Footer"

export default function Home() {
  return (
  <>
    <div className="top">
      <div className="top__wrapper d-flex m-auto">
        <Left />
        <Right />
      </div>
    </div>
    <Footer />
  </>
  )
}
