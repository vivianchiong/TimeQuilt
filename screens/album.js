import React, { useState } from 'react';
import {Dimensions, StyleSheet, Image, Text, View, FlatList, TextInput, SectionList} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { SectionGrid } from 'react-native-super-grid';

const{width}= Dimensions.get("window");

function Item({ item }) {
  return (
    <View style={{flexDirection: 'row',
    flexWrap: 'wrap'}}>
      <Image source={{uri:item}}  style={styles.image} />
    </View>
  );
}

export default function Album ({ navigation }){
  const [data, setData] = useState([
    {
      week: '03/01/2021 - 03/07/2021',
      data: [
        'https://s.unsplash.com/photo-1562285061-26601e60f0f3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=60',
        'https://images.unsplash.com/photo-1582102954017-c0ad7716d644?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=60',
        'https://images.unsplash.com/photo-1542767673-ee5103fedbb1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=60',
        'https://images.unsplash.com/photo-1528650765831-7f2254800a83?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60',
        'https://images.unsplash.com/photo-1516836378273-db6cea41d84c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=60',
        'https://images.unsplash.com/photo-1422544834386-d121ef7c6ea8?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3wxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60',
        'https://images.unsplash.com/photo-1578490057216-f69104fbf402?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXwxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60'
      ]

    },
    {
      week: '03/08/2021 - 03/14/2021',
      data: [
        'https://images.unsplash.com/photo-1562285061-26601e60f0f3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=60',
        'https://images.unsplash.com/photo-1582102954017-c0ad7716d644?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=60',
        'https://images.unsplash.com/photo-1542767673-ee5103fedbb1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=60',
        'https://images.unsplash.com/photo-1528650765831-7f2254800a83?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60',
        'https://images.unsplash.com/photo-1516836378273-db6cea41d84c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=60',
        'https://images.unsplash.com/photo-1422544834386-d121ef7c6ea8?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3wxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60',
        'https://images.unsplash.com/photo-1578490057216-f69104fbf402?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXwxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60'
      ]
    },
  ])


  const changeHandler = (val) => {
    navigation.navigate('Calendarr');
  }
  
    return (
      <View style = {styles.container}>
        <Text style={styles.titlePage}>Album</Text>

        <View style={styles.searchSection}>
          <Fontisto name='search' style={styles.searchIcon} size = {18}/>
          <TextInput style={styles.searchInput} placeholder="Search" onChange={changeHandler} />
        </View>

        <SectionGrid
          itemDimension={width*0.4}
          sections={data}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item item={item}/>}
          renderSectionHeader={({ section: { week } }) => 
            <Text style={styles.titleWeek}>{week}</Text>
          }
        />
      </View>
    );
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
    width: width*0.4, 
    height: width*0.4,
    alignSelf: 'center',
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: "#E3E3E3",
    width: '95%',
    height: 45,
    marginTop: '4%',
    borderWidth: 3,
    borderColor: '#005457'
  },
  searchInput: {
    flex: 1,
    width: '100%',
    paddingLeft: 0,
    paddingRight: 10,
    color: 'black',
    fontFamily: 'Rosario',
    fontSize: 15
  },
  searchIcon: {
    padding: 10,
    paddingLeft: 17,
    color: '#005457'
  },
});