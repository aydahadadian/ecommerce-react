import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";




const SubNav = styled.div``
const SidebarLink = styled.div`
  display: flex;
color: #e1e9fc;
justify-content: space-between;
align-items: center;
padding: 9px 20px;
list-style: none;
max-height: 30px;
text-decoration: none;
font-size: 16px;

bottom:0;
&:hover{
    background-color: #252931;
        border-left: 4px solid #632ce4;
        cursor: pointer;
}
    
`
const SidebarDiv = styled.div`
       display: flex;
        align-items: center;
`
const DropdownLink = styled.div`

background-color: #414757;
    height: 40px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 14px;
    

&:hover{
    background-color: #632ce4;
    cursor: pointer;}
    
`
const SidebarLabel = styled.span`
  margin-left: 16px;
    
`



export const SubMenu=({item})=>{

    const [subnav, setSubnav] = useState(false);

    const showSubnav = ()=> setSubnav(!subnav);
    
    return(
        <>



 <Link to={!item.subNav && item.path} onClick={item.subNav && showSubnav}>
     <SidebarLink type={item.type}>


<SidebarDiv>
        {item.icon}
    <SidebarLabel>{item.title}</SidebarLabel>
    </SidebarDiv>



<SubNav>

{item.subNav && subnav
?item.iconOpened
:item.subNav
?item.iconClosed
:null
}
</SubNav>

</SidebarLink>


</Link>

{subnav && item.subNav.map((item,index)=>{

    return(
        <Link to={item.path} key={index}>
        <DropdownLink >
             {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
           

        </DropdownLink>
        </Link>
    )
})
}
        </>
    )
}

