import React from 'react';


import colors from '../constants/colors';
import {Feather} from '@expo/vector-icons';

class TabBarIcon extends React.Component {
  render() {
    return (
      <Feather
        name={this.props.name}
        size={this.props.focused?35:26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? colors.white : colors.transWhite}
      />
    );
  }
}
export default TabBarIcon;