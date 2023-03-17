import { StyleSheet } from "react-native";
import { solidBlack, solidWhite } from "../../../assets/constanct/color"
;
const styles = StyleSheet.create({

    mainScrollView: {
        padding: 24,
        flex:1,
        backgroundColor: solidWhite
    },

    imageView:{
        height:"70%"
    },

    itemImage: {
        marginVertical: 10,
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },

    itemDetailView: {
        marginVertical: 20,
        width: "100%",
        flexDirection: "column",
    },

    textDirectionView: {
        flexDirection: "row",
    },

    itemTitleText: {
        fontWeight: "700",
        fontSize: 22,
        color: solidBlack
    },

    itemHeadingText: {
        marginTop: "4%",
        fontSize: 16,
        fontWeight: "600",
        color: solidBlack
    },
    
    itemDetailsText: {
        marginTop: "4%",
        marginLeft: "2%",
        fontWeight: "500",
        fontSize: 16,
        color: solidBlack
    },

    itemDescriptionText: {
        marginLeft: "4%",
        width: "70%",
        fontSize: 14,
        textAlign: "justify",
        color: solidBlack
    },
    
    
    
    

})
export default styles;