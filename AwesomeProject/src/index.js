import React from 'react';
import {
    StatusBar,
    StyleSheet,
    Platform,
    Image,
    Dimensions,
    NavigatorIOS,
    Text
} from 'react-native';
import{createAppContainer}from 'react-navigation';
import {createBottomTabNavigator,createMaterialTopTabNavigator} from 'react-navigation-tabs';
import{createStackNavigator}from 'react-navigation-stack';

import E_Basic from 'AwesomeProject/src/pages/1_basic_concept/basicConcept';
import E_Advance from 'AwesomeProject/src/pages/2_advance_concept/advanceConcept';
import E_UI from 'AwesomeProject/src/pages/3_UI_concept/UIConcept';
import E_example from 'AwesomeProject/src/pages/4_example_concept/exampleConcept';

const Basic = 'tabBar_home.png';
const Basic_selected = 'tabBar_home_selected.png';
const Advance = 'tabBar_product.png';
const Advance_selected = 'tabBar_product_selected.png';
const UI = 'tabBar_asset.png';
const UI_selected = 'tabBar_asset_selected.png';
const Example = 'tabBar_more.png';
const Example_selected = 'tabBar_more_selected.png';

// 底部tab的整体设置
const TabOptions = (tabBarTitle, normalImage, selectedImage, navTitle) => {

    const tabBarLabel = tabBarTitle;
    const tabBarIcon = (({ tintColor, focused }) => {
        return (
            <Image resizeMode="stretch"
                // 可以用过判断focused来修改选中图片和默认图片
                   source={{uri:(!focused ? normalImage : selectedImage)}}
                // 如果想要图标原来的样子可以去掉tintColor
                   style={[(Platform.OS === 'ios') ? { height: 22, width: 22 } : { height: 24, width: 24 }, { tintColor: tintColor }]}
            />
        )
    });
    const title = navTitle;
    const headerTitleStyle = { fontSize: 18, width:100,color: 'blue', alignSelf: 'center' };
    // header的style
    const headerStyle = { backgroundColor: '#fc7c3f', marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight };
    const tabBarVisible = true;
    const header = null;

    return { tabBarLabel, tabBarIcon, title, headerTitleStyle,header, headerStyle, tabBarVisible };
};

//创建底部tabbar
const AppBottomNavigator = createBottomTabNavigator({
    E_Basic: {
        screen: E_Basic,
        navigationOptions: () => TabOptions('基础',Basic, Basic_selected, ''),
    },
    E_Advance: {
        screen: E_Advance,
        navigationOptions: () => TabOptions('进阶', Advance, Advance_selected, ''),
    },
    E_UI: {
        screen: E_UI,
        navigationOptions: () => TabOptions('UI', UI, UI_selected, ''),
    },
    E_example: {
        screen: E_example,
        navigationOptions: () => TabOptions('案例', Example, Example_selected, ''),
    }
}, {
    tabBarPosition: 'bottom', // 设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom')
    swipeEnabled: true, // 是否允许在标签之间进行滑动。
    animationEnabled: false, // 是否在更改标签时显示动画。
    lazy: true, // 是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦。
    initialRouteName: 'E_Basic', // 设置默认的页面组件
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    backgroundColor:'#abcdef',
    // navigationBarHidden:true,
    // navigationBarColor:color.baseColor,
    tabBarOptions: {
        // iOS属性
        // 因为第二个tabbar是在页面中创建的，所以前景色的设置对其无效，当然也可以通过设置tintColor使其生效
        activeTintColor: 'red', // label和icon的前景色 活跃状态下（选中）。
        inactiveTintColor: 'gray', // label和icon的前景色 不活跃状态下(未选中)。
        // activeBackgroundColor: '#33a7c4', //label和icon的背景色 活跃状态下（选中） 。
        // inactiveBackgroundColor: '#a3a3a3', // label和icon的背景色 不活跃状态下（未选中）。

        showLabel: true, // 是否显示label，默认开启。
        style: {
            height: 49,
        }, // tabbar的样式。
        // labelStyle:{}, //label的样式。

        // 安卓属性

        // activeTintColor:'', // label和icon的前景色 活跃状态下（选中） 。
        // inactiveTintColor:'', // label和icon的前景色 不活跃状态下(未选中)。
        showIcon: true, // 是否显示图标，默认关闭。
        // showLabel:true, //是否显示label，默认开启。
        // style:{}, // tabbar的样式。
        // labelStyle:{}, // label的样式。
        upperCaseLabel: false, // 是否使标签大写，默认为true。
        // pressColor:'', // material涟漪效果的颜色（安卓版本需要大于5.0）。
        // pressOpacity:'', // 按压标签的透明度变化（安卓版本需要小于5.0）。
        // scrollEnabled:false, // 是否启用可滚动选项卡。
        // tabStyle:{}, // tab的样式。
        // indicatorStyle:{}, // 标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题。
        // labelStyle:{}, // label的样式。
        // iconStyle:{}, // 图标的样式。
    }

});


// 创建整个导航
const AppStackNavigator = createStackNavigator({
    bottomTabNavigator: {
        screen: AppBottomNavigator,
        navigationOptions: {
            header: null,
        }
    },
    E_Basic: {
        screen: E_Basic
    },
    E_Advance: {
        screen: E_Advance,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.name}页面名`//动态设置navigationOptions
        })
    },
    E_UI: {
        screen: E_UI,
        navigationOptions: {//在这里定义每个页面的导航属性，静态配置
            title: "This is Page2.",
        }
    },
    E_example: {
        screen: E_example,
        navigationOptions: (props) => {//在这里定义每个页面的导航属性，动态配置
            const {navigation} = props;
            const {state, setParams} = navigation;
            const {params} = state;
            return {
                title: params.title ? params.title : 'This is Page3',
                headerRight: (
                    <Button
                        title={params.mode === 'edit' ? '保存' : '编辑'}
                        onPress={()=>{setParams({mode: params.mode === 'edit' ? '' : 'edit'})}
                            }
                    />
                ),
            }
        }
    }
},
    {
        initialRouteName: "bottomTabNavigator",
        defaultNavigationOptions: ({ navigation, screenProps }) => {
            return {
                // headerStyle: headerStyle,
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }
    }
  
},
 {
    defaultNavigationOptions: {
        // header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    }
  }
);


 const AppDemo = createAppContainer(AppStackNavigator);
 export default AppDemo

// export default class MainNav extends React.Component {
//     constructor(props) {
//         super(props);
//     };
//     render() {
//         return(AppDemo)
//         // return(AppBottomNavigator)
//         // return (<Text>324131324</Text>)
//     }
// }