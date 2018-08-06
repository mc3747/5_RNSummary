/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

// 导入JSON数据
var Heros = require('./heros.json');

type Props = {};

var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

export default class ListViewTest extends Component<Props> {

  // 在构造函数中初始化数据 固定写法
  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2});
    this.state={
        dataSource:ds.cloneWithRows(Heros)
    };
  }

  render() {
    return (
        <ListView

          style={{marginTop:25}}

          // 设置ListView数据源
          dataSource={this.state.dataSource}
          // 设置单个Row的数据源以及Cell布局
          renderRow={(a)=>this.renderRow(a)}
        />
    );
  }

  renderRow(rowData,sectionID,rowID,highlightRow) {
      console.log(rowData);
      return(

        // 布局Cell
        <TouchableOpacity activeOpacity={0.5}
                          onPress={()=>{Alert.alert('购买成功！','成功解锁'+rowData.name+'英雄！')}}
        >
        <View style={styles.cellStyle}>

          <Image source={{uri:rowData.image}} style={styles.leftImageStyle}/>
          }

          <View style={styles.rightViewStyle}>
              <Text style={styles.topTitleStyle}>{rowData.name}</Text>
              <Text style={styles.bottomDescStyle}
                    numberOfLines={3}
              >{rowData.title}</Text>

          </View>

        </View>
        </TouchableOpacity>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  cellStyle:{
    // 分割线
    borderBottomWidth:0.5,
    borderBottomColor:'#e8e8e8',
    // 内缩
    padding:10,
    flexDirection:'row',
  },
  leftImageStyle:{
    width:60,
    height:60,
    marginRight:15,
  },
  rightViewStyle:{

  },
  topTitleStyle:{
    fontSize:20,
  },
  bottomDescStyle:{
    width:width*0.7,
    marginTop:8,
  },
});
