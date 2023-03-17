import { StyleSheet } from "react-native";
import { lightOrange, lightWhite, lightblue, red, solidBlack, solidRed, solidWhite, solidYellow, white, } from '../../../assets/constanct/color'

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: lightWhite,
        padding: 10,
        marginVertical: "1%",
    },

    headerView: {
        flexDirection: "row",
        marginHorizontal: 20,
        width: "90%"
    },

    homePageText: {
        fontWeight: "bold",
        fontSize: 20,
        width: "80%",
        marginVertical: 10
    },

    cartView: {
        backgroundColor: solidYellow,
        right: "20%",
        borderRadius: 15,
        padding: 11,
        flexDirection: "row",
        justifyContent: "center"
    },

    cartImage:{
        width:20,
        marginRight:5,
        height:20
    },

    cartText: {
        color: solidBlack,
        fontSize: 18,
        alignItems: "center",
        fontWeight: "700",
    },

    emptyListText:{
        fontSize: 40,
        color: solidRed,
        marginTop: "50%",
        alignSelf: "center",
        fontWeight: "bold",
      },

      flatListmainView: {
        marginBottom: "10%",
    },

    flatListView: {
        borderRadius: 15,
        padding: 10,
        flexDirection: "row",
        marginVertical: "2%",
        marginHorizontal: "5%",
        height: 130,
        backgroundColor: solidWhite,
        justifyContent: "space-between"
    },

    itemDetailView: {
        marginLeft: "5%",
        alignSelf: "center",
        width: "50%",
        flexDirection: "column",
    },

    itemImage: {
        height: 100,
        width: 100,
        borderRadius: 10,
        resizeMode: 'contain',
        alignSelf: "center"
    },

    itemTitleText: {
        fontWeight: "bold",
    },

    addToCartView: {
        backgroundColor: solidYellow,
        borderRadius: 15,
        width: 110,
        padding: 10,
        marginTop: 15
    },

    addToCartText: {
        color: solidBlack,
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center"
    },
    
})
export default styles;