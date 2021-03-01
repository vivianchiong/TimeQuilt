import React from 'react';
import {View, Image, ScrollView, Dimensions, Text, StyleSheet} from 'react-native';

const{width}=Dimensions.get("window");
const height = width * 0.8;
const images=[
  'https://images.unsplash.com/photo-1562285061-26601e60f0f3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=60',
  'https://images.unsplash.com/photo-1582102954017-c0ad7716d644?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=60',
  'https://images.unsplash.com/photo-1542767673-ee5103fedbb1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=60',
  'https://images.unsplash.com/photo-1528650765831-7f2254800a83?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60',
  'https://images.unsplash.com/photo-1516836378273-db6cea41d84c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=60',
  'https://images.unsplash.com/photo-1422544834386-d121ef7c6ea8?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3wxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60',
  'https://images.unsplash.com/photo-1578490057216-f69104fbf402?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXwxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60'
]

export default class LookThru extends React.Component{
  state={
    active: 0
  }
  change=({nativeEvent}) =>{
    const slide=Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width);
    if(slide!==this.state.active){
      this.setState({active: slide});
    }
  }
  render(){
    return(
      <View style={style.imageview}>
        <ScrollView 
          pagingEnabled 
          horizontal 
          showsHorizontalScrollIndicator={false}
          onScroll={this.change}
          style={style.scroll}
        >
          {
            images.map((image, index) => (
              <Image
                key={index}
                source={{uri: image}}
                style={style.image}/>
            ))
          }
        </ScrollView>
        <View style={style.indicatorview}>
          {
            images.map((i, k) =>(
              <Text key={k} style={k==this.state.active ? style.indicatoractive: style.indicator}>⬤</Text>
            ))
          }
          
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  imageview: {marginTop: 200, width, height},
  scroll: {width, height},
  image: {width, height, resizeMode: 'center'},
  indicatorview: {flexDirection:'row', position:'absolute', bottom:0, alignSelf:'center'},
  indicator: {fontSize:(width/30), color:'#888', margin: 5},
  indicatoractive: {fontSize:(width/30), color:'#fff', margin: 5}
})