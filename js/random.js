var random = function() {
	return Math.floor(Math.random() * 5);
}
var random2 = function() {
	return parseInt(Math.random() * 5);
}

for (var i = 0; i < 10; i++) {
	println("r1=" + random());
}
for (var i = 0; i < 10; i++) {
	println("r2=" + random2());
}
println(parseInt(2.8));
println(parseInt(2.4));
println(parseInt(-2.4));
println(parseInt(-2.8));
println((Math.floor(2.8)));
println((Math.floor(2.4)));
println((Math.floor(-2.4)));
println((Math.floor(-2.8)));
