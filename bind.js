//func.bind(thisArg, arg1, arg2,...) 其中 func 是待绑定函数，thisArg 是改变的上下文对象，arg1、arg2 是绑定的参数表。bind 方法返回值是上下文为 thisArg 的 func。
var foo = {
	name: 'foo',
	someFunc: function() {
		console.log(this.name);
	}
}

var bar = {
	name: 'bar'
}

foo.someFunc(); //输出foo
bar.func = foo.someFunc;
bar.func(); //输出bar

bar.func1 = foo.someFunc.bind(foo);
bar.func1(); //输出foo

func = foo.someFunc.bind(bar);
func(); //输出bar

func2 = func;
func2();//输出bar

//bind函数还有另一个重要功能：绑定参数列表
var person = {
	name: 'zhangjia',
	says: function(act, obj) {
	console.log(this.name + ' ' + act + ' ' + obj);
}
};
person.says('loves', 'meimei'); // 输出 zhangjia loves meimei
func = person.says.bind(person, 'hates');
func('you'); // 输出 zhangjia hates you