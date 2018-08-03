import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
 /* 
 1,单标签
 2，属性
    autoCapitalize enum('none', 'sentences', 'words', 'characters') #
    maxLength number #限制文本框中最多的字符数。使用这个属性而不用JS逻辑去实现，可以避免闪烁的现象。
    multiline bool #如果为true，文本框中可以输入多行文字。默认值为false。
    maxLength number #限制文本框中最多的字符数。使用这个属性而不用JS逻辑去实现，可以避免闪烁的现象。
    multiline bool #如果为true，文本框中可以输入多行文字。默认值为false。

    onBlur function #当文本框失去焦点的时候调用此回调函数。
    onChange function #当文本框内容变化时调用此回调函数。
    onChangeText function #当文本框内容变化时调用此回调函数。改变后的文字内容会作为参数传递。
    onEndEditing function #当文本输入结束后调用此回调函数。
    onFocus function #当文本框获得焦点的时候调用此回调函数。
 */


export default class textInput extends Component {
  //构造函数
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
 
  //组件渲染
  render() {
    return (
      <View style={styles.flex}>
          <View style={[styles.flexDirection, styles.topStatus,styles.inputHeight]}>
            <View style={styles.flex}>
              <TextInput
                style={styles.input}
                returnKeyType="go"
                selectionColor = 'red'
                placeholder="请输入关键字"
                keyboardType='numeric'
                onChangeText={(text) => this.setState({text})}/>
            </View>
            <View style={styles.btn}>
              <Text style={styles.search} onPress={this.search.bind(this)}>搜索</Text>
            </View>
          </View>
          <Text style={styles.tip}>已输入{this.state.text.length}个文字</Text>
      </View>
    );
  }
 
  //搜索按钮点击
  search(){
    alert("您输入的内容为："+this.state.text);
  }
}

 
//样式定义
const styles = StyleSheet.create({
  flex:{
    flex: 1,
  },
  flexDirection:{
    flexDirection:'row'
  },
  topStatus:{
    marginTop:125,
  },
  inputHeight:{
    height:45,
  },
  input:{
    height:45,
    borderWidth:1,
    marginLeft: 5,
    paddingLeft:5,
    borderColor: '#ccc',
    borderRadius: 4
  },
  btn:{
    width:55,
    marginLeft:-5,
    marginRight:5,
    backgroundColor:'#23BEFF',
    height:45,
    justifyContent:'center',
    alignItems: 'center'
  },
  search:{
    color:'#fff',
    fontSize:15,
    fontWeight:'bold'
  },
  tip:{
    marginLeft: 5,
    marginTop: 5,
    color: '#C0C0C0',
  }
});