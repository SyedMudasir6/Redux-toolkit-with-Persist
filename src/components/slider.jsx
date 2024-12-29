import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import images from './images';
import colors from './colors';

const products = [
    {
        id: '1',
        image: images.slider2,
    },
    {
        id: '2',
        image: images.slider3,
    },
    {
        id: '3',
        image: images.slider1,
    },

];

const { width } = Dimensions.get('window');

const SliderHome = () => {
    const renderItem = ({ item }) => {
        return (
            <View style={styles.card}>
                <Image source={item.image} style={styles.productImage} />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Carousel
                data={products}
                renderItem={renderItem}
                sliderWidth={width}
                itemWidth={width * 0.90}
                layout={'default'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: colors.backColor,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    card: {
        // flex: 1,
        backgroundColor: '#f4f4f4',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',

    },
    productImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        resizeMode: 'contain'
    },
});

export default SliderHome;
