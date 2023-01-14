'use strict';
import validator from "@euriklis/validator";
const IsIntegerArray = item => new validator(item).isIntegerArray.answer;
export default IsIntegerArray;