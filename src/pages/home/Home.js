import React from 'react'
import { StyledHome } from './StyledHome'
import Header from '../../components/header/Header'
import { Intro } from './intro/Intro'
// import Join from './join/Join'
// import Cloud from './cloud/Cloud'
// import Learn from './learn/Learn'
import { asyncComponent } from '../../components/asyncComponent/AsyncComponent'
const Join = asyncComponent(() => import('./join/Join'))
const Cloud = asyncComponent(() => import('./cloud/Cloud'))
const Learn = asyncComponent(() => import('./learn/Learn'))

export const Home = () => (
  <StyledHome>
    <Header />
    {/* <BackgroundVideo /> */}
    <Intro />
    <Join />
    {/* <div className="grid" /> */}
    <Cloud />
    <Learn />
  </StyledHome>
)
