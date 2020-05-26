//
//  Demo_ViewController.m
//  RNDemo
//
//  Created by gjfax on 2018/7/9.
//  Copyright © 2018年 macheng. All rights reserved.
//

#import "Demo_ViewController.h"
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@interface Demo_ViewController ()

@end    

@implementation Demo_ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
//        [[RCTBundleURLProvider sharedSettings] setDefaults];
//        NSURL *jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
    
/*注意点：
      1，项目运行要允许http请求：
      2，index.js入口要在package的允许根目录下
      3，js注册的名称，要与桥接的moudle的名称一致
      4,提示找不到入口文件：有可能网络切换有问题，可以用ip访问
*/
    
/*********************************/
    //寻找js入口方法1：
//        NSURL *jsCodeLocation = [NSURL URLWithString:[NSString stringWithFormat:@"http://%@:8081/index.bundle?platform=ios&dev=true", @"192.168.101.120"]];
    
    //寻找js入口方法2：
//    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios"];
    
    //寻找js入口方法3：
    NSURL *jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"5_ReactNativeDemos/src/index" fallbackResource:nil];
    
/*********************************/
//初始化RN的view的方法1：
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                        moduleName:_moduleName
                                                 initialProperties:nil
                                                     launchOptions:nil];
//初始化RN的view的方法2：
//    RCTBridge *bridge = [[RCTBridge alloc] initWithBundleURL:jsCodeLocation moduleProvider:nil launchOptions:nil];
//    RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge moduleName:_moduleName initialProperties:nil];
    rootView.backgroundColor = _backgroundColor;
    self.view = rootView;
}





@end
