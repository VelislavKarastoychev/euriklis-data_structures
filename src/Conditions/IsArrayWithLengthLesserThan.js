'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {Array} item 
 * @param {string} length 
 * @returns {boolean}
 */
const IsArrayWithLengthLesserThan = (item, length) => new validator(item).isArray.And.has_length_lesser_than(length).answer;
export default IsArrayWithLengthLesserThan;