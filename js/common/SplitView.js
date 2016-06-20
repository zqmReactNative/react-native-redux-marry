// SplitView.js
// 两个ListView,左边控制右边显示

// __d("marry/views/Filters/FiltersCategory.js",
// 	function(e,t,n,r){
// 		Object.defineProperty(r,"__esModule",{value:!0});
// 		var i=t("react-native/Libraries/react-native/react-native.js"),
// 		o=babelHelpers.interopRequireDefault(i),
// 		a=t("marry/components/Link.js"),
// 		s=babelHelpers.interopRequireDefault(a),
// 		u=t("marry/components/LoopView.js"),
// 		l=babelHelpers.interopRequireDefault(u),
// 		c=t("lodash/index.js"),
// 		p=babelHelpers.interopRequireDefault(c),
// 		f=i.StyleSheet.create({}),
// 		h=function(e){
// 			function t(){
// 				babelHelpers.classCallCheck(this,t);
// 				var e=babelHelpers.possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments));
// 				// e._getChildren=function(t){
// 				// 	var n=e._categories[t],r=n.children.slice();
// 				// 	return n["default"]||r.unshift({id:n.id,title:"\u5168\u90e8"+n.title+"\u5546\u5bb6"}),
// 				// 	e._ds.cloneWithRows(r)
// 				// },
// 				// e._category=function(t){
// 				// 	e.setState({active:t,children:e._getChildren(t)})
// 				// },
// 				// e._select=function(t,n){
// 				// 	e.setState({selected:n,children:e._getChildren(e.state.active)}),
// 				// 	e.props.onChange(t,n)
// 				// },
				// e._renderParentRow=function(t,n){
				// 	var r=n==e.state.active;
				// 	return o["default"].createElement(s["default"],{style:[f.parent,r&&f.active],contentContainerStyle:f.parentContainer,underlayColor:"rgba(255, 255, 255, 0.5)",onPress:e._category.bind(e,n)},
				// 		     o["default"].createElement(i.View,{style:[f.activeContainer,r&&f.activeTextContainer]},
				// 		     	o["default"].createElement(i.Text,{style:[f.text,r&&f.activeText]},t.title)))
				// },
				// e._renderChildRow=function(t){
				// 	return o["default"].createElement(s["default"],{style:f.child,underlayColor:"rgba(255, 255, 255, 0.5)",contentContainerStyle:f.childContainer,onPress:e._select.bind(e,t.title,t.id)},
				// 		o["default"].createElement(i.Text,{style:[f.text,e.state.selected==t.id&&f.textSelected]},t.title))
				// 	};
				// 	var n=p["default"].cloneDeep(e.props.data);
				// 	e._ds=new i.ListView.DataSource({rowHasChanged:function(e,t){return e.id!==t.id}});
				// 	var r=0;
				// 	return p["default"].every(n,function(t,n){
				// 		var i=t.children,o=t.id;return o===e.props.selected?(r=n,!1):p["default"].find(i,{id:e.props.selected})?(r=n,!1):!0}),
				// 	e._categories=n,e.state={parent:n,children:e._getChildren(r),active:r,selected:e.props.selected},e}
				// 	return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"render",value:function(){return o["default"].createElement(i.View,babelHelpers["extends"]({},this.props,{style:f.container}),o["default"].createElement(l["default"],{style:f.cateContainer,data:this.state.parent,renderRow:this._renderParentRow}),o["default"].createElement(i.ListView,{style:f.itemContainer,dataSource:this.state.children,renderRow:this._renderChildRow,pageSize:8}))}}]),t}(i.Component);h.displayName="FiltersCategory",r["default"]=h}),

import React, { Component, PropTypes } from 'react';
import { Animated, View, StyleSheet, Text, ListView, Dimensions, PixelRatio, TouchableOpacity, TouchableHighlight } from 'react-native';

import CommonCell from './CommonCell';

import * as categories from "../data/categories";

const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class SplitView extends Component {
	_getChildren = (index)=> {
		// var n=e._categories[t],r=n.children.slice();
		const item = categories[index];
		const children = item.slice();
		// return n["default"]||r.unshift({id:n.id,title:"\u5168\u90e8"+n.title+"\u5546\u5bb6"}),
		// e._ds.cloneWithRows(r)
		// this.ds.cloneWithRows(r)
		return item || children.unshift({id: item.id, title:"全部"+item.title+"商家"})

	}
	_category = (index)=>{
		this.setState({active:index,children:this._getChildren(index)})
	}
	_select = (t, index)=>{
		this.setState({
			selected:index,
			children:this._getChildren(this.state.active)
		})
		this.props.onChange && this.props.onChange(t, index)
	}
	_renderParentRow = (rowData, index)=>{
		var r = index===this.state.active;

		return (
			<CommonCell
				style = { [styles.parent, r&&styles.active] }
				contentContainerStyle = {styles.parentContainer}
				underlayColor = "rgba(255, 255, 255, 0.5)"
				onPress = {this._category.bind(this, index)}
				renderCellContent={()=>{
					return (
						<View
							style = {[styles.activeContainer,r&&styles.activeTextContainer]}
							>
							<Text style = {[styles.text,r&&styles.activeText]}>
								{rowData.title}
							</Text>
						</View>
					)
				}}
				/>
		);
	}

	_renderChildRow = (rowData)=>{
		// return o["default"].createElement(s["default"],{style:f.child,underlayColor:"rgba(255, 255, 255, 0.5)",contentContainerStyle:f.childContainer,onPress:e._select.bind(e,t.title,t.id)},
		// 	o["default"].createElement(i.Text,{style:[f.text,e.state.selected==t.id&&f.textSelected]},t.title))
		return (
			<CommonCell
				style = {styles.child}
				underlayColor="rgba(255, 255, 255, 0.5)"
				contentContainerStyle={styles.childContainer}
				onPress={this._select.bind(this, rowData.title,rowData.id)}
				renderCellContent={()=>{
					<Text
						style={[styles.text,this.state.selected==rowData.id&&styles.textSelected]}
						>
						{rowData.title}
					</Text>
				}}
				/>
		);
	}

	static propTypes = {
		...View.propTypes,
		datas: PropTypes.array,
		leftSelectedIndex: PropTypes.number,
		rightSelectedIndex: PropTypes.number,
	}
	static defaultProps = {
	  datas: [{}],
	}
	constructor(props) {
		super(props);

		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1!==r2,
		});
		this.state={
			active: 0,
			selected: 0,
			dataSourceOfLeft: ds.cloneWithRows([{}, {}, {}]),
			dataSourceOfRight: ds.cloneWithRows([{}, {}, {}, {}, {}, {}]),
		}
	}
	_renderLeftListViewRow = (rowData)=>{
		return (
			<TouchableHighlight style={{backgroundColor: '#f7f7f7'}} onPress={()=>alert(1)} underlayColor='#dbdbdb'>
				<View style={{flexDirection: 'row', width: screenWidth/2, height: 40, alignItems: 'center', justifyContent: 'center'}}>
					<View style={{width: 2, height: 15, backgroundColor: '#ff5942'}}>
					</View>
					<Text style={{marginLeft: 10, width: 80, fontSize: 15, color: '#666'}}>XXXX</Text>
				</View>
			</TouchableHighlight>
		);
	}
	_renderRightListViewRow = (rowData)=>{
		return (
			<TouchableHighlight style={{backgroundColor: 'white'}} onPress={()=>alert(1)} underlayColor='#dbdbdb'>
				<View style={{flexDirection: 'row', width: screenWidth/2, height: 40, alignItems: 'center', justifyContent: 'center'}}>
					<Text style={{marginLeft: 10, fontSize: 15, color: '#666'}}>XXXX</Text>
				</View>
			</TouchableHighlight>
		);
	}
	render(){
		const { style } = this.props;
		return (
			<TouchableHighlight style={[styles.maskButton]} onPress={()=>alert(0)}>
				{/*

				<View style={{styles.container}}>
					<ListView />
					<ListView />
				</View>
				*/}
				<View style={{flexDirection: 'row'}}>
					<ListView
						style={styles.leftContainer}
						dataSource={this.state.dataSourceOfLeft}
						// renderRow={this._renderLeftListViewRow}
						// renderRow={this._renderParentRow.bind({title: "111"}, 2)}
						renderRow={this._renderParentRow}
						/>

					<ListView
						style={styles.rightContainer}
						dataSource={this.state.dataSourceOfRight}
						renderRow={this._renderRightListViewRow}
						/>
				</View>
			</TouchableHighlight>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection:"row",
		backgroundColor:"#fff"
	},
	maskButton: {
		position: 'absolute',
		top: 0, bottom: 0,
		left: 0, right: 0,
		// backgroundColor: 'green',
	},
	leftContainer: {
		width: screenWidth/2,
		backgroundColor: 'white'
	},
	rightContainer: {
		width: screenWidth/2,
		backgroundColor: 'white'
	},
	cateContainer: {
		flex:1,
		backgroundColor:"#f7f7f7"
	},
	itemContainer: {
		flex:1,
		backgroundColor:"#fff"
	},
	parent: {
		height:39,
		backgroundColor: 'white',
	},
	parentContainer: {
		justifyContent:"center",
		alignItems:"center",
		backgroundColor: 'white'
	},
	text: {
		color:"#666",
		fontSize:13
	},
	textSelected: {
		color:"#ff5942"
	},
	activeContainer: {
		paddingLeft:12,
		borderLeftWidth:2.5,
		borderLeftColor:"transparent"
	},
	child: {
		height:39,
		marginLeft:6,
		borderBottomColor:"#ebebeb",
		borderBottomWidth:1/PixelRatio.get()
	},
	childContainer: {
		justifyContent:"center",
		alignItems:"center"
	},
	active: {
		backgroundColor:"#fff"
	},
	activeText: {
		color:"#ff5942"
	},
	activeTextContainer: {
		borderLeftColor:"#ff5942"
	}
});
