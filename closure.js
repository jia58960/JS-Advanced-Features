//当一个函数返回它内部定义的一个函数时就形成了闭包(closure)

var closure = function (){
	var count = 1;
	var get = function () {
		count++;
		return count;
	}
	return get;
}

var counter1 = closure();
var counter2 = closure();
console.log(counter1()); //输出1
console.log(counter2()); //输出1
console.log(counter1()); //输出2
console.log(counter1()); //输出3
console.log(counter2()); //输出2

//闭包不但包括被返回的函数，还包括该函数的定义环境。
//在closure返回get函数时，私下里将get可能引用到的closure函数的内部变量count也返回了，并在内存中生成一个副本。

//闭包有两个主要用途，一是实现嵌套的回调函数，二是隐藏对象的细节。

//实现嵌套的例子
exports.add_user = function(user_info, callback) {

    var uid = parseInt(user_info['uid']);

    mongodb.open(function(err, db) {
        if (err) {
            callback(err);
            return;
        }
        db.collection('users', function(err, collection) {
            if (err) {
                callback(err);
                return;
            }
            collection.ensureIndex("uid", function(err) {
                if (err) {
                    callback(err);
                    return;
                }
                collection.ensureIndex("username", function(err) {
                    if (err) {
                        callback(err);
                        return;
                    }
                    collection.findOne({
                        uid: uid
                    },
                    function(err) {
                        if (err) {
                            callback(err);
                            return;
                        }
                        if (doc) {
                            callback('occupied');
                        } else {
                            var user = {
                                uid: uid,
                                user: user_info,
                            };
                            collection.insert(user, function(err) {
                                callback(err);
                            });
                        }
                    });
                });
            });
        });
    });
};