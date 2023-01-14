'use strict';
import validator from "@euriklis/validator";
const IsFunctionArray = item => new validator(item)
    .is_array_and_for_every(element => element.isFunction)
    .answer;
export default IsFunctionArray;