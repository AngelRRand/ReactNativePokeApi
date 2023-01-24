import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    row:{
        justifyContent: "space-around"
    },
    card:{
        justifyContent:'center',
        flexDirection:'column',
        height:100,
        width:100,
        elevation:2,
        margin:5,
        marginTop:15,
        paddingBottom:35,
    },  
    text:{
        textAlign:'center'
    },
    cardFavorite:{
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',
        marginHorizontal:10,
        height:500,
        elevation:5
    },
    title:{
        fontSize:25
    },
    name:{
        textAlign:'center',
        fontSize:20
    }
});


export default Styles;
