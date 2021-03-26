import React from 'react';
import {Dimensions, StyleSheet, Image, Text, View, FlatList} from 'react-native';

const{width}= Dimensions.get("window");

function Item({ item }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleWeek}>{item.week}</Text>
      </View>
      <Image source={{uri:item.image}}  style={styles.image} />
    </View>
  );
}

export default class Album extends React.Component {
  state = {
    data:[
      {
        week: '03/01/2021 - 03/07/2021',
        image: 'https://images.unsplash.com/photo-1562285061-26601e60f0f3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=60'
      },
      {
        week: '03/08/2021 - 03/14/2021',
        image: 'https://images.unsplash.com/photo-1582102954017-c0ad7716d644?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=60'
      },
      {
        week: '03/15/2021 - 03/21/2021',
        image: 'https://images.unsplash.com/photo-1542767673-ee5103fedbb1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=60'
      },
    ]
  }

  render(){
    return (
      <View style = {styles.container}>
        <Text style={styles.titlePage}>Album</Text>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.week}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    backgroundColor: '#005457',
  },
  titlePage: {
    marginTop: 60,
    alignSelf: "center",
    color: '#ffffff',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 24,
    fontFamily: 'Rosarivo',
  },
  titleWeek: {
    marginTop: 20,
    marginBottom: 20,
    alignSelf: "center",
    color: '#ffffff',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 24,
    fontFamily: 'Rosarivo',
  },
  image: {
    width: width*0.8, 
    height: width*0.8,
    alignSelf: 'center',
  },
});