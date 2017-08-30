var li = ['a', 'b', 'c', 'd', 'e'];
li.push('f');
console.log(li);

// abcdef

var li2 = ['a', 'b', 'c', 'd', 'e'];
li2 = li2.concat(['f', 'g']);
console.log(li2);

//abcdefg'a', 'b', 'c', 'd', 'e'

var li3 = ['a', 'b', 'c', 'd', 'e'];
li3.unshift('z');
console.log(li3);

//zabcde

var li4 = ['a', 'b', 'c', 'd', 'e'];
li4.splice(2, 1, 'B');
console.log(li4);

//abBde
