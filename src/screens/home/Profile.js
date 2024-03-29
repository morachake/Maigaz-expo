import React from 'react'
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS ,IMAGES} from '../../constants/Index';
import ProfileBtn from './components/ProfileBtn';
export default function Profile({navigation}) {
    return ( 
        <SafeAreaView style={{ backgroundColor: '#E5E5E5', flex: 1 }}> 
            <View >
            <Text style={styles.textHeader}>
                My Profile
            </Text>
            <View style={styles.topcard}>
                <Image
                    source={IMAGES.user}
                    resizeMode="contain"
                    style={styles.image}
                />
                <Text style={{fontSize: 18,fontFamily:'Inter-Bold'}}>Jane Doe</Text>
                <View style={styles.bottomcard }>
                    <Icon
                        name='map-marker'  
                        size={22}
                    />
                    <Text style={{fontSize: 18}}>Ratna Square Nyali</Text>
                </View>
            </View>
            <View style={styles.btnContainer}>
                <ProfileBtn
                    heading="Edit Profile"
                    iconName="account-edit"
                    />
                <ProfileBtn
                        heading="New Product"
                        iconName="logout"
                        onPress={() => navigation.navigate('addProduct')}
                />
                <ProfileBtn
                    heading="Order History"
                    iconName="history"
                />
                <ProfileBtn
                    heading="Support"
                    iconName="help-circle"
                />
                <ProfileBtn
                    heading="Sign Out"
                    iconName="logout"
                />
            </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textHeader: {
        marginLeft: 20,
        paddingBottom: 20,
        fontSize: 34,
        color: COLORS.lightSecondary,
        fontFamily: 'Inter-Bold',
        textAlign: 'center',
        marginVertical: 10
    },
    image: {
        marginTop: '-10%',
    },
    topcard: {
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        margin: 20,
        borderRadius: 20,
        height: 130,
    },
    btnContainer: {
        margin: 20,margin: 20,
    },
    bottomcard: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10
    }
})