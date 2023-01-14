'use strict';
import validator from "@euriklis/validator";
const IsArrayOfNegativeIntegers = item => new validator(item).isArrayOfNegativeIntegers.answer;
export default IsArrayOfNegativeIntegers;