'use strict';
import * as texts from './errorTexts.js';
const StackOverflow = () => {
    const error = new Error();
    error.name = texts.ErrorMessage;
    error.message = texts.StackOverflow;
    throw error;
}
export default StackOverflow;