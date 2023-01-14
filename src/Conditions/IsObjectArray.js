'use strict';
import validator from "@euriklis/validator";
const IsObjectArray = item => new validator(item).isObjectArray.answer;
export default IsObjectArray;