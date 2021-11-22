import styled from 'styled-components';
import {popularProducts} from "../data";
import ProductItem from './ProductItem';
import {XS,SM} from "../responsive"


const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
${SM({justifyContent:"center"})}
`
const Products = () => {
    return (
        <Container>
            
        {popularProducts.map((item)=>(

<ProductItem item={item} w={"280px"} h={"350px"} bc={"#f5fbfd"}  />
        ))}
        </Container>
    )
}

export default Products
