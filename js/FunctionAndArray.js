function add(a,b){
				return a+b;
			}
			function dev(a,b){
				return a-b;
			}
			function cal(f,a,b){
				return f(a,b);
			}
			println(cal(add,2,1));
			println(cal(dev,2,1));
			var array1=[];
			array1[100]="hello";
			println(array1[100]);
			println(array1.length);
			array1.length=10;
			println(array1[100]);
			var colors=["red","green","blue"];
			colors[colors.length]="yellow";
			println(colors);
			println(colors.toString());
			println(colors.join("//"));
			println(colors.valueOf());
			var color=colors.shift();
			println(color);
			color=colors.pop();
			println(color);
			println(colors);
			colors.push("red","yellow");
			println(colors);
			var values=[0,5,18,7,9];
			println(values);
			values.sort();
			println(values);
			function compare1(a,b){
				if(a>b)
				{
					return 1;
				}
				else if(a<b)
				{
					return -1;
				}
				else
				{
					return 0;
				}
			}
			values.sort(compare1);
			println(values);
			function compare2(a,b){
				if(a>b)
				{
					return -1;
				}
				else if(a<b)
				{
					return 1;
				}
				else
				{
					return 0;
				}
			}
			values.sort(compare2);
			println(values);