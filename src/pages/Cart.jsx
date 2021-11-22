import Navbar from '../components/Navbar/Navbar'
import Newsletter from '../components/Newsletter'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import styled from "styled-components";
import { Add, Remove } from '@material-ui/icons'
import {SM,XS} from "../responsive";


const Container= styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 20px;
margin: 1rem 0;
`
const Title= styled.h2`
font-size:2rem;
font-weight: 400;
text-align:center;
`
const Wrapper= styled.div`
display: flex;
width: 100%;
padding-top: 15px;
${SM({flexDirection:"column",paddingTop:"10px"})};
`
const BagItems= styled.div`
flex:3;
padding: 10px;

`
const Item= styled.div`
padding: 15px;
display: flex;
justify-content: space-between;
border-bottom: 1px solid #eee;
padding: 15px 25px;
${XS({flexDirection:"column"})};
`

const ProductDetailsLeft= styled.div`
display: flex;
${XS({flexDirection:"column"})};

`
const ProductDetailsRight= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-right: 2rem;
${XS({flexDirection:"row",justifyContent:"space-between"})};

`

const Details= styled.div``

const ImageContainer= styled.div`
display: flex;
justify-content: center;
align-items: center;
${XS({height:"300px",width:"100%"})};

`

const Image= styled.img`
height: 200px;
${XS({height:"90%"})};
`

const ProductRow= styled.h3`
font-weight: ${(props)=>props.type==="bold" ? "700":"400"};
font-size: ${(props)=>props.type==="bold" ? "1.3rem" :"1rem"};
padding:15px 0;
${SM({fontSize:"1rem"})};

`
const ProductColor= styled.span`
width:25px;
height:25px;
border-radius: 50%;
background-color: ${(props)=>props.color};
display: block;
margin-right: 5px;
`

const ProductPrice= styled.h3`
font-size: 2rem;
font-weight: 200;
`
const ProductAmount= styled.div`
display: flex;
align-items: center;
margin: 16px 0;
`
const Amount= styled.div`
border: 1px solid #158bcf;
padding:5px 10px;
border-radius: 5px;
margin: 0 10px;
min-width: 18px;
text-align: center;
`
const Summary= styled.div`
display: flex;
flex:1;
border:1px solid #eee;
border-radius: 5px;
padding: 10px 15px;
flex-direction: column;

`
const SummaryTitle= styled.h2`
font-weight: 400;
padding: 15px 0;
`
const SummaryItem= styled.div`
display: flex;
justify-content: space-between;
padding: 10px 0;
font-weight: ${(props)=>props.type === "total" && 700};
font-size: ${(props)=>props.type === "total" && "1.4rem"};
`
const SummaryItemTitle= styled.div``
const SummaryItemPrice= styled.div``
const Btn= styled.button`
background-color:${(props)=>props.type === "filled" ? "#000" : "#fff"};
border: 1px solid ${(props)=>props.type === "filled" ? "#000" : "#919191"};;
color: ${(props)=>props.type === "filled" ? "#ffffff" : "#000000"};
padding: 10px;
margin: 10px;
font-weight: 700;
font-size: 1rem;
cursor: pointer;
`


const Cart = () => {

    
    return (
        <>
        <Navbar />
        <Announcement /> 
        
        <Container>
              
            <Title>SHOPPING CART</Title> 


            <Wrapper>
          
                <BagItems>
                    <Item>
                   
                        <ProductDetailsLeft>
                            <ImageContainer>
                        <Image src="../Images/product4.png"/>
                        </ImageContainer>
                        <Details>
                      
                            <ProductRow type="bold">Women's puffer jacket </ProductRow>
                            <ProductRow>
                                Id :
                            475</ProductRow>
                            <ProductColor color="DarkBlue"/>
                            <ProductRow>
                               Size :
                            XL</ProductRow>
                           
                            </Details>

                            </ProductDetailsLeft>
                        <ProductDetailsRight>
                        <ProductAmount>
                        <Remove style={{cursor:"pointer"}}/>
                    <Amount>2</Amount>
                    <Add style={{cursor:"pointer"}} />
                        </ProductAmount>
                        <ProductPrice>
                            $105
                        </ProductPrice>
                           
                        </ProductDetailsRight>
                

                        </Item>
                    <Item>
                   
                        <ProductDetailsLeft>
                        <ImageContainer>
                        <Image src="../Images/product6.png"/>
                        </ImageContainer>
                        <Details>
                      
                            <ProductRow type="bold">Women's puffer jacket </ProductRow>
                            <ProductRow>
                                Id :
                            475</ProductRow>
                            <ProductColor color="#a599bd"/>
                            <ProductRow>
                               Size :
                            XL</ProductRow>
                           
                            </Details>

                            </ProductDetailsLeft>
                        <ProductDetailsRight>
                        <ProductAmount>
                        <Remove style={{cursor:"pointer"}}/>
                    <Amount>1</Amount>
                    <Add style={{cursor:"pointer"}}/>
                        </ProductAmount>
                        <ProductPrice>
                            $105
                        </ProductPrice>
                           
                        </ProductDetailsRight>
                

                        </Item>
                    </BagItems>

                <Summary>

                    <SummaryTitle>SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemTitle>Subtotal</SummaryItemTitle>
                        <SummaryItemPrice>$100</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemTitle>Estimated Shipping</SummaryItemTitle>
                        <SummaryItemPrice>$11</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemTitle>Shipping Discount</SummaryItemTitle>
                        <SummaryItemPrice>$-11</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem type="total">
                        <SummaryItemTitle>Total</SummaryItemTitle>
                        <SummaryItemPrice>$100</SummaryItemPrice>
                    </SummaryItem>

                    <Btn type="filled">Checkout Now</Btn>
                    <Btn>Continue Shopping</Btn>
                </Summary>
            </Wrapper>
            
        </Container>

        <Footer />
        </>
    )
}

export default Cart
