// random city programe

var arr = new Array('seoul','new york','ladarkh','pusan','Tsukuba');
function Random_Array (arr) {
    var index = Math.floor(arr.length*Math.random());
    return arr[index];
}
console.log(Random_Array(arr));

//same programe
Array.prototype.rand = function(){
    var index = Math.floor(this.length*Math.random());
    return this[index];
}
var arr = new Array('seoul','new york','ladarkh','pusan', 'Tsukuba');
console.log(arr.rand());