'use strict';
import * as texts from './errorTexts.js';
const IncorrectlyDefinedSizeParameter = () => {
    const error = new Error();
    error.name = texts.ErrorMessage;
    error.message = texts.IncorrectlyDefinedSizeParameter();
    throw error;
}
export default IncorrectlyDefinedSizeParameter;