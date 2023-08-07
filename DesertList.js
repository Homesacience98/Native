import React, { Component } from 'react'
import { Text, View ,FlatList,TouchableOpacity,Button,Image} from 'react-native'
import desert from './Desert';

export class DesertList extends Component {
  render() {
    return (
      <View>
        <Image source =
{require('C:/Users/user/Desktop/myproject/logo90.png')}
style = {{ width: 50, height: 50 ,borderRadius:50,backgroundColor:'yellow',}}
/>


<FlatList
                keyExtractor={(item)=> item.id}
                data={desert}
                renderItem={({item})=> (

<TouchableOpacity

onPress={()=> this.props.navigation.navigate('Details', {item: item} )  }

>
                  <View   >
                    <View style={{padding:25, backgroundColor:'black',}}>
                    <Image style={{width:310,height:200, borderRadius:20,borderColor:'green',borderWidth:2,}} source={item.foodName}/>

                    <Text style={{color:'green',fontSize: 20,fontWeight:'bold',borderRadius:3,backgroundColor:'yellow',borderColor:'green',borderWidth:1,width:310}}>{item.namef}</Text>
                    <Text style={{color:'green',fontSize: 15,fontWeight:'bold',}}>{item.price}</Text>
                    <Button   onPress={()=>alert(`You have ordered ${item.namef} `)} title='Order Now' />
                    </View>
                  </View>

                  </TouchableOpacity>

                )}
vertical
      />


        <Text> jbjnkbj</Text>
      </View>
    )
  }
}

export default DesertList
