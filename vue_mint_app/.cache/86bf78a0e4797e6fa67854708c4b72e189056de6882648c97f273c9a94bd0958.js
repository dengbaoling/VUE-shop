{"source":"webpackJsonp([13],{H43D:function(t,a,e){var i=e(\"hjkP\");\"string\"==typeof i&&(i=[[t.i,i,\"\"]]),i.locals&&(t.exports=i.locals);e(\"FIqI\")(\"6c55d4cc\",i,!0,{})},hjkP:function(t,a,e){(t.exports=e(\"UTlt\")(!1)).push([t.i,\".mint-navbar[data-v-47dce197]{margin-top:1rem}.tab_phone[data-v-47dce197]{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0 .2rem}.xl_img[data-v-47dce197]{height:3rem}.xl_img img[data-v-47dce197]{width:100%;height:100%}.xli[data-v-47dce197]{width:3.4rem;margin-top:.2rem;background:#fff}.xl_p[data-v-47dce197]{color:#353535;text-align:center;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.mint-tab-container-item[data-v-47dce197]{width:95%}.prices[data-v-47dce197]{color:#fe498f;font-size:.1rem;text-align:center}.price[data-v-47dce197]{font-size:.4rem}\",\"\"])},nJrp:function(t,a,e){\"use strict\";Object.defineProperty(a,\"__esModule\",{value:!0});var i={components:{\"v-header\":e(\"uv94\").a},data:function(){return{selected:\"tab1\",newTitle:\"选购\",url:\"https://www.easy-mock.com/mock/59e95287dd7e1a0a448c1102/example/choose\",lists:[],all:[]}},mounted:function(){this.getData()},methods:{getData:function(){var a=this;a.$http.get(a.url).then(function(t){a.all=t.data,a.lists=t.data.tab1},function(t){})},xuangou:function(t){this.$router.push({path:\"details\",query:{id:t}})}}},s={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i(\"div\",{staticClass:\"xuangou\"},[i(\"v-header\",{attrs:{title:e.newTitle}}),e._v(\" \"),i(\"mt-navbar\",{model:{value:e.selected,callback:function(t){e.selected=t},expression:\"selected\"}},[i(\"mt-tab-item\",{attrs:{id:\"tab1\"}},[e._v(\"全部\")]),e._v(\" \"),i(\"mt-tab-item\",{attrs:{id:\"tab2\"}},[e._v(\"Xplay系列\")]),e._v(\" \"),i(\"mt-tab-item\",{attrs:{id:\"tab3\"}},[e._v(\"X系\")]),e._v(\" \"),i(\"mt-tab-item\",{attrs:{id:\"tab4\"}},[e._v(\"y系\")])],1),e._v(\" \"),i(\"mt-tab-container\",{model:{value:e.selected,callback:function(t){e.selected=t},expression:\"selected\"}},[i(\"mt-tab-container-item\",{staticClass:\"tab_phone\",attrs:{id:\"tab1\"}},e._l(e.lists,function(a,t){return i(\"div\",{staticClass:\"xli\",attrs:{id:a.id},on:{click:function(t){return e.xuangou(a.id)}}},[i(\"div\",{staticClass:\"xl_img\"},[i(\"img\",{attrs:{src:a.ImageOne}})]),e._v(\" \"),i(\"p\",{staticClass:\"xl_p\"},[e._v(e._s(a.name))]),e._v(\" \"),i(\"p\",{staticClass:\"prices\"},[e._v(\"￥ \"),i(\"span\",{staticClass:\"price\"},[e._v(e._s(a.Price))])])])}),0),e._v(\" \"),i(\"mt-tab-container-item\",{staticClass:\"tab_phone\",attrs:{id:\"tab2\"}},e._l(e.all.tab2,function(a,t){return i(\"div\",{staticClass:\"xli\",attrs:{id:a.id},on:{click:function(t){return e.xuangou(a.id)}}},[i(\"div\",{staticClass:\"xl_img\"},[i(\"img\",{attrs:{src:a.ImageOne}})]),e._v(\" \"),i(\"p\",{staticClass:\"xl_p\"},[e._v(e._s(a.name))])])}),0),e._v(\" \"),i(\"mt-tab-container-item\",{staticClass:\"tab_phone\",attrs:{id:\"tab3\"}},e._l(e.all.tab3,function(a,t){return i(\"div\",{staticClass:\"xli\",attrs:{id:a.id},on:{click:function(t){return e.xuangou(a.id)}}},[i(\"div\",{staticClass:\"xl_img\"},[i(\"img\",{attrs:{src:a.ImageOne}})]),e._v(\" \"),i(\"p\",{staticClass:\"xl_p\"},[e._v(e._s(a.name))])])}),0),e._v(\" \"),i(\"mt-tab-container-item\",{staticClass:\"tab_phone\",attrs:{id:\"tab4\"}},e._l(e.all.tab4,function(a,t){return i(\"div\",{staticClass:\"xli\",attrs:{id:a.id},on:{click:function(t){return e.xuangou(a.id)}}},[i(\"div\",{staticClass:\"xl_img\"},[i(\"img\",{attrs:{src:a.ImageOne}})]),e._v(\" \"),i(\"p\",{staticClass:\"xl_p\"},[e._v(e._s(a.name))])])}),0)],1)],1)},staticRenderFns:[]};var n=e(\"C7Lr\")(i,s,!1,function(t){e(\"H43D\")},\"data-v-47dce197\",null);a.default=n.exports}});"}