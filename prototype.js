/*
 构造函数内定义的属性继承方式与原型不同，子对象需要显式调用父对象才能继承构造函数内定义的属性。 
 构造函数内定义的任何属性，包括函数在内都会被重复创建，同一个构造函数产生的两个对象不共享实例。 
 构造函数内定义的函数有运行时闭包的开销，因为构造函数内的局部变量对其中定义 的函数来说也是可见的。 
*/

//以下代码可以验证以上问题

function Foo() {
    var innerVar = 'hello';
    this.prop1 = 'BYVoid';
    this.func1 = function(){
        innerVar = '';
    };
}

Foo.prototype.prop2 = 'Carbo';
Foo.prototype.func2 = function () {
    console.log(this.prop2);
};

var foo1 = new Foo();
var foo2 = new Foo();

console.log(foo1.func1 == foo2.func1); // 输出 false
console.log(foo1.func2 == foo2.func2); // 输出 true

/**************************************************************/
function Person (name,age) {
	//通过构造函数定义一般成员，如对象和数组（多个对象不共享实例）
	this.name = name;
	this.age = age;
}

//通过原型链来定义成员函数（多实例共享）
Person.prototype.getName = function () {
	console.log(this.name);
}

var p = new Person('zhangjia',25);
p.getName();


/*
 除非必须用构造函数闭包，否则尽量用原型定义成员函数，因为这样可以减少开销。
 尽量在构造函数内定义一般成员，尤其是对象或数组，因为用原型定义的成员是多个实例共享的。
*/


