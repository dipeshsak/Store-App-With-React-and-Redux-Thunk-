import React from 'react';
import { Box, Card, Text, CardBody, CardFooter, Image } from 'grommet';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

const ProductComponent =()=>{
    const products = useSelector((state) => state.allProducts.products);

    const renderList = products.map((product)=>{
       const {id,title,image,price,category} = product;
        return(
            <Link to={`/product/${id}`}>
            <Box key={id}>
                <Box pad="large" gap="medium" width="medium">
                    <Card height="medium" width="medium" background="light-1">
                        <CardBody pad="medium">
                            <Box height="small" width="small">
                                <Image
                                    fit="contain"
                                    src={image}
                                    alt={title}
                                />
                            </Box>

                        </CardBody>
                        <CardFooter pad={{ horizontal: "small" }} background="light-2">
                            <Box>
                                <Text>{title}</Text>
                                <Text>$ {price}</Text>
                                <Text>{category}</Text>
                            </Box>
                        </CardFooter>
                    </Card>
                </Box>
            </Box>
            </Link>
        )
    })

    return(
        <Box style={{display: "grid",gridTemplateColumns:"auto auto auto auto"}} >{renderList}</Box>
    )
}

export default ProductComponent