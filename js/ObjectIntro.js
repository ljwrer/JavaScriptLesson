var o=new Object();
var cirlr={
	x:0,
	y:0,
	radius:5,
}
function area(radius){
	return Math.PI*radius*radius;
}
println(area(cirlr.radius));
delete cirlr.radius;
println(area(cirlr.radius));
cirlr.radius=5;
for (var x in cirlr) {
	println(x);
	println(cirlr[x]);
}
function Rect(w,h){
	this.x=w;
	this.y=h;
	this.area=function(){
		return this.x*this.y;
	}
}
var rect=new Rect(3,4);
println(rect.area());
rect.x=4;
println(rect.area());
function Person(){
	Person.prototype.name="Ray",
	Person.prototype.age=23;
	Person.prototype.job="Font Page Engineer"
	Person.prototype.sayName=function(){
		println(this.name);
	}
}
var person1=new Person();
var person2=new Person();
person1.sayName();
person2.sayName();
println(person1.sayName===person2.sayName);
person1.name="Rmaiy";
person1.sayName();
person2.sayName();
function Person1(){};
Person1.prototype={
	constuctor:Person1,
	name:"Ray",
	age:23,
	friend:['a','b'],
	job:"Font Page Engineer",
	sayName:function(){
		println(this.name);
	}
};
person1=new Person1();
person2=new Person1();
println(person1.friend);
println(person2.friend);
person1.friend.push('c');
println(person1.friend);
println(person2.friend);
function Person2(){
	this.name="Ray",
	this.age=23,
	this.friend=['a','b'],
	this.job="Font Page Engineer"
};
Person2.prototype={
	constuctor:Person2,
	sayName:function(){
		println(this.name);
	}
};
person1=new Person2();
person2=new Person2();
println(person1.friend);
println(person2.friend);
person1.friend.push('c');
println(person1.friend);
println(person2.friend);
println(person1.friend===person2.friend);
println(person1.constructor===person2.constructor);
println(person1.sayName===person2.sayName);
var value=12;
println(window.value);
//for(var x in document)
//{
//	println(x);
//}
