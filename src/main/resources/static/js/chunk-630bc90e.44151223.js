(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-630bc90e"],{"808e":function(e,t,a){},b8f3:function(e,t,a){"use strict";var r=a("808e"),i=a.n(r);i.a},c45a:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"table-title"},[a("Icon",{attrs:{type:"ios-bug",color:"rgb(7, 1, 1)",size:"20"}}),e._v("\n    故障管理\n  ")],1),a("Table",{attrs:{stripe:"",columns:e.tableColumns,data:e.tableData}}),a("div",{staticClass:"pageSelect"},[a("Page",{attrs:{total:e.tableTotal}})],1)],1)},i=[],n={name:"ErrorManage",data:function(){return{tableColumns:[{type:"index",width:60,align:"center",title:"序号"},{title:"充电桩名称",key:"name",align:"center"},{title:"充电桩编号",align:"center",key:"index"},{title:"告警代码",align:"center",key:"code"},{title:"告警时间",align:"center",key:"time"},{title:"故障单号",align:"center",key:"order"},{title:"派单与否",align:"center",key:"isOrder"},{title:"备注",align:"center",key:"rewrite"}],tableData:[{name:"大平",index:"001",code:"F004",time:"2019-03-21 09:00:00",order:"122344998",isOrder:"是",rewrite:"直流输出过流"},{name:"屋山",index:"002",code:"F004",time:"2019-03-21 12:04:00",order:"122344456",isOrder:"是",rewrite:"直流输出过流"},{name:"灵芝",index:"003",code:"F001",time:"2019-03-21 14:23:10",order:"122341234",isOrder:"是",rewrite:"交流输出过流"},{name:"大学城",index:"005",code:"F001",time:"2019-03-22 08:40:00",order:"122355912",isOrder:"是",rewrite:"交流输出过流"},{name:"宝安",index:"005",code:"F004",time:"2019-03-22 22:30:01",order:"122341212",isOrder:"是",rewrite:"直流输出过流"}]}},computed:{tableTotal:function(){return this.tableData.length}},mounted:function(){this.createdData()},methods:{createdData:function(){for(var e=0;e<1;e++)this.tableData=this.tableData.concat(this.tableData)}}},l=n,c=(a("b8f3"),a("17cc")),o=Object(c["a"])(l,r,i,!1,null,"ae145a16",null);t["default"]=o.exports}}]);