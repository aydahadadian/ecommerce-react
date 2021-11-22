import Navbar from '../components/Navbar/Navbar'
import Newsletter from '../components/Newsletter'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
import React,{useState} from 'react'
import styled from 'styled-components'
import {XS,SM} from "../responsive"

const Container = styled.div`
display:flex;
${SM({flexDirection:"column"})}


`
const ImgContainer = styled.div`
flex:1;
display: flex;
justify-content: center;
`
const Image = styled.img`
height:80%;
${SM({width: "50%",height:"auto"})}
${XS({width: "70%",height:"auto"})}

`
const InfoContainer = styled.div`
flex:1;
padding: 3rem 0;
${SM({padding: "2rem"})}

`
const Title = styled.h1`
font-weight: 200;
`
const Desc = styled.p`
padding:15px 0 ;
max-width: 80%;
`
const Price = styled.h2`
font-size: 2rem;
font-weight: 200;
padding-top:20px ;
`
const FilterContainer = styled.div`
padding: 2rem 0;
display: flex;


${XS({flexDirection: "column",justifyContent:"flex-start"})}

`
const Filter = styled.div`
display: flex;
align-items: center;
margin-right: 20px;
${XS({padding: "15px 0"})}

`
const FilterTitle = styled.h4`
font-weight: 300;
margin-right: 15px;
`
const Color = styled.span`
width:25px;
height:25px;
border-radius: 50%;
background-color: ${(props)=>props.color};
display: block;
margin-right: 5px;
`
const Select = styled.select`
padding:5px ;
`
const Option = styled.option``
const AddContainer = styled.div`
display: flex;
align-items: center;

`
const AmountContainer = styled.div`
display: flex;
align-items: center;
`
const Amount = styled.div`
border: 1px solid #158bcf;
padding:5px 10px;
border-radius: 5px;
margin: 0 10px;
min-width: 18px;
text-align: center;
`
const  AddBtn= styled.button`
font-weight: 400;
padding: 15px 20px;
background-color: #fff;
border: 2px solid #158bcf;
margin: 30px 0;
cursor: pointer;

`

const Product = () => {

    const [amount, setAmount] = useState(1);

    const handleClick=(sign)=>{

        if(sign==="inc"){
            setAmount(amount+1);
        }else{
            setAmount(amount>1 ? amount-1 : 1);
        }
    }
    return (

        <>
          <Navbar />
            <Announcement /> 
        <Container>
            
            <ImgContainer>
            <Image src="../Images/product6.png"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Jean</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repellendus omnis cum commodi libero deserunt amet voluptate laborum, doloremque nam est
                     unde ab tenetur repellat dolore maiores quos eligendi vero?</Desc>
                     <Price>$70</Price>
                     <FilterContainer>
                     <Filter>
            <FilterTitle>Color</FilterTitle>
            <Color color="Blue" />
            <Color color="Black" />
            <Color color="Pink" />
            </Filter>

                     <Filter>
            <FilterTitle>Size</FilterTitle>
            <Select>
                <Option>Sm</Option>
                <Option>Md</Option>
                <Option>Lg</Option>
                <Option>XLg</Option>
            </Select>
            </Filter>
            </FilterContainer>

            <AddContainer>
                <AmountContainer>
                    <Remove style={{cursor:"pointer"}} onClick={()=>handleClick("dec")}/>
                    <Amount>{amount}</Amount>
                    <Add style={{cursor:"pointer"}} onClick={()=>handleClick("inc")}/>
                </AmountContainer>


            </AddContainer>
           

            <AddContainer>
           <AddBtn>ADD TO CART</AddBtn>

            </AddContainer>

            </InfoContainer>
        </Container>
        <Newsletter />
            <Footer />
            
        </>
    )
}

export default Product
