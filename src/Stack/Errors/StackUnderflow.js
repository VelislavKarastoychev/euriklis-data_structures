'use strict';
import * as texts from './errorTexts.js';
const StackUnderflow = () => {
    const error = new Error();
    error.name = texts.ErrorMessage;
    error.message = texts.StackUnderflow;
    throw error;
}
export default StackUnderflow;