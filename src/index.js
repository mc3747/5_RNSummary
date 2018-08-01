

import{AppRegistry} from "react-native";

// js输出的名称 + 导入文件路径
import inlineStyle from "./1_ProjectStructure/inlineStyle";
import targetStyle from "./1_ProjectStructure/targetStyle";
import outsideStyle from "./1_ProjectStructure/outsideStyle";
import view from "./Tab/view";
import props from "./2_KeyWords/props";
import state from "./2_KeyWords/state";
import fatherToSon1 from "./3_DelieveValue/fatherToSon1";
import fatherToSon2 from "./3_DelieveValue/fatherToSon2";
import sonToFather from "./3_DelieveValue/sonToFather";
import brotherToBrother from "./3_DelieveValue/brotherToBrother";
import lifeCycle from "./4_LifeCycle/lifeCycle";

// 注册整体js模块的名称 + js输出的名称
AppRegistry.registerComponent("RNDemo1", () => inlineStyle);
AppRegistry.registerComponent("RNDemo2", () => targetStyle);
AppRegistry.registerComponent("RNDemo3", () => outsideStyle);
AppRegistry.registerComponent("RNDemo4", () => view);
AppRegistry.registerComponent("RNDemo5", () => props);
AppRegistry.registerComponent("RNDemo6", () => state);
AppRegistry.registerComponent("RNDemo7", () => fatherToSon1);
AppRegistry.registerComponent("RNDemo8", () => fatherToSon2);
AppRegistry.registerComponent("RNDemo9", () => sonToFather);
AppRegistry.registerComponent("RNDemo10", () => brotherToBrother);
AppRegistry.registerComponent("RNDemo11", () => lifeCycle);