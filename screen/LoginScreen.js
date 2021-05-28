import React from 'react'
import { Text, View, TouchableOpacity, TextInput, StyleSheet,Image } from 'react-native'
import firebase from 'firebase/app'
export default class LoginScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            emailId: '',
            passWord: ''

        }

    }
    login = async (email, password) => {

        if (email && password) {

            try {
                const respones = await firebase.auth().signInWithEmailAndPassword(email, password)
                if (respones) {
                    this.props.navigation.navigate('screen1')
                }
            }
            catch (error) {
                switch (error.code) {
                    case 'auth/user-not-found':
                        alert('User does not exists');
                        break;
                    case 'auth/invalid-email':
                        alert('Incorrect email or passsword');
                        break;
                }

            }
        }
        else {
            alert('Please enter email or Password')

        }


    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                  <Image style={{ width: 200, height: 200 }}
                   source={require('../assets/bedtime.jpg')}
                  />
                   <Text style={{textAlign:'center',fontSize:30}}>BEDTIME STOREY</Text>
                </View>
                <View>
                     
                    <TextInput
                        placeholder='abc@gmail.com'
                        keyboardType='email-address'
                        onChangeText={(email) => {
                            this.setState({
                                emailId: email,
                            })
                        }}
                    />
                    <TextInput
                        placeholder='PassWord'
                        secureTextEntry={true}
                        onChangeText={(pass) => {
                            this.setState({
                                passWord: pass
                            })
                        }}
                    />
                </View>
                <View>
                    <TouchableOpacity style={{
                        height: 30,
                        width: 90,
                        borderWidth: 1,
                        marginTop: 20,
                        paddingTop: 5,
                        borderRadius: 7,
                    }}
                        onPress={() => {
                            this.login(this.state.emailId, this.state.passWord);
                        }}>
                        <Text style={{ textAlign: 'center' }}>LOGIN</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
