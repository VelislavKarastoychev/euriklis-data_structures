'use strict';
import validator from '@euriklis/validator';
const IsNegativeInteger = item => new validator(item).isNegativeInteger.answer;
export default IsNegativeInteger;