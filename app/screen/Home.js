import React from 'react'
import { ImageBackground, Text, View,Image } from 'react-native';
import { styles } from '../style/styles'
import Button from '../shared/Button'
import {useHistory} from 'react-router-native'
const Background = require('../../assets/background.jpg')
const Best = require('../../assets/antom.png')
const Logo = require('../../assets/eqdomLogo.png')

export default function Home() {
    const history = useHistory()
    return (
        <ImageBackground 
        source={Background}
        style={styles.imageBackground}
        >
            <View style={styles.header}>
                
                <Image 
                style={styles.logo}
                source={Logo} />
                <Button title='login' onPress={() => {
                history.push("/login");
            }} />
            </View>
            <View>
                <Image 
                style={styles.youImage}
                source={Best} />
            </View>
            
        </ImageBackground>
    )
}

