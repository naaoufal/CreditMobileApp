import React ,{useState,useEffect}from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {useHistory} from 'react-router-native'
import Button from '../shared/Button'
import Slider from "react-native-sliders";
import {styles} from '../style/styles'

export default function Login() {
    const [mt,setMt] = useState(4000)
    const [mois,setMois] = useState(12)
    const [mensu,setMensu] = useState(2463)
    const [interetGlobale,setInteretGlobale] = useState(0)
    const [interetParMois,setInteretParMois] = useState(0)
    // const [mensu,setMensu] = useState(0)
    const history = useHistory()
    function calcAmortissment(mt,mois){
        mois = mois.value
        mt = mt.value
        // console.log(mt);
        // console.log(mois);
        const a = parseFloat(mt/mois)
        // console.log(a);
        // console.log(typeof(a));
        const frais = parseFloat(((0.71*mois)*50)/mois)
        var interGloble = parseFloat((mt*mois*20)/1200)
        setInteretGlobale(interGloble)
        var iParMois = parseFloat((interGloble/mois).toFixed(2))
        setInteretParMois(iParMois)
        var Amortissement = parseFloat((a + iParMois + frais).toFixed(2))
        setMensu(Amortissement)
    }
    // console.log(parseFloat(mensu));
    // console.log(typeof(parseFloat(mensu)));

    return (
        <View >
            <Text>Mt</Text>
            <Slider
               minimumValue={4000}
               maximumValue={500000}
               onValueChange={value => {
                //    console.log(value);
                    value = parseFloat(value[0].toFixed(0))
                    setMt({ value })
                    calcAmortissment(mt,mois)
                }}
            />
            
            <Text>{mt.value}</Text>
            <Text>mois</Text>
            <Slider
               minimumValue={12}
               maximumValue={84}
               onValueChange={value => {
                    value = parseInt(value[0].toFixed(0))
                    setMois({ value })
                    calcAmortissment(mt,mois)     
                }}
            />
            <Text>{mois.value}</Text>
            <Text>Mensualité</Text>
          
            <Text>{mensu ? mensu : ''}</Text>
            <Text>intert globale :{interetGlobale ? interetGlobale : ''}</Text>
            <Text>interet par mois : {interetParMois ? interetParMois : ''}</Text>
            <Button title='reservation' onPress={() => {
                history.push("/reservation");
            }} />
        </View>
    )
}