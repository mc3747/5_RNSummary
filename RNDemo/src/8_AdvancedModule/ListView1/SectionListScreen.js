import React, {Component} from 'react';
import {View, ListView, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';

export const vegetables = [
  {
    image:require('../../0_Resources/assets/chili.png'),
    title:'辣椒',
  },
  {
    image:require('../../0_Resources/assets/mushroom.png'),
    title:'蘑菇',
  },
  {
    image:require('../../0_Resources/assets/radish.png'),
    title:'萝卜',
  },
];
export const fruits = [
  {
    image:require('../../0_Resources/assets/lemon.png'),
    title:'柠檬',
  },
  {
    image:require('../../0_Resources/assets/orange.png'),
    title:'橘子',
  },
  {
    image:require('../../0_Resources/assets/watermelon.png'),
    title:'西瓜',
  },
];
export const others = [
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
    image:require('../../0_Resources/assets/pizza.png'),
    title:'披萨',
  },
];

export default class SectionListScreen extends Component {
  // 初始化数据源
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });
    let data = [vegetables, fruits, [others]];
    this.state = {
      dataSource: ds.cloneWithRowsAndSections(data)
    }
  }
  // 主调用render
  render() {
    return (
      <View style={{flex: 1}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          renderSectionHeader={this._renderSectionHeader}
        />
      </View>
    )
  }

  // 自定义cell
  _renderRow = (item, sectionId) => {
    let sectionIndex = Number(sectionId);
    if (sectionIndex === 2) {
      return (
        <View style={styles.gridContainer}>
          {
            item.map((itemData, index) => {
              return (
                <TouchableOpacity key={index} style={styles.gridItem}>
                  <Image source={itemData.image} style={styles.gridImage}/>
                  <Text style={styles.gridTitle}>{itemData.title}</Text>
                </TouchableOpacity>
              )
            })
          }
        </View>
      )
    }
    return (
      <TouchableOpacity style={styles.cellContainer} onPress={() => {}}>
        <Image source={item.image} style={styles.image}/>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    )
  };

  // 自定义header
  _renderSectionHeader = (sectionData, sectionId) => {
    let sectionIndex = Number(sectionId);
    let category = '';
    switch (sectionIndex) {
      case 0:
        category = '蔬菜';
        break;
      case 1:
        category = '水果';
        break;
      case 2:
        category = '其它';
        break;
    }
    return (
      <View style={styles.sectionHeader}>
        <Text>{category}</Text>
      </View>
    )
  };
}

// 样式
export const styles = StyleSheet.create({
  sectionHeader: {
    padding: 10,
    backgroundColor: '#f0f0f0'
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
  },
  gridContainer: {
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  gridItem: {
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 6,
    borderWidth: 1,
    borderColor:'#dcdcdc',
    width:100,
    height: 100,
    marginTop: 20,
  },
  gridImage: {
    width: 60,
    height: 60,
  },
  gridTitle: {
    marginTop: 10
  }
});