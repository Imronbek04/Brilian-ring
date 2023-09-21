import React from 'react'
import Header from './page/Header'
import Hero from './components/Hero'
import Center from './components/Center'
import About from './components/About'
import Page from './components/Page'
import Category from './components/Category'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Center/>
      <About/>
      <Page/>
      <Category/>
      <Footer/>
    </div>
  )
}
