//const questionList = { template: '<div>questionList</div>' }
const myreplay = { template: '<div>myreplay</div>' }
const myCourse = { template: '<div>myCourse</div>' }
const myBook = { template: '<div>myBook</div>' }
 

const routes = [
  { path: '/questionList', component: "questionList" },
  { path: '/myreplay', component: myreplay },
  { path: '/myCourse', component: myCourse },
  { path: '/myBook', component: myBook }
]
 
const router = new VueRouter({
  routes 
})

Vue.component('questionList', {
  template: '\
      <div class="index" v-once>\
			<h3>问题列表</h3>\
			<ul>\
				<li>\
					<a href="#/personalMassage">\
						<dl>\
							<dd></dd>\
							<dt>张三</dt>\
						</dl>\
					</a>\
					<div>\
						<p>问题2：我家孩子为什么会叛逆？</p>\
					</div>\
					<button><a href="#/answer">回复</a></button>\
				</li>\
				<li>\
					<a href="#/personalMassage">\
						<dl>\
							<dd></dd>\
							<dt>张三</dt>\
						</dl>\
					</a>\
					<div>\
						<p>问题2：我家孩子为什么会叛逆？</p>\
						<p>(<span>问题状态</span>)刘老师：因为你平时陪伴孩子的时间太少</p>\
					</div>\
					<button class="active"><a href="#/answer">回复</a></button>\
				</li>\
			</ul>\
		</div>\
  '
})
 
const app = new Vue({
  router
}).$mount('#app')