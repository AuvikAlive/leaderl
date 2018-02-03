import React from 'react'
import { StyledIntro } from './StyledIntro'
import { Augmented } from './augmented/Augmented'
import { Entry } from './entry/Entry'

export const Intro = () => (
  <StyledIntro>
    <div className="bx--grid">
      <div className="bx--row">
        <Augmented />
        <Entry />
      </div>
    </div>
  </StyledIntro>
)
