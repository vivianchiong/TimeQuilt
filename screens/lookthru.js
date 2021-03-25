import React from 'react';
import {Dimensions, StyleSheet, Image, Text, View, FlatList} from 'react-native';

const{width}= Dimensions.get("window");

function PostItem({ item }) {
  return (
    <View style={styles.container}>
      
      <View>
        <Text style={styles.titleDay}>{item.day}</Text>
        <Text style={styles.titleDate}>{item.date}</Text>
      </View>
      <Image source={{uri:item.image}}  style={styles.image} />
      <View>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

export default class LookThru extends React.Component {
  state = {
    data:[
      {
        day: 'Monday',
        date: '03/01/2021',
        description: 'ayyy!',
        image: 'https://images.unsplash.com/photo-1562285061-26601e60f0f3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=60',
      },
      {
        day: 'Tuesday',
        date: '03/02/2021',
        description: 'ayyy!',
        image: 'https://images.unsplash.com/photo-1582102954017-c0ad7716d644?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=60',
      },
      {
        day: 'Wednesday',
        date: '03/03/2021',
        description: 'ayyy!',
        image: 'https://images.unsplash.com/photo-1542767673-ee5103fedbb1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=60',
      },
      {
        day: 'Thursday',
        date: '03/04/2021',
        description: 'ayyy!',
        image: 'https://images.unsplash.com/photo-1528650765831-7f2254800a83?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60',
      },
      {
        day: 'Friday',
        date: '03/05/2021',
        description: 'ayyy!',
        image: 'https://images.unsplash.com/photo-1516836378273-db6cea41d84c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=60',
      },
      {
        day: 'Saturday',
        date: '03/06/2021',
        description: 'ayyy!',
        image: 'https://images.unsplash.com/photo-1422544834386-d121ef7c6ea8?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3wxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60',
      },
      {
        day: 'Sunday',
        date: '03/07/2021',
        description: 'ayyy!',
        image: 'https://images.unsplash.com/photo-1578490057216-f69104fbf402?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXwxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60',
      }
    ]
  }

  render(){
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => <PostItem item={item}/>}
          keyExtractor={item => item.date}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    width: width,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#005457',
  },
  titleDay: {
    marginTop: 15,
    color: '#ffffff',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 24,
    fontFamily: 'Rosarivo',
  },
  titleDate: {
    color: '#ffffff',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 24,
    fontFamily: 'Rosarivo',
  },
  image: {
    width: width*0.8,
    height: width*0.8,
    justifyContent: 'center'
  },
  description: {
    marginTop: 30,
    color: '#ffffff',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 24,
    fontFamily: 'Rosarivo',
  }
});
