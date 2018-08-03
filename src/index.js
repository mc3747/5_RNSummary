

import{AppRegistry} from "react-native";

// js输出的名称（要和组件return返回的一致） + 导入文件路径
import inlineStyle from "./1_ProjectStructure/inlineStyle";
import targetStyle from "./1_ProjectStructure/targetStyle";
import outsideStyle from "./1_ProjectStructure/outsideStyle";
import tabBarView from "./Tab/tabBarView";
import props from "./2_KeyWords/props";
import state from "./2_KeyWords/state";
import fatherToSon1 from "./3_DelieveValue/fatherToSon1";
import fatherToSon2 from "./3_DelieveValue/fatherToSon2";
import sonToFather from "./3_DelieveValue/sonToFather";
import brotherToBrother from "./3_DelieveValue/brotherToBrother";
import lifeCycle from "./4_LifeCycle/lifeCycle";
import view from "./5_BaseModule/view";
import text from "./5_BaseModule/text";
import button from "./5_BaseModule/button";
import image from "./5_BaseModule/image";
import textInput from "./5_BaseModule/textInput";
import touchableHighlight from "./5_BaseModule/touchableHighlight";
import css from "./6_Layout/css";
import flex from "./6_Layout/flex";

// 注册整体js模块的名称 + js输出的名称
AppRegistry.registerComponent("RNDemo1", () => inlineStyle);
AppRegistry.registerComponent("RNDemo2", () => targetStyle);
AppRegistry.registerComponent("RNDemo3", () => outsideStyle);
AppRegistry.registerComponent("RNDemo4", () => tabBarView);
AppRegistry.registerComponent("RNDemo5", () => props);
AppRegistry.registerComponent("RNDemo6", () => state);
AppRegistry.registerComponent("RNDemo7", () => fatherToSon1);
AppRegistry.registerComponent("RNDemo8", () => fatherToSon2);
AppRegistry.registerComponent("RNDemo9", () => sonToFather);
AppRegistry.registerComponent("RNDemo10", () => brotherToBrother);
AppRegistry.registerComponent("RNDemo11", () => lifeCycle);
AppRegistry.registerComponent("RNDemo12", () => view);
AppRegistry.registerComponent("RNDemo13", () => text);
AppRegistry.registerComponent("RNDemo14", () => button);
AppRegistry.registerComponent("RNDemo15", () => image);
AppRegistry.registerComponent("RNDemo16", () => textInput);
AppRegistry.registerComponent("RNDemo17", () => touchableHighlight);
AppRegistry.registerComponent("RNDemo18", () => css);
AppRegistry.registerComponent("RNDemo19", () => flex);