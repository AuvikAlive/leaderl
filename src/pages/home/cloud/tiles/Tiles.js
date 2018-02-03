import React from 'react'
import LazyLoad from 'react-lazyload'
import StyledTiles from './StyledTiles'
import { StyledTile } from './StyledTile'
import Title from './Title'
import foundersImg from './card-founders.svg'
import privateImg from './card-private.svg'
import publicImg from './card-public.svg'
import investorsImg from './card-investors.svg'

const Cloud = () => (
  <StyledTiles>
    <div className="bx--col-xs-12 bx--col-md-6 bx--col-lg-3">
      <StyledTile to="/" color="#de444d">
        <Title>Manage financial portfolios</Title>
        <p>Scale private financial models through every stage</p>
        <LazyLoad>
          <img src={foundersImg} alt="tile" />
        </LazyLoad>
      </StyledTile>
    </div>
    <div className="bx--col-xs-12 bx--col-md-6 bx--col-lg-3">
      <StyledTile to="/" color="#20c5a1">
        <Title>Manage financial portfolios</Title>
        <p>Scale private financial models through every stage</p>
        <LazyLoad>
          <img src={privateImg} alt="tile" />
        </LazyLoad>
      </StyledTile>
    </div>
    <div className="bx--col-xs-12 bx--col-md-6 bx--col-lg-3">
      <StyledTile to="/" color="#4f3299">
        <Title>Manage financial portfolios</Title>
        <p>Scale private financial models through every stage</p>
        <LazyLoad>
          <img src={publicImg} alt="tile" />
        </LazyLoad>
      </StyledTile>
    </div>
    <div className="bx--col-xs-12 bx--col-md-6 bx--col-lg-3">
      <StyledTile to="/" color="#f5a624">
        <Title>Manage financial portfolios</Title>
        <p>Scale private financial models through every stage</p>
        <LazyLoad>
          <img src={investorsImg} alt="tile" />
        </LazyLoad>
      </StyledTile>
    </div>
  </StyledTiles>
)

export default Cloud
