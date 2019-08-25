import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from "react-native";
import colors from '../constants/colors';
import { global } from '../constants/globalstyles';


class HomeCards extends React.Component{
  state = {
      cards:[ {heading:"Total Trips",content:"50"},
      {heading:"Avg Kilometers",content:"1200"}]
  }
  render(){
      let cards = [];
      this.state.cards.map((card,i)=>{
          cards.push(
              <View key={i} style={styles.card}>
                  <Text style={styles.cardHeading}>{card.heading}</Text>
                  <Text style={styles.cardText}>{card.content}</Text>
              </View>
          )
      });
      return(
          <View style={styles.cardHolder}>
              {cards}
          </View>
      )
 
  }
}

class HomeScreen extends React.Component {
  state = {
    
  };
  render() {
      return (
          <View style={[styles.container,global.viewBackground]}>
          
            <ScrollView style={styles.scrollView}>
                      <HomeCards/>
                  
            </ScrollView>

          </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
     flex:1,
     alignSelf:'stretch',
     backgroundColor:colors.lightNavy
  },
  scrollView:{
    marginTop:50,
    flex:1
  },
  cardHolder:{
      flex:1,
      flexDirection:'row',
      flexWrap:'wrap'
  },
  card:{ 
      flex:2,
      borderRadius:8,
      height:150,
      backgroundColor:'rgba(255,255,255,0.5)',
      margin:20
  },
  cardText:{
      textAlign:'center',
      alignItems:'center',
      color:colors.green,
      fontSize:30,
      marginTop:20
  },
  cardHeading:{
      fontSize:25,
      textAlign:'center',
  }
});

export default HomeScreen;