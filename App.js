import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Block from './components/block';

const img0 = require('./assets/img0.png');
const img1 = require('./assets/star.png');
const img2 = require('./assets/v.png');
const img3_2 = require('./assets/Shinjuku-Koen-min.jpg');
const img3_3 = require('./assets/tokyo sky tree.jpg');
const img3_4 = require('./assets/Tokyo_Shibuya_Scramble_Crossing_2018-10-09.jpg');
const img3_5 = require('./assets/tokyo tower.jpg');
const img4 = require('./assets/flesh.png');
const arrow= require('./assets/arrow.png');

export default function App() {
  const handleShowMap = () => {
    // Handle show map action
    console.log('Show map clicked');
  };
  const handleReadMore = () => {
    // Handle read more action
    console.log('Read more clicked');
  };
  const handleExploreNow = () => {
    // Handle explore now action
    console.log('Explore now clicked');
  };
  return (
    
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableOpacity>
            <Image source={arrow} style={styles.arrow}/>
          </TouchableOpacity>
          <Text style={styles.editProfile}>Browse</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Image style={styles.image0} source={img0} />
        </View>

        <View>
          <View style={styles.container0}>
            <Text style={styles.txt1}>japan, akihabra</Text>
            <View style={{ flex: 1 }} />
            <TouchableOpacity onPress={handleShowMap}>
              <Text style={styles.txt2}>Show map</Text>
            </TouchableOpacity>
          </View>

          <Text>
            <Image style={styles.image1} source={img1} /> 4.5 (355 Reviews)
          </Text>
          <Text style={styles.txt3}>
            Aspen is as close as one can get to a storybook alpine town in America. The choose-your-own-adventure
            possibilities—skiing, hiking, dining shopping and ....
          </Text>
          <TouchableOpacity onPress={handleReadMore}>
            <View style={{ flexDirection: 'row', paddingTop: 20 }}>
              <Text style={styles.txt4}>Read more </Text>
              <Image style={{ width: 24, height: 24 }} source={img2} />
            </View>
          </TouchableOpacity>

          <View>
            <Text style={styles.txt5}>Browse Tour options</Text>
            <View style={{ flexDirection: 'row', top: -11 }}>
              <TouchableOpacity onPress={() => console.log('Image 1 clicked')}>
                <Image style={{ height: 74, width: 72, borderRadius: 16, right: 2 }} source={img3_2} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('Image 2 clicked')}>
                <Image style={{ height: 74, width: 72, borderRadius: 16, left: 12 }} source={img3_3} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('Image 3 clicked')}>
                <Image style={{ height: 74, width: 72, borderRadius: 16, left: 26 }} source={img3_4} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('Image 4 clicked')}>
                <Image style={{ height: 74, width: 72, borderRadius: 16, left: 40 }} source={img3_5} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleExploreNow}>
              <Text style={styles.txt6}>
                Explore Now <Image style={{ width: 24, height: 24 }} source={img4} />
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 25 }}>
            <Text style={{ fontSize: 40, fontWeight: 'bold', alignSelf: 'flex-end', top: 20,left:-20 }}>4.5</Text>
            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Reviews</Text>
            <Text style={styles.txt7}>322+ reviews</Text>
          </View>
          <Block name={'Davion'} description1={'Laboriosam voluptatibus'} description2={'voluptatibus deserunt repellendus.'}/>
          <Block name={'Molka'} description1={'Laboriosam voluptatibus'} description2={'voluptatibus deserunt repellendus.'}/>
          <Block name={'Wassim'} description1={'Laboriosam voluptatibus'} description2={'voluptatibus deserunt repellendus.'}/>
          <Text>TOO DOWN</Text>
        </View>
      
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom:5,
    justifyContent:'center'
  },
  arrow: {
    width: 17,
    height: 30,
    alignSelf:"center",
    position:'absolute',
    top:-20,
    left:-145
  },
  editProfile: {
    fontSize: 20,
    left: -7,
    top:-5
  },
  container: {
    flex: 1,
  },
  container0: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 10,
  },
  txt1: {
    textTransform: 'uppercase',
    color: '#232323',
    fontSize: 24,
    fontWeight: 'bold',
  },
  txt2: {
    color: '#196EEE',
    fontSize: 14,
    left:-10, 
    bottom:-10,
  },
  txt3: {
    fontSize: 12,
    marginTop: 15,
  },
  txt4: {
    fontSize: 14,
    color:'#196EEE'
  },
  txt5:{
    height:50,
    width:191,
    fontSize:18,
    fontWeight:'700',
    color:'#232323',
    marginTop:30,
  },
  txt6:{
    fontSize:16,
    color:'white',
    borderWidth:1,
    backgroundColor:'#176FF2',
    paddingTop:11,
    textAlign:'center', 
    textAlignVertical:'top',
    borderColor:'#176FF2',
    marginLeft:105,
    marginTop:18,
    height:56,
    width:223,
    borderRadius:16,
  },
  txt7:{
    fontWeight:'bold',
    fontSize:16,
    color:'white',
    borderWidth:1,
    backgroundColor:'#5D5DFF',
    textAlign:'center', 
    textAlignVertical:'center',
    borderColor:'#5D5DFF',
    borderRadius:200,
    padding:8,
    width:117,
    height:36,
    alignSelf:'flex-end',
    bottom:10,
    left:10
  },
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
  image0:{
    height:340,
    width:335,
    borderRadius:20,
    alignSelf:'center',
    marginTop:10
  },
  image1:{
    height:11.33,
    width:12,
  },
})