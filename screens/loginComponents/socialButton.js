//import liraries
import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const SocialButton = ({
    buttonTitle,
    btnType,
    color,
    backgroundColor,
    ...rest
}) => {
    let bgColor = backgroundColor;
    return( <TouchableOpacity 
        style={[styles.buttonContainer, {backgroundColor: bgColor}]}
            {...rest}>
            <View style={styles.btnTxtWrapper}>
                <Text style={[styles.buttonText, {color:color}]}>{buttonTitle}</Text>
            </View>
        </TouchableOpacity>
    );
};

//make this component available to the app
export default SocialButton;

// define your styles
const styles = StyleSheet.create({
    buttonContainer: {
        marginTop:15, 
        width:'80%',
        height: 45,
        padding:10, 
        flexDirection:'row',
        borderRadius:3,
    },

    btnTxtWrapper:{
        flex:1, 
        justifyContent: 'center',
        alignItems:'center',
    },

    buttonText:{
        fontSize: 18,
        fontWeight: 'bold',
    }
});
