import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { styles } from '../style/styles'
import Button from '../shared/Button'
import {useHistory} from 'react-router-native'

export default function Home() {
    const history = useHistory()
    return (
        <View style={styles.container}>
            <Text>home page</Text>
            <Button title='login' onPress={() => {
                history.push("/login");
            }} />
        </View>
    )
}

