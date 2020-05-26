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
  TabBarIOS,
} from 'react-native';

var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

export default class JYFTabBar extends Component<Props> {

  constructor(pros){
    super(pros);
    this.state={
      // 默认被选中的Item
      selectedTabBarItem:'home'
    }
  }

  render() {

// 顶部 + Tabbar
    return (
        <View style={styles.container}>

          <View style={{marginTop:20}}>
            <Text>TabBat练习</Text>
          </View>
          
{/* // tabBar样式 */}
          <TabBarIOS
          /* 
          barTintColor string：标签栏的背景颜色。
          style：样式
          tintColor string：  当前被选中的标签图标的颜色。
          unselectedItemTintColor string：  当前没有被选中的标签图标的颜色。仅在iOS 10及以上版本有效
          translucent bool： 一个布尔值，决定标签栏是否需要半透明化。
          */
            barTintColor='black'
            style={{width:width}}
            tintColor='purple'
          >
                    
{/* // tabBarItem样式 */}
            <TabBarIOS.Item
            /* 
            badge string, number :在图标右上角显示一个红色的气泡。
            icon Image.propTypes.source  :给当前标签指定一个自定义的图标。如果定义了systemIcon属性， 这个属性会被忽略。
            onPress function :当此标签被选中时调用。你应该修改组件的状态来使得selected={true}。
            selected bool :这个属性决定了子视图是否可见。如果你看到一个空白的页面，很可能是没有选中任何一个标签。
            selectedIcon Image.propTypes.source :当标签被选中的时候显示的自定义图标。如果定义了systemIcon属性，这个属性会被忽略。如果定义了icon而没定义这个属性，在选中的时候图标会染上蓝色。
            systemIcon enum('bookmarks', 'contacts', 'downloads', 'favorites', 'featured', 'history', 'more', 'most-recent', 'most-viewed', 'recents', 'search', 'top-rated') :
              一些预定义的系统图标。注意如果你使用了此属性，标题和自定义图标都会被覆盖为系统定义的值。
            title string :在图标下面显示的标题文字。如果定义了systemIcon属性，这个属性会被忽略
            */
                systemIcon="contacts"
                badge="3"
                selected={this.state.selectedTabBarItem == 'home'}
                // 选中方法修改状态机 状态机修改之后自动刷新UI
                onPress = {()=>{this.setState({selectedTabBarItem:'home'})}}
            >
              <View style={[styles.commonViewStyle,{backgroundColor:'red'}]}>
                  <Text>首页</Text>
              </View>
            </TabBarIOS.Item>

            <TabBarIOS.Item
                systemIcon="bookmarks"
                selected={this.state.selectedTabBarItem == 'second'}
                onPress = {()=>{this.setState({selectedTabBarItem:'second'})}}
            >
              <View style={[styles.commonViewStyle,{backgroundColor:'blue'}]}>
                  <Text>书签</Text>
              </View>
            </TabBarIOS.Item>

            <TabBarIOS.Item
                systemIcon="downloads"
                selected={this.state.selectedTabBarItem == 'third'}
                onPress = {()=>{this.setState({selectedTabBarItem:'third'})}}
            >
              <View style={[styles.commonViewStyle,{backgroundColor:'green'}]}>
                  <Text>下载</Text>
              </View>
            </TabBarIOS.Item>

            <TabBarIOS.Item
                systemIcon="search"
                selected={this.state.selectedTabBarItem == 'four'}
                onPress = {()=>{this.setState({selectedTabBarItem:'four'})}}
            >  
              <View style={[styles.commonViewStyle,{backgroundColor:'yellow'}]}>
                  <Text>搜索</Text>
              </View>
            </TabBarIOS.Item>
          </TabBarIOS>

        </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  commonViewStyle:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },

});
