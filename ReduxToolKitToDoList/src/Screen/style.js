import { StyleSheet } from "react-native";
import { black, blue, green, lightWhite, white } from "../assets/constants/color";
const styles = StyleSheet.create({
    SafeDesign: {
        flex: 1,
        backgroundColor:white,
    },
    textData:{
        fontSize:30,
        marginStart:10
    },
   listData:{
     flexDirection:"row",
     marginVertical:10,
     width:"80%",
     padding:10,
     alignItems:"center",
     alignSelf:"center",
     backgroundColor:lightWhite,
     marginHorizontal:10,
     justifyContent:"space-between"
   },
    listEmpty: {
        color: white,
        alignSelf: "center",
        fontSize: 30,
        marginTop: "50%",
        fontWeight: "600"
    },
    flatStyle:{
        marginVertical:"10%"
    },
    listView: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop:"10%"
    },
   
    listInput: {
        height: 40,
        borderRadius: 20,
        color: black,
        padding: 10,
        backgroundColor:"white",
        marginRight:5,
        width:"60%",
        borderColor: black,
        borderWidth: 0.5,
    },
    iconPlus: {
        height: 20,
        width: 20,
        alignSelf: "center"
    },
    iconViews: {
        height: 40,
        width: 40,
        marginHorizontal:10,
        backgroundColor: black,
        borderRadius: 25,
        alignSelf: "center",
        justifyContent: 'center',
    },
})
export default styles