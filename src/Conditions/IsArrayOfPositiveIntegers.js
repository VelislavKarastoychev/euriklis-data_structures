'use strict';
import validator from '@euriklis/validator';
const IsArrayOfPositiveIntegers = item => new validator(item).isArrayOfPositiveIntegers.answer;
export default IsArrayOfPositiveIntegers;