import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


export default function Calendarr({ navigation }) {

    const [markedDates, setMarkedDates] = useState({});
    const markedDate = Object.assign({});

    const setNewSelected = day => {
        let less = 2;
        if (Object.keys(markedDates).length < 2) {

            if (Object.keys(markedDates).length == 1) {
                for (let x in markedDates) {
                    // Check year
                    if (parseInt(x.substring(0,4), 10) != day.year){
                        // if first date year is less than next date year
                        if (parseInt(x.substring(0,4), 10) < day.year) {
                            less = 1
                            markedDate[x] = {
                                startingDay: true, 
                                color: '#A4C6A2', 
                                textColor: 'white'
                            };
                            markedDate[day.dateString] = {
                                endingDay: true, 
                                color: '#A4C6A2', 
                                textColor: 'white'
                            };
                            let yr =  parseInt(x.substring(0,4), 10)
                            for (yr; yr != day.year + 1; yr+=1) {
                                for (let mth = 1; mth <  13; mth+=1) {
                                    for (let dy = 1; dy < 32; dy+=1) {
                                        // If the year is the same year make sure not to select the dates before the starting date
                                        if (yr == parseInt(x.substring(0,4), 10)) {
                                            if (mth < parseInt(x.substring(5,7), 10)) {
                                                continue;
                                            }
                                            if (mth == parseInt(x.substring(5,7), 10) && dy <= parseInt(x.substring(8), 10)) {
                                                continue;
                                            }
                                            let month = mth.toString()
                                            let dayy = dy.toString()
                                            if (mth < 10)  month = '0'.concat(month);
                                            if (dy < 10) dayy = '0'.concat(dayy);
                                            const createdate = yr.toString().concat('-').concat(month).concat('-').concat(dayy)
                                            markedDate[createdate] = {
                                                color: '#A4C6A2', 
                                                textColor: 'white'
                                            };
                                        }
                                        // if the year is the same as the target year make sure not to mark dates after the ending date
                                        else if (yr == day.year) {
                                            if (mth > day.month) {
                                                break;
                                            }
                                            if (mth == day.month && dy >= day.day) {
                                                break;
                                            }
                                            let month = mth.toString()
                                            let dayy = dy.toString()
                                            if (mth < 10)  month = '0'.concat(month);
                                            if (dy < 10) dayy = '0'.concat(dayy);
                                            const createdate = yr.toString().concat('-').concat(month).concat('-').concat(dayy)
                                            markedDate[createdate] = {
                                                color: '#A4C6A2', 
                                                textColor: 'white'
                                            };
                                        }
                                        // year is in between the start and end years so mark every date
                                        else {
                                            let month = mth.toString()
                                            let dayy = dy.toString()
                                            if (mth < 10)  month = '0'.concat(month);
                                            if (dy < 10) dayy = '0'.concat(dayy);
                                            const createdate = yr.toString().concat('-').concat(month).concat('-').concat(dayy)
                                            markedDate[createdate] = {
                                                color: '#A4C6A2', 
                                                textColor: 'white'
                                            };
                                        }
                                    }
                                }
                            }

                        }
                        // second year is less than first year
                        else {
                            less = 0
                            markedDate[x] = {
                                endingDay: true,
                                color: '#A4C6A2', 
                                textColor: 'white'
                            };
                            markedDate[day.dateString] = {
                                startingDay: true, 
                                color: '#A4C6A2', 
                                textColor: 'white'
                            };
                            let yr = day.year
                            for (yr; yr != parseInt(x.substring(0,4), 10) + 1; yr+=1) {
                                for (let mth = 1; mth <  13; mth+=1) {
                                    for (let dy = 1; dy < 32; dy+=1) {
                                        // If the year is the same year make sure not to select the dates before the starting date
                                        if (yr == day.year) {
                                            if (mth < day.month) {
                                                continue;
                                            }
                                            if (mth == day.month && dy <= day.day) {
                                                continue;
                                            }
                                            let month = mth.toString()
                                            let dayy = dy.toString()
                                            if (mth < 10)  month = '0'.concat(month);
                                            if (dy < 10) dayy = '0'.concat(dayy);
                                            const createdate = yr.toString().concat('-').concat(month).concat('-').concat(dayy)
                                            markedDate[createdate] = {
                                                color: '#A4C6A2', 
                                                textColor: 'white'
                                            };
                                        }
                                        // if the year is the same as the target year make sure not to mark dates after the ending date
                                        else if (yr == parseInt(x.substring(0,4), 10)) {
                                            if (mth > parseInt(x.substring(5,7), 10)) {
                                                continue;
                                            }
                                            if (mth == parseInt(x.substring(5,7), 10) && dy >= parseInt(x.substring(8), 10)) {
                                                continue;
                                            }
                                            let month = mth.toString()
                                            let dayy = dy.toString()
                                            if (mth < 10)  month = '0'.concat(month);
                                            if (dy < 10) dayy = '0'.concat(dayy);
                                            const createdate = yr.toString().concat('-').concat(month).concat('-').concat(dayy)
                                            markedDate[createdate] = {
                                                color: '#A4C6A2', 
                                                textColor: 'white'
                                            };
                                        }
                                        // year is in between the start and end years so mark every date
                                        else {
                                            let month = mth.toString()
                                            let dayy = dy.toString()
                                            if (mth < 10)  month = '0'.concat(month);
                                            if (dy < 10) dayy = '0'.concat(dayy);
                                            const createdate = yr.toString().concat('-').concat(month).concat('-').concat(dayy)
                                            markedDate[createdate] = {
                                                color: '#A4C6A2', 
                                                textColor: 'white'
                                            };
                                        }
                                    }
                                }
                            }
                        }
                    }
                    // Check month
                    else if (parseInt(x.substring(5,7), 10) != day.month){
                        // first month is less than 2nd
                        if (parseInt(x.substring(5,7), 10) < day.month) {
                            less = 1
                            markedDate[x] = {
                                startingDay: true, 
                                color: '#A4C6A2', 
                                textColor: 'white'
                            };
                            markedDate[day.dateString] = {
                                endingDay: true, 
                                color: '#A4C6A2', 
                                textColor: 'white'
                            };
                            for (let mth = parseInt(x.substring(5,7), 10); mth <  day.month+1; mth+=1) {
                                for (let dy = 1; dy < 32; dy+=1) {
                                    //month is the initial month
                                    if (mth == parseInt(x.substring(5,7), 10)) {
                                        if (dy <= parseInt(x.substring(8), 10)) continue;
                                        let month = mth.toString()
                                        let dayy = dy.toString()
                                        if (mth < 10)  month = '0'.concat(month);
                                        if (dy < 10) dayy = '0'.concat(dayy);
                                        const createdate = day.year.toString().concat('-').concat(month).concat('-').concat(dayy)
                                        markedDate[createdate] = {
                                            color: '#A4C6A2', 
                                            textColor: 'white'
                                        };
                                    }
                                    // month is the final month 
                                    else if (mth == day.month) {
                                        if (dy >= day.day) continue;
                                        let month = mth.toString()
                                        let dayy = dy.toString()
                                        if (mth < 10)  month = '0'.concat(month);
                                        if (dy < 10) dayy = '0'.concat(dayy);
                                        const createdate = day.year.toString().concat('-').concat(month).concat('-').concat(dayy)
                                        markedDate[createdate] = {
                                            color: '#A4C6A2', 
                                            textColor: 'white'
                                        };
                                    }
                                    //month is in between
                                    else {
                                        let month = mth.toString()
                                        let dayy = dy.toString()
                                        if (mth < 10)  month = '0'.concat(month);
                                        if (dy < 10) dayy = '0'.concat(dayy);
                                        const createdate = day.year.toString().concat('-').concat(month).concat('-').concat(dayy)
                                        markedDate[createdate] = {
                                            color: '#A4C6A2', 
                                            textColor: 'white'
                                        };
                                    }
                                }
                            }
                        }
                        // 2nd month is less than first
                        else {
                            less = 0
                            markedDate[x] = {
                                endingDay: true,
                                color: '#A4C6A2', 
                                textColor: 'white'
                            };
                            markedDate[day.dateString] = {
                                startingDay: true, 
                                color: '#A4C6A2', 
                                textColor: 'white'
                            };
                            for (let mth = day.month; mth < parseInt(x.substring(5,7))+1; mth+=1) {
                                for (let dy = 1; dy < 32; dy+=1) {
                                    //month is the initial month
                                    if (mth == day.month) {
                                        if (dy <= day.day) continue;
                                        let month = mth.toString()
                                        let dayy = dy.toString()
                                        if (mth < 10)  month = '0'.concat(month);
                                        if (dy < 10) dayy = '0'.concat(dayy);
                                        const createdate = day.year.toString().concat('-').concat(month).concat('-').concat(dayy)
                                        markedDate[createdate] = {
                                            color: '#A4C6A2', 
                                            textColor: 'white'
                                        };
                                    }
                                    // month is the final month 
                                    else if (mth == parseInt(x.substring(5,7))) {
                                        if (dy >= parseInt(x.substring(8))) continue;
                                        let month = mth.toString()
                                        let dayy = dy.toString()
                                        if (mth < 10)  month = '0'.concat(month);
                                        if (dy < 10) dayy = '0'.concat(dayy);
                                        const createdate = day.year.toString().concat('-').concat(month).concat('-').concat(dayy)
                                        markedDate[createdate] = {
                                            color: '#A4C6A2', 
                                            textColor: 'white'
                                        };
                                    }
                                    //month is in between
                                    else {
                                        let month = mth.toString()
                                        let dayy = dy.toString()
                                        if (mth < 10)  month = '0'.concat(month);
                                        if (dy < 10) dayy = '0'.concat(dayy);
                                        const createdate = day.year.toString().concat('-').concat(month).concat('-').concat(dayy)
                                        markedDate[createdate] = {
                                            color: '#A4C6A2', 
                                            textColor: 'white'
                                        };
                                    }
                                }
                            }
                        }
                    }
                    // Check day
                    else if (parseInt(x.substring(8), 10) != day.day) {
                        // initial day is less 
                        if (parseInt(x.substring(8), 10) < day.day) {
                            less = 1
                            markedDate[x] = {
                                startingDay: true, 
                                color: '#A4C6A2', 
                                textColor: 'white'
                            };
                            markedDate[day.dateString] = {
                                endingDay: true, 
                                color: '#A4C6A2', 
                                textColor: 'white'
                            };
                            for (let dy = parseInt(x.substring(8), 10) + 1; dy < day.day; dy+=1) {
                                let month = day.month.toString()
                                let dayy = dy.toString()
                                if (day.month < 10)  month = '0'.concat(month);
                                if (dy < 10) dayy = '0'.concat(dayy);
                                const createdate = day.year.toString().concat('-').concat(month).concat('-').concat(dayy)
                                markedDate[createdate] = {
                                    color: '#A4C6A2', 
                                    textColor: 'white'
                                };
                            }
                        }
                        else {
                            // initial day is more
                            less = 0
                            markedDate[x] = {
                                endingDay: true,
                                color: '#A4C6A2', 
                                textColor: 'white'
                            };
                            markedDate[day.dateString] = {
                                startingDay: true, 
                                color: '#A4C6A2', 
                                textColor: 'white'
                            };
                            for (let dy = day.day + 1; dy < parseInt(x.substring(8), 10); dy+=1) {
                                let month = day.month.toString()
                                let dayy = dy.toString()
                                if (day.month < 10)  month = '0'.concat(month);
                                if (dy < 10) dayy = '0'.concat(dayy);
                                const createdate = day.year.toString().concat('-').concat(month).concat('-').concat(dayy)
                                markedDate[createdate] = {
                                    color: '#A4C6A2', 
                                    textColor: 'white'
                                };
                            }
                        }
                    }
                }
            }

            if (Object.keys(markedDates).length == 0) {
                markedDate[day.dateString] = {
                    endingDay: true,
                    startingDay: true, 
                    color: '#A4C6A2', 
                    textColor: 'white'
                };
            }

            setMarkedDates(markedDate);
            console.log(markedDate)
        } else {
            markedDate[day.dateString] = {
                endingDay: true, 
                startingDay: true, 
                color: '#A4C6A2', 
                textColor: 'white'
            };

            setMarkedDates(markedDate);
        }
    } 

    const handleSubmit = (val) => {
        if (Object.keys(markedDates).length == 0){
            console.log("No dates selected, Do nothing")
            navigation.pop(1)
            return;
        }
        // loop through keys (Which are the dates formatted as "yyyy-mm-dd") of markedDates to return pictures
        navigation.pop(1)
    }

    return (
        <View style={styles.container}> 
        <Calendar
            style={{
                borderWidth: 1,
                borderColor: 'gray',
                height: '79.5%',
            }}
            
            onDayPress={day => {
                setNewSelected(day);
            }}
            
            minDate={'2020-01-01'}
            markedDates={markedDates}
            markingType={'period'}
        />
        <TouchableOpacity style={styles.searchSection} onPress={handleSubmit}>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: "center",
      backgroundColor: '#005457',
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        width: '95%',
        marginTop: '-10%',
        height: 52,
        borderWidth: 3,
        borderColor: '#005457'
      },
      text: {
        color: '#005457',
        fontFamily: 'Rosarivo',
        fontWeight: 'bold',
        fontSize: 17
      },
})