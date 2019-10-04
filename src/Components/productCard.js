import {StyleSheet, Text, View, Image} from "react-native";
import React from 'react';
import { w } from '../../constants'

const ProductItem = (props) => {
    console.log(props);
    return (
        <View style={styles.productCardWrapper}>
            <View style={styles.imageBox} >
            <Image style={styles.productCardImage} source={{uri: props.data.image}} />
            </View>
            <Text style={styles.productCardTitle}>{props.data.name.toUpperCase()}</Text>
            <Text style={styles.productCardPrice}>{props.data.price} р.</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    productCardWrapper: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        width: w / 2.1,
        height: 'auto',
        padding: 10,
        // backgroundColor: 'white',
        // backgroundColor: '#b2b2b2',

    },
    imageBox: {
        shadowColor: '#000',
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.4,
        elevation: 2,
    },
    productCardImage: {
        width: '100%',
        height: 250,
        alignSelf: 'center',

    },
    productCardTitle: {
        fontSize: 24,
        textAlign: 'center',
        alignSelf: 'center',
        padding: 10,
    },
    productCardPrice: {
        fontSize: 30,
        textAlign: 'center',
        alignSelf: 'center',
        padding: 10,
        color: 'red',
    }
});

export default ProductItem;