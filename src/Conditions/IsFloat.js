'use strict';
import validator from "@euriklis/validator";
const IsFloat = item => new validator(item).isFloat.answer;
export default IsFloat;