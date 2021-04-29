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
        width:90,
        textAlign:'center',
        alignItems: 'flex-end',
        
        
    },
    imageBackground: {
        flex: 1,
        flexDirection: "column",
        // alignItems: "center",
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
        marginTop : 100,
        padding : 40,
        borderColor : "black",
        borderWidth : 2,
        marginTop : 20,
        padding : 10,
        borderColor : "gray",
        borderWidth : 2,
        borderRadius : 10
    },
    tle : {
        fontSize : 30,
        color : '#rgb(238,59,69)'
    },
    creditSection:{
        height:height,
        padding:25,
        backgroundColor:'rgba(0, 0, 0, 0.55)',
        alignItems:'center'
    },
    creditSectionMt:{
        backgroundColor:'rgba(0, 0, 0, 0.5)',
        padding:15,
        borderRadius:24,
        width:width / 1.1,
        marginVertical:5
    },
    creditText:{
        color:'white',
        fontSize:15
    },
    creditTitle:{
        fontSize:60,
        color:'white'
    },
    creditAmortissment:{
        fontSize:20,
        color:'#fff'
    }
})