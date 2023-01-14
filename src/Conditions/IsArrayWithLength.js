'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {Array} item 
 * @param {number} length
 * @returns {boolean}
 */
const IsArrayWithLength = (item, length) => new validator(item).isArray.And.has_length(length).answer;
export default IsArrayWithLength;