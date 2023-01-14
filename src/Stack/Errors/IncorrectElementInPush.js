'use strict';
import * as texts from './errorTexts.js';
const IncorrectElementInPush = () => {
    const error = new Error();
    error.name = texts.ErrorMessage;
    error.IncorrectElementInPush;
    throw error;
}
export default IncorrectElementInPush;