import {  ArrowRight, ArrowLeft} from '@material-ui/icons'
import React,{useState,useEffect} from 'react'
import styled from 'styled-components'

import ProductItem from './ProductItem'

const Slider = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: 3rem 0;


`
const Container = styled.div`
width: 100%;
display: flex;
align-items: center;

margin-left: 15px;


`

const Title = styled.h2`
font-size:2rem;
font-weight: 300;
padding: 30px;

`
const Wrapper = styled.div`

display: flex;

transform: translateX(${(props) => props.slideNum * -266}px);
transition: all .5s ease-in;

`

const Arrow = styled.span`
width: 40px;
height: 40px;
background-color: #8c8c8ced;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
opacity: .6;
cursor: pointer;
position: absolute;
right:${(props)=>props.direction === "right" && "15px"};
left:${(props)=>props.direction === "left" && "15px"};
z-index: 10;
&:hover{
opacity: 1;
transform: scale(1.1);
}
` 
const ProSlider = ({data,title}) => {

    const [slideNum, setSlideNum] = useState(0);
    const [wSize, setWSize] = useState();

    const handleWSize = () =>{
        
        setWSize(window.innerWidth);
    }

    useEffect(() => {
       handleWSize();
    }, [])
    window.addEventListener('resize',handleWSize);

    const length= data.length;
    const clickNum=length-(Math.floor(wSize/266));

    const handleClick=(dir)=>{
        if(dir==="right"){
            setSlideNum(slideNum < clickNum ? slideNum+1 : 0);
            
        }else{
            setSlideNum(slideNum > 0  ? slideNum-1 : clickNum);
        }
        
    }
    return (


        <Slider>

<Title>{title}</Title>
      

        <Container>
             <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeft />
                </Arrow>

          
                <Wrapper slideNum={slideNum}>
                {data.map((item)=>(

<ProductItem item={item} w={"256px"} h={"274px"} bc={"#f0f0f0"}  />
        ))}
        </Wrapper>

                <Arrow direction="right"  onClick={()=>handleClick("right")}>
                <ArrowRight />
                </Arrow>
                
            
        </Container>

        </Slider>
    )
}

export default ProSlider
