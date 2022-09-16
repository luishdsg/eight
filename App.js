import React, { useRef, useEffect, useState, } from 'react';
import { Animated,  StatusBar, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IconButton } from 'react-native-paper';

// PHRASE-WELL-ONE
const Phrase_1 = (props) => {
  const Phrase1 = useRef(new Animated.Value(0)).current
  useEffect(() => {
    Animated.timing(
      Phrase1,
      {
        toValue: 1,
        delay: 1000,
        duration: 1000,
        useNativeDriver: false
      }
    ).start();
  }, [Phrase1])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: Phrase1,
        color: 'red'
      }}
    >
      {props.children}
    </Animated.View>
  );
}

const Phrase_2 = (props) => {
  const Phrase2 = useRef(new Animated.Value(1)).current
  useEffect(() => {
    Animated.timing(
      Phrase2,
      {
        delay: 6000,
        duration: 1000,
        toValue: 0,
        useNativeDriver: false
      }
    ).start();
  }, [Phrase2])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: Phrase2,
        color: 'red'
      }}
    >
      {props.children}
    </Animated.View>
  );
}

const Phrase_3 = (props) => {
  const Phrase3 = useRef(new Animated.Value(0)).current
  useEffect(() => {
    Animated.timing(
      Phrase3,
      {
        toValue: 1,
        delay: 8000,
        duration: 1000,
        useNativeDriver: false
      }
    ).start();
  }, [Phrase3])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: Phrase3,
        color: 'red'
      }}
    >
      {props.children}
    </Animated.View>
  );
}

const Phrase_4 = (props) => {
  const Phrase4 = useRef(new Animated.Value(1)).current
  useEffect(() => {
    Animated.timing(
      Phrase4,
      {
        delay: 13000,
        duration: 1000,
        toValue: 0,
        useNativeDriver: false
      }
    ).start();

  }, [Phrase4])


  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: Phrase4,
        color: 'red'
      }}
    >
      {props.children}
    </Animated.View>
  );
}

const Phrase_5 = (props) => {
  const Phrase5 = useRef(new Animated.Value(0)).current
  useEffect(() => {
    Animated.timing(
      Phrase5,
      {
        toValue: 1,
        delay: 15000,
        duration: 1000,
        useNativeDriver: false
      }
    ).start();
  }, [Phrase5])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: Phrase5,
        color: 'red'
      }}
    >
      {props.children}
    </Animated.View>
  );
}

const Phrase_6 = (props) => {
  const Phrase6 = useRef(new Animated.Value(1)).current
  useEffect(() => {
    Animated.timing(
      Phrase6,
      {
        delay: 18000,
        duration: 2000,
        toValue: 0,
        useNativeDriver: false
      }
    ).start();

  }, [Phrase6])


  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: Phrase6,
        color: 'red'
      }}
    >
      {props.children}
    </Animated.View>
  );
}

const bgHome = { uri: "https://i.pinimg.com/originals/a2/f7/1b/a2f71bdd8de9c1eb2865eb3228541db6.jpg" };

function Home({ navigation }) {
  const [pass, setPass] = useState('');
  const next = () => {
    if (pass == 'cor') {
      navigation.navigate('Level')
    } else {
    }
  }


  return (
    <View style={styles.all}>
      <StatusBar
        backgroundColor="black"
      />
      <View style={styles.container}>
        <Phrase_2 style={styles.phraseBody}>
          <Phrase_1>
            <Text style={styles.phrase}>
              "olho olho teste pros con iug iugy uygguu y g  g yui i8 uiu iyi uyy 7 uyp87 y  yguyguguyggugguyguyuyguytcgfct uuyguggyguygfguguyguty iuguyuy uygg uyguy guuuu  uuy uy tra"bguyguutugfgytftygt uyg iyiuyi
            </Text>
          </Phrase_1>
        </Phrase_2>
        <Phrase_4 style={styles.phraseBody}>
          <Phrase_3>
            <Text style={styles.phrase}>
              "olhefwekfmpwe pwoepowejfpwj fwpefo olho teste pros contra "
            </Text>
          </Phrase_3>
        </Phrase_4>
        <Phrase_5 style={styles.phraseBody}>
          <Phrase_6>
            <Text style={styles.phrase}>
              "olhefwekfmpwe pwoepowejfpwj fwpefo olho teste pros contra "
            </Text>
          </Phrase_6>
        </Phrase_5>
<View style={styles.phraseBody}>
        <Text
          style={styles.start}
          onPress={() => navigation.navigate('Level')}>S t a r t
        </Text>
</View>
       

      </View>



    </View>
  );
}

function Level({ navigation }) {
  const [pass, setPass] = useState('');
  const [backgroundColor, setBackgroundColor] = React.useState();
  const next = () => {
    const valor = pass
    if (pass == 'cor') {
      navigation.navigate('Level')
    } else {
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput
        onChangeText={text => setPass(text)}
        onBlur={() => setBackgroundColor('yellow')}
        onFocus={() => setBackgroundColor('orange')}
        style={styles.input}
        value={pass}
        inlineImageLeft='search_icon'
        placeholderTextColor={'gray'}
        placeholder={'type here...'}
      />
      <IconButton
        onPress={() => setPass('')}
        icon="close"
        color='gray'
        size={20}
      />
        <TextInput
          onChangeText={text => setPass(text)}
          value={pass}
          style={styles.input} />
        <Button
          onPress={next()}
          title={pass} style={{ color: 'white' }}></Button>

    </View>
  );
}

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{
          title: '',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: '200',
          },
        }} name="Home" component={Home} />
        <Stack.Screen
          options={{
            title: 'Part I - Beginning',
            headerStyle: {
              backgroundColor: '#232323',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: '200',
            },
          }}
          name="Level" component={Level} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    height: '100%',
  },
  all: {
    width: '100%',
    height: '100%'
  },
  bgHome: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  phrase: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
    maxWidth: '90%',
  },
  input: {
    color: 'white',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '70%',
    borderHeight: 1,
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 30
  },
  phraseBody: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '25%',
    backgroundColor: 'transparent',
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
  start:{
    width: 'auto',
    paddingLeft: 50,
    paddingTop: 7,
    paddingBottom: 7,
    paddingRight: 50,
    fontSize: 30,
    borderRadius: 30,
    backgroundColor: '#111111',
    textAlign: 'center',
    color: 'white'
  }
});
