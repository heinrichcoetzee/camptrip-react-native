
import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Picker } from 'react-native';
import { global } from '../constants/globalstyles';
import FormTextInput from '../components/FormTextInput';

import colors from '../constants/colors';
import { tripData } from '../constants/dummyData';
import IconButton from '../components/IconButton';
import { searchFilter } from '../services/searchFilter';
import { Trips } from '../components/Trips';



class TripLogs extends React.Component {
    state = {
        searchText: "",
        sortBy:"",
        activeFilter:"search",
        filterData:tripData,
        filterDataCopy:tripData
    };

    searchChange = (searchText) => {
        this.setState({ searchText });
        const data = searchFilter(this.state.filterDataCopy,this.searchText);
        this.setState({ searchText:searchText,filterData:data });
    }

    sortByChange = (sortBy)=>{
        this.setState({sortBy});
    };

    sortData = ()=>{
        tripData.sort((a,b)=>{
            if(a[this.state.sortBy] > b[this.state.sortBy])
                return -1;
            if(a[this.state.sortBy] < b[this.state.sortBy])
                return 1;
        return 0
        });
    };

    render() {
        return (
            <View style={[styles.container, global.viewBackground]}>
                <View style={styles.searchBar}>
                    <FormTextInput value={this.state.searchText} onChangeText={this.searchChange} placeholder={'Search'} />
                </View>
                <ScrollView style={styles.scrollView}>
                   <Trips data={this.state.filterData}/>
                </ScrollView>
                <View style={styles.filterOptions}>
                    <View style={styles.filter}>
                        <IconButton label={'Sort By'} icon={'sort'} onPress={()=>{this.setState({activeFilter:'sort'})}}/>
                    </View>
                    <View style={styles.filter}>
                        
                    </View>
                    <View style={styles.filter}>
                        <IconButton label={'Search'} icon={'search'} onPress={()=>{this.setState({activeFilter:'search'})}}/>
                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        paddingTop: 30
    },
    scrollView: {
        flex: 1,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom:15
    },
    filterOptions:{
        height:50,
        backgroundColor:colors.darkNavy,
        flexDirection:'row',
    },
    filter:{
        flex:1,
        marginBottom:10,
        marginLeft:5,
        marginRight:5,
    },
    searchBar: {
        height: 50
    }
})

export default TripLogs;