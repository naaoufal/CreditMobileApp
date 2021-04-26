import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        backgroundColor: '#e3e3e3',
        marginTop:Constants.statusBarHeight,
    },
    btn:{
        backgroundColor: '#000',
        marginTop:12,
        color:'#fff'
    }
})