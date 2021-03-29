import React from 'react';
import {Dimensions, StyleSheet, Image, Text, View, SectionList} from 'react-native';

const{width}= Dimensions.get("window");

function Item({ item }) {
  return (
    <View style={{flexDirection: 'row',
    flexWrap: 'wrap'}}>
      <Image source={{uri:item}}  style={styles.image} />
    </View>
  );
}

export default class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[
        {
          week: '03/01/2021 - 03/07/2021',
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
      ]
    }
  }

  render(){
    return (
      <View style = {styles.container}>
        <Text style={styles.titlePage}>Album</Text>
        <SectionList
          // contentContainerStyle={{flexDirection: 'row',
          // flexWrap: 'wrap'}}
          sections={this.state.data}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item item={item}/>}
          renderSectionHeader={({ section: { week } }) => 
            <Text style={styles.titleWeek}>{week}</Text>
          }
          initialNumToRender={2}
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
    width: width*0.4, 
    height: width*0.4,
    alignSelf: 'center',
  },
});