# Incrementer

[![Build Status](https://travis-ci.org/AppWorkshop/incrementer.svg?branch=master)](https://travis-ci.org/AppWorkshop/incrementer)

A simple library that lets you define your own number sequence using arbitrary characters.

## Installation

## Usage

```js
  let incrementer = require('number-sequence');
  let numsys = "0ABCDEF"; 
  let padChar = "0";
  let length = 2;

  let result = incrementer.increment(numsys, incrementer.padNumberToLength("E",length,padChar); // 0E => 0F
  // OR: 
  result = incrementer.padAndIncrement(numsys, "E", length, padChar); // 0E => 0F
  let scope = incrementer.calculateNumberOfValues(numsys,2); // number of possible values === 7^2 => 49
```

## Examples

1. Number system: "0123456789", length: 2, pad with: "0"
    ```
    00 => 01
    99 => 00
    ```

2. Number system: "ABCD", length: 2
    ```
    AA => AB
    AD => BA
    ```

3. Number system: "0123456789ABCDEF", length: 2, pad with: "0"
    ```
    0F => 10
    0E => 0F
    99 => 9A
    ```

4. Number system: "@%&*", length: 2, pad with "@"
    ```
    @@ => @%
    &* => %@
    ** => @@
    ```

5. Number system: "ABCD", length: 2
    ```
    AA => AB
    AD => BA
    ```


## API

See [API.md]()