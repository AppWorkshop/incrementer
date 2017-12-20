/**
 * Left-pads the given number to the desired length.
 * @param {string} inval the number to pad
 * @param {number} length the length to pad to
 * @param {string} padChar the character with which to pad.
 */
exports.padNumberToLength = function(inval, length, padChar = "0") {
  // pad the number
  if (inval.length < length) {
    while (inval.length < length) {
      inval = padChar + inval;
    }
  }
  return inval;  
};

/**
 * given the provided number system, increment startVal. Assumes startVal is already the desired length.
 * @param {string} numsys the number system e.g. "0123456789ABCDEF"
 * @param {string} startVal the "number" to increment
 * @return {string} the incremented number.
 */
exports.increment = function(numsys, startVal) {

  // console.log(`increment("${numsys}","${startVal}")`);
  let newVal = "";
  // go through the string from right to left, one char at at time.
  // for each char:
  //   increment (possibly rolling over and setting need to carry the next one)
  //   if we need to carry to the next digit place, continue. otherwise break.
  let charIdx = (startVal.length - 1), charVal = startVal.charAt(charIdx);
  for (;
    (charIdx >= 0);
    charVal = startVal.charAt(--charIdx)
  ) {
    let newDigitValue;
    const currentNumsysIdx = numsys.indexOf(charVal);

    // console.log(`0: charIdx=${charIdx}, charVal=${charVal}, inval=${inval}, currentNumsysIdx=${currentNumsysIdx}, newVal=${newVal}`);

    if (currentNumsysIdx !== -1) { // this digit is not a padding char i.e. it is in the num system
      if (currentNumsysIdx === (numsys.length - 1)) {
        // this digit has the highest possible value already; reset it to the lowest and continue (to "carry")
        newDigitValue = numsys.charAt(0);
        //   console.log(`1: newDigitValue=${newDigitValue}`);
        // newVal is broken into 2 parts: (1) the digit we just changed; (2) the ones we changed before. Remaining ones will be added as we progress.
        newVal = newDigitValue + newVal;
        //   console.log(`1: charIdx=${charIdx}, charVal=${charVal}, inval=${inval}, currentNumsysIdx=${currentNumsysIdx}, newVal=${newVal}`);
      } else {
        // this digit isn't yet at it's highest possible value. Just increment it and finish. No carrying of next digit.
        newDigitValue = numsys.charAt(currentNumsysIdx + 1);
        //   console.log(`2: newDigitValue=${newDigitValue}`);
        // newVal is broken into 3 parts: (1) the unchanged digits; (2) the one we just changed; (3) the ones we changed before.
        newVal = startVal.substring(0, charIdx) + newDigitValue + newVal;
        //   console.log(`2: charIdx=${charIdx}, charVal=${charVal}, inval=${inval}, currentNumsysIdx=${currentNumsysIdx}, newVal=${newVal}`);
        break;
      }
    } else {
      // assume current char is a padding char; "increment" to the first value in the number system and break;
      newDigitValue = numsys.charAt(0);
      // newVal is broken into 3 parts: (1) the unchanged digits; (2) the one we just changed; (3) the ones we changed before.
      newVal = startVal.substring(0, charIdx) + newDigitValue + newVal;
      //   console.log(`3: charIdx=${charIdx}, charVal=${charVal}, inval=${inval}, currentNumsysIdx=${currentNumsysIdx}, newVal=${newVal}`);
      break;
    }
  }
  //   console.log(`increment ${startVal} is ${newVal} with number system ${numsys}`);
  return newVal;
};

/**
 * Pads a number to the appropriate length before incrementing.
 * @param {string} numsys the number system e.g. "0123456789ABCDEF"
 * @param {string} startVal the "number" to increment
 * @param {number} length the length to pad to
 * @param {string} padChar the character with which to pad.
 * @returns {string} the incremented value
 */
exports.padAndIncrement = function(numsys, startVal, length, padChar){
  if (startVal.length < length) {
    startVal = this.padNumberToLength(startVal, length, padChar);
  }
  return this.increment(numsys, startVal);
};

/**
 * Returns the total number of possible unique values in the sequence
 * @param {string} numsys the number system e.g. "0123456789ABCDEF"
 * @param {number} length the length to pad to
 */
exports.calculateNumberOfValues = function(numsys, length) {
  return Math.pow(numsys.length, length);
};