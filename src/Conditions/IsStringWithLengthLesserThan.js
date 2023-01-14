'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {String} str 
 * @param {number} length 
 * @returns {boolean}
 */
const IsStringWithLengthLesserThan = (str, length) => new validator(str).isString.And.has_length_lesser_than(length).answer;
export default IsStringWithLengthLesserThan;