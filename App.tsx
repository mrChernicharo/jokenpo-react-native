/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [playerChoice, setPlayerChoice] = useState('');
  const [ComputerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);
  const [PCScore, setPCScore] = useState(0);
  const [match, setMatch] = useState(0);

  function onChoose(choice: string) {
    setMatch(match + 1);
    setComputerChoice('');
    setPlayerChoice(choice);

    let pcChoice = '';
    let matchResult = '';

    const randNum = Math.floor(Math.random() * 3);

    switch (randNum) {
      case 0:
        pcChoice = 'pedra';
        break;
      case 1:
        pcChoice = 'papel';
        break;
      case 2:
        pcChoice = 'tesoura';
        break;
      default:
        return;
    }

    if (choice === 'pedra') {
      if (pcChoice === 'pedra') {
        matchResult = 'Empate!';
      } else if (pcChoice === 'tesoura') {
        matchResult = 'Você Venceu!';
      } else if (pcChoice === 'papel') {
        matchResult = 'Você Perdeu!';
      }
    }
    if (choice === 'tesoura') {
      if (pcChoice === 'tesoura') {
        matchResult = 'Empate!';
      } else if (pcChoice === 'papel') {
        matchResult = 'Você Venceu!';
      } else if (pcChoice === 'pedra') {
        matchResult = 'Você Perdeu!';
      }
    }
    if (choice === 'papel') {
      if (pcChoice === 'papel') {
        matchResult = 'Empate!';
      } else if (pcChoice === 'pedra') {
        matchResult = 'Você Venceu!';
      } else if (pcChoice === 'tesoura') {
        matchResult = 'Você Perdeu!';
      }
    }
    setResult('');

    setTimeout(() => {
      setComputerChoice(pcChoice);
    }, 700);

    setTimeout(() => {
      setResult(matchResult);

      matchResult === 'Você Venceu!'
        ? setScore(score + 1)
        : setPCScore(score + 1);
    }, 1400);
  }

  function onReset() {
    setComputerChoice('');
    setPlayerChoice('');
    setResult('');
    setMatch(0);
    setScore(0);
    setPCScore(0);
  }

  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="scrollableAxes">
          {/* <Header /> */}

          <View>
            <Text>Partida: {match}</Text>
          </View>
          <View>
            <Text>Vitórias: {score}</Text>
            <Text>Derrotas: {PCScore}</Text>
          </View>

          <View>
            <View style={styles.headerBanner}>
              <Text style={styles.h1}>JO</Text>
              <Text style={styles.h2}>KEN</Text>
              <Text style={styles.h3}>PO</Text>
            </View>
            <View>
              <Text>Computador: {ComputerChoice}</Text>
              <Text>Você: {playerChoice}</Text>
              <Text>{result}</Text>
            </View>
            <View style={styles.btnContainer}>
              <View style={styles.optionBtn}>
                <Button
                  title="pedra"
                  onPress={() => {
                    onChoose('pedra');
                  }}>
                  <Text>Pedra </Text>
                </Button>
              </View>

              <View style={styles.optionBtn}>
                <Button
                  title="papel"
                  onPress={() => {
                    onChoose('papel');
                  }}>
                  <Text>Papel</Text>
                </Button>
              </View>

              <View style={styles.optionBtn}>
                <Button
                  title="tesoura"
                  onPress={() => {
                    onChoose('tesoura');
                  }}>
                  <Text>Tesoura</Text>
                </Button>
              </View>
            </View>

            <View style={styles.resetBtnContainer}>
              <View style={styles.resetBtn}>
                <Button title="reset" onPress={() => onReset()}></Button>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  h1: {
    marginRight: 60,
    fontSize: 24,
    color: '#fff',
  },
  h2: {
    fontSize: 24,
    position: 'relative',
    color: '#fff',
  },

  h3: {
    marginLeft: 60,
    fontSize: 24,
    color: '#fff',
  },
  headerBanner: {
    borderColor: 'orange',
    backgroundColor: 'orangered',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  optionBtn: {
    width: 100,
    height: 48,
    borderRadius: 2,
  },
  btnContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  resetBtnContainer: {
    borderWidth: 2,
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetBtn: {
    width: 150,
    bottom: 10,
    // backgroundColor: '#f00',
  },
});

export default App;
