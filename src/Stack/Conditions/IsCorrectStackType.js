'use strict';
import validator from "@euriklis/validator";
import stackTypes from './StackTypes.js';
const IsCorrectStackType = (type) => new validator(type).is_same_with_any(stackTypes).answer;
export default IsCorrectStackType;