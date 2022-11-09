import { View, Text, TouchableOpacity, TextInput, ImageBackground, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Healthyslider from '../components/Healthyslider';
import Icons from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios'
import mensq from "../assests/mensq.png"


export default function Home({ navigation }) {

    const [datt, setDatt] = useState([]);

    const SearchNews = async () => {

        try {

            const resp = await axios.get("https://newsapi.org/v2/everything?q=apple&from=2022-11-06&to=2022-11-06&sortBy=popularity&apiKey=6709ae3a718343d29db546e60a7be00e")

            console.log(resp.data.articles);

            setDatt(resp.data.articles)

        } catch (error) {
            console.log(error);

        }
    }


    useEffect(() => {
        SearchNews()
    }, [])


    return (
        <View>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Text>Home</Text>
            </TouchableOpacity> */}
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <View style={{
                    flexDirection: 'row', height: 38, width: 270, borderColor: "#818181",
                    borderWidth: 1, borderRadius: 30, marginTop: 30,
                }}>

                    <TextInput style={{ marginLeft: 10, width: 220 }}
                        placeholder="Search News "
                        placeholderTextColor="##818181"


                    />

                    <Icons style={{ marginTop: 7, }} name="search" size={20} color="#818181" />


                </View>
                <View style={{ marginHorizontal: 5 }}></View>
                <View style={{
                    justifyContent: "center", alignItems: 'center',
                    flexDirection: 'row', height: 38, width: 38,
                    borderRadius: 40, marginTop: 30, backgroundColor: "#FF3A44"
                }}>



                    <Ionicons name="notifications-outline" size={20} color="white" />


                </View>
            </View>
            <Text style={{
                fontWeight: "bold", size: 25, color: "black",
                marginTop: 25, marginLeft: 25
            }}>Latest News</Text>









            <View style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}>
                <ScrollView horizontal={true}>
                    {
                        datt.map((item, index) =>

                            <View key={index} style={{ marginRight: 10 }}>
                                <TouchableOpacity onPress={() => navigation.navigate("Newsscreen", {
                                    title: item.title,
                                    author: item.author,
                                    desc: item.description,
                                    imgg: item.urlToImage,
                                })}>
                                    <ImageBackground style={{ height: 240, width: 316, alignSelf: "center" }} imageStyle={{ borderRadius: 16 }} source={{ uri: item.urlToImage }}>
                                        <Text style={{ color: "red", marginLeft: 10, marginTop: 60 }}>Author:{item.author}</Text>
                                        <Text style={{ color: "white", marginLeft: 10, fontSize: 18 }}>{item.title}</Text>
                                        <Text style={{ color: "white", marginLeft: 10, marginTop: 45, fontSize: 11 }}>{item.publishedAt}</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        )


                    }
                </ScrollView>
            </View>



            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => navigation.navigate("Favorite")}>
                    <View >
                        <Healthyslider style={{}} text="Healthy" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View  >
                        <Healthyslider text='Techology' img={mensq}/>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={{ flexDirection: "row" }} >
                        <Healthyslider text="Science" img="mensq"/>

                    </View>
                </TouchableOpacity>
            </View>


            <View style={{ marginTop: 20, alignSelf: "center" }}>
                <ScrollView horizontal={false}>
                    {
                        datt.map((item, index) =>

                            <View key={index} style={{ margin: 5 }}>

                                <TouchableOpacity onPress={() => navigation.navigate("Newsscreen", {
                                    title: item.title,
                                    author: item.author,
                                    desc: item.description,
                                    imgg: item.urlToImage,
                                })}>
                                    <ImageBackground style={{ height: 130, width: 316, alignSelf: "center" }} imageStyle={{ borderRadius: 16 }} source={{ uri: item.urlToImage }}>
                                        <Text style={{ fontSize: 15, color: "white", marginHorizontal: 15, marginTop: 10 }}>{item.title}</Text>
                                        <View style={{ flexDirection: "row", marginTop: 30, alignSelf: "center" }}>
                                            <Text style={{ color: "white", fontSize: 12 }}>{item.author}</Text>
                                            <View style={{ marginHorizontal: 45 }}></View>
                                            <Text style={{ color: "white", fontSize: 12 }}>{item.publishedAt}
                                            </Text>
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                </ScrollView>
            </View>



            {/* <View style={{ marginHorizontal: 6 }}>

                </View>
                <View style={{ marginTop: 20 }}>

                    <ImageBackground style={{ height: 240, width: 316, alignSelf: "center" }} imageStyle={{ borderRadius: 16 }} source={require('../assests/men.png')}>
                        <Text style={{ color: "white" }}>by Ryan Browne</Text>
                    </ImageBackground>

                </View> */}







            {/* 

            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => navigation.navigate('Newsscreen')}>
                    <View style={{ flexDirection: "row" }} >
                        <Healthyslider bgc='Healthy' />

                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Newsscreen')}>
                    <View style={{ flexDirection: "row", backgroundColor: "yellow" }} >
                        <Healthyslider bgc='Technology' />

                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Newsscreen')}>
                    <View style={{ flexDirection: "row" }} >
                        <Healthyslider />

                    </View>
                </TouchableOpacity>
            </View>

            <ScrollView horizontal={false}>
                <View style={{ marginTop: 20, alignSelf: "center" }}>

                    <ImageBackground style={{ height: 130, width: 316, alignSelf: "center" }} imageStyle={{ borderRadius: 16 }} source={require('../assests/sthe.png')}>
                        <Text style={{ fontSize: 15, color: "white", marginLeft: 10, marginTop: 10 }}>5 things to know about
                            the 'conundrum' of{"\n"}lupus</Text>
                        <View style={{ flexDirection: "row", marginTop: 50, alignSelf: "center" }}>
                            <Text style={{ color: "white", fontSize: 12 }}>Matt Villano</Text>
                            <View style={{ marginHorizontal: 60 }}></View>
                            <Text style={{ color: "white", fontSize: 12 }}>Sunday, 9 May 2021
                            </Text>
                        </View>
                    </ImageBackground>

                </View>

                </ScrollView>
                <View style={{ marginTop: 20, alignSelf: "center" }}>

                    <ImageBackground style={{ height: 130, width: 316, alignSelf: "center" }} imageStyle={{ borderRadius: 16 }} source={require('../assests/sthe.png')}>
                        <Text style={{ fontSize: 15, color: "white", marginLeft: 10, marginTop: 10 }}>5 things to know about
                            the 'conundrum' of{"\n"}lupus</Text>
                        <View style={{ flexDirection: "row", marginTop: 50, alignSelf: "center" }}>
                            <Text style={{ color: "white", fontSize: 12 }}>Matt Villano</Text>
                            <View style={{ marginHorizontal: 60 }}></View>
                            <Text style={{ color: "white", fontSize: 12 }}>Sunday, 9 May 2021
                            </Text>
                        </View>
                    </ImageBackground>

                </View>
                <View style={{ marginTop: 20, alignSelf: "center" }}>

                    <ImageBackground style={{ height: 130, width: 316, alignSelf: "center" }} imageStyle={{ borderRadius: 16 }} source={require('../assests/sthe.png')}>
                        <Text style={{ fontSize: 15, color: "white", marginLeft: 10, marginTop: 10 }}>5 things to know about
                            the 'conundrum' of{"\n"}lupus</Text>
                        <View style={{ flexDirection: "row", marginTop: 50, alignSelf: "center" }}>
                            <Text style={{ color: "white", fontSize: 12 }}>Matt Villano</Text>
                            <View style={{ marginHorizontal: 60 }}></View>
                            <Text style={{ color: "white", fontSize: 12 }}>Sunday, 9 May 2021
                            </Text>
                        </View>
                    </ImageBackground>

                </View>


            </ScrollView> */}



        </View>
    )
}