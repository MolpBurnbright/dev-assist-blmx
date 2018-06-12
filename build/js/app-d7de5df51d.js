"use strict";!function(){angular.module("app",["app.core","app.home"])}(),function(){angular.module("app.core",["ngRoute"])}(),function(){angular.module("app.home",[])}(),function(){function o(o,e){function t(){return o.get("/api/hello").then(function(o,e,t,i){return o.data}).catch(function(o){e.error(o)})}return{hello:t}}angular.module("app.core").factory("dataservice",o),o.$inject=["$http","$log"]}(),function(){function o(o){var e=this;e.state=0,e.DEFAULT_SCR=0,e.FORM_SCR=1,o.id&&(e.state=parseInt(o.id))}angular.module("app.home").controller("Home",o),o.$inject=["$routeParams"]}(),function(){function o(o,e){o.when("/:id?",{templateUrl:"app/home/home.html",controller:"Home",controllerAs:"vm"}).otherwise({redirectTo:"/"})}angular.module("app.home").config(o),o.$inject=["$routeProvider","$locationProvider"]}(),angular.module("app.core").run(["$templateCache",function(o){o.put("app/home/home.html",'<div class=row><div data-ng-if="vm.DEFAULT_SCR===vm.state" class="home-col col-md-8"><h1>Hi I\'m Deva</h1><ul><li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor placeat odio quia ipsa animi quis nihil cupiditate nemo, eveniet perspiciatis consectetur inventore ex omnis! Iste voluptas maxime asperiores tempora beatae?</li><li>Porro, ducimus inventore cupiditate quod hic aliquam? Dolore doloremque sint hic incidunt pariatur placeat tempora maxime? Commodi modi illo dignissimos officia optio odit sequi, placeat suscipit quasi aperiam mollitia esse.</li><li>Vel, culpa hic delectus omnis, veniam itaque possimus voluptates amet, soluta nam dicta quia maiores cum? Facere eos amet laboriosam voluptate, atque nam, reprehenderit aliquid aperiam dicta corporis officiis. Dolores?</li><li>Magni deleniti consequuntur quis est laudantium, aspernatur nesciunt perferendis debitis odit, libero ab labore? Aut tenetur provident, itaque excepturi fugit voluptates officiis a impedit maxime mollitia exercitationem reprehenderit repudiandae animi!</li></ul></div><div data-ng-if="vm.FORM_SCR===vm.state" class="home-col col-md-8"><div class=card><div class=card-header>Create Test Account(s)</div><div class=card-body><p class=card-text>Fill up the form below for the field values you would like to appear in your test accounts.</p><form><div class=container><div class=row><legend>Customer Info :</legend><div class=col-md-6><div class=form-group><label for=cust-name>Name</label> <input type=text class="form-control form-control-sm" id=cust-name placeholder="Customer Name"></div><div class=form-group><label for=cust-balance>Balance</label> <input type=number class="form-control form-control-sm" id=cust-balance placeholder=Balance></div><div class=form-group><label for=cust-count>How many customer records?</label> <input type=number class="form-control form-control-sm" id=cust-count placeholder="How many?"></div></div><div class=col-md-6><div class=form-group><label for=cust-status>Status</label><select class="form-control form-control-sm" id=cust-status><option>Active</option><option>Inactive</option></select></div><div class=form-group><label for=cust-product>Product</label><select class="form-control form-control-sm" id=cust-product><option>Savings</option><option>Checking</option></select></div></div></div><div class=row><legend>Transactions :</legend><div class=col-md-6><div class=form-group><label for=trans-type>Transaction Type</label><select class="form-control form-control-sm" id=trans-type><option>Debit</option><option>Credit</option></select></div><div class=form-group><label for=trans-date>Transaction Date</label> <input type=date class="form-control form-control-sm" id=trans-date placeholder="Transaction Date"></div></div><div class=col-md-6><div class=form-group><label for=trans-amt>Amount</label> <input type=number class="form-control form-control-sm" id=trans-amt placeholder=Amount></div><div class=form-group><label for=trans-count>How many transaction records?</label> <input type=number class="form-control form-control-sm" id=trans-count placeholder="How many?"></div></div></div></div></form><a href=# class="btn btn-success float-right">Submit</a></div></div></div><div class="home-col col-md-4"><div class="dialog-flow-container embed-responsive embed-responsive-1by1"><iframe class="dialog-flow-frame embed-responsive-item" src=https://console.dialogflow.com/api-client/demo/embedded/b8ef9329-8041-4101-9ed7-58201fc0e930></iframe></div></div></div>')}]);