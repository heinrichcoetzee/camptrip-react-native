import * as React from "react";
import { StyleSheet,Text, TextInput, TextInputProps, View, TouchableWithoutFeedback } from "react-native";
import colors from "../constants/colors";

class ReadOnlyTextInput extends React.Component {
  textInputRef = React.createRef();

  focus = () => {
    if (this.textInputRef.current) {
      this.textInputRef.current.focus();
    }
  };

  render() {

    const { value, label, onPress } = this.props;
    let placeholder = label;
    if(value != null && typeof value != 'undefined' && value !=''){
      placeholder = value;
    }

    return (
      <View style={styles.inputContainer}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.inputWrapper}>
          <Text style={styles.textInput}>{placeholder}</Text>
        </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
   fontSize:16,
   paddingTop:8,
   paddingBottom:8,
   paddingLeft:10,
   paddingRight:10,
   color:colors.transWhite
  },
  inputWrapper:{
    borderRadius:25,
    backgroundColor:'rgba(232,232,232,.4)',
    padding:5
  },
  errorText:{

  },
  placeholder:{
    color:colors.transWhite
  },
  inputContainer:{
   paddingTop:10,
   paddingBottom:5,
   paddingLeft:15,
   paddingRight:15
   
  }
});

export default ReadOnlyTextInput;