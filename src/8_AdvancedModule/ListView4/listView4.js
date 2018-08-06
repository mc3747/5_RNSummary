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
} from 'react-native';

var Car = require('./Car.json');

type Props = {};

export default class ListViewTest2 extends Component<Props> {

  // 构造函数 布置数据
  constructor(props){
    super(props);

    var getSectionData = (dataBlob,sectionID)=>{
        return dataBlob[sectionID];
    };

    var getRowData = (dataBlob,sectionID,rowID)=>{
        return dataBlob[sectionID+':'+rowID];
    };

    this.state={
      dataSource:new ListView.DataSource({
        getSectionData:getSectionData,
        getRowData:getRowData,
        rowHasChanged:(r1,r2)=> r1 !== r2,
        sectionHeaderHasChanged:(s1,s2)=> s1 !== s2,
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navViewStyle}>
          <Text style={{color:'white',fontSize:25}}>汽车品牌展示</Text>
        </View>
        <ListView
          dataSource = {this.state.dataSource}
          renderRow = {this.renderRow}
          renderSectionHeader = {this.renderSectionHeader}
        />
      </View>
    );
  }

  // 返回每一个Header头部的内容
  renderSectionHeader(sectionData,sectionID) {
    return(
      <View style={styles.headerViewStyle}>
        <Text style={{marginLeft:5,color:'red',alignItems:'center',marginTop:5}}>{sectionData+sectionID}</Text>
      </View>
    )
  }

  // 返回每一行Cell
  renderRow(rowData) {
    return(
      <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.rowStyle}>
          <Image source={{uri:rowData.icon}} style={styles.rowImageStyle}></Image>
          <Text style={{marginLeft:20}}>{rowData.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  // 发送网络请求的生命周期的方法里
  componentDidMount(){
    // 数据需要先处理
    this.loadJson();
  }

  loadJson() {

    // 拿到整个数据
    var jsonData = Car.data;

    console.log(jsonData);

    // 定义数据源需要的变量
    var dataBlob = {},  // 每一行的数据 一个类字典形式的存储 key为SectionID 值为一个数组 
        sectionIDs = [],  // 所有section的ID int类型
        rowIDs = [],  // 所有row的ID 二维数组 一维装SectionID 二维装RowID
        cars = []; // 每一组Section下的Cars数组

    // 双层for循环解析数据
    for(var i = 0; i < jsonData.length; i++) {
      // 首先把每个Section的ID保存 push的时候是用() 这里被坑了好久 。。。~~~~(>_<)~~~~
      sectionIDs.push(i);
      // 然后保存每个Section的Title 也就是每个字典的Key
      dataBlob[i] = jsonData[i].title;
      // 取出每个Section下Cars数组
      cars = jsonData[i].cars;
      // 设置二维数组的一维值和key
      rowIDs[i] = [];
      // 遍历cars
      for(var j = 0; j < cars.length; j++) {
        // 把rowID写入 
        rowIDs[i].push(j);
        // 把单行Row的数据取出写入Data
        dataBlob[i+':'+j] = cars[j];
      }
    }

    console.log(sectionIDs.length);
    console.log(rowIDs.length);

    // 更新状态机
    this.setState({
        // 相当于TableView的ReloadData
        dataSource:this.state.dataSource.cloneWithRowsAndSections(dataBlob,sectionIDs,rowIDs)
    })
  }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    rowStyle:{
      padding:10,
      flexDirection:'row',
      alignItems:'center',
      borderBottomColor:'#e8e8e8',
      borderBottomWidth:0.5,
    },
    rowImageStyle:{
      width:70, 
      height:70,
    },
    headerViewStyle:{
      height:25,
      backgroundColor:'#e8e8e8',
      justifyContent:'center',
    },
    navViewStyle:{
      height:64,
      backgroundColor:'orange',
      justifyContent:'center',
      alignItems:'center',
    },
});
