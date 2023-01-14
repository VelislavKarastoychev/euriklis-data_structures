'use strict';
import validator from "@euriklis/validator";
const IsStringWithLengthLesserOrEqualsTo = (str, length) => {
    return new validator(str).isString.And.has_length_equals_or_lesser_than(length).answer;
}
export default IsStringWithLengthLesserOrEqualsTo;