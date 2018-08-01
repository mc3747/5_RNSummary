

import{AppRegistry} from "react-native";

// js输出的名称 + 导入文件路径
import inlineStyle from "./1_ProjectStructure/inlineStyle";
import targetStyle from "./1_ProjectStructure/targetStyle";
import outsideStyle from "./1_ProjectStructure/outsideStyle";
import view from "./Tab/view";
import props from "./2_KeyWords/props";
import state from "./2_KeyWords/state";

// 注册整体js模块的名称 + js输出的名称
AppRegistry.registerComponent("RNDemo1", () => inlineStyle);
AppRegistry.registerComponent("RNDemo2", () => targetStyle);
AppRegistry.registerComponent("RNDemo3", () => outsideStyle);
AppRegistry.registerComponent("RNDemo4", () => view);
AppRegistry.registerComponent("RNDemo5", () => props);
AppRegistry.registerComponent("RNDemo6", () => state);
