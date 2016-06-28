import React, { Component } from 'react';
import ReactNative, {
  Navigator,
  View,
  StyleSheet,
  ListView,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import WebCell from './webcell';
import WebDetail from './webdetail';

const kScreenWidth  = Dimensions.get('window').width;
const kScreenHeight = Dimensions.get('window').height;


const CellType = {
  Img_Text_4 : "Img_Text_4",
  Text_5 : "Text_5",
  Text_Blue_5 : "Text_Blue_5",
  Text_GrayBg_4 : "Text_GrayBg_4",
  Text_Blue_4 : "Text_Blue_4",
  Img_Text_5 : "Img_Text_5"
}

const SectionHeaderType = {
  Search : "Search",
  Normal : "Normal",
}

const webs = [
  {
		title : "",
    type: SectionHeaderType.Search,
		list:[
			{img:"./Img/baidu", title: "百度", url: "https://m.baidu.com/?from=1014413j", cellType: CellType.Img_Text_4},
			{img:"./Img/baidu", title: "新浪", url: "http://sina.cn", cellType: CellType.Img_Text_4},
      {img:"./Img/baidu", title: "淘宝", url: "https://m.taobao.com/#index", cellType: CellType.Img_Text_4},
			{img:"./Img/baidu", title: "8590", url: "http://shop.w4000148590.com", cellType: CellType.Img_Text_4},
      {img:"./Img/baidu", title: "搜狐", url: "http://m.sohu.com", cellType: CellType.Img_Text_4},
			{img:"./Img/baidu", title: "微博", url: "https://passport.weibo.cn/signin/welcome?entry=mweibo&r=http%3A%2F%2Fm.weibo.cn%2F&", cellType: CellType.Img_Text_4},
      {img:"./Img/baidu", title: "天猫", url: "https://www.tmall.com", cellType: CellType.Img_Text_4},
			{img:"./images/404", title: "腾讯", url: "http://www.qq.com", cellType: CellType.Img_Text_4},
      {img:"", title: "凤凰", url: "http://i.ifeng.com", cellType: CellType.Text_5},
      {img:"", title: "起点", url: "http://m.qidian.com", cellType: CellType.Text_5},
      {img:"", title: "QQ空间", url: "http://qzone.qq.com", cellType: CellType.Text_5},
      {img:"", title: "网易", url: "http://www.163.com", cellType: CellType.Text_5},
      {img:"", title: "搜房网", url: "http://m.fang.com/nb.html", cellType: CellType.Text_5},
      {img:"", title: "携程", url: "http://www.ctrip.com", cellType: CellType.Text_5},
      {img:"", title: "赶集", url: "http://nb.ganji.com", cellType: CellType.Text_5},
      {img:"", title: "百姓网", url: "http://ningbo.baixing.com", cellType: CellType.Text_5},
      {img:"", title: "京东", url: "http://www.jd.com", cellType: CellType.Text_5},
      {img:"", title: "1号店", url: "http://m.yhd.com/1", cellType: CellType.Text_5},
      {img:"", title: "苏宁", url: "http://www.suning.com", cellType: CellType.Text_5},
      {img:"", title: "国美", url: "http://www.gome.com.cn", cellType: CellType.Text_5},
      {img:"", title: "去哪儿", url: "http://www.qunar.com", cellType: CellType.Text_5},
      {img:"", title: "糯米", url: "https://m.nuomi.com", cellType: CellType.Text_5},
      {img:"", title: "车之家", url: "http://m.autohome.com.cn", cellType: CellType.Text_5},
      {img:"", title: "唯品", url: "http://www.vip.com", cellType: CellType.Text_5},
		],
	},

  {
    title : "新闻资讯",
    moreUrl: "http://www.w4000148590.com/htmls/mlist_63.html",
    type: SectionHeaderType.Normal,
    list:[
      {img:"", title: "网易", url: "http://www.163.com", cellType: CellType.Text_GrayBg_4},
      {img:"", title: "凤凰军事", url: "http://imil.ifeng.com/index.shtml", cellType: CellType.Text_GrayBg_4},
      {img:"", title: "今日头条", url: "http://m.toutiao.com", cellType: CellType.Text_GrayBg_4},
      {img:"", title: "东方财富", url: "http://wap.eastmoney.com", cellType: CellType.Text_GrayBg_4},
      {img:"", title: "中关村", url: "http://m.zol.com.cn", cellType: CellType.Text_GrayBg_4},
      {img:"", title: "新浪NBA", url: "http://nba.sina.cn", cellType: CellType.Text_GrayBg_4},
      {img:"", title: "环球时报", url: "http://www.huanqiu.com", cellType: CellType.Text_GrayBg_4},
      {img:"", title: "新华网", url: "http://www.xinhuanet.com", cellType: CellType.Text_GrayBg_4},


      {img:"", title: "新闻", url: "http://www.w4000148590.com/htmls/mlist_63.html#qt3", cellType: CellType.Text_Blue_5},
      {img:"", title: "凤凰", url: "http://inews.ifeng.com/index.shtml", cellType: CellType.Text_5},
      {img:"", title: "新浪", url: "http://news.sina.cn/?r=nc&vt=4", cellType: CellType.Text_5},
      {img:"", title: "环球", url: "http://wap.huanqiu.com", cellType: CellType.Text_5},
      {img:"", title: "网易", url: "http://3g.163.com/touch/news/subchannel/all?version=v_standard", cellType: CellType.Text_5},
      {img:"", title: "体育", url: "http://www.w4000148590.com/htmls/mlist_63.html#qt4", cellType: CellType.Text_Blue_5},
      {img:"", title: "新浪", url: "http://sports.sina.cn", cellType: CellType.Text_5},
      {img:"", title: "搜狐", url: "http://m.sohu.com/c/3/", cellType: CellType.Text_5},
      {img:"", title: "NBA", url: "http://nba.sina.cn/", cellType: CellType.Text_5},
      {img:"", title: "虎扑", url: "http://m.hupu.com/nba/", cellType: CellType.Text_5},
      {img:"", title: "财经", url: "http://www.w4000148590.com/htmls/mlist_63.html#qt5", cellType: CellType.Text_Blue_5},
      {img:"", title: "东财", url: "http://wap.eastmoney.com/default.aspx", cellType: CellType.Text_5},
      {img:"", title: "新浪", url: "http://finance.sina.cn", cellType: CellType.Text_5},
      {img:"", title: "和讯", url: "http://m.hexun.com", cellType: CellType.Text_5},
      {img:"", title: "金融界", url: "http://m.jrj.com.cn", cellType: CellType.Text_5},
      {img:"", title: "军事", url: "http://www.w4000148590.com/htmls/mlist_63.html#qt6", cellType: CellType.Text_Blue_5},
      {img:"", title: "新浪", url: "http://mil.sina.cn", cellType: CellType.Text_5},
      {img:"", title: "凤凰", url: "http://imil.ifeng.com/index.shtml", cellType: CellType.Text_5},
      {img:"", title: "铁血", url: "http://m.tiexue.net", cellType: CellType.Text_5},
      {img:"", title: "环球", url: "http://wap.huanqiu.com/pd.html?id=23", cellType: CellType.Text_5},
    ],
  },
  {
    title : "生活助手",
    moreUrl: "http://www.w4000148590.com/htmls/mlist_64.html",
    type: SectionHeaderType.Normal,
    list:[
      {img:"./Img/baidu", title: "移动", url: "http://wap.10086.cn/index.html", cellType: CellType.Img_Text_5},
      {img:"./Img/baidu", title: "天气", url: "http://uc.weathercn.com", cellType: CellType.Img_Text_5},
      {img:"./Img/baidu", title: "火车票", url: "https://qpb.uc.cn/?uc_param_str=dnfrvecpntsspimieijbnwni#!/home", cellType: CellType.Img_Text_5},
      {img:"./Img/baidu", title: "订机票", url: "http://touch.qunar.com/h5/flight/", cellType: CellType.Img_Text_5},
      {img:"./Img/baidu", title: "公交", url: "http://gj.aibang.com", cellType: CellType.Img_Text_5},
      {img:"./Img/baidu", title: "开奖", url: "http://touch.lecai.com/?agentId=5615#path=page/award-result/index", cellType: CellType.Img_Text_5},
      {img:"./Img/baidu", title: "充话费", url: "http://h5.m.taobao.com/app/cz/cost.html", cellType: CellType.Img_Text_5},
      {img:"./images/404", title: "查快递", url: "http://m.kuaidi100.com", cellType: CellType.Img_Text_5},
      {img:"./Img/baidu", title: "地图", url: "http://map.baidu.com/mobile/webapp/index/index/", cellType: CellType.Img_Text_5},
      {img:"./images/404", title: "查违章", url: "http://cha.wcar.net.cn", cellType: CellType.Img_Text_5},

      {img:"", title: "大众点评", url: "http://m.dianping.com/tuan", cellType: CellType.Text_GrayBg_4},
      {img:"", title: "美团", url: "http://www.meituan.com", cellType: CellType.Text_GrayBg_4},
      {img:"", title: "赶集", url: "http://nb.ganji.com", cellType: CellType.Text_GrayBg_4},
      {img:"", title: "58同城", url: "http://nb.58.com", cellType: CellType.Text_GrayBg_4},
      {img:"", title: "安乐居", url: "http://nb.anjuke.com", cellType: CellType.Text_GrayBg_4},
      {img:"", title: "搜房网", url: "http://m.fang.com/nb.html", cellType: CellType.Text_GrayBg_4},
      {img:"", title: "住哪", url: "http://www.zhuna.cn", cellType: CellType.Text_GrayBg_4},
      {img:"", title: "名医在线", url: "http://m.haodf.com/touch", cellType: CellType.Text_GrayBg_4},

      {img:"", title: "旅游", url: "http://www.w4000148590.com/htmls/mlist_64.html#qt3", cellType: CellType.Text_Blue_5},
      {img:"", title: "同程", url: "http://m.ly.com", cellType: CellType.Text_5},
      {img:"", title: "携程", url: "http://m.ctrip.com/html5/index.html", cellType: CellType.Text_5},
      {img:"", title: "艺龙", url: "http://m.elong.com", cellType: CellType.Text_5},
      {img:"", title: "去哪儿", url: "http://touch.qunar.com", cellType: CellType.Text_5},
      {img:"", title: "生活", url: "http://www.w4000148590.com/htmls/mlist_64.html#qt6", cellType: CellType.Text_Blue_5},
      {img:"", title: "58同城", url: "http://m.58.com", cellType: CellType.Text_5},
      {img:"", title: "安居客", url: "http://m.anjuke.com/nb/", cellType: CellType.Text_5},
      {img:"", title: "赶集", url: "http://wap.ganji.com/?wapadprurl=adurl", cellType: CellType.Text_5},
      {img:"", title: "百姓网", url: "http://ningbo.baixing.com", cellType: CellType.Text_5},
    ],
  },

  {
    title : "网购商城",
    moreUrl: "http://www.w4000148590.com/htmls/mlist_65.html",
    type: SectionHeaderType.Normal,
    list:[
      {img:"", title: "淘宝", url: "https://m.taobao.com/#index", cellType: CellType.Text_GrayBg_4},
      {img:"", title: "天猫", url: "https://www.tmall.com", cellType: CellType.Text_GrayBg_4},
      {img:"", title: "京东", url: "http://www.jd.com", cellType: CellType.Text_GrayBg_4},
      {img:"", title: "8590商城", url: "http://shop.w4000148590.com", cellType: CellType.Text_GrayBg_4},
      {img:"", title: "唯品会", url: "http://www.vip.com", cellType: CellType.Text_GrayBg_4},
      {img:"", title: "苏宁易购", url: "http://www.suning.com", cellType: CellType.Text_GrayBg_4},
      {img:"", title: "当当网", url: "http://www.dangdang.com", cellType: CellType.Text_GrayBg_4},
      {img:"", title: "亚马逊", url: "https://www.amazon.cn", cellType: CellType.Text_GrayBg_4},

      {img:"", title: "国美在线", url: "http://www.gome.com.cn", cellType: CellType.Text_5},
      {img:"", title: "值得买", url: "http://m.smzdm.com", cellType: CellType.Text_5},
      {img:"", title: "乐蜂王", url: "http://w.lefeng.com/index.php/home/", cellType: CellType.Text_5},
      {img:"", title: "1号店", url: "http://m.yhd.com/6?cityId=51", cellType: CellType.Text_5},
      {img:"", title: "梦芭莎", url: "http://t.moonbasa.com", cellType: CellType.Text_5},
      {img:"", title: "名鞋库", url: "http://m.s.cn", cellType: CellType.Text_5},
      {img:"", title: "买卖宝", url: "http://www.mmb.cn/wap/Column.do;jsessionid=FBE87704C191085B192C62A5193B1316-2.e?columnId=12579", cellType: CellType.Text_5},
      {img:"", title: "酒仙网", url: "http://m.jiuxian.com", cellType: CellType.Text_5},
      {img:"", title: "美丽说", url: "http://m.meilishuo.com", cellType: CellType.Text_5},
      {img:"", title: "蘑菇街", url: "http://m.mogujie.com", cellType: CellType.Text_5},
      {img:"", title: "购物", url: "http://www.w4000148590.com/htmls/mlist_65.html#qt4", cellType: CellType.Text_Blue_5},
      {img:"", title: "爱淘宝", url: "https://ai.m.taobao.com", cellType: CellType.Text_5},
      {img:"", title: "天猫", url: "https://www.tmall.com/?from=m", cellType: CellType.Text_5},
      {img:"", title: "苏宁", url: "http://m.suning.com", cellType: CellType.Text_5},
      {img:"", title: "亚马逊", url: "https://www.amazon.cn", cellType: CellType.Text_5},
      {img:"", title: "团购", url: "http://www.w4000148590.com/htmls/mlist_65.html#qt5", cellType: CellType.Text_Blue_5},
      {img:"", title: "点评团", url: "http://m.dianping.com/tuan", cellType: CellType.Text_5},
      {img:"", title: "聚划算", url: "https://ai.m.taobao.com", cellType: CellType.Text_5},
      {img:"", title: "美团", url: "http://i.meituan.com", cellType: CellType.Text_5},
      {img:"", title: "嘀嗒团", url: "http://m.hao224.com/didatuan_wulumuqi/", cellType: CellType.Text_5},


    ],
  },

  {
    title : "休闲娱乐",
    moreUrl: "http://www.w4000148590.com/htmls/mlist_66.html",
    type: SectionHeaderType.Normal,
    list:[
      {img:"", title: "优酷", url: "http://www.youku.com", cellType: CellType.Text_GrayBg_4},
      {img:"", title: "奇艺", url: "http://www.iqiyi.com", cellType: CellType.Text_GrayBg_4},
      {img:"", title: "土豆", url: "http://www.tudou.com", cellType: CellType.Text_GrayBg_4},
      {img:"", title: "乐视", url: "http://www.le.com", cellType: CellType.Text_GrayBg_4},
      {img:"", title: "起点", url: "http://m.qidian.com", cellType: CellType.Text_GrayBg_4},
      {img:"", title: "酷狗", url: "http://m.kugou.com/", cellType: CellType.Text_GrayBg_4},
      {img:"", title: "糗百", url: "http://www.qiushibaike.com", cellType: CellType.Text_GrayBg_4},
      {img:"", title: "美女", url: "http://image.baidu.com", cellType: CellType.Text_GrayBg_4},


      {img:"", title: "视频", url: "http://www.w4000148590.com/htmls/mlist_66.html#qt3", cellType: CellType.Text_Blue_5},
      {img:"", title: "优酷", url: "http://www.youku.com", cellType: CellType.Text_5},
      {img:"", title: "奇艺", url: "http://www.iqiyi.com", cellType: CellType.Text_5},
      {img:"", title: "搜狐", url: "http://m.tv.sohu.com", cellType: CellType.Text_5},
      {img:"", title: "土豆", url: "http://www.tudou.com", cellType: CellType.Text_5},
      {img:"", title: "小说", url: "http://www.tudou.com", cellType: CellType.Text_Blue_5},
      {img:"", title: "红袖", url: "http://m.hongxiu.com", cellType: CellType.Text_5},
      {img:"", title: "17K", url: "http://h5.17k.com", cellType: CellType.Text_5},
      {img:"", title: "潇湘", url: "http://m.xxsy.net", cellType: CellType.Text_5},
      {img:"", title: "起点", url: "http://m.qidian.com", cellType: CellType.Text_5},
      {img:"", title: "音乐", url: "http://www.w4000148590.com/htmls/mlist_66.html#qt5", cellType: CellType.Text_Blue_5},
      {img:"", title: "百度", url: "http://music.baidu.com/?guide=1", cellType: CellType.Text_5},
      {img:"", title: "酷狗", url: "http://m.kugou.com/", cellType: CellType.Text_5},
      {img:"", title: "QQ", url: "http://y.qq.com/?ADTAG=myqq#type=index", cellType: CellType.Text_5},
      {img:"", title: "喜马拉雅", url: "http://m.ximalaya.com", cellType: CellType.Text_5},
    ],
  },

]

export default class WebView extends Component {

  _getRowData = (dataBlob, sectionID, rowID)=>{
    return dataBlob[rowID];
  }
  _getSectionHeaderData = (dataBlob, sectionID)=>{
    return dataBlob[sectionID];
  }

  constructor(props) {
    super(props);

    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2)=> r1 !== r2,
    });

    this.state = {
      text: "",
      dataSource: ds.cloneWithRows([]),
    };
  }
  _renderRow = (rowData) => {
    let img = rowData.img;
    return (
      <WebCell
        onPress={()=>{
          const {navigator} = this.props;
          if (navigator) {
            navigator.push({
              component: WebDetail,
              params:{
                url: rowData.url,
              }
            });
          }
        }}
        cellType={rowData.cellType}
        title={rowData.title}
        /*source={{uri: rowData.img}}*/
        /* TODO: 把图片资源放到iOS工程, 使用 source={rowData.img? {uri: rowData.img}: null}替换下面一句 */
        source={rowData.img? require('./Img/baidu.png'): null}
        />
    );
  }
  _renderSectionHeader = (item)=> {
    if (item.type === SectionHeaderType.Search) {
      return (
        <View style={{height: 100, width: kScreenWidth, backgroundColor: 'rgb(5, 140, 226)'}}>
          <View style={{height: 64, width: kScreenWidth, justifyContent: 'space-between', alignItems: 'center'}}>
            {/*TODO:bar具体内容填写在此处*/}
          </View>
          <View style={{flex: 1, paddingLeft: 10, paddingRight: 10, paddingBottom: 10, paddingTop: 0, justifyContent: 'center'}}>
            <View style={{flex: 1, borderRadius: 5, paddingLeft: 5, paddingRight: 5, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
              <Image
                style={{width: 20, height: 20}}
                // TODO: 搜索按钮的图片
                /*source={require('')}*/
                />
              <TextInput
                placeholder="输入关键字"
                style={{flex: 1, fontSize: 14,}}
                onChangeText={(text) => this.setState({text})}
                />
              <Text
                style={{color: 'rgb(5, 140, 226)'}}
                onPress={()=>{
                  const {navigator} = this.props;
                  if (navigator) {
                    navigator.push({
                      component: WebDetail,
                      params:{
                        url: "http://m.baidu.com/s?wd="+this.state.text,
                      }
                    });
                  }
                }}
                >
                搜索
              </Text>
            </View>
          </View>
        </View>
      );
    }
    return (
      <View
        style={styles.sectionHeader}>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{width: 20, height: 20}}
            /*source={require('')}*/
            />
          <Text style={{color: 'rgb(14, 140, 226)'}}>{item.title}</Text>
        </View>
        <Text
          onPress={()=>{
            const {navigator} = this.props;
            if (navigator) {
              navigator.push({
                component: WebDetail,
                params:{
                  url: item.moreUrl,
                }
              });
            }
          }}>
          更多
        </Text>
      </View>
    );
  }
  _renderHeader = ()=> {
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2)=> r1 !== r2,
    });
    return (
      <View>
        {
          webs.map(
          (item, index)=>{
            return (
              <View key={"webs_index_"+index}>
                {this._renderSectionHeader(item)}
                <ListView
                  initialListSize={50}
                  style={styles.listView}
                  renderRow={this._renderRow}
                  enableEmptySections={true}
                  // renderHeader={this._renderSectionHeader}
                  dataSource={ds.cloneWithRows(item.list)}
                  contentContainerStyle={styles.contentContainerStyle}
                  />
              </View>
            );
          })
        }
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={styles.listView}
          renderRow={(rowData)=><View></View>}
          renderHeader={this._renderHeader}
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1 ,
    backgroundColor: 'white',
  },
  listView: {
    // flex: 1,
    backgroundColor: 'white',
  },
  contentContainerStyle: {
    flexDirection: 'row',/*设置横向*/
    flexWrap: 'wrap',/*flexWrap默认值: nowrap*/
    // justifyContent: 'flex-start',/*justifyContent默认值: flex-start*/
  },
  sectionHeader: {
    padding: 10,
    width: kScreenWidth,
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#e7e7e7',
  },
});
