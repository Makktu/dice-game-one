import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import About from './src/screens/About';

import StartGameScreen from './src/screens/StartGameScreen';
import GameScreen from './src/screens/GameScreen';

export default function App() {
  const [gameOn, setGameOn] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [displayAbout, setDisplayAbout] = useState(false);

  const startGame = () => {
    setGameOn(true);
  };

  const showInstructions = () => {
    console.log('instructions...');
  };

  const showAbout = () => {
    setDisplayAbout(!displayAbout);
  };

  let activeScreen = (
    <StartGameScreen
      startGame={startGame}
      showInstructions={showInstructions}
      showAbout={showAbout}
    />
  );

  if (gameOn) {
    activeScreen = (
      <GameScreen
        backScreen={() => setGameOn(false)}
        gameOverScreen={() => setGameOver(true)}
      />
    );
  }

  if (displayAbout) {
    activeScreen = <About returnToMain={showAbout} />;
  }

  if (gameOver) {
    activeScreen = (
      <StartGameScreen
        startGame={startGame}
        showInstructions={showInstructions}
      />
    );
  }

  return (
    <>
      <StatusBar style='light' />
      <LinearGradient
        colors={['#35363b', '#020a09']}
        style={styles.appContainerStyle}
      >
        <ImageBackground
          source={require('./assets/img/background_dice.jpg')}
          resizeMode='cover'
          style={styles.appContainerStyle}
          imageStyle={styles.backgroundImage}
        >
          <View>
            {gameOn ? null : (
              <Text style={styles.mainTextStyle}>Game of Dice</Text>
            )}
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
  mainTextStyle: {
    color: '#e3d8d4',
    fontSize: 32,
  },
});
