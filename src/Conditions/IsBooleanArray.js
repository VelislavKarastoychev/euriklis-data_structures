'use strict';
import validator from "@euriklis/validator";
const IsBooleanArray = item => new validator(item).is_array_and_for_every(element => element.isBoolean).answer;
export default IsBooleanArray;