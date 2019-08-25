
import React from 'react';

import {Image,Dimensions} from 'react-native';

const ScaleImage = ({source, originalWidth, originalHeight,subtract,style}) =>{
    let windowWidth = Dimensions.get('window').width;
    let widthChange = (windowWidth-subtract) / originalWidth;
    const newWidth = originalWidth * widthChange;
    const newHeight = originalHeight * widthChange;
    return (
        <Image source={source} style={{width: newWidth, height: newHeight}}/>
    )
}

export default ScaleImage;