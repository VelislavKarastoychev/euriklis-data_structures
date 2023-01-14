'use strict';
import validator from "@euriklis/validator";
const IsArrayWithLengthBiggerOrEqualTo = (array, length) => {
    return new validator(array).isArray.And.has_length_equals_or_bigger_than(length).answer;
}
export default IsArrayWithLengthBiggerOrEqualTo;