import React from 'react'
import styled,{css} from 'styled-components/macro';
import { Button } from './Button';

const HeroSection = styled.section`
height:100vh;
max-height: 1100px;
position: relative;
overflow: hidden;

`;

const HeroWrapper = styled.div`

width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;
position:relative;
`;


const Heroslide = styled.div``

const Heroslider = styled.div``

const HeroIMage = styled.img``

const HeroContent = styled.div``

const Hero = ({slides}) => {
  return (
      <div>
          <HeroSection>
              <HeroWrapper>
                  {slides.map((slide, index) => {
                      return (
                          <Heroslide key={index}>
                              <Heroslider>
                                  
                                  <HeroIMage />
                                  <HeroContent>
                                      
                                      
                                      <h1>{slide.title}</h1>
                                      <p>{slide.price}</p> 
                                      <Button to={slide.path} primary='true'>
                                          {slide.label}
                                      </Button>
                                  </HeroContent>
                                      
                                  
                              </Heroslider>
                              
                    </Heroslide >
                )
            }  )}
                  </HeroWrapper>
        </HeroSection>
    </div>
  )
} 

export default Hero;
