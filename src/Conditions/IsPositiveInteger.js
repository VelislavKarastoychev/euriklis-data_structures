'use strict';
import validator from '@euriklis/validator';
const IsPositiveInteger = item => new validator(item).isPositiveInteger.answer;
export default IsPositiveInteger;