"use strict";(self["webpackChunkyy2"]=self["webpackChunkyy2"]||[]).push([[983],{5983:function(e,l,a){a.r(l),a.d(l,{default:function(){return H}});var o=a(2876),t=(a(2278),a(5185)),n=(a(3349),a(6907)),s=(a(4746),a(5267)),i=(a(1645),a(3164)),r=(a(6335),a(7961)),u=(a(1605),a(1116)),d=(a(8825),a(294)),c=(a(6870),a(8480)),m=(a(5590),a(2406)),w=(a(6615),a(6252));const h={class:"content_useHome"},f={style:{"--van-nav-bar-icon-color":"#f19290"}},v={style:{display:"flex","justify-content":"center","align-items":"center",transform:"translateY(10px)"}},p={style:{"z-index":"2",transform:"translate(0vw, 1vh)"}},g=(0,w._)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no"},null,-1),b={style:{margin:"16px",transform:"translate(0vw, 0.8vh)"}};function y(e,l,a,y,k,V){const _=m.l2,W=c.Ee,U=d.JO,x=u.gb,H=r.Qm,L=i.gN,S=s.TS,C=n.zx,T=t.l0,j=o.Vq;return(0,w.wg)(),(0,w.iD)("div",h,[(0,w._)("div",f,[(0,w.Wm)(_,{title:"注册用户信息","left-text":"","left-arrow":"",onClickLeft:y.onClickLeft},null,8,["onClickLeft"])]),(0,w._)("div",v,[(0,w.Wm)(W,{width:"80%",height:"80%",fit:"cover",position:"center",src:y.image},null,8,["src"])]),y.isLoading?((0,w.wg)(),(0,w.j4)(x,{key:0,vertical:"",class:"loading-overlay"},{icon:(0,w.w5)((()=>[(0,w.Wm)(U,{name:"star-o",size:"30"})])),default:(0,w.w5)((()=>[(0,w.Uk)(" 加载中... ")])),_:1})):(0,w.kq)("",!0),(0,w._)("div",p,[(0,w.Wm)(T,{onSubmit:y.onSubmit},{default:(0,w.w5)((()=>[g,(0,w.Wm)(H,{modelValue:y.fileList,"onUpdate:modelValue":l[0]||(l[0]=e=>y.fileList=e),"after-read":y.afterRead,"upload-text":"上传头像"},null,8,["modelValue","after-read"]),(0,w.Wm)(S,{inset:""},{default:(0,w.w5)((()=>[(0,w.Wm)(L,{modelValue:y.keyword,"onUpdate:modelValue":l[1]||(l[1]=e=>y.keyword=e),name:"用户名",label:"🦄注册密钥",placeholder:"注册密钥(必填)",clearable:""},null,8,["modelValue"]),(0,w.Wm)(L,{modelValue:y.username,"onUpdate:modelValue":l[2]||(l[2]=e=>y.username=e),name:"更改用户名",label:"🧩用户名",placeholder:"用户名（必填）",clearable:""},null,8,["modelValue"]),(0,w.Wm)(L,{modelValue:y.desc,"onUpdate:modelValue":l[3]||(l[3]=e=>y.desc=e),name:"更改用户详情",label:"📝用户详情",type:"textarea",rows:"2",placeholder:"用户详情（选填）",clearable:""},null,8,["modelValue"]),(0,w.Wm)(L,{modelValue:y.password,"onUpdate:modelValue":l[4]||(l[4]=e=>y.password=e),type:"password",name:"注册密码",label:"💥注册密码",placeholder:"用户密码（必填）",clearable:""},null,8,["modelValue"])])),_:1}),(0,w._)("div",b,[(0,w.Wm)(C,{round:"",block:"",color:"#F19290","native-type":"submit"},{default:(0,w.w5)((()=>[(0,w.Uk)(" 提交 ")])),_:1})])])),_:1},8,["onSubmit"])]),(0,w.Wm)(j,{show:y.show,"onUpdate:show":l[5]||(l[5]=e=>y.show=e),title:"😭提示",message:"注册密钥错误！"},null,8,["show"]),(0,w.Wm)(j,{show:y.show_1,"onUpdate:show":l[6]||(l[6]=e=>y.show_1=e),title:"🥰恭喜",message:"注册成功！",width:"70vw",height:"30vw","show-cancel-button":!1,"show-confirm-button":!1},null,8,["show"]),(0,w.Wm)(j,{show:y.show_2,"onUpdate:show":l[7]||(l[7]=e=>y.show_2=e),title:"😭提示",message:"请完整填好上述信息！"},null,8,["show"])])}var k=a(2262),V=a(2518),_=a(2119),W={setup(){const e=(0,w.f3)("loginLock");console.log(e.value);const l=[V],a=(0,_.tv)(),o=(0,k.iH)(!1),t=(0,k.iH)(!1),n=(0,k.iH)(!1),s=()=>a.replace("/login"),i=(0,k.iH)(!1),r=(0,k.iH)(""),u=(0,k.iH)(""),d=(0,k.iH)(""),c=(0,k.iH)(""),m=(0,k.iH)([]);let h=(0,k.iH)("");const f=e=>{e.status="uploading",e.message="上传中...";const l=new FormData;l.append("file",e.file),fetch("/api/upload",{method:"POST",body:l}).then((e=>e.json())).then((l=>{h.value=l.data,e.message="上传成功",e.status=""})).catch((e=>{console.error("上传失败：",e)}))},v=()=>{if(r.value!=e.value)return void(o.value=!0);if(""==d.value&&(d.value="😂这个人很懒，没有填写相关的用户详情！"),""==u.value||""==c.value||""==h.value)return void(n.value=!0);const l={signPassword:r.value,name:u.value,userImage:h.value,userText:d.value,password:c.value};i.value=!0,fetch("/api/addUser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then((e=>{console.log(e.data);try{t.value=!0,setTimeout((()=>{a.replace("/login")}),2e3)}catch(l){console.error("请求addUser接口失败",l)}})).catch((e=>{console.error("请求requireUser接口失败",e)})),i.value=!1};return{image:l,show:o,show_1:t,show_2:n,keyword:r,onClickLeft:s,username:u,desc:d,password:c,onSubmit:v,isLoading:i,fileList:m,afterRead:f}}},U=a(3744);const x=(0,U.Z)(W,[["render",y]]);var H=x},2518:function(e,l,a){e.exports=a.p+"img/useAdd.d67ec7fd.gif"},6870:function(e,l,a){a(1958),a(368),a(6742)},5590:function(e,l,a){a(1958),a(368),a(6742),a(7179)}}]);
//# sourceMappingURL=983.f437f1b1.js.map