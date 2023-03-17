import { StyleSheet } from 'react-native';
import { black, white, yellow } from '../../assets/constanct/color';

const styles = StyleSheet.create({
    mainView: {
        flexDirection: "row",
        alignSelf:"center",
        marginHorizontal:30,
        padding:10,
        marginTop:10,
        borderRadius:50,
        backgroundColor:white
    },
    buttonView: {
        backgroundColor:yellow,
        padding:10,
        width:"20%",
        marginTop:5,
        marginHorizontal:25,
        borderRadius:50
    },
    ZeroView:{
        backgroundColor:yellow,
        padding:10,
        width:"40%",
        marginLeft:10,
        alignSelf:"center",
        borderBottomEndRadius:20,
        borderBottomStartRadius:20
    },
    textView: {
        fontSize:30,
        alignSelf:"center",
        color:black
    }

})

export default styles;
