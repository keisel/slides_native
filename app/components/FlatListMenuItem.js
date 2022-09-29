import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native';

export default function FlatListMenuItem({menuItem}) {
    const navigation = useNavigation();

  return (
    <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Slide')}
    >
        <View style={styles.container}>
            <Icon 
                type="material-community"
                name={menuItem.icon}
                color="gray"
                size={20}
            />
            <Text style={{marginLeft:10, fontSize:20}}>
                {menuItem.name} 
            </Text>
            <View style={{flex:1}} />
            <Icon 
                type="material-community"
                name="arrow-right-thin"
                color="gray"
                size={40}
            />
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    }

})