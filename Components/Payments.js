import React from "react";
import {View, Image, StatusBar, Text, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import a from './Framework';
import profile from "../assets/profile.png";
import gradient from "../assets/orangeredgradient.png";
import { transactions } from "./Transactions";


export default class Payments extends React.Component {

    state = {
        payable: null,
    }

    componentDidMount() {

        let pb = 0;

        for(let i=0; i<transactions.length; i++) {

            for(let j=1; j<transactions[i].length; j++) {

                for(let k=0; k<transactions[i][j].length; k++) {

                    if(transactions[i][j][k][3] == "You") {
                        pb += transactions[i][j][k][5];
                    }
                    else {
                        pb -= transactions[i][j][k][5];
                    }

                }

            }

        }

        this.setState({payable: pb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")});

    }

    render() {

        return (

            <ScrollView style={a.root}>
                <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

                <View style={a.profile}>

                    <Image style={a.profileimage} source={profile} />
                    <Text style={a.profilename}>User Name</Text>


                    <Icon style={a.profilesearch} name="search" color="#000" size={20} />
                    <Icon style={a.profilemenu} name="ellipsis-v" color="#000" size={20} />

                </View>


                    
                <ImageBackground source={gradient} style={a.card} imageStyle={{borderRadius: 10}}>

                    <Text style={a.cardtext}>TOTAL PAYABLE</Text>

                    <Text style={a.cardamount}><Text style={a.cardrupee}>₹</Text> {this.state.payable}</Text>

                </ImageBackground>


                <TouchableOpacity activeOpacity={0.6} style={a.settlebtn}>

                    <Text style={a.settlebtntxt}>Settle Up</Text>

                </TouchableOpacity>




                <View>

                    {
                        transactions.map((item, index) => {
                            return (

                                <View key={index} style={a.month}>

                                    <Text style={a.monthtitle}>{item[0]}</Text>

                                    {
                                        transactions[index][1].map((item, index) => {

                                            let amt = null;

                                            if(item[3] == "You") {
                                                
                                                    amt = <Text style={[a.trcam, {color: '#00FF00'}]}>+ {item[5].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                                            }
                                            else {
                                                    amt = <Text style={[a.trcam, {color: '#FF0000'}]}>- {item[5].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                                            }

                                            return (

                                                <View key={index} style={a.trc}>

                                                    <View style={a.trcdate}>

                                                        <Text style={a.trcmm}>{transactions[index][0].substring(0,3)}</Text>
                                                        <Text style={a.trcdd}>{item[0]}</Text>

                                                    </View>

                                                    <View style={a.trcicon}>
                                                        <Icon name={item[1]} size={25} color="#FFF" />
                                                    </View>

                                                    <View style={a.trcdetails}>
                                                        <Text numberOfLines={1} style={a.trch}>{item[2]}</Text>
                                                        <Text style={a.trcd}>{item[3]} paid ₹{item[4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                                                    </View>

                                                    <View style={a.trcamt}>
                                                        
                                                        {
                                                            amt
                                                        }

                                                    </View>

                                                </View>

                                            );

                                        })
                                    }

                                </View>

                            );
                        })
                    }

                </View>
                    
                
            </ScrollView>

        );

    }

}