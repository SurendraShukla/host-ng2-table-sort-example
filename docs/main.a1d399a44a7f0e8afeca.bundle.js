webpackJsonp([1,4],{1061:function(t,e,n){t.exports=n(499)},354:function(t,e,n){"use strict";var o=n(1),r=n(336);n.d(e,"a",function(){return f});var a=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var f=t.length-1;f>=0;f--)(r=t[f])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(){function t(t){this.http=t}return t.prototype.getUserDetails=function(){return this.http.get("https://jsonplaceholder.typicode.com/posts").map(function(t){return t.json()})},t=a([n.i(o.Injectable)(),i("design:paramtypes",["function"==typeof(e=void 0!==r.b&&r.b)&&e||Object])],t);var e}()},498:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=498},499:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(586),r=n(1),a=n(608),i=n(607);a.a.production&&n.i(r.enableProdMode)(),n.i(o.a)().bootstrapModule(i.a)},606:function(t,e,n){"use strict";var o=n(1),r=n(354);n.d(e,"a",function(){return f});var a=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var f=t.length-1;f>=0;f--)(r=t[f])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(){function t(t){var e=this;this.appService=t,this.title="Displaying all posts!!!",this.noOfRowsToDisplay=50,t.getUserDetails().subscribe(function(t){e.data=t})}return t=a([n.i(o.Component)({selector:"app-root",template:n(764),styles:[n(763)]}),i("design:paramtypes",["function"==typeof(e=void 0!==r.a&&r.a)&&e||Object])],t);var e}()},607:function(t,e,n){"use strict";var o=n(228),r=n(1),a=n(577),i=n(336),f=n(609),c=(n.n(f),n(606)),s=n(354);n.d(e,"a",function(){return d});var u=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var f=t.length-1;f>=0;f--)(r=t[f])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},d=function(){function t(){}return t=u([n.i(r.NgModule)({declarations:[c.a],imports:[o.a,a.a,i.a,f.DataTableModule],providers:[s.a],bootstrap:[c.a]}),l("design:paramtypes",[])],t)}()},608:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={production:!0}},763:function(t,e){t.exports=":host /deep/ .data-table-row{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"},764:function(t,e){t.exports='<h1>\n  {{title}}\n</h1>\n<table class="table table-striped" [mfData]="data" #mf="mfDataTable" [mfRowsOnPage]="noOfRowsToDisplay">\n  <thead>\n  <tr>\n    <th style="width: 5%">\n      <mfDefaultSorter by="userId">User Id</mfDefaultSorter>\n    </th>\n    <th style="width: 2%">\n      <mfDefaultSorter by="id">Id</mfDefaultSorter>\n    </th>\n    <th style="width: 23%">\n      <mfDefaultSorter by="title">Title</mfDefaultSorter>\n    </th>\n    <th style="width: 70%">\n      <mfDefaultSorter by="body">Body</mfDefaultSorter>\n    </th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor="let item of mf.data">\n    <td>{{item.userId}}</td>\n    <td>{{item.id}}</td>\n    <td>{{item.title}}</td>\n    <td>{{item.body}}</td>\n  </tr>\n  </tbody>\n</table>\n'}},[1061]);