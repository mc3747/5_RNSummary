import React, { Component } from 'react';
import {View, ListView, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
import SimpleListScreen from "./SimpleListScreen";
import GridLayoutScreen from "./GridLayoutScreen";
import SectionListScreen from "./SectionListScreen";
import GroupListScreen from "./GroupListScreen";

const items = [
  {
    title:'Simple List',
    detail: '单行列表，无分组'
  },
  {
    title:'Grid Layout',
    detail: '网格列表'
  },
  {
    title:'Section List 1',
    detail: '分组列表，嵌套View实现网格'
  },
  {
    title:'Section List 2',
    detail: '分组列表，嵌套ListView实现网格'
  },
];

export default class RootScene extends Component {
  // 初始化数据源:构造函数
  constructor(props) {
    super(props);

    let ds = new ListView.DataSource({
      /* 初始化方法： 
      getRowData(dataBlob, sectionID, rowID); 怎么获取行数据
      getSectionHeaderData(dataBlob, sectionID); 怎么获取每一组头部数据
      rowHasChanged(prevRowData, nextRowData); 决定什么情况行数据才发生改变，当行数据发生改变，就会绘制下一行cell
      sectionHeaderHasChanged(prevSectionData, nextSectionData);决定什么情况头部数据才发生改变，当行数据发生改变，就会绘制下一行cell
      注意：初始化ListViewDataSource的时候，如果不需要修改提取数据的方式，只需要实现rowHasChanged，告诉什么时候刷新下一行数据.
      注意：默认ListViewDataSource有提取数据方式，可以使用默认的提取方式.
      */
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      /* 刷新数据:每次都会调用cloneWithRows方法
          分组使用：cloneWithRowsAndSections
      */
      dataSource: ds.cloneWithRows(items)
    }
  }

  // 主渲染函数
  render() {
    return (
      <View style={styles.container}>
        <ListView
        /* 数据源 */
          dataSource={this.state.dataSource}
        /* 自定义cel */
          renderRow={this._renderRow}
        /* 头部视图 */
          renderHeader = {this._renderHeader}
        /* 底部视图 */
          renderFooter = {this._renderFooter}
        /* 分割线 */
          renderSeparator = {this._renderSeparator}
        />
      </View>
    )
  }

  // 自定义cell
  /* 
  rowData:当前行数据
  sectionID:当前行所在组ID
  rowID：哪一行的角标
  highlightRow:高亮行数
  */
  _renderRow = (rowData, sectionId, rowId) => {
    let rowIndex = Number(rowId);
    return (
      <TouchableOpacity style={styles.cellContainer} onPress={() => {
        this.itemPressed(rowIndex);
      }}>
        <Text style={styles.titleLabel}>{rowData.title}</Text>
        <Text style={styles.detailLabel}>{rowData.detail}</Text>
      </TouchableOpacity>
    )
  };

// 分割线
  _renderSeparator(sectionID, rowID, adjacentRowHighlighted)  {
    console.log(sectionID,rowID,adjacentRowHighlighted);
    return (
        <View style={{height:1,backgroundColor:'red'}}></View>
    )
}
// 头部视图
 _renderHeader() {
        return (
            <View>
                <Text>头部视图</Text>
            </View>
        )
    }
  // 尾部视图
 _renderFooter() {
      return (
          <View>
              <Text>尾部视图</Text>
          </View>
      )
  }

  // 按下跳转
  itemPressed(index: Number) {
    switch (index) {
      case 0:
        this.props.navigator.push(
          {
            component: SimpleListScreen,
            title: 'Simple List',
            leftButtonTitle: 'Back',
            onLeftButtonPress: () => {
              this.props.navigator.pop();
            }
          }
        );
        break;
      case 1:
        this.props.navigator.push(
          {
            component: GridLayoutScreen,
            title: 'Grid Layout',
            leftButtonTitle: 'Back',
            onLeftButtonPress: () => {
              this.props.navigator.pop();
            }
          }
        );
        break;
      case 2:
        this.props.navigator.push(
          {
            component: SectionListScreen,
            title: 'Section List 1',
            leftButtonTitle: 'Back',
            onLeftButtonPress: () => {
              this.props.navigator.pop();
            }
          }
        );
        break;
      case 3:
        this.props.navigator.push(
          {
            component: GroupListScreen,
            title: 'Section List 2',
            leftButtonTitle: 'Back',
            onLeftButtonPress: () => {
              this.props.navigator.pop();
            }
          }
        );
        break;
    }
  }
}

// 样式
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cellContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#dcdcdc'
  },
  titleLabel: {
    fontSize: 18,
    fontWeight:'bold',
  },
  detailLabel: {
    fontSize: 13,
    color: '#999999',
    marginTop: 10,
  },
  
});