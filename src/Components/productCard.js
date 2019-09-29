import {StyleSheet, Text, View, Image} from "react-native";
import React from 'react';
import { w } from '../../constants'

const ProductItem = (props) => {
    return (
        <View style={styles.productCardWrapper}>
            <Image style={styles.productCardImage} source={{uri: 'https://fixrolls.ru/wp-content/uploads/2019/09/Set-Love2-1-1.jpg'}} />
            <Text style={styles.productCardTitle}>TEST ITEM</Text>
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
        backgroundColor: '#b2b2b2',
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
    }
});

export default ProductItem;