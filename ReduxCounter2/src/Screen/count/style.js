import { StyleSheet } from "react-native";
import { black, lightWhite, red } from "../../assets/constanct/color";
const styles = StyleSheet.create({
    mainView: {
        justifyContent: "center",
        alignSelf: "center",
        width:"100%",
        flex:1,
        backgroundColor:lightWhite
    },
    inputData: {
        borderColor:black,
        width:"50%",
        height:40,
        color:black,
        borderWidth:1,
        alignSelf:"center",
        borderRadius:10,
        marginTop:"5%"
   },
})
export default styles;