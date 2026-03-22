import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titleText:{
        fontFamily: 'nunito-bold',
        fontSize: 20,
        color: '#fff'
    },
    paragraph: {
        marginVertical: 10,
        lineHeight: 20,
        fontFamily: 'nunito',
        textAlign: 'center',
    },
    boldText:{
        fontWeight: 'bold',
    },
    input:{
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
    bigTitleText: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'nunito',
        textAlign: 'center',
    },
    imageContainer:{
        flex:1,
        alignItems: 'center',
        resizeMode: 'contain',
    },
})