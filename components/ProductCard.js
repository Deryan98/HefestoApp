import { useLinkProps } from '@react-navigation/native';
import * as React from 'react'
import {Icon} from 'react-native-elements'
import { View, StyleSheet, TouchableOpacity, ImageBackground, Text } from 'react-native'

const Card = props => {
    return (
        <View style={styles.productItem}>
            <TouchableOpacity onPress={props.onSelectProduct}>
                <View style={styles.mealRow}>
                    <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title} numberOfLines={1}>{props.price}</Text>
                        </View>

                        <View style={styles.titleContainer} >
                            <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                        </View>

                        


                    </ImageBackground>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    productItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    mealRow: {
        flexDirection: 'row'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'yellow',
        textAlign: 'center'
    }
});

export default Card;