import { Dimensions, SafeAreaView, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Carousel, {Pagination} from 'react-native-snap-carousel-v4';
const {width, height}=Dimensions.get('window')
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native';


export default function SlidesScreens() {
    const [activeIndex, setActiveIndex]=useState(0)
    const navigation = useNavigation();

    const renderItem=(item)=>{
       return (
          <View style={{flex:1, backgroundColor:'white', borderRadius:5, padding:40, justifyContent:'center'}}>
            <Image
                source={item.img}
                style={{
                    width:350,
                    height:400,
                    resizeMode:'center',
                }}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.desc}</Text>
          </View>
        )
    }

    const items = [
        {
            title: 'Titulo 1',
            desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
            img: require('../../assets/slide-1.png')
        },
        {
            title: 'Titulo 2',
            desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
            img: require('../../assets/slide-2.png')
        },
        {
            title: 'Titulo 3',
            desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
            img: require('../../assets/slide-3.png')
        },
    ]
  return (
    <SafeAreaView style={{flex:1, marginTop:50}}>
      <Carousel
          //ref={(c) => { this._carousel = c; }}
          data={items}
          renderItem={({item})=>renderItem(item)}
          sliderWidth={width}
          itemWidth={width}
          onSnapToItem={(index)=>{
            setActiveIndex(index)
          }}
        />
        <View style={{alignItems:'center', flexDirection:'row', justifyContent:'space-between', marginHorizontal:20}}>
            <Pagination
                dotsLength={items.length}
                activeDotIndex={activeIndex}
                dotStyle={{width:10, height:10, borderRadius:5, backgroundColor:'#5856D6'}}
            
            />
            {activeIndex==2 && ( 
                <TouchableOpacity  onPress={() => navigation.navigate('Home')} activeOpacity={0.8} style={{flexDirection:'row', justifyContent:'center', alignItems:'center', borderRadius:10, backgroundColor:'#5856D6',width:140, height:50, }}>
                    <Text style={{fontSize:25, color:'white'}}>Entrar</Text>
                    <Icon 
                        type="material-community"
                        name="arrow-right"
                        color="white"
                        size={30}
                    />
                </TouchableOpacity>
            )} 
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    title:{
        fontSize:30,
        fontWeight:'bold',
        color:'#5856D6'
    },
    subtitle:{
        fontSize:16,
    }
})