## react-native-redux-marry
####运行效果
![(marry.gif)](https://github.com/zqmReactNative/react-native-redux-marry/blob/master/screenshot/marry_0614.gif)

<img src="https://github.com/zqmReactNative/react-native-redux-marry/blob/master/screenshot/home.png" width="375" height="647"/>

<img src="https://github.com/zqmReactNative/react-native-redux-marry/blob/master/screenshot/album.png" width="375" height="647"/>

<img src="https://github.com/zqmReactNative/react-native-redux-marry/blob/master/screenshot/merchant.png" width="375" height="647"/>


####运行iOS
* 打开终端,切换到将用来保存项目的目录
* checkout
```ruby
git clone https://github.com/zqmReactNative/react-native-redux-marry.git
```
* 切换到项目根目录
```ruby
cd react-native-redux-marry
```
* 加载依赖包(Node建议v6.0.0+)
```ruby
npm install
```
* 找到`ios`目录，打开`Marry.xcodeproj`
* 修改`AppDelegate.m`文件34行的IP地址(如果是真机调试,把localhost换成开启Node服务的设备IP,如果没有指定端口号,默认使用8081)
```ObjectiveC
jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];
```
* 运行项目`command`+`R`或者Xcode左上角的运行按钮
