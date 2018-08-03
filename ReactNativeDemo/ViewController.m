//
//  ViewController.m
//  ReactNativeDemo
//
//  Created by gjfax on 2018/7/31.
//  Copyright © 2018年 macheng. All rights reserved.
//

#import "ViewController.h"
#import "Common_ViewController.h"

@interface ViewController ()<UITableViewDataSource, UITableViewDelegate>
@property (nonatomic, strong) NSArray *titleArray;
@property (nonatomic, strong) UITableView *tableView;
@end

@implementation ViewController

- (void)viewDidLoad {
    self.title = @"ReactNative学习摘要";
    self.titleArray = @[@"1_项目结构",@"2_Props,State,PropType关键字",@"3_传值",@"4_生命周期",@"5_基础组件",@"6_布局",@"7_高级组件",@"8_自定义组件",@"9_页面跳转",@"10_网络",@"11_数据存储",@"12_第三方组件"];
    [self.view addSubview:self.tableView];
    [super viewDidLoad];
}


#pragma mark -  tableView的数据源必须实现
- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {
    return 1;
}

// 每组有多少行
- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    return _titleArray.count;
}

// 返回显示的cell
- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath{
    if (indexPath.row % 2 == 0) {
        return [self cell:tableView indexPath:indexPath];
    } else {
        return [self cell2:tableView indexPath:indexPath];
    };
}
- (UITableViewCell *)cell:(UITableView *)tableView indexPath:(NSIndexPath *)indexPath
{
    // 0.重用标识
    // 被static修饰的局部变量：只会初始化一次，在整个程序运行过程中，只有一份内存
    static NSString *ID = @"cell1";
    
    // 1.先根据cell的标识去缓存池中查找可循环利用的cell
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:ID];
    
    if (!cell) {
        // 2.注册id的cell数据（一定不要忘记）
        cell = [[UITableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:ID];
        
        // 3.覆盖数据
        cell.textLabel.text = self.titleArray[indexPath.row];
        cell.backgroundColor = [UIColor colorWithRed:0.32 green:0.76 blue:0.36 alpha:1.f];
    }
    
    
    return cell;
}

- (UITableViewCell *)cell2:(UITableView *)tableView indexPath:(NSIndexPath *)indexPath
{
    // 0.重用标识
    // 被static修饰的局部变量：只会初始化一次，在整个程序运行过程中，只有一份内存
    static NSString *ID = @"cell2";
    
    // 1.先根据cell的标识去缓存池中查找可循环利用的cell
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:ID];
    
    if (!cell) {
        // 2.注册id的cell数据（一定不要忘记）
        cell = [[UITableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:ID];
        
        // 3.覆盖数据
        cell.textLabel.text = self.titleArray[indexPath.row];
        cell.backgroundColor = [UIColor colorWithRed:0.84 green:0.53 blue:0.35 alpha:1.f];
    }
    
    
    return cell;
}
#pragma mark -  点击
- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath {
    //选中阴影消失
    [tableView deselectRowAtIndexPath:indexPath animated:YES];
    Common_ViewController *vc = [[Common_ViewController alloc] init];
    vc.titleString = self.titleArray[indexPath.row];
    [self jumpToVc:vc indexPath:indexPath];
}

- (void)jumpToVc:(Common_ViewController *)vc indexPath:(NSIndexPath *)indexPath {
    
    if (indexPath.row == 0) {
        vc.subtitleArray = @[@"1_内联样式",@"2_对象样式",@"3_外部样式"];
        vc.jsNumberArray = @[@"1",@"2",@"3"];
        
    }else if (indexPath.row == 1) {
        vc.subtitleArray = @[@"导航测试",@"props",@"state"];
        vc.jsNumberArray = @[@"4",@"5",@"6"];
        
    }else if (indexPath.row == 2) {
        vc.subtitleArray = @[@"父传子1",@"父传子2",@"子传父",@"兄传弟"];
        vc.jsNumberArray = @[@"7",@"8",@"9",@"10"];
        
    }else if (indexPath.row == 3) {
        vc.subtitleArray = @[@"生命周期"];
        vc.jsNumberArray = @[@"11"];
        
    }else if (indexPath.row == 4) {
        vc.subtitleArray = @[@"view组件",@"text组件",@"button组件",@"image组件",@"textInput组件",@"touchableHighlight组件"];
        vc.jsNumberArray = @[@"12",@"13",@"14",@"15",@"16",@"17"];
        
        
    }else if (indexPath.row == 5) {
        
    }else if (indexPath.row == 6) {
        
    }else if (indexPath.row == 7) {
        
    }else if (indexPath.row == 8) {
        
    }else if (indexPath.row == 9) {
        
    }else if (indexPath.row == 10) {
        
    };
    [self.navigationController pushViewController:vc animated:YES];
    
}

#pragma mark -  tableView整体设置
- (UITableView *)tableView
{
    if (!_tableView) {
        _tableView = [[UITableView alloc] initWithFrame:CGRectMake(0, 64, [UIScreen mainScreen].bounds.size.width,  [UIScreen mainScreen].bounds.size.height - 64)];
        _tableView.dataSource = self;
        _tableView.delegate = self;
        _tableView.separatorStyle = UITableViewCellSelectionStyleGray;   // 灰色分割线
        _tableView.separatorColor = [UIColor lightGrayColor];             // 分割线的颜色
    }
    
    return _tableView;
}


@end
