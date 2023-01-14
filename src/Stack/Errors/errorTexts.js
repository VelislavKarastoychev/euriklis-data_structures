'use strict';
const ErrorMessage = '@euriklis/data_structures stack error message:';
const IncorrectElementInPush = 'Incorrect element in push method. The element has to be consistent with the type of the Stack.'
const IncorrectListInStack = 'Incorrect list in stack instance. The lists can be arbitrary (with any elements), boolean, integer, number, string, function and object.';
const IncorrectlyDefinedSizeParameter = 'Incorrectly defined size parameter in the setter size method. Note that this property has to be an positive integer, a string with value "default" or Infinity.';
const IncorrectOptionsInStack = 'Incorrect options parameter in the Stack constructor. Note that the options has to be an object with properties type - a string with the type of the stack elements and array - an array of elements.';
const IncorrectTypeInStack = 'Incorrect type in the Stack setter method type. The type has to be a string with one of the following values: integer, string, number, object, function, arbitrary.';
const StackOverflow = 'The size of the Stack structure is completed and no more elements can be added (pushed) in it. Please set the size of the Stack to bigger integer or to default (infinity) if you wish to push any element in this Stack instance.';
const StackUnderflow = 'The stack is empty and no elements can be extracted or deleted.';
export {
    ErrorMessage,
    IncorrectElementInPush,
    IncorrectListInStack,
    IncorrectlyDefinedSizeParameter,
    IncorrectOptionsInStack,
    IncorrectTypeInStack,
    StackOverflow,
    StackUnderflow,
}