matrix.js
=========

javascript utility library for performing matrix operations

#### Available Operations

##### matrix.add

Adds the given matrices.

```
var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var b = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
var result = matrix.add(a, b);
// result === [[10, 10, 10], [10, 10, 10], [10, 10, 10]]
```

If one of the arguments is a scalar value, performs scalar addition.

```
var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var result = matrix.add(3, a);
// result === [[4, 5, 6], [7, 8, 9], [10, 11, 12]]
```

##### matrix.identity

Creates an identity matrix with a given dimensions.

```
var result = matrix.identity(3);
// result === [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
```

##### matrix.multiply

Multiplies the given matrices.

```
var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var b = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
var result = matrix.multiply(a, b);
// result === [[30, 24, 18], [84, 69, 54], [138, 114, 90]]
```

If one of the arguments is a scalar value, performs scalar multiplication.

```
var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var result = matrix.multiply(2, a);
// result === [[2, 4, 6], [8, 10, 12], [14, 16, 18]];
```

##### matrix.ones

Creates a ones matrix with the given dimensions.

```
var result = matrix.ones(3);
// result === [[1, 1, 1], [1, 1, 1], [1, 1, 1]]

var result = matrix.ones(3, 4);
// result === [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]
```

##### matrix.transpose

Transposes the given matrix.

```
var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var result = matrix.transpose(a);
// result === [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
```

##### matrix.valid

##### matrix.zeros