import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import colors from '../constants/colors';
import dateParse from '../services/dateParse';
import { global } from '../constants/globalstyles';
const dummyImage = require('../assets/images/caravan.png');


export class Trips extends React.Component{
   
    render(){
        const { data } = this.props;
        let trips = [];
        data.map((trip,i)=>{
            trips.push(
                <View style={styles.tripWrapper} key={i}>
                <View style={styles.picContainer}>
                    <View style={[styles.tripPicture]}>
                        <Image source={dummyImage} style={{ width: 45, height: 29.7 }} />
                    </View>
                </View>
                <View style={styles.tripInfo}>
                    <Text style={global.h1}>
                        {trip.name}
                    </Text>
                    <Text style={{color:colors.white}}>Location: {trip.location}</Text>
                    <Text style={{color:colors.white}}>Duration: {trip.duration} Days</Text>
                    <Text style={{color:colors.white}}>Date: {dateParse(trip.fromDate)} - {dateParse(trip.toDate)}</Text>
                    <Text style={{color:colors.white}}>Vehicle Used: {trip.vehicle}</Text>
                    <Text style={{color:colors.white}}>Caravan Used: {trip.caravan}</Text>
                </View>
            </View>
            )
        });

        return(
            <View>
                {trips}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tripWrapper: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        marginBottom:20
    },
    picContainer: {
        flex: 2
    },
    tripInfo: {
        flex: 4
    },
    tripPicture: {
        width: 60,
        height: 60,
        borderRadius: 60,
        paddingTop: 15,
        paddingLeft: 5,
        overflow: 'hidden',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ffffff',
        alignSelf:'center'
    },
  
});