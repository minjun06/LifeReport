import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, onPressLearnMore, onPress } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>인생 성적표</Text>
      <StatusBar style="auto" />

      <Button
  onPress={onPressLearnMore}
  title="인생 시작하기"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>

<Text>몰입을 위해 이어폰을 꽂아주세요!</Text>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  text: {
    fontSize: 28
  }
});
