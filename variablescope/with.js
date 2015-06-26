var foo="abc";
with({foo:"bar"}){
	function f(){
		println(foo);
	};
	(function f(){
		println(foo);
	})();
	f();
}
