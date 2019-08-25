import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import colors from '../constants/colors';
import Button from './Button';


class ErrorMessage extends React.Component {
    state = {
        opacity: new Animated.Value(0),
        yPosition: new Animated.Value(30)
    };

    animateIn = () => {
        console.log("Animating In");
        Animated.timing(this.state.yPosition, {
            toValue: 0
        }).start();
        Animated.timing(this.state.opacity, {
            toValue: 1,
        }).start();
    }

    render() {
        const { message } = this.props;
        const { yPosition, opacity } = this.state;
        if (message != '' && typeof message != 'undefined') {
            this.animateIn();
            return (
                <View style={{ position: 'relative' }}>
                    <Animated.View style={[styles.animatedView,
                    { transform : [{ translateY: yPosition }] },
                    { opacity : opacity }
                    ]}>
                        <View style={styles.container}>
                            <Feather name={'alert-circle'} color={colors.red} size={24} style={styles.feedbackIcon} />
                            <Text style={styles.feedback}>
                                {message}
                            </Text>
                        </View>
                    </Animated.View>
                </View>
            )
        } else {
            return null;
        }
    }
};

const styles = StyleSheet.create({
    animatedView: {
        position: 'absolute'

    },
    container: {
        flexDirection: 'row',
        alignContent: 'center'
    },
    feedback: {
        color: colors.red,
        marginTop: 5
    },
    feedbackIcon: {
        marginRight: 10
    }

});

export default ErrorMessage;
