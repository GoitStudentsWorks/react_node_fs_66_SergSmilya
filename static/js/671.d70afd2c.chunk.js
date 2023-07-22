"use strict";(self.webpackChunkproject_team_developer_007_react=self.webpackChunkproject_team_developer_007_react||[]).push([[671],{4635:function(e,n,i){i.d(n,{N:function(){return o}});var t="mainPage_title__NkTqx",r="mainPage_firstGreen__OVjdr",s="mainPage_black__JMHNO",a="mainPage_lastGreen__7VLZZ",c=i(184),d=function(e){var n=e.text;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h1",{className:t,children:n}),(0,c.jsx)("svg",{className:r,width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("rect",{y:"2.84525",width:"8",height:"8",rx:"3",transform:"rotate(-25 0 2.84525)",fill:"#8BAA36"})}),(0,c.jsx)("svg",{className:s,width:"7",height:"7",viewBox:"0 0 7 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("rect",{y:"2",width:"6",height:"6",rx:"3",transform:"rotate(-25 0 2)",fill:"#22252A"})}),(0,c.jsx)("svg",{className:a,width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("rect",{y:"2.84525",width:"8",height:"8",rx:"3",transform:"rotate(-25 0 2.84525)",fill:"#8BAA36"})})]})},l="SectionTitle_container__zSlOi",o=function(e){var n=e.text;return(0,c.jsx)("div",{className:l,children:(0,c.jsx)(d,{text:n})})}},8671:function(e,n,i){i.r(n),i.d(n,{default:function(){return ie}});var t=i(4942),r=i(1413),s=i(3433),a=i(9439),c=i(2791),d=i(7689),l=i(9434),o=i(8816),u=i(5984),p=i(5264),g=i(8007),m=g.Ry().shape({img:g.Z_().required("Image is required"),title:g.Z_().typeError("Should be a string").required("Title is required"),description:g.Z_().typeError("Should be a string").required("Description is required"),cookingTime:g.Z_(),category:g.Z_(),ingredients:g.IX().of(g.Ry({name:g.Z_().required("Ingredient name is required"),ingredientsQuantity:g.Z_().required("Ingredient quantity is required"),ingredientsQuantityMeasure:g.Z_(),id:g.Z_()})).required("Ingredients is required"),preparation:g.Z_().required("Preparation text is required")}),_="RecipeDescriptionFields_descriptionFieldWrapper__OllyZ",h="RecipeDescriptionFields_imgWrapper__PThwi",A="RecipeDescriptionFields_imgInput__hs24V",x="RecipeDescriptionFields_mockImg__LkiOa",f="RecipeDescriptionFields_recipeImg__NeH-m",j="RecipeDescriptionFields_inputBox__S5ETY",v="RecipeDescriptionFields_inputRaw__4EWRb",N="RecipeDescriptionFields_selectBox__Zi2-P",I="RecipeDescriptionFields_selectLabel__Hx9Qt",R="RecipeDescriptionFields_selectVariantsBox__M1-9-",F="RecipeDescriptionFields_arrow__s+6oQ",C="RecipeDescriptionFields_selectVariants__xv5ae",y="RecipeDescriptionFields_selectList__nuUTP",w="RecipeDescriptionFields_selectItem__rRTPj",B="RecipeDescriptionFields_errorMsg__JCF6Y",Z="RecipeDescriptionFields_inputsWrapper__Jv0zK",Q=i(6856),b=i(2530),k=i(4666),T=i(184),P=function(){for(var e=[],n=5;n<=120;n+=5)e.push(n);return e}(),E=function(e){var n=e.title,i=e.description,t=e.time,r=e.category,s=e.onInputImgUpload,d=e.onTitleChange,o=e.onDescriptionChange,u=e.onTimeChange,p=e.onCategoryChange,g=e.errors,m=(0,l.I0)(),E=(0,l.v9)(b.us);(0,c.useEffect)((function(){m((0,k.p)())}),[m]);var S=(0,c.useState)(""),U=(0,a.Z)(S,2),D=U[0],L=U[1],M=(0,c.useState)(!1),q=(0,a.Z)(M,2),H=q[0],G=q[1],J=(0,c.useState)(!1),O=(0,a.Z)(J,2),W=O[0],z=O[1];return(0,T.jsxs)("div",{className:_,children:[(0,T.jsxs)("div",{className:h,onChange:function(e){return function(e){var n=e.target.files[0],i=new FileReader;i.addEventListener("load",(function(e){var i=e.target.result,t=new File([i],{type:n.type}),r=URL.createObjectURL(t);L(r)})),i.readAsArrayBuffer(n),s(e)}(e)},children:[(0,T.jsx)("label",{htmlFor:"dishImg",children:(0,T.jsx)("img",{className:x,src:"".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAABaUExURUdwTP////r6+vj4+Pf39/v7+/r6+vr6+vf39/r6+vn5+fr6+vn5+fn5+fT09Pr6+vf39/r6+vr6+vr6+vn5+fz8/Pr6+vb29vn5+fn5+fj4+Pn5+fr6+vr6+pqn3MYAAAAddFJOUwAQ73AgQN/AQL9Qn6DfMGBgz1+Qf1AwcICvsLDQwKQItQAAAgtJREFUeNrtmtt24yAMRTGoOIAvcZyktzn//5vzkLW67NoxclugM9F5dYR2AMtISCmRSCQSiUTrOpjgbrJTPcctzczA3gZ5Nd0u973DukLcdrxj2h7Z7rsB0GP/dBNNxTGfGdBtkEtjgZZ4/k96Dy1/Vi30ieUfGKsU26oaAQYBabyk2tkv0PFVsBjTvVsjXHSl0FbpACqLY3QCjinDSx+bgivatAFOYzsiGU6o+Y4amG89/4E12P6HDk9pATzqsgAHARAAARAAARAAARAAAYgA+Hf2UOdp7n1mpybNT516zTz7f1aZdfpcfzjl9d8tKyCHHH7JacTkKKH/uHuAUwP4qhxYcskAeP6hSwNAALIB1BdS6nppCgEMH8UWsiUA3KSaVrn8APNqXjVkB6CNj0MOgLAVJXMA+GX1KS/AotxImQF2PvwPARbf/OujbcLFoaPJHYi6+y9BHoBhHort432MpveQ3VDoQBJ8pxR5J2fCxwHQpQGYqVn9LyenJmzeHFMdd19v+3/1UiUTAAEQAAEQAAEQAAH47QC+LEDyZrZYu17xdj6CrpICWFAs+Unc0jlEf1G4qVW5lLugYbSskuZfhe/VmZU3eiCkae0O4EUZn6S5veotNDPKkQXaYA4r4nhaMfMmaKDm5+39nzvJ9xtno90pW+ybVTJNvSLGHJo1u8aQEolEIpFItK6/PiSfvUakTWYAAAAASUVORK5CYII="),alt:"addphoto"})}),(0,T.jsx)("input",{className:A,type:"file",accept:".jpg, .jpeg, .png",id:"dishImg",name:"img"}),D&&(0,T.jsx)("img",{className:f,src:D,alt:"recipeImage"}),g.imgs&&(0,T.jsx)("p",{className:B,children:g.imgs})]}),(0,T.jsxs)("div",{className:Z,children:[(0,T.jsxs)("div",{className:j,children:[(0,T.jsx)("input",{className:v,type:"text",id:"title",name:"title",placeholder:"Enter item title",onChange:function(e){return d(e.target.value)},value:n}),g.title&&(0,T.jsx)("p",{className:B,children:g.title})]}),(0,T.jsxs)("div",{className:j,children:[(0,T.jsx)("input",{className:v,type:"text",id:"about",name:"description",placeholder:"Enter about recipe",onChange:function(e){return o(e.target.value)},value:i}),g.description&&(0,T.jsx)("p",{className:B,children:g.description})]}),(0,T.jsxs)("div",{className:N,onClick:function(){z(!W)},children:[(0,T.jsx)("div",{className:I,children:"Category"}),(0,T.jsxs)("div",{className:R,children:[(0,T.jsx)("span",{className:C,children:r}),(0,T.jsx)(Q.Ix0,{className:F,size:"18"})]}),W&&(0,T.jsx)("ul",{className:y,children:E.map((function(e,n){return(0,T.jsx)("li",{className:w,onClick:function(){return n=e.name,p(n),void z(!1);var n},children:e.name},e._id)}))})]}),(0,T.jsxs)("div",{className:N,onClick:function(){G(!H)},children:[(0,T.jsx)("div",{className:I,children:"Cooking time"}),(0,T.jsxs)("div",{className:R,children:[(0,T.jsxs)("span",{className:C,children:[t," min"]}),(0,T.jsx)(Q.Ix0,{className:F,size:"18"})]}),H&&(0,T.jsx)("ul",{className:y,children:P.map((function(e){return(0,T.jsx)("li",{className:w,onClick:function(){return n="".concat(e),u(n),void G(!1);var n},children:e},e)}))})]})]})]})},S=function(e){return e.ingredients.ingredientsList},U=i(7260),D={ingredientsFieldWrapper:"RecipeIngredientsFields_ingredientsFieldWrapper__7nfJt",subtitle:"RecipeIngredientsFields_subtitle__1ZGFR",subtitleWrapper:"RecipeIngredientsFields_subtitleWrapper__SfGmt",ingredientsCounter:"RecipeIngredientsFields_ingredientsCounter__nN9uc",counterBtn:"RecipeIngredientsFields_counterBtn__IkHfo",counterBtnIcon:"RecipeIngredientsFields_counterBtnIcon__qPiY0",counterValue:"RecipeIngredientsFields_counterValue__OM8mo",ingredientItem:"RecipeIngredientsFields_ingredientItem__HjtdF",ingredientNameField:"RecipeIngredientsFields_ingredientNameField__srmHQ",ingredientInputBox:"RecipeIngredientsFields_ingredientInputBox__5j0ek",ingredientNameInput:"RecipeIngredientsFields_ingredientNameInput__t8j40",selectIngredients:"RecipeIngredientsFields_selectIngredients__cTPG+",selectIngredientItem:"RecipeIngredientsFields_selectIngredientItem__IYGbG",ingredientQuantityField:"RecipeIngredientsFields_ingredientQuantityField__vGfAg",ingredientQuantityInput:"RecipeIngredientsFields_ingredientQuantityInput__4ivy3",selectBox:"RecipeIngredientsFields_selectBox__wSTHA",arrow:"RecipeIngredientsFields_arrow__0afm7",arrowIngr:"RecipeIngredientsFields_arrowIngr__2RFdn",selectLabel:"RecipeIngredientsFields_selectLabel__paEGl",selectQuantityList:"RecipeIngredientsFields_selectQuantityList__s8IwP",selectQuantityItem:"RecipeIngredientsFields_selectQuantityItem__qidO3",deleteBtn:"RecipeIngredientsFields_deleteBtn__dOAYE",deleteBtnIcon:"RecipeIngredientsFields_deleteBtnIcon__Yxm5n",errorMsg:"RecipeIngredientsFields_errorMsg__k3PKf"},L=function(e){var n=e.ingredients,i=e.incrIngredientFields,t=e.decrIngredientFields,r=e.deleteIngredient,d=e.updateIngredient,o=e.updateErrors,u=e.errors,p=(0,l.I0)(),g=(0,l.v9)(S);(0,c.useEffect)((function(){p((0,U.D)())}),[p]);var m=(0,c.useState)(g),_=(0,a.Z)(m,2),h=_[0],A=_[1],x=["tbs","tsp","kg","g","ml","pcs","to taste"],f=(0,c.useState)(1),j=(0,a.Z)(f,2),v=j[0],N=j[1],I=(0,c.useState)(new Array(n.length).fill("")),R=(0,a.Z)(I,2),F=R[0],C=R[1],y=(0,c.useState)(new Array(n.length).fill("")),w=(0,a.Z)(y,2),B=w[0],Z=w[1];return(0,T.jsxs)("div",{className:D.ingredientsFieldWrapper,children:[(0,T.jsxs)("div",{className:D.subtitleWrapper,children:[(0,T.jsx)("h3",{className:D.subtitle,children:"Ingredients"}),(0,T.jsxs)("div",{className:D.ingredientsCounter,children:[(0,T.jsx)("button",{className:D.counterBtn,type:"button",onClick:function(){0!==v&&(t(),N((function(e){return e-1})))},children:(0,T.jsx)(Q.eqC,{className:D.counterBtnIcon,size:"14"})}),(0,T.jsx)("p",{className:D.counterValue,children:v}),(0,T.jsx)("button",{className:D.counterBtn,type:"button",onClick:function(){i(),N((function(e){return e+1}))},children:(0,T.jsx)(Q.x06,{className:D.counterBtnIcon,size:"14"})})]})]}),(0,T.jsx)("ul",{className:D.ingredientsList,children:n.map((function(e,n){return(0,T.jsxs)("li",{className:D.ingredientItem,children:[(0,T.jsxs)("div",{className:D.ingredientNameField,children:[(0,T.jsxs)("div",{children:[(0,T.jsxs)("div",{className:D.ingredientInputBox,children:[(0,T.jsx)("input",{name:"ingredients",className:D.ingredientNameInput,autoFocus:!0,value:e.name,onChange:function(e){return function(e,n,i){Z((function(n){var i=(0,s.Z)(n);return i[e]=!0,i})),A(g.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){return e.name}))),d(e,n,i,"name"),o(["ingredients[".concat(e,"]")])}(n,e.target.value,g[n]._id)}}),(0,T.jsx)(Q.Ix0,{className:D.arrowIngr,size:"18"})]}),u["ingredients[".concat(n,"]")]&&(0,T.jsx)("p",{className:D.errorMsg,children:u["ingredients[".concat(n,"]")]}),B[n]&&(0,T.jsx)("ul",{className:D.selectIngredients,children:h.map((function(i){return(0,T.jsx)("li",{className:D.selectIngredientItem,onClick:function(){return function(e,n,i){var t=g.find((function(e){return e.name===n}));d(e,n,t._id,"name"),Z((function(n){var i=(0,s.Z)(n);return i[e]=!1,i}))}(n,i,e._id)},children:i},i)}))})]}),(0,T.jsxs)("div",{className:D.ingredientQuantityField,children:[(0,T.jsx)("input",{className:D.ingredientQuantityInput,type:"number",value:e.ingredientsQuantity,onChange:function(i){return function(e,n,i){d(e,n,i,"ingredientsQuantity"),o(["ingredients[".concat(e,"].ingredientQuantity")])}(n,i.target.value,e.id)}}),(0,T.jsxs)("div",{className:D.selectBox,onClick:function(){return function(e){C((function(n){var i=(0,s.Z)(n);return i[e]=!i[e],i}))}(n)},children:[(0,T.jsx)("span",{className:D.selectLabel,children:e.ingredientsQuantityMeasure}),(0,T.jsx)(Q.Ix0,{className:D.arrow,size:"18"})]}),F[n]&&(0,T.jsx)("ul",{className:D.selectQuantityList,children:x.map((function(i){return(0,T.jsx)("li",{className:D.selectQuantityItem,onClick:function(){return function(e,n,i){C((function(n){var i=(0,s.Z)(n);return i[e]=!i[e],i})),d(e,n,i,"ingredientsQuantityMeasure")}(n,i,e.id)},children:i},i)}))}),u["ingredients[".concat(n,"].ingredientsQuantity")]&&(0,T.jsxs)("p",{className:D.errorMsg,children:[" ",u["ingredients[".concat(n,"].ingredientsQuantity")]," "]})]})]}),(0,T.jsx)("button",{className:D.deleteBtn,type:"button",onClick:function(){return function(e,n){console.log(e,n),r(e),N((function(e){return e-1})),Z((function(e){var i=(0,s.Z)(e);return i[n]=!1,i}))}(e.id,n)},children:(0,T.jsx)(Q.lTq,{className:D.deleteBtnIcon,size:"18px"})})]},e.id)}))})]})},M={subtitle:"RecipePreparationFields_subtitle__5jg8a",recipeTextarea:"RecipePreparationFields_recipeTextarea__gE981",errorText:"RecipePreparationFields_errorText__viRuP"},q=function(e){var n=e.onPreparationTextChange,i=(e.preparation,e.errors),t=(0,c.useState)(""),r=(0,a.Z)(t,2),s=r[0],d=r[1];return(0,T.jsxs)("div",{className:M.preparationFieldWrapper,children:[(0,T.jsx)("h3",{className:M.subtitle,children:"Recipe Preparation"}),(0,T.jsx)("textarea",{className:M.recipeTextarea,name:"instructions",id:"instructions",placeholder:"Enter recipe",onKeyDown:function(e){var i=s;"Enter"===e.key&&(i=s.split("\n").join(", ")),n(i)},onChange:function(e){d(e.target.value)},value:s}),i.preparation&&(0,T.jsx)("p",{className:M.errorText,children:i.preparation})]})},H={addSectionWrap:"AddRecipeComponents_addSectionWrap__cl+na",addRecipeForm:"AddRecipeComponents_addRecipeForm__VEcmL",addButton:"AddRecipeComponents_addButton__caTT4",socialsWrapper:"AddRecipeComponents_socialsWrapper__aanky",subtitle:"AddRecipeComponents_subtitle__Qt+Kw",popularRecipesList:"AddRecipeComponents_popularRecipesList__TrCDl",popularRecipesItem:"AddRecipeComponents_popularRecipesItem__Q2PZK",popularRecipesLink:"AddRecipeComponents_popularRecipesLink__I+PD+",recipePreview:"AddRecipeComponents_recipePreview__H0kJa",popularRecipeSubtitle:"AddRecipeComponents_popularRecipeSubtitle__8ngnR",popularRecipeText:"AddRecipeComponents_popularRecipeText__OtUqX",notFoundText:"AddRecipeComponents_notFoundText__HsX5I",list:"AddRecipeComponents_list__DKfjr",item:"AddRecipeComponents_item__x4YSk",soc_icon:"AddRecipeComponents_soc_icon__5ZqKF"},G=function(){var e=(0,c.useState)(""),n=(0,a.Z)(e,2),i=n[0],g=n[1],_=(0,c.useState)(""),h=(0,a.Z)(_,2),A=h[0],x=h[1],f=(0,c.useState)(""),j=(0,a.Z)(f,2),v=j[0],N=j[1],I=(0,c.useState)("Breakfast"),R=(0,a.Z)(I,2),F=R[0],C=R[1],y=(0,c.useState)("30"),w=(0,a.Z)(y,2),B=w[0],Z=w[1],Q=(0,c.useState)([{id:(0,u.x0)(),ingredientsQuantity:0,ingredientsQuantityMeasure:"tbs",name:""}]),b=(0,a.Z)(Q,2),k=b[0],P=b[1],S=(0,c.useState)(""),U=(0,a.Z)(S,2),D=U[0],M=U[1],G=(0,c.useState)({}),J=(0,a.Z)(G,2),O=J[0],W=J[1],z=(0,d.s0)(),V=(0,c.useMemo)((function(){return k.map((function(e){var n=e.id,i=e.ingredientsQuantity,t=e.ingredientsQuantityMeasure;return{measure:"".concat(i," ").concat(t),_id:n}}))}),[k]),Y={img:i,title:A,description:v,cookingTime:B,category:F,ingredients:k,preparation:D},K=new FormData;K.append("preview",i),K.append("title",A),K.append("description",v),K.append("category",F),K.append("time","".concat(B)),K.append("ingredients",JSON.stringify(V)),K.append("instructions",D);var X=(0,l.I0)(),$=function(e){W((function(n){return(0,r.Z)((0,r.Z)({},n),{},(0,t.Z)({},e,""))}))};return(0,T.jsx)("div",{className:H.addSectionWrap,children:(0,T.jsxs)("form",{className:H.addRecipeForm,onSubmit:function(e){e.preventDefault(),m.validate(Y,{abortEarly:!1}).then((function(){X((0,o.C0)(K)).unwrap().then((function(){z("/my",{replace:!0}),p.Notify.success("Hooray! The recipe was successfully added")})).catch((function(e){p.Notify.failure("Ooops, smth is going wrong... Try again!")}))})).catch((function(e){var n=e.inner.reduce((function(e,n){return(0,r.Z)((0,r.Z)({},e),{},(0,t.Z)({},n.path,n.message))}),{});W(n)}))},children:[(0,T.jsx)(E,{title:A,description:v,time:B,category:F,onInputImgUpload:function(e){g(e.target.files[0]),$("img")},onTitleChange:function(e){x(e),$("title")},onDescriptionChange:function(e){N(e),$("description")},onCategoryChange:function(e){C(e)},onTimeChange:function(e){Z("".concat(e))},errors:O}),(0,T.jsx)(L,{ingredients:k,incrIngredientFields:function(){P((function(e){return[].concat((0,s.Z)(e),[{id:(0,u.x0)(),ingredientsQuantity:0,ingredientsQuantityMeasure:"tbs",name:""}])}))},decrIngredientFields:function(){var e=k[k.length-1];P((function(n){return n.filter((function(n){return n.id!==e.id}))}))},deleteIngredient:function(e){P(k.filter((function(n){return n.id!==e})))},updateIngredient:function(e,n,i,t){P((function(r){var a=(0,s.Z)(r);return a[e][t]=n,a[e].id=i,a}))},updateErrors:$,errors:O}),(0,T.jsx)(q,{onPreparationTextChange:function(e){M(e),$("preparation")},preparation:D,errors:O}),(0,T.jsx)("button",{className:H.addButton,type:"submit",children:"Add"})]})})},J=i(5125),O=function(){return(0,T.jsxs)("div",{className:H.socialsWrapper,children:[(0,T.jsx)("h3",{className:H.subtitle,children:" Follow us "}),(0,T.jsx)("div",{className:H.followUsBlock,children:(0,T.jsxs)("ul",{className:H.list,children:[(0,T.jsx)("li",{className:H.item,children:(0,T.jsx)("a",{href:" ",children:(0,T.jsx)("svg",{width:"26",height:"26",className:H.soc_icon,children:(0,T.jsx)("use",{href:J.Z+"#face"})})})}),(0,T.jsx)("li",{className:H.item,children:(0,T.jsx)("a",{href:" ",children:(0,T.jsx)("svg",{width:"28",height:"22",className:H.soc_icon,children:(0,T.jsx)("use",{href:J.Z+"#youtube"})})})}),(0,T.jsx)("li",{className:H.item,children:(0,T.jsx)("a",{href:" ",children:(0,T.jsx)("svg",{width:"25",height:"22",className:H.soc_icon,children:(0,T.jsx)("use",{href:J.Z+"#twitter"})})})}),(0,T.jsx)("li",{className:H.item,children:(0,T.jsx)("a",{href:" ",children:(0,T.jsx)("svg",{width:"24",height:"24",className:H.soc_icon,children:(0,T.jsx)("use",{href:J.Z+"#insta"})})})})]})})]})},W=function(e){return e.popularRecipes.popularRecipes},z=i(3397),V=i(1087);function Y(){var e=(0,l.I0)(),n=(0,l.v9)(W),i=(null===n||void 0===n?void 0:n.recipes)||[];return(0,c.useEffect)((function(){e((0,z.T)())}),[e]),(0,T.jsxs)("div",{children:[(0,T.jsx)("h3",{className:H.subtitle,children:"Popular recipe"}),i.length>0?(0,T.jsx)("ul",{className:H.popularRecipesList,children:i.map((function(e){return(0,T.jsx)("li",{className:H.popularRecipesItem,children:(0,T.jsxs)(V.rU,{to:"/recipe/".concat(e._id),className:H.popularRecipesLink,children:[(0,T.jsx)("img",{src:e.preview||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAABFUExURUdwTPn5+fr6+vj4+Pf39/r6+vr6+vf39/r6+vn5+fn5+fr6+vv7+/f39/////n5+fn5+fb29vr6+vr6+vn5+fz8/Pr6+n8EUKgAAAAWdFJOUwCAkHBA778g3+DfwEBgEFB/cF+foFAThhDgAAAA/UlEQVRYw+2X6w7CIAyFBVrKYOyqvP+jaoxhEUhcISbGcP6Nwpe1sO5wuXT9l6ZFmyhIo/MR05JK65URI0Xl8SM2XnEtrLd0/mXJZARC4qRLdkpGxM4rmBTJgB55ANDJwEA8AJkO6IBvAG6lWUt4ainFzhx9FV5a+d1pw5DIbiyACZmQBQgFVQGcFK4BgM9SA1YDXlsFtQAX+10lIPZNWQmQsWVXAnRrCgEaixgQGrfxkYWQuukkVh9lzNfbD/+690effY7oE8PRu3IH/CRAA9PmudRoSh7gqlKrbplWN5vueWZblez+DufsPkjji1jlhqg5q9oRc2Lq17M/0x1koh1YeifJIwAAAABJRU5ErkJggg==",alt:"popularDish",className:H.recipePreview}),(0,T.jsxs)("div",{children:[(0,T.jsx)("h5",{className:H.popularRecipeSubtitle,children:e.title}),(0,T.jsx)("p",{className:H.popularRecipeText,children:e.instructions})]})]})},e._id)}))}):(0,T.jsx)("p",{className:H.notFoundText,children:"There are no popular recipes yet"})]})}var K="AddRecipePage_wrapper__8rLIM",X="AddRecipePage_pageContent__6accz",$="AddRecipePage_formContainer__TEeEs",ee="AddRecipePage_sidebar__1uoTZ",ne=i(4635),ie=function(){var e=(0,d.TH)().pathname;return(0,c.useEffect)((function(){window.scrollTo(0,0)}),[e]),(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(ne.N,{text:"Add recipe"}),(0,T.jsx)("div",{className:K,children:(0,T.jsx)("section",{className:X,children:(0,T.jsxs)("div",{className:$,children:[(0,T.jsx)(G,{}),(0,T.jsxs)("div",{className:ee,children:[(0,T.jsx)(O,{}),(0,T.jsx)(Y,{})]})]})})})]})}}}]);
//# sourceMappingURL=671.d70afd2c.chunk.js.map