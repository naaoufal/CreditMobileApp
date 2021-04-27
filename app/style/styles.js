import { StyleSheet ,Dimensions} from 'react-native';
import Constants from 'expo-constants';
const {height, width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        backgroundColor: '#e3e3e3',
        marginTop:Constants.statusBarHeight,
    },
    btn:{
        // backgroundColor: '#000',
        marginTop:12,
        color:'white',
        backgroundColor:'#rgb(238,59,69)',
        borderRadius:25,
        paddingHorizontal:10,
        paddingVertical:6,
        width:80,
        textAlign:'center',
        alignItems: 'flex-end',
        
        
    },
    imageBackground: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "space-evenly",
        // paddingVertical: 100,
    },
    header:{
        // marginTop:Constants.statusBarHeight,
        height:90,
        backgroundColor:'rgba(0, 0, 0, 0.55)',
        paddingTop:25,
        paddingHorizontal:15,
        width:width,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    youImage:{
        height:height / 2.0,
    },
    logo:{
        // width:width / 2.5,
        // height:height /3,
        // flex: 1,
        width: 130,
        height: 50,
        resizeMode: 'contain'
    },
    cont : {
        marginTop : 120,
        alignItems : "center"
    },
    inp : {
        width : width / 1.2,
<<<<<<< HEAD
        marginTop : 100,
        padding : 40,
        borderColor : "black",
        borderWidth : 2
=======
        marginTop : 20,
        padding : 10,
        borderColor : "gray",
        borderWidth : 2,
        borderRadius : 10
    },
    tle : {
        fontSize : 30,
        color : '#rgb(238,59,69)'
>>>>>>> 80c26bd8aac72219e007b9cc4a71e3428eae7cf2
    }
})