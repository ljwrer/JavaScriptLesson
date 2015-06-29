var print=function (value){
	document.write(value);
}
var println=function (value){
	print(value+"<br/>");
}
function typeOf(value) {
	if (null === value) {
		return 'null';
	}

	var type = typeof value;
	if ('undefined' === type || 'string' === type) {
		return type;
	}

	var typeString = toString.call(value);
	switch (typeString) {
		case '[object Array]':
			return 'array';
		case '[object Date]':
			return 'date';
		case '[object Boolean]':
			return 'boolean';
		case '[object Number]':
			return 'number';
		case '[object Function]':
			return 'function';
		case '[object RegExp]':
			return 'regexp';
		case '[object Object]':
			if (undefined !== value.nodeType) {
				if (3 == value.nodeType) {
					return (/\S/).test(value.nodeValue) ? 'textnode' : 'whitespace';
				} else {
					return 'element';
				}
			} else {
				return 'object';
			}
		default:
			return 'unknow';
	}
}