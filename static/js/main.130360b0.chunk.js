(this["webpackJsonpiteam-test"]=this["webpackJsonpiteam-test"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),s=a.n(c),l=(a(14),a(5)),i=a(1),o=a(2),m=a(4),u=a(3),d=(a(15),a(16),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={firstPlayerName:"",secondPlayerName:""},e.updateName=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(l.a)({},n,r))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.addNames,t=this.state,a=t.firstPlayerName,n=t.secondPlayerName;return r.a.createElement("div",{className:"modalContainer"},r.a.createElement("div",{className:"modalWindow window"},r.a.createElement("form",{className:"enter-nicknames-form",onSubmit:function(e){e.preventDefault()}},r.a.createElement("div",{className:"enter-nicknames-form__title"},"Please, enter nicknames"),r.a.createElement("input",{type:"text",name:"firstPlayerName",className:"enter-nicknames-form__first-player-name",placeholder:"Enter first player name",value:a,onChange:this.updateName}),r.a.createElement("input",{type:"text",name:"secondPlayerName",className:"enter-nicknames-form__second-player-name",placeholder:"Enter second player name",value:n,onChange:this.updateName}),r.a.createElement("button",{type:"submit",className:"enter-nicknames-form__submit-button",onClick:function(){return e(a,n)}},"Add names"))))}}]),a}(r.a.PureComponent)),f=(a(17),function(e){var t=e.firstPlayerName,a=e.secondPlayerName,n=e.firstPlayerWins,c=e.secondPlayerWins;return r.a.createElement("div",{className:"score"},r.a.createElement("div",{className:"score__title"},"Score:"),r.a.createElement("div",{className:"score__first-player"},"".concat(t,": ").concat(n)),r.a.createElement("div",{className:"score__second-player"},"".concat(a,": ").concat(c)))}),y=a(8),p=(a(18),a(21)),N=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={field:Array(9).fill(null),count:0},e.clickCell=function(t){var a=t.target.name,n=e.state,r=n.field,c=n.count,s=Object(y.a)(r);null===s[a]&&(s[a]=c%2===0?"X":"O",e.setState((function(e){return{count:e.count+1,field:s}})))},e.isWinner=function(){for(var t=e.state,a=t.field,n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=t.count%2===0?"O":"X",c=0;c<8;c+=1){var s=n[c];if(a[s[0]]===r&&a[s[1]]===r&&a[s[2]]===r)return e.props.updateScore(r),void e.clearBoard()}a.includes(null)||(alert("Draw"),e.clearBoard())},e.clearBoard=function(){e.setState({field:Array(9).fill(null),count:0})},e}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;t.field!==this.state.field&&setTimeout((function(){return a.isWinner()}),0)}},{key:"render",value:function(){var e=this,t=this.state.field;return r.a.createElement("div",{className:"tic-tac-toe"},t.map((function(a,n){return r.a.createElement("button",{type:"button",className:"tic-tac-toe__cell",name:n,onClick:e.clickCell,key:Object(p.a)()},t[n])})))}}]),a}(r.a.PureComponent),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={firstPlayerName:"",secondPlayerName:"",firstPlayerWins:0,secondPlayerWins:0},e.addNames=function(t,a){e.setState({firstPlayerName:t,secondPlayerName:a})},e.updateScore=function(t){var a=e.state,n=a.firstPlayerName,r=a.secondPlayerName,c="X"===t?"firstPlayerWins":"secondPlayerWins";alert("".concat("X"===t?n:r," won!")),e.setState((function(e){return Object(l.a)({},c,e[c]+1)}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.firstPlayerName,a=e.secondPlayerName,n=e.firstPlayerWins,c=e.secondPlayerWins;return r.a.createElement("div",{className:"section"},(!t||!a)&&r.a.createElement(d,{addNames:this.addNames}),r.a.createElement(N,{updateScore:this.updateScore}),r.a.createElement(f,{firstPlayerName:t,secondPlayerName:a,firstPlayerWins:n,secondPlayerWins:c}))}}]),a}(r.a.PureComponent);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.130360b0.chunk.js.map