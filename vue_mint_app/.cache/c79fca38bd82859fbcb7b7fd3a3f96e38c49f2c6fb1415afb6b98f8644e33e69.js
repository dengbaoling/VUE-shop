{"source":"webpackJsonp([7],{AGY8:function(t,e,i){var s=i(\"s8EZ\");\"string\"==typeof s&&(s=[[t.i,s,\"\"]]),s.locals&&(t.exports=s.locals);i(\"FIqI\")(\"74e298b0\",s,!0,{})},ogbC:function(t,e,i){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var s={data:function(){return{newsdetails:[],url:\"https://www.easy-mock.com/mock/59e95287dd7e1a0a448c1102/example/newsdetails\"}},created:function(){},mounted:function(){this.getData()},methods:{getData:function(){var i=this.$route.query.id,s=this;s.$http.get(s.url).then(function(t){for(var e=0;e<t.data.length;e++)t.data[e].id==i&&s.newsdetails.push(t.data[e])},function(t){})},fanhui:function(){this.$router.push({path:\"main\"})}}},a={render:function(){var i=this,t=i.$createElement,s=i._self._c||t;return s(\"div\",{staticClass:\"news_details\"},[s(\"div\",{staticClass:\"news_title\"},[s(\"i\",{staticClass:\"iconfont icon-fanhui\",on:{click:i.fanhui}}),i._v(\"\\n    新闻详情\\n    \")]),i._v(\" \"),i._l(i.newsdetails,function(t,e){return s(\"div\",{staticClass:\"details_con\"},[s(\"div\",{staticClass:\"details_p\"},[i._v(\"\\n      \"+i._s(t.title)+\"\\n    \")]),i._v(\" \"),s(\"div\",{staticClass:\"details_p\"},[i._v(\"\\n      \"+i._s(t.time)+\"\\n    \")]),i._v(\"\\n    \"+i._s(i.newsdetails.boxs)+\"\\n    \"),i._l(i.newsdetails[0].boxs,function(t){return s(\"div\",{staticClass:\"cona_item\"},[s(\"div\",{staticClass:\"details_p\"},[i._v(\"\\n        \"+i._s(t.p)+\"\\n      \")]),i._v(\" \"),s(\"div\",{staticClass:\"details_img\"},[s(\"img\",{attrs:{src:t.imgs,alt:\"\"}})])])})],2)})],2)},staticRenderFns:[]};var n=i(\"C7Lr\")(s,a,!1,function(t){i(\"AGY8\")},\"data-v-dbdfc6be\",null);e.default=n.exports},s8EZ:function(t,e,i){(t.exports=i(\"UTlt\")(!1)).push([t.i,\".news_title[data-v-dbdfc6be]{height:.88rem;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding-left:.2rem;position:fixed;top:0;left:0;font-size:.3rem;z-index:999;background:#fff;width:98%}.details_con[data-v-dbdfc6be]{margin-top:1.2rem;padding:.2rem;background:#fff}.details_p[data-v-dbdfc6be]{font-size:.3rem}.details_img img[data-v-dbdfc6be]{width:100%;height:100%}\",\"\"])}});"}