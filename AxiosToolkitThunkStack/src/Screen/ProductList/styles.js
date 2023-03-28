import { StyleSheet } from "react-native"
import {  lightWhite, solidBlack, solidGreen, solidWhite, } from "../../assets/constants"

const styles = StyleSheet.create({

    mainView: {
        backgroundColor: lightWhite,
        padding: 10,
        marginVertical: "1%",
    },

    flatListView: {
        borderRadius: 15,
        padding: 10,
        flexDirection: "row",
        marginVertical: "2%",
        marginHorizontal: "5%",
        height: 110,
        backgroundColor: solidWhite,
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
        color: solidBlack,
        fontWeight:"bold"
    },

    itemPriceText: {
        fontSize:15,
        marginTop: 10,
        color:solidGreen,
        fontWeight:"bold"
    },

    itemImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    },
    
})

export default styles