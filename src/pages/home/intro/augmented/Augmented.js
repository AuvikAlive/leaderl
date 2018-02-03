import React from 'react';
import {
  TileBelowTheFoldContent,
  TileAboveTheFoldContent
} from 'carbon-components-react';
import { StyledAugmented } from './StyledAugmented';
import StyledExpandableTile from './StyledExpandableTile';
import { Title } from './Title';
import icon from './icon.svg';

export const Augmented = () => (
  <StyledAugmented className="bx--col-xs-12 bx--col-sm-10 bx--col-md-6 bx--col-lg-7 bx--col-xl-6 bx--col-vl-5 bx--col-xxl-3 offset-vl-1 offset-xxl-0">
    <Title>
      Augmenting liberal leaders to achieve growth &amp; shape the future of humanity.      
      {/* 
      	Augmenting liberal leaders to achieve true personal or business growth.
      	Augmenting liberal leaders to achieve growth and fulfil their true potential.
      	Augmenting the personal and business growth of leaders with a liberal view.
      	Augmenting the potential of leaders to achieve personal or business growth.
		Enabling leaders to achieve growth through confidential private groups.
      	Confidential private advisory group enabling leaders to achieve growth.
      	Augmenting liberal leaders to achieve personal or business growth and fulfil true potential.
		*/}  
      
    </Title>

    <StyledExpandableTile>
      <TileAboveTheFoldContent>
        <img src={icon} alt="research" />
        <span className="title">Research</span>
      </TileAboveTheFoldContent>
      <TileBelowTheFoldContent>Something</TileBelowTheFoldContent>
    </StyledExpandableTile>

    <StyledExpandableTile>
      <TileAboveTheFoldContent>
        <img src={icon} alt="research" />
        <span className="title">Experiment</span>
      </TileAboveTheFoldContent>
      <TileBelowTheFoldContent>Something</TileBelowTheFoldContent>
    </StyledExpandableTile>

    <StyledExpandableTile>
      <TileAboveTheFoldContent>
        <img src={icon} alt="research" />
        <span className="title">Execute</span>
      </TileAboveTheFoldContent>
      <TileBelowTheFoldContent>Something</TileBelowTheFoldContent>
    </StyledExpandableTile>
  </StyledAugmented>
);
