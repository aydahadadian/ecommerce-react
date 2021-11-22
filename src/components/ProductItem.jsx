import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

const IconContainer=styled.div`
opacity: 0;
cursor: pointer;
 width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .5s ease ;

`
const Container = styled.div`
flex:1;
margin: 5px;
width: ${(props)=>props.width};
  height: ${(props)=>props.height};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props)=>props.bc};
  position: relative;

  &:hover ${IconContainer}{
      opacity: 1;
  }

`

const Circle=styled.div`
 width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`
const Image=styled.img`
height: 75%;
z-index:2;
`

const Icon=styled.div`
width:40px;
height:40px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
border-color: #fff;
margin: 10px;
cursor: pointer;
transition: all .5s ease;

&:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
}
`

const Info = styled.div` 
background-color: #00000017;
height: 50px;
position: absolute;
bottom: 0;
z-index: 3;
padding: 5px 17px;
border-radius: 5px 5px 0 0;
text-align: center;
`

const Title = styled.h3`
font-weight: 400;
font-size: 1rem;

`
const Price = styled.div`

`
const CurrentPrice = styled.span`
font-weight:700;
font-size: 1.2rem;
margin: 10px;
`
const OldPrice = styled.span`
font-size: .9rem;
position: relative;
text-decoration: line-through;

`
const ProductItem = ({item,w,h,bc}) => {
    return (
        <Link to="/product">
        <Container width={w} height={h} bc={bc}>
          
            <Circle />
            <Image src={item.img} />
            <IconContainer>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </IconContainer>

            <Info>
                <Title>Women Jeans</Title>
               
                <Price>
                    <CurrentPrice>${((100-item.discount)*(item.price))/100}</CurrentPrice>
                    {item.discount>0 &&
                    <OldPrice>${item.price}</OldPrice>
                    }
                    
                </Price>
                
                </Info>
        
            
        </Container>    </Link>
    )
}

export default ProductItem
