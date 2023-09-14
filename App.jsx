import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './src/screens/StartGameScreen';

export default function App() {
  let activeScreen = (
    <StartGameScreen
      startGame={startGame}
      showInstructions={showInstructions}
    />
  );

  const startGame = () => {
    console.log('game starts...');
  };

  const showInstructions = () => {
    console.log('instructions...');
  };

  return (
    <>
      <StatusBar style='light' />
      <LinearGradient
        colors={['#363b35', '#12130d']}
        style={styles.appContainerStyle}
      >
        <ImageBackground
          source={require('./assets/img/background_dice.jpg')}
          resizeMode='cover'
          style={styles.appContainerStyle}
          imageStyle={styles.backgroundImage}
        >
          <View style={styles.container}>
            <Text style={{ color: '#e3d8d4', fontSize: 32 }}>Game of Dice</Text>
            {activeScreen}
          </View>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  appContainerStyle: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    opacity: 0.05,
  },
});
