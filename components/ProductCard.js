import { useLinkProps } from '@react-navigation/native';
import * as React from 'react'
import {Icon} from 'react-native-elements'
import { View, StyleSheet, TouchableOpacity, ImageBackground, Text, Image } from 'react-native'

const Card2 = props => {
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

const Card = props => {
    return (
        <View style={styles.productItem}>
            <TouchableOpacity onPress={props.onSelectProduct}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image source={{uri: props.image}} style={styles.testImage} />
                    </View>
                    <View style={styles.productInfo}>
                        <Text style={styles.title}>{props.title}</Text>
                        <Text style={styles.title}>{props.price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    productItem: {
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
    title: {
        fontFamily: 'Monospace',
        fontSize: 20,
    },
    testImage: {
        width: 150,
        height: 150,
    },
    productInfo: {
        paddingTop: 5
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

export default Card;