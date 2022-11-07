import React from 'react';
import { Box } from 'grommet';



const Header = () => {
    return (
        <Box
            tag='header'
            direction='row'
            align='center'
            justify='between'
            background='brand'
            pad={{ left: 'medium', right: 'small', vertical: 'small' }}
            elevation='medium'
            height="10vh"
            style={{ zIndex: '1' }}>
            DS Shop
        </Box>
    )
}

export default Header