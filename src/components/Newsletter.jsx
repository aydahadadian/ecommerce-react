import { Send } from "@material-ui/icons";
import styled from "styled-components";
import {SM,XS} from "../responsive";

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #e4c6b557;
padding: 4rem;
${XS({padding:"2rem"})};
${SM({padding:"3rem"})};
`;
const Title = styled.h1`
font-size: 3.5rem;
font-weight: 900;
${XS({fontSize:"2rem"})};
${SM({fontSize:"2.5rem"})};
`;

const Desc = styled.div`
font-size:1.5rem;
margin: 20px 0;
${XS({fontSize:"1rem"})};

`;

const InputContainer = styled.div`
width: 50%;
display: flex;
justify-content: center;
align-items:center;
height:40px;
border: 1px solid #c2c2c2;
background-color:#fff;

${SM({width:"70%"})};
${XS({width:"100%"})};

`;

const Input = styled.input`
width: 100%;
border: none;
&:focus{outline:none;}
padding: 0 15px;
font-size:1rem;



`;

const Button = styled.button`
background:teal;
height: 100%;
width:80px;
border:none;
cursor:pointer;

`;

const Newsletter = () => {
    return (
        <Container>
             <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send style={{color:"#fff"}} />
        </Button>
      </InputContainer>
    </Container>
    )
}

export default Newsletter
