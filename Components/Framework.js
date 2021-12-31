import { StyleSheet } from "react-native";

const a = StyleSheet.create({

    root: {

        backgroundColor: '#EEE',

    },

    profile: {

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 8,

    },
    
    profileimage: {

        height: 60,
        width: 60,
        backgroundColor: '#FFF',
        borderRadius: 100,
        marginLeft: 5,

    },


    profilename: {

        fontSize: 22,
        fontFamily: 'RobotoCondensed-Bold',
        color: '#000',
        marginRight: 'auto',
        marginLeft: 5

    },


    profilesearch: {

        marginRight: 30

    },


    profilemenu: {

        marginRight: 20,

    },

    card: {

        width: "96.5%",
        marginLeft: '3%',
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },


    cardtext: {

        fontSize: 14,
        fontFamily: 'RobotoCondensed-Regular',
        color: '#FFF',
        letterSpacing: 1,
        marginTop: 30,
        marginBottom: 15,

    },


    cardamount: {

        color: '#FFF',
        fontSize: 50,
        marginBottom: 25,

    },


    cardrupee: {

        fontSize: 20,

    },


    settlebtn: {

        width: "90%",
        height: 45,
        backgroundColor: "#35874b",
        marginLeft: '5%',
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,

    },


    settlebtntxt: {

        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 0.3,

    },


    month: {
        
        backgroundColor: '#FFF',
        marginBottom: 2,
        padding: 5,

    },


    monthtitle: {

        fontWeight: 'bold',
        color: '#777',
        marginBottom: 30,

    },


    trc: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 20,
    },


    trcdate: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },


    trcmm: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
        color: '#777'
    },

    trcdd: {
        fontWeight: 'bold',
        color: '#777'
    },

    trcicon: {

        backgroundColor: '#9803fc',
        borderRadius: 100,
        height: 50,
        width: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,

    },


    trcdetails: {
        
        width: "55%",
        paddingLeft: '5%',
        marginRight: 'auto',

    },


    trch: {

        color: '#000',
        fontSize: 20,
        fontFamily: 'RobotoCondensed-Bold',
        letterSpacing: 0.3,

    },

    trcamt: {

        marginRight: 10,

    },


    trcam: {

        fontSize: 20,

    },


});

export default a;