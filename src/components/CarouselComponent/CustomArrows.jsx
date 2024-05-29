import React from 'react';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';

const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <ArrowBackIos
            className={className}
            style={{ ...style, color: 'white', fontSize: '30px', backgroundColor: 'red', borderRadius: '50%', padding: '10px' }}
            onClick={onClick}
        />
    );
}

const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <ArrowForwardIos
            className={className}
            style={{ ...style, color: 'red', fontSize: '30px', }}
            onClick={onClick}
        />
    );
}

export { CustomPrevArrow, CustomNextArrow };
