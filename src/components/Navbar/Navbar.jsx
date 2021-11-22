import React, { useState,useEffect } from 'react';
import { Badge } from '@material-ui/core';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SearchOutlined,Toc,Close ,ShoppingCartOutlined,  FavoriteBorder, ArrowDropDown, ArrowRight} from '@material-ui/icons';
import { SM,XS } from '../../responsive';
import Sidebar from '../Sidebar/Sidebar';
import { Items } from './DropdownData';


const Container = styled.div` `

const Wrapper = styled.div`
height: 70px;
padding: 0 15px;
display: flex;
align-items: center;
justify-content: space-evenly;
`

const Right = styled.div`
display: flex;
flex: 1;
justify-content: space-around;
align-items: center;
${SM({justifyContent:"center"})}
`
const IconContainer = styled.div`
display: flex;
`
const Btn = styled.div`
cursor: pointer;
border:1px solid #949494;
padding: 10px 15px;
margin: 0 15px;
${SM({margin:"0 20px"})}
${XS({display:"none"})}
`
const MenuIcon = styled.div`
display: none;
cursor: pointer;

${SM({display:"block"})}


`

const MenuItems = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
${SM({display:"none"})}
`
const MenuItem = styled.div`

cursor: pointer;
font-weight: 700;
padding:  16px;
display: flex;
align-items: center;


`
const Left = styled.div`
display: flex;
flex: 1;
justify-content: space-around;
align-items: center;
${SM({flex:"2"})}
`
const Language = styled.span`
cursor:pointer;
${SM({display:"none"})}

`
const Logo = styled.div`
font-size: 1.8rem;
font-weight:700;
`
const Search = styled.div`
width: 45%;
height: 30px;
display: flex;
align-items: center;
justify-content: space-between;
border: 1px solid #eee;
padding: 0 15px;
${XS({display:"none"})}
`
const Input = styled.input`
border:none;
width: 80%;

&:focus{
    outline: none;
}
`

const DropdownContainer = styled.div`
background-color: #ffe9e1;
position: absolute;
top: 60px;
z-index: 10;
padding: 30px 15px 0 30px;
border:1px solid #c2c2c2;
box-shadow: 0px 5px 10px 0px rgb(198, 198, 198);
height: 75vh;
display: flex;
right:15px;
border-radius: 5px;

`
const ImageContainer = styled.div`
height: 100%;
overflow: hidden;
`
const Image= styled.img`
height: 100%;
`
const DropdownList = styled.ul`

display: grid;
grid-template-columns:  ${(props)=>props.type==="topList" && "repeat(3,auto)"};
grid-gap:  ${(props)=>props.type==="topList" ? "0 20px" :"5px"};
min-width: ${(props)=>props.type !="topList" && "140px"};
padding: ${(props)=>props.type==="topList" ? "0" : "15px 0"};

`
const DropdownListItem = styled.li`
font-weight: ${(props)=>props.type==="title" ? "700" : "400"};
font-size: ${(props)=>props.type==="title" ? "1rem" : ".85rem"};
display: ${(props)=>props.type != "title" && "flex"};
align-items: center;
:hover{
    color:${(props)=>props.type != "title" && "#ff6a36"};
    font-weight: 700;
}
`

const Navbar = () => {

    // const [menuBtn, setMenuBtn] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);
    const [dropdown, setDropdown] = useState(false);



    const onMouseEnter=()=>setDropdown(true);
    const onMouseLeave=()=>setDropdown(false);


    const handleMenu = () =>{
        if(window.innerWidth <= 960){
            setSidebar(true);
        }else{
            setSidebar(false);
        }
    }

    useEffect(() => {
       handleMenu();
    }, [])

    window.addEventListener('resize',handleMenu);

    return (
        <Container>
            <Wrapper>
            <Left>
                <Language>EN</Language>
            <MenuIcon onClick={()=>setOpenSidebar(true)}>
                        <Toc />
                    </MenuIcon>
                <Search>
                    <Input placeholder="Type Here ..." />
                    <SearchOutlined style={{cursor:"pointer"}} />

                    </Search>
                    <Logo><Link to="/">AHORA.</Link></Logo>
            </Left>
                <Right>
            <MenuItems>
              <MenuItem
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}>
                   PRODUCTS
                   <ArrowDropDown />

                {dropdown &&
                <DropdownContainer>
                 <DropdownList onClick={()=>setDropdown(!dropdown)}
                 type="topList"
                 >
                 {Items.map((item,index)=>{
                     return(

                <DropdownListItem key={index} type="title">
                <Link
                to={item.path}
                >
                    {item.title}

                    </Link>
                    {item.subList &&
                    <DropdownList>
                    {item.subList.map((subItem,index)=>{

                        return(
                        <Link
                        to={subItem.path}
                        >
                            <DropdownListItem key={index}>
                                <ArrowRight />
                                {subItem.title}

                                </DropdownListItem></Link>
                    )}) }
                        


                    </DropdownList>

                    }
                    </DropdownListItem> 
                    ) 
                    })}
              </DropdownList>

              <ImageContainer>
                  <Image src="./Images/menu-girl-style.png"/>
                  </ImageContainer>
              </DropdownContainer>
                }
                   </MenuItem>

                  <MenuItem>  <Link to="/">CONTACT US</Link></MenuItem>
                  <MenuItem>  <Link to="/login">SIGN IN</Link></MenuItem>
                  <Btn> <Link to="/register">SIGN UP</Link></Btn>
                    </MenuItems>

                    <IconContainer>


                  <Link to="/"> <FavoriteBorder style={{margin:"0 10px"}}/></Link>
                   <Link to="/cart">
                   <Badge badgeContent={3} color="primary">
                   <ShoppingCartOutlined />
                   </Badge>
                   </Link>
                </IconContainer>

                     </Right>

            </Wrapper>

            {sidebar &&
             <Sidebar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar}/>

            }


        </Container>
    )
}

export default Navbar
