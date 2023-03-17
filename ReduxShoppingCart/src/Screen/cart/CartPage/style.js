import { StyleSheet } from "react-native";
import { black, lightOrange, lightWhite, lightblue, red, solidBlack, solidRed, solidWhite, white } from "../../../assets/constanct/color";

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: lightWhite,
        padding: 10,
        marginVertical: "1%",
    },

    flatListMainView:{
        height: "100%",
    },

    emptyListText:{
        fontSize: 30,
        color: solidRed,
        marginTop: "70%",
        alignSelf: "center",
        fontWeight: "bold",
    },

    flatListView: {
        borderRadius: 15,
        padding: 10,
        flexDirection: "row",
        marginVertical: "2%",
        marginHorizontal: "5%",
        height: 160,
        backgroundColor: solidWhite,
        justifyContent: "space-between"
    },

    itemDetailView: {
        marginLeft: "5%",
        alignSelf: "center",
        width: "50%",
        flexDirection: "column",
    },

    titleText: {
        fontWeight: "bold",
    },

    priceText: {
        fontWeight: "300",
        marginTop: "4%",
        marginBottom: "4%"
    },

    removeView: {
        backgroundColor: lightOrange,
        borderRadius: 48,
        width: 150,
        padding: 10,
        marginTop: 5
    },

    removeText: {
        color: solidBlack,
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center"
    },

    itemImage: {
        height: 100,
        width: 100,
        borderRadius: 10,
        resizeMode: 'contain',
        alignSelf: "center"
    },
})

export default styles;