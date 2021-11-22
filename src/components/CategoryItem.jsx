import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {XS,SM} from "../responsive"

const Container = styled.div`
flex: 1;
height: 70vh;
margin: 0 5px;
position: relative;
`
const Wrapper = styled.div`

height:100%;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

::after{
content: "";
position:absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
z-index: 2;
background-color: #5a5a5a;
opacity: .2;
}

&:hover::after{
opacity: ${(props)=>props.hover === "light" ? "0" : ".3" };

}

`

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
const Info = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: 3;


`
const Title = styled.h2`
color: #f0f0f0;
font-size: 2rem;
margin: 15px 0;
${SM({fontSize:"1.3rem"})}
${XS({fontSize:"2rem"})}

`
const Btn = styled.button`
padding: 10px;
border: none;
  background-color: #eee;
  cursor: pointer;
font-weight: 700;


`
const CategoryItem = ({data,hover}) => {
    return (
        <Container >
            <Link to="/products">
                <Wrapper hover={hover}>
                <Image src={data.img} />
           
            <Info>
                <Title>{data.title}</Title>
                <Btn>SHOP NOW</Btn>
            </Info>
            </Wrapper>
            </Link>

            
        </Container>
    )
}

export default CategoryItem
