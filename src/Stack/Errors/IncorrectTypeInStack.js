'use strict';
import * as texts from './errorTexts.js';
const IncorrectTypeInStack = () => {
    const error = new Error();
    error.name = texts.ErrorMessage;
    error.message = texts.IncorrectTypeInStack;
    throw error;
}
export default IncorrectTypeInStack;