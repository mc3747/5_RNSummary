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
import { SafeAreaProvider } from 'react-native-safe-area-context';

// tab的4个主视图
import E_Basic from 'HelloProject/src/pages/1_basic_concept/basicConcept';
import E_Advance from 'HelloProject/src/pages/2_advance_concept/advanceConcept';
import E_UI from 'HelloProject/src/pages/3_UI_concept/UIConcept';
import E_example from 'HelloProject/src/pages/4_example_concept/exampleConcept';

import FilmList from 'HelloProject/src/pages/4_example_concept/examples/filmList';
// 图片
const Basic = 'HelloProject/src/images/tabBar_home.png';
const Basic_selected = 'HelloProject/src/images/tabBar_home_selected.png';
const Advance = 'HelloProject/src/images/tabBar_product.png';
const Advance_selected = 'HelloProject/src/images/tabBar_product_selected.png';
const UI = 'HelloProject/src/images/tabBar_asset.png';
const UI_selected = 'HelloProject/src/images/tabBar_asset_selected.png';
const Example = 'HelloProject/src/images/tabBar_more.png';
const Example_selected = 'HelloProject/src/images/tabBar_more_selected.png';

// require后边不能跟变量,只能一起和常量使用
const ImageConfig = {
    basic:require(Basic),
    basic_selected:require(Basic_selected),
    advance:require(Advance),
    advance_selected:require(Advance_selected),
    uI:require(UI),
    uI_selected:require(UI_selected),
    example:require(Example),
    example_selected:require(Example_selected)
}

// 底部tab的整体设置
const TabOptions = (tabBarTitle, normalImage, selectedImage, navTitle) => {
    
    console.log('daf');

    const tabBarLabel = tabBarTitle;
    const tabBarIcon = (({ tintColor, focused }) => {
        return (
            <Image resizeMode="stretch"
                // 可以用过判断focused来修改选中图片和默认图片
                   source={!focused ?  normalImage: selectedImage}

                    // 以下方法不可行
                // source={!focused ? require(Basic) : require(Basic_selected)}

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
        navigationOptions:()=>TabOptions('基础',ImageConfig.basic,ImageConfig.basic_selected, ''),
    },
    E_Advance: {
        screen: E_Advance,
        navigationOptions:()=>TabOptions('进阶',ImageConfig.advance,ImageConfig.advance_selected, ''),
    },
    E_UI: {
        screen: E_UI,
        navigationOptions:()=>TabOptions('UI',ImageConfig.uI,ImageConfig.uI_selected, ''),
    },
    E_example: {
        screen: E_example,
        navigationOptions:()=>TabOptions('示例',ImageConfig.example,ImageConfig.example_selected, ''),
    }
}, {
    tabBarOptions: {
        // 因为第二个tabbar是在页面中创建的，所以前景色的设置对其无效，当然也可以通过设置tintColor使其生效
        activeTintColor: 'red', // label和icon的前景色 活跃状态下（选中）。
        inactiveTintColor: 'gray', // label和icon的前景色 不活跃状态下(未选中)。
        showLabel: true, // 是否显示label，默认开启。
        style: {
            height: 49,
        }, // tabbar的样式。
        showIcon: true, // 是否显示图标，默认关闭。
        upperCaseLabel: false, // 是否使标签大写，默认为true。
    }
});


// 创建整个导航
const AppStackNavigator = createStackNavigator({
    BottomTabNavigator: {
        screen: AppBottomNavigator,
        navigationOptions: {
            headerShown: false,
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
            // const {navigation} = props;
            // const {state, setParams} = navigation;
            // const {params} = state;
            // return {
            //     title: params.title ? params.title : 'This is Page3',
            //     headerRight: (
            //         <Button
            //             title={params.mode === 'edit' ? '保存' : '编辑'}
            //             onPress={()=>{setParams({mode: params.mode === 'edit' ? '' : 'edit'})}
            //                 }
            //         />
            //     ),
            // }
        }
    },
    FilmList:{
        screen: FilmList,
    }
    
},
    {
        initialRouteName: "BottomTabNavigator",
        defaultNavigationOptions: ({ navigation, screenProps }) => {
            return {
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }
    }
  
}
);


 const AppDemo = createAppContainer(AppStackNavigator);
// 1_export常量
//  export default AppDemo

// 2_export函数
 export default function App() {
    return (
      <SafeAreaProvider>
        <AppDemo />
      </SafeAreaProvider>
    );
  }
  
// 3_export类
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