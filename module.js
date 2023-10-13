define(["@grafana/data","react"],((t,e)=>(()=>{"use strict";var o={305:e=>{e.exports=t},650:t=>{t.exports=e}},r={};function a(t){var e=r[t];if(void 0!==e)return e.exports;var n=r[t]={exports:{}};return o[t](n,n.exports,a),n.exports}a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};return(()=>{a.r(n),a.d(n,{plugin:()=>w});var t=a(305),e=a(650),o=a.n(e);function r(t){let{onLoad:o,onError:r,...a}=t;const[n,s]=function(t){let{chartVersion:o="current",chartPackages:r=["corechart","controls"],chartLanguage:a="en",mapsApiKey:n}=t;const[s,l]=(0,e.useState)(null),[i,h]=(0,e.useState)(!1);var c,d,p;return c="https://www.gstatic.com/charts/loader.js",d=()=>{const t=null===window||void 0===window?void 0:window.google;t&&(t.charts.load(o,{packages:r,language:a,mapsApiKey:n}),t.charts.setOnLoadCallback((()=>{l(t)})))},p=()=>{h(!0)},(0,e.useEffect)((()=>{if(!document)return;const t=document.querySelector('script[src="'.concat(c,'"]'));if(null==t?void 0:t.dataset.loaded)return void(null==d||d());const e=t||document.createElement("script");t||(e.src=c);const o=()=>{e.dataset.loaded="1",null==d||d()};return e.addEventListener("load",o),p&&e.addEventListener("error",p),t||document.head.append(e),()=>{e.removeEventListener("load",o),p&&e.removeEventListener("error",p)}}),[]),[s,i]}(a);return(0,e.useEffect)((()=>{n&&o&&o(n)}),[n]),(0,e.useEffect)((()=>{s&&r&&r()}),[s]),null}const s={legend_toggle:!1,options:{},legendToggle:!1,getChartWrapper:()=>{},spreadSheetQueryParameters:{headers:1,gid:1},rootProps:{},chartWrapperParams:{}};let l=0;const i=["#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#329262","#5574A6","#3B3EAC"],{Provider:h,Consumer:c}=e.createContext(s),d=t=>{let{children:o,value:r}=t;return e.createElement(h,{value:r},o)},p=t=>{let{render:o}=t;return e.createElement(c,null,(t=>o(t)))};class g extends e.Component{componentDidMount(){this.draw(this.props),window.addEventListener("resize",this.onResize),(this.props.legend_toggle||this.props.legendToggle)&&this.listenToLegendToggle()}componentWillUnmount(){const{google:t,googleChartWrapper:e}=this.props;window.removeEventListener("resize",this.onResize),t.visualization.events.removeAllListeners(e),"Timeline"===e.getChartType()&&e.getChart()&&e.getChart().clearChart()}componentDidUpdate(){this.draw(this.props)}render(){return null}constructor(...t){super(...t),this.state={hiddenColumns:[]},this.listenToLegendToggle=()=>{const{google:t,googleChartWrapper:e}=this.props;t.visualization.events.addListener(e,"select",(()=>{const t=e.getChart().getSelection(),o=e.getDataTable();if(0===t.length||t[0].row||!o)return;const r=t[0].column,a=this.getColumnID(o,r);this.state.hiddenColumns.includes(a)?this.setState((t=>({...t,hiddenColumns:[...t.hiddenColumns.filter((t=>t!==a))]}))):this.setState((t=>({...t,hiddenColumns:[...t.hiddenColumns,a]})))}))},this.applyFormatters=(t,e)=>{const{google:o}=this.props;for(let r of e)switch(r.type){case"ArrowFormat":new o.visualization.ArrowFormat(r.options).format(t,r.column);break;case"BarFormat":new o.visualization.BarFormat(r.options).format(t,r.column);break;case"ColorFormat":{const e=new o.visualization.ColorFormat(r.options),{ranges:a}=r;for(let t of a)e.addRange(...t);e.format(t,r.column);break}case"DateFormat":new o.visualization.DateFormat(r.options).format(t,r.column);break;case"NumberFormat":new o.visualization.NumberFormat(r.options).format(t,r.column);break;case"PatternFormat":new o.visualization.PatternFormat(r.options).format(t,r.column)}},this.getColumnID=(t,e)=>t.getColumnId(e)||t.getColumnLabel(e),this.draw=async t=>{let{data:e,diffdata:o,rows:r,columns:a,options:n,legend_toggle:s,legendToggle:l,chartType:i,formatters:h,spreadSheetUrl:c,spreadSheetQueryParameters:d}=t;const{google:p,googleChartWrapper:g}=this.props;let u,m=null;if(o){const t=p.visualization.arrayToDataTable(o.old),e=p.visualization.arrayToDataTable(o.new);m=p.visualization[i].prototype.computeDiff(t,e)}u=null!==e?Array.isArray(e)?p.visualization.arrayToDataTable(e):new p.visualization.DataTable(e):r&&a?p.visualization.arrayToDataTable([a,...r]):c?await async function(t,e){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(((r,a)=>{const n="".concat(o.headers?"headers=".concat(o.headers):"headers=0"),s="".concat(o.query?"&tq=".concat(encodeURIComponent(o.query)):""),l="".concat(o.gid?"&gid=".concat(o.gid):""),i="".concat(o.sheet?"&sheet=".concat(o.sheet):""),h="".concat(o.access_token?"&access_token=".concat(o.access_token):""),c="".concat(n).concat(l).concat(i).concat(s).concat(h),d="".concat(e,"/gviz/tq?").concat(c);new t.visualization.Query(d).send((t=>{t.isError()?a("Error in query:  ".concat(t.getMessage()," ").concat(t.getDetailedMessage())):r(t.getDataTable())}))}))}(p,c,d):p.visualization.arrayToDataTable([]);const C=u.getNumberOfColumns();for(let t=0;t<C;t+=1){const e=this.getColumnID(u,t);if(this.state.hiddenColumns.includes(e)){const e=u.getColumnLabel(t),o=u.getColumnId(t),r=u.getColumnType(t);u.removeColumn(t),u.addColumn({label:e,id:o,type:r})}}const v=g.getChart();"Timeline"===g.getChartType()&&v&&v.clearChart(),g.setChartType(i),g.setOptions(n||{}),g.setDataTable(u),g.draw(),null!==this.props.googleChartDashboard&&this.props.googleChartDashboard.draw(u),m&&(g.setDataTable(m),g.draw()),h&&(this.applyFormatters(u,h),g.setDataTable(u),g.draw()),!0!==l&&!0!==s||this.grayOutHiddenColumns({options:n})},this.grayOutHiddenColumns=t=>{let{options:e}=t;const{googleChartWrapper:o}=this.props,r=o.getDataTable();if(!r)return;const a=r.getNumberOfColumns();if(!1==this.state.hiddenColumns.length>0)return;const n=Array.from({length:a-1}).map(((t,o)=>{const a=this.getColumnID(r,o+1);return this.state.hiddenColumns.includes(a)?"#CCCCCC":e&&e.colors?e.colors[o]:i[o]}));o.setOptions({...e,colors:n}),o.draw()},this.onResize=()=>{const{googleChartWrapper:t}=this.props;t.draw()}}}class u extends e.Component{componentDidMount(){}componentWillUnmount(){}shouldComponentUpdate(){return!1}render(){const{google:t,googleChartWrapper:o,googleChartDashboard:r}=this.props;return e.createElement(p,{render:a=>e.createElement(g,Object.assign({},a,{google:t,googleChartWrapper:o,googleChartDashboard:r}))})}}class m extends e.Component{shouldComponentUpdate(){return!1}listenToEvents(t){let{chartEvents:e,google:o,googleChartWrapper:r}=t;if(e){o.visualization.events.removeAllListeners(r);for(let t of e){var a=this;const{eventName:e,callback:n}=t;o.visualization.events.addListener(r,e,(function(){for(var t=arguments.length,e=new Array(t),s=0;s<t;s++)e[s]=arguments[s];n({chartWrapper:r,props:a.props,google:o,eventArgs:e})}))}}}componentDidMount(){var t;const{google:e,googleChartWrapper:o}=this.props;this.listenToEvents({chartEvents:(null===(t=this.propsFromContext)||void 0===t?void 0:t.chartEvents)||null,google:e,googleChartWrapper:o})}render(){return this.props,e.createElement(p,{render:t=>(this.propsFromContext=t,null)})}constructor(t){super(t),this.propsFromContext=null}}let C=0;class v extends e.Component{componentDidMount(){const{options:t,google:e,chartType:o,chartWrapperParams:r,toolbarItems:a,getChartEditor:n,getChartWrapper:s}=this.props,l={chartType:o,options:t,containerId:this.getGraphID(),...r},i=new e.visualization.ChartWrapper(l);i.setOptions(t||{}),s&&s(i,e);const h=new e.visualization.Dashboard(this.dashboard_ref),c=this.addControls(i,h);a&&e.visualization.drawToolbar(this.toolbar_ref.current,a);let d=null;n&&(d=new e.visualization.ChartEditor,n({chartEditor:d,chartWrapper:i,google:e})),this.setState({googleChartEditor:d,googleChartControls:c,googleChartDashboard:h,googleChartWrapper:i,isReady:!0})}componentDidUpdate(){if(!this.state.googleChartWrapper)return;if(!this.state.googleChartDashboard)return;if(!this.state.googleChartControls)return;const{controls:t}=this.props;if(t)for(let e=0;e<t.length;e+=1){const{controlType:o,options:r,controlWrapperParams:a}=t[e];a&&"state"in a&&this.state.googleChartControls[e].control.setState(a.state),this.state.googleChartControls[e].control.setOptions(r),this.state.googleChartControls[e].control.setControlType(o)}}shouldComponentUpdate(t,e){return this.state.isReady!==e.isReady||t.controls!==this.props.controls}render(){const{width:t,height:o,options:r,style:a}=this.props,n={height:o||r&&r.height,width:t||r&&r.width,...a};return this.props.render?e.createElement("div",{ref:this.dashboard_ref,style:n},e.createElement("div",{ref:this.toolbar_ref,id:"toolbar"}),this.props.render({renderChart:this.renderChart,renderControl:this.renderControl,renderToolbar:this.renderToolBar})):e.createElement("div",{ref:this.dashboard_ref,style:n},this.renderControl((t=>{let{controlProp:e}=t;return"bottom"!==e.controlPosition})),this.renderChart(),this.renderControl((t=>{let{controlProp:e}=t;return"bottom"===e.controlPosition})),this.renderToolBar())}constructor(...t){var o;super(...t),o=this,this.state={googleChartWrapper:null,googleChartDashboard:null,googleChartControls:null,googleChartEditor:null,isReady:!1},this.graphID=null,this.dashboard_ref=e.createRef(),this.toolbar_ref=e.createRef(),this.getGraphID=()=>{const{graphID:t,graph_id:e}=this.props;let o;return t||e?o=t&&!e?t:e&&!t?e:t:this.graphID?o=this.graphID:(l+=1,o="reactgooglegraph-".concat(l)),this.graphID=o,this.graphID},this.getControlID=(t,e)=>{let o;return C+=1,o=void 0===t?"googlechart-control-".concat(e,"-").concat(C):t,o},this.addControls=(t,e)=>{const{google:o,controls:r}=this.props,a=r?r.map(((t,e)=>{const{controlID:r,controlType:a,options:n,controlWrapperParams:s}=t,l=this.getControlID(r,e);return{controlProp:t,control:new o.visualization.ControlWrapper({containerId:l,controlType:a,options:n,...s})}})):null;if(!a)return null;e.bind(a.map((t=>{let{control:e}=t;return e})),t);for(let e of a){const{control:r,controlProp:a}=e,{controlEvents:s=[]}=a;for(let e of s){var n=this;const{callback:a,eventName:s}=e;o.visualization.events.removeListener(r,s,a),o.visualization.events.addListener(r,s,(function(){for(var e=arguments.length,s=new Array(e),l=0;l<e;l++)s[l]=arguments[l];a({chartWrapper:t,controlWrapper:r,props:n.props,google:o,eventArgs:s})}))}}return a},this.renderChart=()=>{const{width:t,height:o,options:r,style:a,className:n,rootProps:s,google:l}=this.props,i={height:o||r&&r.height,width:t||r&&r.width,...a};return e.createElement("div",Object.assign({id:this.getGraphID(),style:i,className:n},s),this.state.isReady&&null!==this.state.googleChartWrapper?e.createElement(e.Fragment,null,e.createElement(u,{googleChartWrapper:this.state.googleChartWrapper,google:l,googleChartDashboard:this.state.googleChartDashboard}),e.createElement(m,{googleChartWrapper:this.state.googleChartWrapper,google:l})):null)},this.renderControl=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t=>!0;return o.state.isReady&&null!==o.state.googleChartControls?e.createElement(e.Fragment,null,o.state.googleChartControls.filter((e=>{let{controlProp:o,control:r}=e;return t({control:r,controlProp:o})})).map((t=>{let{control:o,controlProp:r}=t;return e.createElement("div",{key:o.getContainerId(),id:o.getContainerId()})}))):null},this.renderToolBar=()=>this.props.toolbarItems?e.createElement("div",{ref:this.toolbar_ref}):null}}class f extends e.Component{render(){const{chartLanguage:t,chartPackages:o,chartVersion:a,mapsApiKey:n,loader:s,errorElement:l}=this.props;return e.createElement(d,{value:this.props},"ready"===this.state.loadingStatus&&null!==this.state.google?e.createElement(v,Object.assign({},this.props,{google:this.state.google})):"errored"===this.state.loadingStatus&&l?l:s,e.createElement(r,{chartLanguage:t,chartPackages:o,chartVersion:a,mapsApiKey:n,onLoad:this.onLoad,onError:this.onError}))}componentDidMount(){this._isMounted=!0}componentWillUnmount(){this._isMounted=!1}isFullyLoaded(t){const{controls:e,toolbarItems:o,getChartEditor:r}=this.props;return t&&t.visualization&&t.visualization.ChartWrapper&&t.visualization.Dashboard&&(!e||t.visualization.ChartWrapper)&&(!r||t.visualization.ChartEditor)&&(!o||t.visualization.drawToolbar)}constructor(...t){super(...t),this._isMounted=!1,this.state={loadingStatus:"loading",google:null},this.onLoad=t=>{if(this.props.onLoad&&this.props.onLoad(t),this.isFullyLoaded(t))this.onSuccess(t);else{const t=setInterval((()=>{const e=window.google;this._isMounted?e&&this.isFullyLoaded(e)&&(clearInterval(t),this.onSuccess(e)):clearInterval(t)}),1e3)}},this.onSuccess=t=>{this.setState({loadingStatus:"ready",google:t})},this.onError=()=>{this.setState({loadingStatus:"errored"})}}}var y;f.defaultProps=s,function(t){t.annotation="annotation",t.annotationText="annotationText",t.certainty="certainty",t.emphasis="emphasis",t.interval="interval",t.scope="scope",t.style="style",t.tooltip="tooltip",t.domain="domain"}(y||(y={}));var b=f;const w=new t.PanelPlugin((({options:t,data:e,width:r,height:a})=>{let n=[["From","To","Bytes"],["Source N/A","Destination N/A",1]],s=e.series.map((t=>t.fields.find((t=>"source"===t.name.toLowerCase())))).map((t=>{let e=null==t?void 0:t.values;return Array.isArray(e)?e:null==e?void 0:e.buffer}))[0];if(void 0!==s){let t=e.series.map((t=>t.fields.find((t=>"destination"===t.name.toLowerCase())))).map((t=>{let e=null==t?void 0:t.values;return Array.isArray(e)?e:null==e?void 0:e.buffer}))[0],o=e.series.map((t=>t.fields.find((t=>"destinationip"===t.name.toLowerCase())))).map((t=>{let e=null==t?void 0:t.values;return Array.isArray(e)?e:null==e?void 0:e.buffer}))[0],r=e.series.map((t=>t.fields.find((t=>"bytes"===t.name.toLowerCase())))).map((t=>{let e=null==t?void 0:t.values;return Array.isArray(e)?e:null==e?void 0:e.buffer}))[0],a=s.length;for(let e=0;e<a;e++){if(0===r[e])continue;let a=[],l=s[e],i=t[e];""===l&&(l="N/A"),""===i?i=""===o[e]?"N/A":o[e]:i+=" ",a.push(l),a.push(i),a.push(r[e]),0===e&&(n=[["From","To","Bytes"]]),n.push(a)}}return o().createElement("div",null,o().createElement(b,{width:600,height:"600px",chartType:"Sankey",loader:o().createElement("div",null,"Loading Chart"),data:n}))})).setPanelOptions((t=>t))})(),n})()));
//# sourceMappingURL=module.js.map