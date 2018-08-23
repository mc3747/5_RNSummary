import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ListView

} from 'react-native';
import developer, {firstname, lastname } from './Jsx1.js';
import person from './Jsx1.js';

/*1,组件的定义方法（组件方法和函数长得很像）**********/
// js组件的定义方法
class Developer {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
  
    getName() {
      return this.firstname + ' ' + this.lastname;
    }
}

// js组件继承的方法
class ReactDeveloper extends Developer {
    getJob() {
      return 'React Developer';
    }
}

// react组件的定义写法
class H1Module extends Component {
    render() {
      return (
          <Text>Welcome to React</Text>
      );
    }
  }


/*2,函数和箭头函数**********/
function getGreeting1() {
    return 'Welcome to JavaScript1';
  }
const getGreeting2 = () => {
    return 'Welcome to JavaScript2';
  }
const getGreeting3 = () =>
  'Welcome to JavaScript3';


 /*3,函数带参数来传递**********/ 
  // JavaScript ES5 函数
function Greeting4(a) {
    return <Text>{a.greeting}</Text>;
  }
  
  // JavaScript ES6 arrow 函数
  const Greeting5 = (b) => {
    return <Text>{b.greeting}</Text>;
  }
  
  // JavaScript ES6 arrow function without body and implicit 函数
//   可以通过.或者[]来进行设置参数，调用处用字典形式访问
  const Greeting6 = (c) =>
    <Text>{c['greeting']+c.bbb}</Text>


 /*4,自定义组件方法的改进**********/ 
//  老的书写方法
 class Counter1 extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        counter: 0,
      };
  
      this.onIncrement = this.onIncrement.bind(this);
      this.onDecrement = this.onDecrement.bind(this);
    }
  
    onIncrement() {
      this.setState(state => ({ counter: state.counter + 1 }));
    }
  
    onDecrement() {
      this.setState(state => ({ counter: state.counter - 1 }));
    }
  
    render() {
      return (
        <View style={{height:100,backgroundColor: '#deffee'}}>
        <Text >{this.state.counter}</Text>
        <Button onPress={this.onIncrement} title="Increment"  />
        <Button onPress={this.onDecrement} title="Decrement"  />
      </View>
      );
    }
  }

//   新的书写方法
/**
 * 通过使用 JavaScript 箭头函数，可以自动绑定类方法，不需要在构造函数中绑定它们。
 *  通过将状态直接定义为类属性，在不使用 props 时就可以省略构造函数。
 * （注意：请注意，JavaScript 还不支持类属性。）因此，你可以说这种定义 React 类组件的方式比其他版本更简洁。
 */
  class Counter2 extends Component {
    state = {
      counter: 0,
    };
  
    onIncrement = () => {
      this.setState(state => ({ counter: state.counter + 1 }));
    }
  
    onDecrement = () => {
      this.setState(state => ({ counter: state.counter - 1 }));
    }
  
    render() {
      return (
        <View style={{height:100,backgroundColor: '#deffee'}}>
          <Text >{this.state.counter}</Text>
          <Button onPress={this.onIncrement} title="Increment"  />
          <Button onPress={this.onDecrement} title="Decrement"  />
        </View>
      );
    }
  }


/*5,React中的模板字面量**********/ 
// 使用+形参
function getGreeting5(what) {
  return 'Welcome to ' + what;
}
// 反引号和 ${}来插入 JavaScript 原语
function getGreeting6(what) {
  return `Welcome to ${what}`;
}


/*6,从其他文件导入：常用作工具类的引用**********/ 
/**
 * 导入步骤：
 * 1，导入头文件
 * 2，引用变量
 */

//   主调函数
export default class Jsx extends Component {
  constructor(props) {
    // 初始化模拟数据
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'Kobe', 'Jordan', 'Durant', 'James'
      ])
    };
  }

    // 定义属性
    static propTypes = {
        name:PropTypes.string,
        age:PropTypes.number
    }

    // 初始值
    static defaultProps = {
        name:'xmg',
        age:2
    }

    render() {
        // 组件方法调用
        var me = new ReactDeveloper('Robin', 'Wieruch');
        var name = me.getName();
        var job = me.getJob();
        var user = { name: 'Robin' };

        return (
            <View style={styles.viewStyle}>
                    <Text style={styles.labelStyle}>显示</Text>
                    <Text style={styles.labelStyle}>{name}</Text>
                    <Text style={styles.labelStyle}>{job}</Text>
                    <Text style={styles.labelStyle}>{getGreeting1()}</Text>
                    <Text style={styles.labelStyle}>{getGreeting2()}</Text>
                    <Text style={styles.labelStyle}>{Greeting6({'greeting':"99999","bbb":"aaaa"})}</Text>
                    <Counter2 />
                    <H1Module  />
                    <Text style={styles.labelStyle}>{getGreeting5('字面量1')}</Text>
                    <Text style={styles.labelStyle}>{getGreeting5('字面量2')}</Text>
                    <Text style={styles.labelStyle}>{user.name}</Text>
                    <Text style={styles.labelStyle}>{firstname}</Text>
                    <Text style={styles.labelStyle}>{person.lastname}</Text>
                    <ListView 

                      dataSource={this.state.dataSource}
                      renderRow={(rowData) => <Text>{rowData}</Text>}
                    />
            </View>
        )
    }
    
}

// 样式
const styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: "#FFee9e"
    },
    labelStyle:{
        backgroundColor:'deepskyblue',
        // width:150,
        // height:150,
        fontSize:15,
        textAlign:'center',
        marginTop:0,
        marginLeft:20,
    }


});