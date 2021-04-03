import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


export default function Calendarr({navigation}) {

    return (
        <View style={styles.container}> 
        <Calendar
            minDate={'2020-01-01'}
            // Handler which gets executed on day press. Default = undefined
            onDayPress={(day) => {console.log('selected day', day)}}
            // Handler which gets executed on day long press. Default = undefined
            onDayLongPress={(day) => {console.log('selected day', day)}}

            markedDates={{
                '2021-02-16': {selected: true, marked: true, selectedColor: 'blue'},
                '2012-05-17': {marked: true},
                '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
                '2012-05-19': {disabled: true, disableTouchEvent: true}
            }}
        />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: "center",
      backgroundColor: '#005457',
    },
})