'use strict';
import * as texts from './errorTexts.js';
const IncorrectListInStack = () => {
    const error = new Error();
    error.name = texts.ErrorMessage;
    error.message = texts.IncorrectListInStack;
    throw error;
}
export default IncorrectListInStack;