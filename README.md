# ArrayUtility
Tested utilities used by Array.

## Array.prototype.removeByIndex()

```javascript
var arr = ['a', 'b', 'c', 'd', 'e'];

arr.removeByIndex(2);
console.log(arr); // ['a', 'b', 'd', 'e']
```
## Array.prototype.remove()

```javascript
var arr = ['a', 'b', 'c', 'd', 'e'];

arr.remove('c');
console.log(arr); // ['a', 'b', 'd', 'e']
```

## Array.prototype.insert()

```javascript
var arr = ['a', 'b', 'c', 'd', 'e'];

arr.insert(2, 'two');
console.log(arr); // ['a', 'b', 'two', 'c', 'd', 'e'];

arr.insert(15, 'fifteen');
console.log(arr); // ['a', 'b', 'c', 'd', 'e', 'fifteen'];
```
