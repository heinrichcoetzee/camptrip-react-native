import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import colors from "../constants/colors";


class Button extends React.Component {
  render() {
    let { label, onPress, style , bgColor, disabled , loading} = this.props;
    bgColor = typeof bgColor === 'undefined'?colors.orange:bgColor;
    
    disabled = (typeof loading != "undefined")?loading:false;
    
    return (
      <TouchableOpacity disabled={disabled} style={[styles.container,style,{backgroundColor:bgColor}]} onPress={onPress}>
        {loading?<ActivityIndicator animating={true} color={colors.white}/> : <Text style={styles.text}>{label}</Text>}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 10
  },
  text: {
    color: colors.white,
    textAlign: "center",
    height: 20
  }
});

export default Button;