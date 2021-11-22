import Navbar from '../components/Navbar/Navbar'
import Newsletter from '../components/Newsletter'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import React from 'react'
import styled from 'styled-components'
import Products from '../components/Products'
import ProSlider from '../components/ProSlider'
import { popularProducts } from '../data'
import {XS,SM} from "../responsive"


const Container = styled.div`


`
const Title = styled.h1`
padding: 15px;
`
const FilterContainer = styled.div`
display:flex;
justify-content: space-between;
padding: 20px;
${XS({flexDirection: "column"})}

`
const Filter = styled.div`
display: flex;
align-items: center;
${XS({padding: "1rem 0"})}
`
const FilterTitle = styled.h4`
`

const Select = styled.select`
padding:10px 15px;
border:1px solid #b8b8b8;
background-color: #c7c7c7ae;
border-radius: 5px;
cursor: pointer;
margin-left: 15px;
`
const Option = styled.option``

const ProductList = () => {
    return (
        <>
          <Navbar />
            <Announcement /> 
        <Container>
<Title>Products</Title>
        <FilterContainer>
        <Filter>
            <FilterTitle>Filters:</FilterTitle>
            <Select>
                <Option>Color</Option>
                <Option>Red</Option>
                <Option>Gray</Option>
                <Option>White</Option>
            </Select>
            <Select>
                <Option>Size</Option>
                <Option>Sm</Option>
                <Option>Md</Option>
                <Option>Lg</Option>
                <Option>XLg</Option>
            </Select>
            </Filter>

        <Filter>
            <FilterTitle>Sort By :</FilterTitle>
            <Select>
                <Option>Newest</Option>
                <Option>Price(Desc)</Option>
                <Option>Price(Asc)</Option>
              
            </Select>
            </Filter>
           
            </FilterContainer>
       
            <Products />
          
            <ProSlider data={popularProducts} title="Recommended for you"/>
        </Container>
        <Newsletter />
            <Footer />
            
        </>
    )
}

export default ProductList
