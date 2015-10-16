//javascript的任何函数都是被某个对象调用的，包括全局对象！
var foo = {
	name: 'zhangjia',
	func: function(){
		console.log(this.name);
	}
}

var bar = {
	name: 'barName'
}

foo.func(); //输出zhangjia

bar.func = foo.func;
bar.func(); //输出barName

name = "global";
func = foo.func;
func(); //输出global

//可以看出使用不同引用来调用同一函数时，this指针永远是这个引用所属的对象。