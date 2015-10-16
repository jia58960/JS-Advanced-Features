//call和apply 的功能是一样的，这两个方法基本上是一个意思，区别在于call的第二个参数可以是任意类型，而apply的第二个参数必须是数组，也可以是arguments。
var func = new function() {
    this.a = "func"
} 
var myfunc = function(x,y) { 
    var a="myfunc"; 
    
    alert(this.a); 
    
    alert(x + y); 
} 

myfunc.call(func,"var"," fun");// "func" "var fun" 
myfunc.apply(func,["var"," fun"]);// "func" "var fun"

//用call实现继承
function Animal(name){      
    this.name = name;      
    this.showName = function(){      
        alert(this.name);      
    }      
}      
function Cat(name){
    Animal.call(this, name);    
}      
    
var cat = new Cat("Black Cat");     
cat.showName();

// Animal.call(this) 的意思就是使用Animal对象代替this对象，那么Cat中就有了Animal的所有属性和方法了。那么Cat对象就能够直接调用Animal的方法以及属性了.

/**Function.prototype.bind方法是ES 5中新增的方法，IE 6、7、8是不支持的
 * bind与call很相似:可接受的参数都分为两部分，且第一个参数都是作为执行时函数上下文中的this的对象。
 * 不同点有两个(1)bind的返回值是函数;(2)后面的参数的使用也有区别
*/
function f(a,b,c){
    console.log(a,b,c);
}

var f_Extend = f.bind(null,"extend_A")
f("A","B","C")  //这里会输出--> A B C

f_Extend("A","B","C")  //这里会输出--> extend_A A B

f_Extend("B","C")  //这里会输出--> extend_A B C

f.call(null,"extend_A") //这里会输出--> extend_A undefined undefined

//不难发现，call 是 把第二个及以后的参数作为f方法的实参传进去而bind虽说也是获取第二个及以后的参数用于之后方法的执行，但是f_Extend中传入的实参则是在bind中传入参数的基础上往后排的。

//caller返回一个函数的引用，这个函数调用了当前的函数。如果函数是由顶层调用的，则返回null
var a = function () {
    console.log(a.caller);
}
var b = function() {
    a();
}
a(); //返回null
b(); //返回b函数

//callee是arguments的一个属性成员，它表示对函数对象本身的引用，返回正被执行的 Function（自身）对象。(1)它的一般用于匿名函数；(2)它的length属性一般用于验证实参形参的长度。arguments.length是实参长度，arguments.callee.length是形参长度，由此可以判断调用时形参长度是否和实参长度一致
function a() {
    b();
}
function b() {
    console.log(b === arguments.callee); //true
    console.log(a === b.caller); //true
    console.log(arguments.callee.caller === a); //true
}

var fn = (function(n){
    if(n>0) {
     return n+arguments.callee(n-1);    
    } else {
       return 0; 
    }
})(10)

console.log(fn); //55