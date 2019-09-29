import {StyleSheet, Text, View} from "react-native";
import React from 'react';

const Header = (props) => {
    return (
        <View style={styles.headerLayout}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    headerLayout: {
        height: 'auto',
        backgroundColor: '#000',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',

    },
    headerTitle: {
        color: '#fff',
        padding: 10,
        fontSize: 28,
        fontFamily: 'AvenirNext-DemiBold',
        textAlign: 'center',
    }
});

export default Header;

