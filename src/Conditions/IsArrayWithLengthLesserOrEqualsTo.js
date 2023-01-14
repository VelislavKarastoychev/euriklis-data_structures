'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {Array} array 
 * @param {number} length 
 * @returns {boolean}
 */
const IsArrayWithLengthLesserOrEqualsTo = (array, length) => {
    return new validator(array).isArray.And.has_length_equals_or_lesser_than(length).answer;
}
export default IsArrayWithLengthLesserOrEqualsTo;