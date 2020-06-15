export const setStorage = (key, value, expiresIn) => {
	const dataObj = {
		data: value
	};
	if(expiresIn){
		dataObj.exp = Date.now()+expiresIn*1000; 
	}
	window.localStorage.setItem(key, JSON.stringify(dataObj));
};

export const readStorage = (key) => {
	const storedItem = JSON.parse(window.localStorage.getItem(key));
	if(!storedItem) return null;
	if(storedItem.exp && storedItem.exp < Date.now()){ 
		removeStorage(key);
		return null;
	}
	return storedItem.data;
};

export const removeStorage = (key) => {
	window.localStorage.removeItem(key);
};