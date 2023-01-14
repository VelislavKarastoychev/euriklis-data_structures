'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {String} item 
 * @param {number} length 
 * @returns {boolean}
 */
const IsStringWithLength = (item, length) => new validator(item).isString.And.has_length(length).answer;
export default IsStringWithLength;