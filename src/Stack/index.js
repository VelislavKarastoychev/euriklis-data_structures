'use strict';
import * as conditions from './Conditions/index.js';
class Stack {
    #list = [];
    #size = Infinity;
    #type = null;
    /**
     * 
     * @param {{
     * array: Array, 
     * type: 'integer' | 'number' | 'string' | 'array' | 'object' | 'function' | 'arbitrary',
     * size: number
     * }} options 
     */
    constructor (options) {
        if (conditions.IsUndefined(options)) {
            this.#type = 'arbitrary';
        } else if (conditions.IsObject(options)){
            this.type = options.type;
            this.size = options.size;
            this.list = options.array;
        } else errors.IncorrectOptionsInStack();
    }
    /**
     * @description this method returns the size of the stack.
     * If this property is not predefined from the user, then
     * by default its value is equals to Infinity or unlimited
     * size of the stack.
     * @returns {number}
     */
    get size () {
        return this.#size;
    } 
    /**
     * @param {number | Infinity | 'default'} size
     * @description this method sets the size of the stack,
     * that is the length of the list in which the stack elements
     * are stored.
     */
    set size (size) {
        if (!conditions.IsPositiveInteger(size) || !size === Infinity || !size === 'default') {
            errors.IncorrectlyDefinedSizeParameter();
        }
        if (size === 'default') this.#size = Infinity;
        else this.#size = size;
    }
    /**
     * @description this method returns the type 
     * of the elements of the stack
     * @returns {'arbitrary' | 'integer' | 'number' | 'string' | 'function' | 'object'}
     */
    get type () {
        return this.#type;
    }
    /**
     * @description this method sets the type of the elements
     * of the stack instance. If the type argument is not 
     * equivalent to some of the valid type values, then an error
     * message will be thrown. 
     * @param {'arbitrary' | 'boolean' | 'integer' | 'number' | string | 'function' | 'object' } type
     */
    set type (type) {
        if (!conditions.IsString(type)) errors.IncorrectTypeInStack()
        if (conditions.IsCorrectStackType(type)) this.#type = type;
        else errors.IncorrectTypeInStack();
    }
    /**
     * @description this method returns the array of the current stack
     * element.
     * @returns {Array}
     */
    get list () {
        return this.#list;
    }
    /**
     * @description this method sets the list property
     * of the current Stack instance.
     * @param {Array} array
     */
    set list (array) {
        if (!conditions.IsArray(array)) errors.IncorrectListInStack()
        if (this.type === 'arbitrary') this.#list = array;
        else if (this.type === 'integer') {
            if (conditions.IsIntegerArray(array)) this.#list = array;
            else errors.IncorrectListInStack()
        } else if (this.type === 'number') {
            if (conditions.IsNumberArray(array)) this.#list = array;
            else errors.IncorrectListInStack();
        } else if (this.type === 'string') {
            if (conditions.IsStringArray(array)) this.#list = array;
            else errors.IncorrectListInStack();
        } else if (this.type === 'function') {
            if (conditions.IsFunctionArray(array)) this.#list = array;
            else errors.IncorrectListInStack();
        } else if (this.type === 'object') {
            if (conditions.IsObjectArray(array)) this.#list = array;
            else errors.IncorrectListInStack();
        } else if (this.type === 'boolean') {
            if (conditions.IsBooleanArray(array)) this.#list = array;
            else errors.IncorrectListInStack();
        }
    }
    /**
     * 
     * @param {any} element 
     * @returns {Stack}
     * @description this method implements the push method
     * of the Stack structure, that is to put an element
     * to the end of the Stack. If the element is not corresponded
     * with the type structure of the stack, then an error will be thrown.
     * Otherwise if the size of the stack is defined and the stack is
     * completed (the list have length equals with the size of the Stack),
     * then a stack overflow error will be thrown.
     */
    push (element) {
        if (this.size === this.#list.length) errors.StackOverflow();
        if (this.type === 'arbitrary') {
            // implement the push indirectly
            this.#list[this.#list.length] = element;
        } else if (this.type === 'integer' && conditions.IsInteger(element)) {
            this.#list[this.#list.length] = element;
        } else if (this.type === 'number' && conditions.IsNumber(element)) {
            this.#list[this.#list.length] = element;
        } else if (this.type === 'string' && conditions.IsString(element)) {
            this.#list[this.#list.length] = element;
        } else if (this.type === 'function' && conditions.IsFunction(element)) {
            this.#list[this.#list.length] = element;
        } else if (this.type === 'object' && conditions.IsObject(element)) {
            this.#list[this.#list.length] = element;
        } else if (this.type === 'boolean' && conditions.IsBoolean(element)) {
            this.#list[this.#list.length] = element;
        } else errors.IncorrectElementInPush();
        return this;
    }
    pop () {
        if (!this.#list.length) errors.StackUnderflow();
        const item = this.#list[this.#list.length - 1];
        --this.#list.length;
        return item;
    }
    filter (f) {
        if (!conditions.IsFunction(f)) errors.IncorrectFunctionInFilter();
    }
}
export default Stack