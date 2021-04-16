import React from 'react';
import {Dimensions, StyleSheet, Image, Text, View, TouchableOpacity, Alert} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SectionGrid } from 'react-native-super-grid';
import {getHomePicsDB} from '../api/firebaseMethods';
import moment from 'moment';

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

  async componentDidMount() {
    try {
      let albumPics = await this.getAlbumsPics();
      this.setState({data: albumPics});
    } catch(err) {
      Alert.alert(err.message, "Getting albums pics was unsuccessful!");
    }
  }

  getAlbumsPics = async () => {
    let albumData = [];

    // get the current week date
    let monday = moment().startOf('isoweek');
    let sunday = moment().startOf('isoweek').add(6, 'days');
    let mondayDate = (monday.month()+1) + '/' + monday.date() + '/' + monday.year(); // m-d-y format: march 12 2021 => 3/12/2021
    let sundayDate = (sunday.month()+1) + '/' + sunday.date() + '/' + sunday.year();
    let weekTitle = mondayDate + ' - ' + sundayDate;

    // get the current week pics
    const currentWeekPics = await getHomePicsDB(); // {0: {id, uri}, .., 6: {id, uri}}

    // store week of pics
    let weekPics = [];
    if (currentWeekPics !== undefined) {
      if (currentWeekPics[0] !== null) {
        weekPics.push(currentWeekPics[0].uri);
      } else {
        weekPics.push('https://images.unsplash.com/photo-1562285061-26601e60f0f3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=60');
      }
      if (currentWeekPics[1] !== null) {
        weekPics.push(currentWeekPics[1].uri);
      } else {
        weekPics.push('https://images.unsplash.com/photo-1582102954017-c0ad7716d644?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=60');
      }
      if (currentWeekPics[2] !== null) {
        weekPics.push(currentWeekPics[2].uri);
      } else {
        weekPics.push('https://images.unsplash.com/photo-1542767673-ee5103fedbb1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=60');
      }
      if (currentWeekPics[3] !== null) {
        weekPics.push(currentWeekPics[3].uri);
      } else {
        weekPics.push('https://images.unsplash.com/photo-1528650765831-7f2254800a83?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60');
      }
      if (currentWeekPics[4] !== null) {
        weekPics.push(currentWeekPics[4].uri);
      } else {
        weekPics.push('https://images.unsplash.com/photo-1516836378273-db6cea41d84c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=60');
      }
      if (currentWeekPics[5] !== null) {
        weekPics.push(currentWeekPics[5].uri);
      } else {
        weekPics.push('https://images.unsplash.com/photo-1422544834386-d121ef7c6ea8?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3wxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60');
      }
      if (currentWeekPics[6] !== null) {
        weekPics.push(currentWeekPics[6].uri);
      } else {
        weekPics.push('https://images.unsplash.com/photo-1578490057216-f69104fbf402?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXwxMTQ4ODQ1Nnx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60');
      }
    }

    albumData.push({week: weekTitle, data: weekPics});
    return albumData;
  }

  navCalendar = () => {
    this.props.navigation.navigate('Calendarr');
  }

  render(){
    return (
      <View style = {styles.container}>
        <Text style={styles.titlePage}>Album</Text>

        <TouchableOpacity style={styles.searchSection} onPress={this.navCalendar}>
          <Text style={styles.text}>Calendar Search</Text>
          <FontAwesome name="calendar" size={18} style={styles.searchIcon} />
        </TouchableOpacity>

        <SectionGrid
          itemDimension={width*0.4}
          sections={this.state.data}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item item={item}/>}
          renderSectionHeader={({ section: { week } }) => 
            <Text style={styles.titleWeek}>{week}</Text>
          }
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
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: "white",
    width: '95%',
    height: 52,
    marginTop: '4%',
    borderWidth: 3,
    borderColor: '#005457'
  },
  searchIcon: {
    padding: 10,
    paddingLeft: 10,
    color: '#005457',
  },
  text: {
    alignSelf:'center',
    color: '#005457',
    fontFamily: 'Rosarivo',
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: '4%'
  },
});