/* A JavaScript object that has two functions, get and set. The get function takes two parameters, name
and alt. It returns the value of the local storage item with the name of the first parameter, or the
second parameter if the first parameter is not found. The set function takes a key and a value, and
then it stores the value in the local storage under the key. */
export default {
    /* A function that takes two parameters, name and alt. It returns the value of the local storage
    item with the name of the first parameter, or the second parameter if the first parameter is not
    found. */
    get(name, alt = '') {
        return JSON.parse(localStorage.getItem(name) || alt) || alt;
    },
    /**
     * It takes a key and a value, and then it stores the value in the local storage under the key.
     * @param key - The key to store the value under.
     * @param value - The value to store.
     */
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
};