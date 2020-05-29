import React, {Component} from 'react';
import {
    View,Text,FlatList,StyleSheet,TouchableOpacity
} from 'react-native';
import BaseComponent from "AwesomeProject/src/custom/BaseComponent";


const TitleArray = [{title:'1_启动例子',id:'1'},{title:'2_电影列表',id:'2'}]

export default class ExampleConcept extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
          data: [
             
          ]
        };
    };

    //✅_1_标题
    static navigationOptions = {title:'Example'};

    //✅_2_状态栏配置。BaseComponent会读取,涉及到样式配置全都写在view.js里
    statusBarConfig = {
        contentType: "light-content",
        androidTranslucent: false,
        androidBarBackgroundColor: 'red', //状态栏背景颜色
        hidden: false, //是否隐藏状态栏
    };

    //✅_3_返回按钮监听
    _onBackButtonPressAndroid = () => {
        //当return true时，会阻止默认的返回事件,false时则会响应
        alert("Back On Press");
        return true;
    };

    //✅_4_新的生命周期写法
    BaseComponentDidMount = () => {
    };

    BaseComponentWillUnmount = () => {};

    //✅_5_新的渲染
    BaseRender = () => {
        const { navigation } = this.props;
        // ()=>{navigation.navigate('FilmList')}
        return (
            <View style={{ flex: 1 }}>
                <MultiSelectList onPress={()=>{navigation.navigate('FilmList')}}></MultiSelectList>
                        {/* <FlatList
                            data={[{key: 'a'}, {key: 'b'}]}
                            renderItem={({item}) => <Text>{item.key}</Text>}
                        /> */}
            </View>
        );
    };
}
// ✅_2_item

class MyListItem extends React.PureComponent {

    _onPress = () => {
      this.props.onPressItem(this.props.id);
        
    };
  
    render() {
      const textColor = this.props.selected ? "red" : "black";
      
      return (
        <TouchableOpacity onPress={this._onPress}>
          <View>
            <Text style={[Style.text, { color: textColor }]}>
              {this.props.title}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
  }

// ✅_3_list 
  class MultiSelectList extends React.PureComponent {
    
    state = {selected: (new Map(): Map<string, boolean>)};
    _keyExtractor = (item, index) => item.id;
    _onPressItem = (id: string) => {
        // console.warn(id);
      this.props.onPress(id);
      this.setState((state) => {
        const selected = new Map(state.selected);
        selected.set(id, !selected.get(id)); 
        return {selected};
      });
    };
    _renderItem = ({item}) => (
      <MyListItem
        id={item.id}
        onPressItem={this._onPressItem}
        selected={!!this.state.selected.get(item.id)}
        title={item.title}
      />
    );
    
    render() {
      return (
        <FlatList
          data={TitleArray}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      );
    }
  }

//   ✅_样式
const Style = StyleSheet.create({
    separator: {
        backgroundColor: 'red',
    },
    text:{
        backgroundColor:'gray',
        height:50,
        lineHeight:50,
        paddingLeft:20
    }
});