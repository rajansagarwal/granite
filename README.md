# Granite Compiler

Example: Fibonnaci Sequence

```
a = 1
b = 1
c = 0

for i in 1 10 {
  c = a + b
  print(c)
  a = b
  b = c
}
```

This generates
```
2;
3;
5;
8;
13;
21;
34;
55;
89;
144;
```
