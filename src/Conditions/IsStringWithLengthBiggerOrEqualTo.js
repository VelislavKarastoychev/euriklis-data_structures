'use strict';
import validator from "@euriklis/validator";
const IsStringWithLengthBiggerOrEqualTo = (str, length) => {
    return new validator(str).isString.And.has_length_equals_or_bigger_than(length).answer;
}
export default IsStringWithLengthBiggerOrEqualTo;