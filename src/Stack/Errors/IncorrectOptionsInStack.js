'use strict';
import * as texts from './errorTexts.js';
const IncorrectOptionsInStack = () => {
    const error = new Error();
    error.name = texts.ErrorMessage;
    error.message = texts.IncorrectOptionsInStack;
    throw error;
}
export default IncorrectOptionsInStack;