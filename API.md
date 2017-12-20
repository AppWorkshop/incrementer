## Functions

<dl>
<dt><a href="#padNumberToLength">padNumberToLength(inval, length, padChar)</a></dt>
<dd><p>Left-pads the given number to the desired length.</p>
</dd>
<dt><a href="#increment">increment(numsys, startVal)</a> ⇒ <code>string</code></dt>
<dd><p>given the provided number system, increment startVal. Assumes startVal is already the desired length.</p>
</dd>
<dt><a href="#padAndIncrement">padAndIncrement(numsys, startVal, length, padChar)</a> ⇒ <code>string</code></dt>
<dd><p>Pads a number to the appropriate length before incrementing.</p>
</dd>
<dt><a href="#calculateNumberOfValues">calculateNumberOfValues(numsys, length)</a></dt>
<dd><p>Returns the total number of possible unique values in the sequence</p>
</dd>
</dl>

<a name="padNumberToLength"></a>

## padNumberToLength(inval, length, padChar)
Left-pads the given number to the desired length.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| inval | <code>string</code> | the number to pad |
| length | <code>number</code> | the length to pad to |
| padChar | <code>string</code> | the character with which to pad. |

<a name="increment"></a>

## increment(numsys, startVal) ⇒ <code>string</code>
given the provided number system, increment startVal. Assumes startVal is already the desired length.

**Kind**: global function  
**Returns**: <code>string</code> - the incremented number.  

| Param | Type | Description |
| --- | --- | --- |
| numsys | <code>string</code> | the number system e.g. "0123456789ABCDEF" |
| startVal | <code>string</code> | the "number" to increment |

<a name="padAndIncrement"></a>

## padAndIncrement(numsys, startVal, length, padChar) ⇒ <code>string</code>
Pads a number to the appropriate length before incrementing.

**Kind**: global function  
**Returns**: <code>string</code> - the incremented value  

| Param | Type | Description |
| --- | --- | --- |
| numsys | <code>string</code> | the number system e.g. "0123456789ABCDEF" |
| startVal | <code>string</code> | the "number" to increment |
| length | <code>number</code> | the length to pad to |
| padChar | <code>string</code> | the character with which to pad. |

<a name="calculateNumberOfValues"></a>

## calculateNumberOfValues(numsys, length)
Returns the total number of possible unique values in the sequence

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| numsys | <code>string</code> | the number system e.g. "0123456789ABCDEF" |
| length | <code>number</code> | the length to pad to |

