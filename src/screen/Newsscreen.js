import { View, Text, TouchableOpacity, TextInput, ImageBackground, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Newsscreen({ navigation, route }) {

    const { title, author, desc, imgg } = route.params;
    return (

        <View style={{ flex: 1 }}>
            <View style={{ flex: 2 }}>

                <ImageBackground style={{ height: 400, width: "100%", alignSelf: "center" }} source={{ uri: imgg }}>
                </ImageBackground>

            </View>
            <View style={{flex:3,

                width: "100%", height: 350, borderTopLeftRadius: 30, borderTopRightRadius: 30,
                backgroundColor: "white"
            }}>
                <Text style={{
                    color: "black", textAlign: "center",
                    marginHorizontal: 10, marginTop: 100, fontSize: 13
                }}>{desc}</Text>

            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Favorite")}>
                <View style={{
                    position: "absolute", bottom: 30, right: 25,
                    justifyContent: "center", alignItems: 'center',
                    flexDirection: 'row', height: 38, width: 38,
                    borderRadius: 40, marginTop: 30, backgroundColor: "#FF3A44"
                }}>



                    <Ionicons style={{}} name="heart-outline" size={20} color="white" />


                </View>
            </TouchableOpacity>
            <View style={{
                position: "absolute",justifyContent:"center",top:"30%",alignSelf:"center",

                width: 250, height: 100, borderRadius: 15,
                backgroundColor: "gray"
            }}>
                <Text style={{ color: "black", marginLeft: 20, marginTop: 10, fontSize: 15 }}>{title}</Text>
                <Text style={{ color: "black", marginLeft: 20, marginTop: 10, fontSize: 12 }}>Author: {author}</Text>


            </View>


        </View>

    )
}