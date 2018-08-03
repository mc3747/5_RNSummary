
import {View, Text} from 'react-native';
import BaseComponent from './BaseComponent';

export default class SecondScreen extends BaseComponent {
  
  static navigationOptions = {
    headerTitle: 'Second'
  };
  
  
  render() {
    return (
      <View>
        <Text>这是第二个页面</Text>
      </View>
    )
  }
}