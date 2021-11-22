import React from 'react'
import styled from 'styled-components'
import {XS,SM} from "../responsive"
import CategoryItem from './CategoryItem'


const Container = styled.div`
display: flex;
margin: 20px 10px;
justify-content: space-between;

${XS({flexDirection:"column"})}
`
const Category = ({categoryData,hover}) => {
    return (
        <Container>
            {categoryData.map((data) => (

           <CategoryItem data={data} hover={hover}/>

            ))
            }

        </Container>
    )
}

export default Category
