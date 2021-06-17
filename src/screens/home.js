import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Switch} from 'react-native';
// import { useTheme } from '@react-navigation/native';
import ThemeManager, {useTheme} from '../../src/themes';

function Home({navigation}) {
  const {colors} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#343A40',
      }}>
      <Text
        style={{
          marginBottom: 100,
          color: 'black',
          fontSize: 25,
          fontWeight: 'bold',
          color: 'white',
        }}>
        Edgeworks Barcode Scanner
      </Text>

      <TouchableOpacity
        style={styles.btnContainer}
        activeOpacity={0.5}
        onPress={() => navigation.push('scanner1')}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
          Scanner 1
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnContainer}
        activeOpacity={0.5}
        onPress={() => navigation.push('scanner2')}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
          Scanner 2
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    height: '5%',
    width: '50%',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    marginBottom: 70,
  },
  Container: {
    flex: 1,
    backgroundColor: props => props.theme.backgroundAlt,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    fontSize: 24,
    color: props => props.theme.text,
  },
});

export default Home;

// const Container = styled.View`
//   flex: 1;
//   /* add this */
//   background: ${props => props.theme.backgroundAlt};
//   align-items: center;
//   justify-content: center;
// `

// const Title = styled.Text`
//   font-size: 24;
//   /* add this */
//   color: ${props => props.theme.text};
//   `
