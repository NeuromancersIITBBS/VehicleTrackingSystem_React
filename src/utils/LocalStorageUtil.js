export const setStorage = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
    // SET TIMER HERE for removing item from the localstorage
};

export const readStorage = (key) => {
    // Check timeStamp here
    return JSON.parse(window.localStorage.getItem(key));
};

export const removeStorage = (key) => {
    window.localStorage.removeItem(key);
};