import React,{useEffect} from 'react';
import {Box} from 'grommet';
import {useSelector,useDispatch} from 'react-redux';
import axios from 'axios';
import ProductComponent from '../ProductComponent/ProductComponent';
import {setProducts} from '../../redux/actions/productActions';

const ProductListing =()=>{
    const products = useSelector((state)=>state);
    const dispatch = useDispatch();

    const fetchProducts = async () =>{
     const response = await axios
     .get('https://fakestoreapi.com/products')
     .catch((err)=>{
        console.log("Err",err)
     });
     dispatch(setProducts(response.data))
     
    }

    useEffect(()=>{
        fetchProducts();
    },[]);

    return(
            <Box>
                <Box ><ProductComponent /></Box>
            </Box>
    )
}

export default ProductListing