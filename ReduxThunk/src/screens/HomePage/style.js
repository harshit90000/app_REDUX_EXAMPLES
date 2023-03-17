import { StyleSheet } from "react-native"
import { black, lightWhite, lightblue, red, white } from '../../assets/constanct/color'

const styles = StyleSheet.create({

    mainView: {
        backgroundColor: lightWhite,
        padding: 10,
        marginVertical: "1%",
    },

    flatListMainView: {
        marginBottom:"10%"
    },

    flatListView: {
        borderRadius: 15,
        padding: 10,
        flexDirection: "row",
        marginVertical: "2%",
        marginHorizontal: "5%",
        height: 110,
        backgroundColor: white,
        justifyContent: "space-between"
    },

    itemTextView: {
        marginLeft: "5%",
        alignSelf: "center",
        width: "40%",
        marginRight:"5%",
        flexDirection: "column",
    },

    itemTitleText: {
        fontSize:15,
        color:black,
        fontWeight:"bold"
    },

    itemImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    },

    baseView: {
        flexDirection: "row",
        marginHorizontal: 20,
        width:"90%"
    },
    textData: {
        fontWeight: "bold",
        fontSize: 25,
        width:"80%",
        marginVertical: 10
    },
    emptyList:{
        fontSize:30,
        color:red,
        marginTop:"50%",
        alignSelf: "center",
        fontWeight:"bold",
      },
      
      
      
    
    
})
export default styles