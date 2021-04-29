import React from 'react'
import { ImageBackground, Text, View,Image, TextInput } from 'react-native';
import { styles } from '../style/styles'
import Button from '../shared/Button'
import {useHistory} from 'react-router-native'
import firebase from 'firebase'
import firestore from 'firebase/firestore'

// firebase configuration :
var firebaseConfig = {
    apiKey: "AIzaSyCIanFHKreT4hyC9161_91-fP2aAGB2MFc",
    authDomain: "creditapp-e5491.firebaseapp.com",
    projectId: "creditapp-e5491",
    storageBucket: "creditapp-e5491.appspot.com",
    messagingSenderId: "783285913405",
    appId: "1:783285913405:web:2bd1e6f60eb94ba3b46754"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();



export default function Reservation () {
    
    const history = useHistory()
    const [nom, setNom] = React.useState("")
    const [prenom, setPrenom] = React.useState("");
    const [telephone, setTelephone] = React.useState("");
    const [email, setEmail] = React.useState("");

    

    // add informaiton to firebase : 
    function add () {
        firebase.firestore().collection('reservations').add({
            nom : nom,
            prenom : prenom,
            telephone : telephone,
            email : email
        }).then((res) => {
            setNom(""),
            setPrenom(""),
            setTelephone(""),
            setEmail("")
        })
    }

    return (
        
        <View style={styles.cont}>
            <Text style={styles.tle}>Validation de Mes Cordonnées</Text>
            <TextInput
            style={styles.inp}
            placeholder={'Enter Votre Nom'}
            onChangeText={setNom}
            />
            <TextInput
            style={styles.inp}
            placeholder={'Enter Votre Prenom'}
            onChangeText={setPrenom}
            />
            <TextInput
            style={styles.inp}
            placeholder={'Enter Votre Téléphone'}
            onChangeText={setTelephone}
            />
            <TextInput
            style={styles.inp}
            placeholder={'Enter Votre Email'}
            onChangeText={setEmail}
            />
            <Button
            title='Valider'
            onPress={() => {
                add()
            }}
            />
        </View>
    )
}

