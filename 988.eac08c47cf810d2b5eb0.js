"use strict";(self.webpackChunksamples=self.webpackChunksamples||[]).push([[988],{988:(P,g,r)=>{r.r(g),r.d(g,{TicTacToeModule:()=>Z});var s=r(583),d=r(353),e=r(639);function p(t,o){if(1&t&&(e.TgZ(0,"div",12),e.TgZ(1,"span"),e._uU(2,"Instead of: "),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.qZA(),e.qZA()),2&t){const n=e.oxw();e.xp6(4),e.Oqu(n.currentPlayer)}}function T(t,o){1&t&&(e.TgZ(0,"div",12),e.TgZ(1,"span"),e._uU(2,"End game"),e.qZA(),e.qZA())}function f(t,o){1&t&&e.GkF(0)}const u=function(t){return{value:t}};function h(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"td",15),e.NdJ("click",function(){const a=e.CHM(n).$implicit;return e.oxw(2).onClick(a)}),e.YNc(1,f,1,0,"ng-container",16),e.qZA()}if(2&t){const n=o.$implicit,c=e.oxw(2),i=e.MAs(31);e.xp6(1),e.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",e.VKq(2,u,c.getLabel(n)))}}function m(t,o){if(1&t&&(e.TgZ(0,"tr",13),e.YNc(1,h,2,4,"td",14),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.Q6J("ngForOf",n)}}function C(t,o){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const n=o.value;e.ekj("game__col--x","X"===n)("game__col--o","O"===n),e.xp6(1),e.Oqu(n)}}const O=[{path:"",component:(()=>{class t{constructor(){this.data=this.instanceData(),this.currentPlayer="X",this.playerX=[],this.playerO=[],this.hasWinner=!1,this.score={x:0,o:0},this.validGame=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[7,5,3]]}onClick(n){const c=this.playerX.find(_=>_===n),i=this.playerO.find(_=>_===n);if(c||i||this.hasWinner)return;const a="X"===this.currentPlayer,l=a?this.playerX:this.playerO;l.push(n),this.hasWinner=this.isWinner(l),this.hasWinner?a?this.score.x+=1:this.score.o+=1:this.currentPlayer=a?"O":"X"}getLabel(n){return this.playerX.find(a=>a===n)?"X":this.playerO.find(a=>a===n)?"O":""}resetGame(){this.data=this.instanceData(),this.playerX=[],this.playerO=[],this.hasWinner=!1,this.currentPlayer="X"}isWinner(n){return!!this.validGame.find(i=>n.includes(i[0])&&n.includes(i[1])&&n.includes(i[2]))}instanceData(){return[[1,2,3],[4,5,6],[7,8,9]]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-tic-tac-toe"]],decls:32,vars:9,consts:[[1,"header"],[1,"score"],[1,"score__data"],["class","score__info",4,"ngIf"],[1,"game"],["class","game__row",4,"ngFor","ngForOf"],[1,"footer"],[1,"footer__reset"],[3,"click"],[1,"footer__info"],["href","https://www.google.com/search?q=tic-tac-toe","target","_blanck"],["inner",""],[1,"score__info"],[1,"game__row"],["class","game__col",3,"click",4,"ngFor","ngForOf"],[1,"game__col",3,"click"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,c){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"h1"),e._uU(2,"Tic Tac Toe"),e.qZA(),e.qZA(),e.TgZ(3,"div",1),e.TgZ(4,"div",2),e.TgZ(5,"div"),e.TgZ(6,"span"),e._uU(7,"X"),e.qZA(),e.TgZ(8,"span"),e._uU(9),e.qZA(),e.qZA(),e.TgZ(10,"div"),e.TgZ(11,"span"),e._uU(12,"O"),e.qZA(),e.TgZ(13,"span"),e._uU(14),e.qZA(),e.qZA(),e.qZA(),e.YNc(15,p,5,1,"div",3),e.YNc(16,T,3,0,"div",3),e.qZA(),e.TgZ(17,"div",4),e.TgZ(18,"table"),e.TgZ(19,"tbody"),e.YNc(20,m,2,1,"tr",5),e.qZA(),e.qZA(),e.qZA(),e.TgZ(21,"div",6),e.TgZ(22,"div",7),e.TgZ(23,"span",8),e.NdJ("click",function(){return c.resetGame()}),e._uU(24,"restart game"),e.qZA(),e.qZA(),e.TgZ(25,"div",9),e.TgZ(26,"span"),e._uU(27,"Inspired by Google's tic tac toe. "),e.TgZ(28,"a",10),e._uU(29,"See here!"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(30,C,2,5,"ng-template",null,11,e.W1O)),2&n&&(e.xp6(5),e.ekj("active","X"===c.currentPlayer),e.xp6(4),e.Oqu(c.score.x),e.xp6(1),e.ekj("active","O"===c.currentPlayer),e.xp6(4),e.Oqu(c.score.o),e.xp6(1),e.Q6J("ngIf",!c.hasWinner),e.xp6(1),e.Q6J("ngIf",c.hasWinner),e.xp6(4),e.Q6J("ngForOf",c.data))},directives:[s.O5,s.sg,s.tP],styles:[".header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;color:#14bdac}.score[_ngcontent-%COMP%]{color:#545454;display:flex;flex-direction:column;align-items:center}.score__data[_ngcontent-%COMP%]{display:flex}.score__data[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{border-radius:4px;padding:10px 20px;margin:5px;width:100px;display:flex;justify-content:space-between;border-bottom:1px solid #545454}.score__data[_ngcontent-%COMP%]   div.active[_ngcontent-%COMP%]{border-color:#3fa293;box-shadow:0 4px 5px #00000029}.score__info[_ngcontent-%COMP%]{width:90px;margin-top:20px;display:flex;justify-content:space-between}.score__info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{color:#3fa293;font-weight:bold}.game[_ngcontent-%COMP%]{padding:50px 0;display:flex;align-items:center;flex-direction:column;justify-content:center;background-color:#14bdac}.game__row[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%]{border-bottom:6px solid #3fa293}.game__row[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]{border-top:6px solid #3fa293}.game__col[_ngcontent-%COMP%]{width:120px;height:120px;cursor:pointer;font-size:50px;font-weight:bold;text-align:center}.game__col[_ngcontent-%COMP%]:first-child{border-right:6px solid #3fa293}.game__col[_ngcontent-%COMP%]:last-child{border-left:6px solid #3fa293}.game__col--x[_ngcontent-%COMP%]{color:#545454}.game__col--o[_ngcontent-%COMP%]{color:#f2ebd3}.footer[_ngcontent-%COMP%]{text-align:center}.footer__reset[_ngcontent-%COMP%]{padding:30px 0}.footer__reset[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#14bdac;font-size:20px;cursor:pointer;font-weight:bold;text-transform:uppercase}.footer__reset[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{text-decoration:underline}.footer__info[_ngcontent-%COMP%]{color:#545454}.footer__info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3fa293;text-decoration:none}.footer__info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}"]}),t})()}];let x=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.Bz.forChild(O)],d.Bz]}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.ez,x]]}),t})()}}]);