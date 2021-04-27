import React from 'react'
import { ImageBackground, Text, View,Image, TextInput } from 'react-native';
import { styles } from '../style/styles'
import Button from '../shared/Button'
import {useHistory} from 'react-router-native'

export default function Reservation () {
    const history = useHistory()
    return (
<<<<<<< HEAD
        <TextInput
        style={styles.inp}
        placeholder={'Enter Votre Nom'}
        />
=======
        <View style={styles.cont}>
            <TextInput
            style={styles.inp}
            placeholder={'Enter Votre Nom'}
            />
        </View>
>>>>>>> e70a05e3d615a5cfcd07d6eb7e85c9e7ecec3b04
    )
}

