import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function Healthyslider({ navigation, text, img }) {
    return (
        <View>

            <View style={{
                marginLeft: 20,
                alignItems: 'center', justifyContent: "center",
                height: 35, width: 80,
                borderRadius: 40, marginTop: 20, backgroundColor: "#FF3A44"
            }}>
                <Text style={{ color: "white", textAlign: "center" }}>{text}</Text>
                <Image source={img} style={{ height: 100, width: 100 }} />
            </View>

        </View >
    )
}