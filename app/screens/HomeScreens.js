import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import FlatListMenuItem from '../components/FlatListMenuItem'


export default function HomeScreens() {

    
    const {top}= useSafeAreaInsets()
    const menuItems=[
        {
            name:'Animation 01',
            icon:'firework',
            components:'Animation101Screen'
        },
        {
            name:'Slides',
            icon:'arrow-left',
            components:'Slide'
        }
    ]

    const renderListHeader=()=>{
        return(
            <View style={{marginTop:top+20, marginBottom:20}}> 
                <Text style={{fontWeight:'bold', fontSize:35}}>
                    Opciones de menu
                </Text>
            </View>
        )
    }

    const ItemSeparatorComponent=()=>{
        return(
            <View
                style={{borderBottomWidth:1,opacity:0.4, marginVertical:8}}
            /> 
        )
    }
    return (
        <View style={{flex:1, marginHorizontal:20}}>
        <FlatList 
                data={menuItems}
                renderItem={({item})=><FlatListMenuItem menuItem={item}/>}
                keyExtractor={(item)=>item.name}
                ListHeaderComponent={()=>renderListHeader()}
                ItemSeparatorComponent={ItemSeparatorComponent}
            />
        </View>
    )
}

const styles = StyleSheet.create({})