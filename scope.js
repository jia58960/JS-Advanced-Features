//典型作用域问题
var foo = 1;
var scope = function () {
	console.log(foo); 
	var foo = 2; 
}
scope();//输出undefined

/**
 * javascript的函数作用域是静态作用域（词法作用域），也就是在进行语法分析时就确定了作用域，而不必等到运行时确定。
*/

//举例说明js的词法作用域

var foo = 'global';

var f1 = function () {
	console.log(foo); 
}

f1(); //输出 global

var f2 = function () {
	var foo = 'scope';
	f1();
}

f2(); //还是输出global
