# Danfojs Types

## How to install these types

```
npm i https://github.com/Nenino2/Danfojs-type-declarations.git -D
```

## How to generate these types

### 1°: Clone danfojs repo

https://github.com/opensource9ja/danfojs

### 2°: Get the danfojs/src folder

### 3°: Generate declaration files from the js files of that folder

To do that, you should use this tsconfig configuration:
https://www.typescriptlang.org/docs/handbook/declaration-files/dts-from-js.html

### 4°: Edit index.d.ts

Wrap the code into

```
declare module 'danfojs' {
    ...
}
```
