import React, { memo, useEffect } from 'react';
import { StyleSheet, View, Image, Modal, Text } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import colors from './colors';
import fontfamily from '../constants/fontfamily';
import images from './images';

export default function SplashScreen({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                }),
            );
        }, 2000);
    }, []);
    return (
        <View style={styles.animationContainer}>
            <Image width={200} height={100} source={images.logo} />
        </View>
    );
}

const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: colors.title,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        fontFamily: fontfamily.Bold,
        fontSize: 30,
        color: colors.backColor,
    },
});
