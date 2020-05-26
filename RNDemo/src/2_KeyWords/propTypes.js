import React, {Component} from 'react';
// PropTypes文件的引入方式与以前不同
import PropTypes from 'prop-types';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,

} from 'react-native';
/**
 * 
 * # 数组类型
PropTypes.array

# 布尔类型
PropTypes.bool

# 函数类型
PropTypes.func

# 数值类型
PropTypes.number

# 对象类型
PropTypes.object

# 字符串类型
PropTypes.string

# 规定prop为必传字段
PropTypes.func.isRequired

# prop可为任意类型
PropTypes.any.isRequired

 */
export default class propTypes extends Component {

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
        // 打印出来, xmg
        console.log(this.props.string)
        return (
            <View style={{ flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFFFFF"}}>
                    <Text style={{textAlign: "center",
                    color: "#333333",
                    marginBottom: 5
                    }}>{this.props.name}</Text>
            </View>
        )
    }
    

}

