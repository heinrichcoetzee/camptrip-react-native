
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import { global } from '../constants/globalstyles';


class ExploreScreen extends React.Component {
    render(){
        return(
            <View style={[styles.container,global.viewBackground]}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignSelf:'stretch'
    }
})

export default ExploreScreen;