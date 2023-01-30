import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default function Task({ text }) {
    return (
        <View style={styles.taskcon}>
            <View style={styles.itemleft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.tasktext}>{text}</Text>
            </View>
            <View style={styles.circle}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    taskcon: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:20,
    },
    itemleft: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    square: {
        backgroundColor: "#55BCF666",
        opacity: 0.4,
        width: 24,
        height: 24,
        borderRadius: 5,
        marginRight:15,
    },
    tasktext: {
        maxWidth: "80%",
        fontSize:14,
    },
    circle: {
        width: 12,
        height: 12,
        borderWidth: 2,
        borderColor: "#55BCF6",
        borderRadius: 5,
    },
})
