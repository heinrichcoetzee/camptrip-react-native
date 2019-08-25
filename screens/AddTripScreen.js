import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { global } from '../constants/globalstyles';
import FormTextInput from '../components/FormTextInput';
import dateParse from '../services/dateParse';

import DateTimePicker from 'react-native-modal-datetime-picker';
import DismissKeyboard from '../components/DismissKeyboard';
import ReadOnlyTextInput from '../components/ReadOnlyTextInput';



class AddTripScreen extends React.Component{
    state = {
        name:"",
        location:"",
        duration:null,
        fromDate:null,
        toDate:null,
        vehicle:"",
        caravan:"",
        kilometersTraveled:120,
        modalVisible: false,
        dateProp:''
    };


    setPickerDate = (fromDate)=>{
        const date = dateParse(new Date(fromDate).getTime());
        this.setState({
            [this.state.dateProp]:date,
            modalVisible:false
        });
    }

    hideDatePicker = () => {
        this.setState({
            modalVisible:false
        });
    };
 

    render(){
        return(
            <DismissKeyboard>
            <View style={[styles.container,global.viewBackground]}>
                <DateTimePicker
                    isVisible={this.state.modalVisible}
                    onConfirm={this.setPickerDate}
                    onCancel={this.hideDatePicker}
                />
                <FormTextInput
                    value={this.state.name}
                    onChangeText={(name) => this.setState({ name })}
                    placeholder="Trip Name">
                </FormTextInput>
                <FormTextInput
                    value={this.state.location}
                    onChangeText={(location) => this.setState({ location })}
                    placeholder="Location">
                </FormTextInput>
                    <ReadOnlyTextInput 
                        onPress={()=>{this.setState({dateProp:'fromDate',modalVisible:true})}}
                        value={this.state.fromDate}
                        label={'From Date'}>
                    </ReadOnlyTextInput>
                
                    <ReadOnlyTextInput 
                        onPress={()=>{this.setState({dateProp:'toDate',modalVisible:true})}}
                        value={this.state.toDate}
                        label={'To Date'}>
                    </ReadOnlyTextInput>

            </View>
            </DismissKeyboard>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignSelf:'stretch',
        paddingTop:40
    }
});

export default AddTripScreen;