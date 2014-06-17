//call 和 apply 的功能是一致的，两者细微的差别在于 call 以参数表来接受被调用函数的参数，而 apply 以数组来接受被调用函数的参数。
var foo = {
	name: 'foo',
	sayFunc: function (world) {
		console.log(this.name + 'say' + world);
	}
}

var bar = {
	name:'bar'
}

foo.sayFunc.call(bar,'hello'); //输出 bar say hello

//foo.sayFunc是被调用的函数，它通过 call 将上下文改变为 bar 对象，因此在函数体内访问 this.name 时，实际上访问的是 bar.name，因而输出了bar。

