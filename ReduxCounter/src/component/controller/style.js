import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    decrementStyle: {
        fontSize: 50,
        color: "red" 
    },
    incrementStyle: {
        fontSize: 50,
        color: "green" 
    },
    zeroStyle: {
        fontSize:30,
        color:"red"
    }

})

export default styles;