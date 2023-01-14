'use strict';
import validator from "@euriklis/validator";
const IsArray = item => new validator(item).isArray.answer;
export default IsArray;