import React, { useRef, useEffect, useState, } from 'react';
import { Animated,  StatusBar, Image, StyleSheet, Text, View, TextInput, Button } from 'react-native';
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
  const Phrase2 = useRef(new Animated.Value(0)).current
  useEffect(() => {
    Animated.timing(
      Phrase2,
      {
        delay: 4000,
        duration: 1000,
        toValue: 1,
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


const bgHome = { uri: "https://i.pinimg.com/originals/a2/f7/1b/a2f71bdd8de9c1eb2865eb3228541db6.jpg" };
const enigma =  "https://storage.googleapis.com/bucket-grupobig-institucional-prod/9c05f0d06b3a4ba38613a39dc520f0c8/fachada-big-min.jpg";
const enigma2 =  "https://i.pinimg.com/736x/20/07/29/20072966dedba9a9a23ab34bac2245de--double-decker-bus-big-ben-london.jpg";
function Home({ navigation }) {
  return (
    <View style={styles.all}>
      <StatusBar
        backgroundColor="black"
      />
      <View style={styles.container}>
          <Phrase_1 style={styles.phraseBody}>
            <Text style={styles.phrase}>
              "olho olho teste pros con iug iugy uygguu y g  g yui i8 uiu iyi uyy 7 uyp87 y  yguyguguyggugguyguyuyguytcgfct uuyguggyguygfguguyguty iuguyuy uygg uyguy guuuu  uuy uy tra"bguyguutugfgytftygt uyg iyiuyi
            </Text>
          </Phrase_1>
        <Phrase_2 style={styles.phraseBody}>
            <Text style={styles.phrase}>
              "olhefwekfmpwe pwoepowejfpwj fwpefo olho teste pros contra "
            </Text>
        </Phrase_2>
        <Phrase_3 style={styles.phraseBody}>
            <Text style={styles.phrase}>
              "olhefwekfmpwe pwoepowejfpwj fwpefo olho teste pros contra "
            </Text>
        </Phrase_3>
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

  const next = () => {
    const valor = pass
    if (pass == 'Dor') {
      navigation.navigate('Level2')
    } else {
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#121212"
      />
      <View style={styles.content}>
        <View style={styles.bodyImg}>
           <Image
           style={levels.imagex}
           source={{uri: enigma}}/>
        </View>
       
      </View>
    <View style={styles.card}>
 <TextInput
        onChangeText={text => setPass(text)}
        style={styles.input}
        value={pass}
        placeholderTextColor={'gray'}
        placeholder={'type here...'}
      />
      <IconButton
        onPress={() => setPass('')}
        icon="close"
        color='gray'
        style={styles.clean}
      />
       <IconButton
        icon="arrow-right"
        color='gray'   onPress={next()}
        style={styles.next}
      />
    </View>
   
</View>
  );
}
function Level2({ navigation }) {
  const [pass, setPass] = useState('');
  const next = () => {
    const valor = pass
    if (pass == 'dor') {
      navigation.navigate('Level')
    } else {
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#121212"
      />
      <View style={styles.content}>
        <View style={styles.bodyImg}>
           <Image
           style={levels.imagex}
           source={{uri: enigma2}}/>
        </View>
       
      </View>
    <View style={styles.card}>
 <TextInput
        onChangeText={text => setPass(text)}
        style={styles.input}
        value={pass}
        placeholderTextColor={'gray'}
        placeholder={'type here...'}
      />
      <IconButton
        onPress={() => setPass('')}
        icon="close"
        color='gray'
        style={styles.clean}
      />
       <IconButton
        icon="arrow-right"
        color='gray'
        style={styles.next}
      />
       
    </View>
     

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
              backgroundColor: '#121212',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: '200',
            },
          }}
          name="Level" component={Level} />

            <Stack.Screen
          options={{
            title: 'Part II - FirstPase',
            headerStyle: {
              backgroundColor: '#121212',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: '200',
            },
          }}
          name="Level2" component={Level2} />
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
  content: {
    width: '100%',
    height: '70%',
    alignItems: 'center',
    justifyContent:  'center',
    position: 'relative',
    backgroundColor: 'red'
  },
  card: {
    width: '100%',
    height: '100%',
    paddingLeft: '3%' ,
    paddingRight: '3%' ,
  },
  bodyImg: {
    justifyContent:  'center',
    alignItems: 'center',
    width: '97%',
    height: '97%',
    backgroundColor: 'blue'
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
  clean: {
    position: 'absolute',
    right: '20%',
    top: '4.4%'
  },
  next: {
    position: 'absolute',
    right: '4.4%',
    backgroundColor: '#121212',
    top: '4.5%'
  },
  input: {
    color: 'white',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    top: '5%',
    width: '85%',
    borderHeight: 1,
    fontSize: 20,
    paddingLeft: 20,
    position: 'relative',
    paddingRight: 50,
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

const levels = StyleSheet.create({
  imagey: {
    width: '50%',
    position: 'relative',
    height: '100%',
  },
  imagex: {
    width: '100%',
    height: 'auto',
    minHeight: '10%',
    position: 'relative',
    
  }
})
