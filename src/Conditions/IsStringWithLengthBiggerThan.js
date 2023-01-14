'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {String} str 
 * @param {number} length 
 * @returns {boolean}
 */
const IsStringWithLengthBiggerThan = (str, length) => {
    return new validator(str).isString.And.has_length_bigger_than(length).answer;
}
export default IsStringWithLengthBiggerThan;