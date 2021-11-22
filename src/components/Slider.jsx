import { ArrowForward ,ArrowRight, ArrowLeft} from '@material-ui/icons'
import React,{useState} from 'react'
import styled from 'styled-components'
import {sliderItems} from "../data"
import {SM} from "../responsive"

const Container = styled.div`
height: 100vh;
width: 100%;
display: flex;
align-items: center;
position: relative;
${SM({display:"none"})}


`
const Wrapper = styled.div`

display: flex;
transform: translateX(${(props) => props.slideNum * -100}vw);
transition: all .8s ease-in;
`
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${(props)=>props.bc};

`
const Arrow = styled.span`
width: 40px;
height: 40px;
background-color: #eeeeeeee;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
opacity: .6;
cursor: pointer;
position: absolute;
right:${(props)=>props.direction === "right" && "15px"};
left:${(props)=>props.direction === "left" && "15px"};
z-index: 2;
&:hover{
opacity: 1;
transform: scale(1.1);
}

`

const ImageContainer = styled.div`
flex: 1;
height: 100%;
display: flex;
justify-content: end;

`
const Image = styled.img`
height: 100%;

`
const Info = styled.div`
flex: 1;

`
const Title = styled.h2`
font-size: 3.5rem;
margin: 15px 0 ;
`
const Desc = styled.p`
margin: 25px 0 ;
font-weight : 700;
letter-spacing: 5px;
font-size: 1.1rem;

`
const Btn = styled.div`
width: 20%;
padding: 10px;
 display: flex;
align-items: center;
justify-content: space-between;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid #4d4d4d;
`


const Slider = () => {
    const [slideNum, setSlideNum] = useState(0);

    const handleClick=(dir)=>{
        if(dir==="right"){
            setSlideNum(slideNum < 2 ? slideNum+1 : 0);
            
        }else{
            setSlideNum(slideNum > 0  ? slideNum-1 : 2);
        }
        
    }
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeft />
                </Arrow>

                <Wrapper slideNum={slideNum}>

{sliderItems.map((s)=>(
            <Slide key={s.id} bc={s.bg}>
                <ImageContainer>
            <Image src={s.img} />
            </ImageContainer>

            <Info>
                <Title>{s.title}</Title>
                <Desc>{s.desc}</Desc>
                <Btn>SHOP NOW 
                    <ArrowForward />

                </Btn>
            </Info>

            </Slide>
            ))}

            </Wrapper>

            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRight />
                </Arrow>
            
        </Container>
    )
}

export default Slider
