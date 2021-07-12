import React, {Component} from 'react';
import {View, ListView, Image, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';

export const data = [
  {
    image:require('../../0_Resources/assets/beer.png'),
    title:'啤酒',
  },
  {
    image:require('../../0_Resources/assets/bread.png'),
    title:'面包',
  },
  {
    image:require('../../0_Resources/assets/cake.png'),
    title:'蛋糕',
  },
  {
    image:require('../../0_Resources/assets/candy.png'),
    title:'糖果',
  },
  {
    image:require('../../0_Resources/assets/chili.png'),
    title:'辣椒',
  },
  {
    image:require('../../0_Resources/assets/chips.png'),
    title:'薯条',
  },
  {
    image:require('../../0_Resources/assets/drink.png'),
    title:'饮料',
  },
  {
    image:require('../../0_Resources/assets/egg.png'),
    title:'鸡蛋',
  },
  {
    image:require('../../0_Resources/assets/ham.png'),
    title:'火腿',
  },
  {
    image:require('../../0_Resources/assets/hotdog.png'),
    title:'热狗',
  },
  {
    image:require('../../0_Resources/assets/icecream.png'),
    title:'冰激凌',
  },
  {
    image:require('../../0_Resources/assets/icesucker.png'),
    title:'冰棍',
  },
  {
    image:require('../../0_Resources/assets/lemon.png'),
    title:'柠檬',
  },
  {
    image:require('../../0_Resources/assets/mushroom.png'),
    title:'蘑菇',
  },
  {
    image:require('../../0_Resources/assets/orange.png'),
    title:'橘子',
  },
  {
    image:require('../../0_Resources/assets/pizza.png'),
    title:'披萨',
  },
  {
    image:require('../../0_Resources/assets/radish.png'),
    title:'萝卜',
  },
  {
    image:require('../../0_Resources/assets/watermelon.png'),
    title:'西瓜',
  },
];

export default class SimpleListScreen extends Component {
  
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(data)
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      </View>
    )
  }
  
  _renderRow = (rowData) => {
    return (
      <TouchableOpacity style={styles.cellContainer} onPress={() => {
        Alert.alert(
          rowData.title,
          '',
          [
            {text: 'OK', onPress: () => {}},
          ]
        )
      }}>
        <Image source={rowData.image} style={styles.image}/>
        <Text style={styles.title}>{rowData.title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cellContainer: {
    borderBottomWidth: 1,
    borderColor: '#dcdcdc',
    flexDirection:'row',
    alignItems:'center',
    padding:15
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    marginLeft: 15,
  }
});