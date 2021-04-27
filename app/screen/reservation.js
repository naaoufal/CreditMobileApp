import React from 'react'
import { ImageBackground, Text, View,Image, TextInput } from 'react-native';
import { styles } from '../style/styles'
import Button from '../shared/Button'
import {useHistory} from 'react-router-native'

export default function Reservation () {
    const history = useHistory()
    return (
        <TextInput
        style={styles.inp}
        placeholder={'Enter Votre Nom'}
        />
    )
}

