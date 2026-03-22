import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    titleText:{
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: '#fff'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
        fontFamily: 'nunito',
        textAlign: 'center',
    },
    boldText:{
        fontWeight: 'bold',
    },
})