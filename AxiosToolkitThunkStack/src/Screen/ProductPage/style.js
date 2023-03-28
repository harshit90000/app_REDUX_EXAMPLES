import { StyleSheet } from "react-native"
import { solidBlack, solidGreen, solidWhite } from "../../assets/constants"

const styles = StyleSheet.create({

    mainView: {
        backgroundColor: solidWhite,
        height: "100%",
        // marginHorizontal: "1%",
    },

    productImageView: {
        alignSelf: "center",
        // marginHorizszontal:1,
        marginTop: "5%",
        width: "100%",
        // marginVertical:"10%"
    },

    imageSliderView: {
        flexDirection: "row",
        alignSelf: "center",
        marginVertical: "5%",
    },

    productDetailsView: {
        width: "100%",
        height: "100%",
        marginLeft: "5%",
        marginBottom: "10%"
    },

    productHeadingText: {
        fontSize: 16,
        fontWeight: "700",
        width: "30%",
        color: solidBlack
    },

    productColumText: {
        fontSize: 16,
        fontWeight: "700",
        width: "2%",
        marginHorizontal: "2%",
        color: solidBlack
    },

    productDescriptionText: {
        fontSize: 16,
        fontWeight: "500",
        color: solidBlack,
        width: "50%"
    },

    productPriceText: {
        fontSize: 16,
        fontWeight: "500",
        color: solidBlack,
    },

    productDollarText: {
        fontSize: 16,
        fontWeight: "500",
        color: solidGreen,
    },

    ratingView: {
        marginLeft: "20%"
    },

    photoView: {
        width: 390,
        height: 270,
        marginHorizontal: 10,
        resizeMode: "contain",
    },
    sliderView: {
        alignSelf: "center",
        marginTop:"20%"
    },
    imageSmallSliderView: {
        width: 51,
        height: 50,
        flexDirection: "row",
    },
    imageViewSlider: {
        width: 50,
        height: 50,
        // marginHorizontal:"20%",
        resizeMode: "contain",
        justifyContent: "center"
    },
    
    
    scrollImagePage: {
        alignSelf: "center",
        width: "100%",
        marginVertical:"20%"
    },
    
    
    dataview: {
        flexDirection: "row",
        marginVertical: "2%",
    },
    
    
   
    viewText: {
        fontSize: 16,
        fontWeight: "500",
        color: solidBlack
    },
    imagesCross: {
        height: 22,
        width: 22,
        marginTop: "5%",
        marginLeft: "5%"
    },
    flatViewModel: {
        marginTop: "40%",
        // marginHorizontal: "5%",
    },
    modelBaseView: {
        flexDirection: "row",
    },

    modelSliderView: {
        width: "80%",
        height: "70%",
        resizeMode: "stretch",
        marginHorizontal:10,
        alignSelf:"center",
    },
})
export default styles