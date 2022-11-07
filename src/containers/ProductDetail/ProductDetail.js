import React, { useEffect } from 'react';
import { Box,Button,Image,Text } from 'grommet';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { selectedProduct,removeSelectedProduct,fetchProduct } from '../../redux/actions/productActions'

const ProductDetail = () => {
    const product = useSelector((state) => state.allProducts.product)

    const dispatch = useDispatch();
    const { productId } = useParams()

    // const fetchProductDetail = async () => {
    //     const response = await axios
    //         .get(`https://fakestoreapi.com/products/${productId}`)
    //         .catch((err) => console.log(err))
    //     dispatch(selectedProduct(response.data))
    // }

    useEffect(() => 
    { 
        if(productId && productId !== "") dispatch(fetchProduct(productId));

        return ()=>(
            dispatch(removeSelectedProduct())
        )
    
    }, [productId])

    
    const { category, description, image, price, title, rating } = product;
    return (
        image ?
        <Box height="90vh" pad={{ horizontal: '200px', vertical: 'medium' }}>
            <Box direction="row" style={{ height: "100%", border: "10px teal solid", borderRadius: "10px" }}>
                <Box style={{ width: "49%" }}  pad="large">
                    <Image
                        fit="contain"
                        src={image}
                    />
                </Box>
                <Box background="grey" style={{ width: "1%" }}></Box>
                <Box style={{ width: "50%" }} pad="large">
                   <Text weight="bolder" size="xxlarge" margin="xsmall">{title}</Text>
                   <Text weight="bolder" size="xlarge" color="red" margin="xsmall">$ {price}</Text>
                   <Text size="medium" color="white" margin="xsmall" style={{backgroundColor:'black',width:'fit-content',padding:"10px",borderRadius:'10px'}}>{category}</Text>
                   <Text margin="xsmall" style={{overflow:'hidden'}}>{description}</Text>
                   <Button primary label="Add to Cart" size="large" style={{width:"fit-content",marginTop:"16px"}}/>
                </Box>
            </Box>
        </Box> : <Box>Loading ...</Box>
        
    )
}

export default ProductDetail