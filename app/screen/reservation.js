import React from 'react'
import { ImageBackground, Text, View,Image, TextInput } from 'react-native';
import { styles } from '../style/styles'
import Button from '../shared/Button'
import {useHistory} from 'react-router-native'
import firebase from 'firebase'
import firestore from 'firebase/firestore'
// import nodemailer from 'nodemailer'

// nodemailer configuration : 
// var transport = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "e2e5f4e84f538b",
//       pass: "7ed440c35117fb"
//     }
// });

// firebase configuration :
var firebaseConfig = {
    apiKey: "AIzaSyCIanFHKreT4hyC9161_91-fP2aAGB2MFc",
    authDomain: "creditapp-e5491.firebaseapp.com",
    projectId: "creditapp-e5491",
    storageBucket: "creditapp-e5491.appspot.com",
    messagingSenderId: "783285913405",
    appId: "1:783285913405:web:2bd1e6f60eb94ba3b46754"
};

// firebase.initializeApp(firebaseConfig);
// firebase.firestore();

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
        // exports.emailSender = functions.https.onRequest((req, res) => {
        //     const mailOptions = {
        //     from: 'mare32980@gmail.com', //Adding sender's email
        //     to: email, //Getting recipient's email by query string
        //     subject: 'Email Sent via Firebase', //Email subject
        //     html: '<b>Sending emails with Firebase is easy!</b>' //Email content in HTML
        // };
    
        // return transporter.sendMail(mailOptions, (err, info) => {
        //     if(err){
        //         return res.send(err.toString());
        //     }
        //     return res.send('Email sent successfully');
        // });
    //});
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

