import styled from 'styled-components';
import { SidebarData } from './SidebarDate';
import {SubMenu} from './SubMenu';
import { AssignmentInd, AssignmentTurnedIn, Close} from "@material-ui/icons";
import { Link } from 'react-router-dom';

const Container = styled.div`
 background: #15171c;
    width: 250px;
    height: 100vh;
    justify-content: center;
    position: fixed;
    top: 0;
   left: 0;
    transition: all .35s ease-in;
    z-index: 999;
    display: ${props=> props.active === true && "none"};


`

const SidebarWrap = styled.div`
  width: 100%;
    color: #fff;
    margin-top: 50px;
    height: 60vh;
    overflow-y: auto;
    
`
const ButtonContainer = styled.div`
  width: 100%;
  padding:30px 0;

  
   
    
`
const Button = styled.button`
  width: 70%;
  padding: 8px 25px;
    color: #fff;
    background-color: #632ce4 ;
border: 1px solid #fff;
margin: 5px 30px;
font-weight: 400;
font-size: .95rem;
display: flex;
align-items: center;
justify-content: space-evenly;
&:hover{
    background-color: #252931;
        cursor: pointer;
}     
`

const MenuIcon = styled.span`
    color:#fff;
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;

`

const Sidebar = ({setOpenSidebar,openSidebar}) => {


    
    return (
        <Container active={openSidebar ? false : true} onTouchStart={()=>setOpenSidebar(false)}>
             <MenuIcon onClick={()=>setOpenSidebar(false)}>
            <Close/>
            </MenuIcon>
           <SidebarWrap>
               
           
               {SidebarData.map((item,index)=>{
                   return <SubMenu item={item} key={index}/>
               })}
               </SidebarWrap> 
               <ButtonContainer>
               <Link to="/register">
                   <Button>
                       <AssignmentInd />
                       SIGN UP</Button>
                       </Link>
                   
                       <Link to="/login">
                   <Button>
                       <AssignmentTurnedIn />
                       SIGN IN</Button>
                       </Link>
             
               </ButtonContainer>
        </Container>
    )
}

export default Sidebar
