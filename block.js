import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const img1 = require('../assets/star.png');
const img5 = require('../assets/whitebloc.png');


export default function Block({name,description1,description2}) {
    const handleShowProfile = () => {
      // Handle show map action
      console.log('Show profile clicked');
    };
    return(
        <View style={{height:120}}>
                <Image style={{ width: 360, height: 105, right: 15, top: 10 }} source={img5} />
                <TouchableOpacity onPress={handleShowProfile}>
                    <Text style={styles.txt8}>D</Text>
                </TouchableOpacity>
            <View style={{ flexDirection: 'row', left: 76, bottom: 170 }}>
                <TouchableOpacity onPress={handleShowProfile}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{name}</Text>
                </TouchableOpacity>
                <View style={{ flex: 1 }} />
                <View style={{ flexDirection: 'row', right: 105 }}>
                  <Image style={{ width: 24, height: 24, left:0}} source={img1} />
                  <Image style={{ width: 24, height: 24, left:5}} source={img1} />
                  <Image style={{ width: 24, height: 24, left:10}} source={img1} />
                  <Image style={{ width: 24, height: 24, left:15}} source={img1} />
                  <Image style={{ width: 24, height: 24, left:20}} source={img1} />
                </View>
            </View>
            <Text style={{ fontWeight: '300', fontSize: 17, color: '#868686', left: 77, bottom: 160 }}>
                {description1}
            </Text>
            <Text style={{ fontWeight: '300', fontSize: 17, color: '#868686', left: 77, bottom: 160 }}>
                {description2}
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    txt8:{
        fontWeight:'bold',
        fontSize:24,
        color:'white',
        borderWidth:1,
        backgroundColor:'#2111AD',
        textAlign:'center', 
        textAlignVertical:'center',
        borderColor:'#2111AD',
        width:64,
        height:80,
        bottom:88
      },
})