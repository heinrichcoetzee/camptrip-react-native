import * as React from "react";
import { StyleSheet,Text, TextInput, TextInputProps, View } from "react-native";
import colors from "../constants/colors";

class FormTextInput extends React.Component {
  textInputRef = React.createRef();

  focus = () => {
    if (this.textInputRef.current) {
      this.textInputRef.current.focus();
    }
  };

  render() {

    const { error, style, ...otherProps } = this.props;
    return (
      <View style={[styles.inputContainer,style]}>
        <View style={styles.inputWrapper}>
        <TextInput
          ref={this.textInputRef}
          selectionColor={colors.navy}
          style={styles.textInput}
          {...otherProps}
          placeholderTextColor={colors.transWhite}
        />
        </View>
        <Text style={styles.errorText}>{error || ""}</Text>
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
   paddingRight:10
  },
  inputWrapper:{
    borderRadius:25,
    backgroundColor:'rgba(232,232,232,.4)',
    padding:5
  },
  errorText:{

  },
  inputContainer:{
   paddingTop:10,
   paddingBottom:5,
   paddingLeft:15,
   paddingRight:15
   
  }
});

export default FormTextInput;