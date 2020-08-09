import { BASE_URL } from '../Data/Constants';
export const verifyDriversList = async(verifiedDriverList) => {
	const driverData = {verifiedDriverList};
    
	try{
		let response = await fetch(`${BASE_URL}/vts/admin/DriverVerified`,{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(driverData)
		});
		let json = await response.json();
		if(response.ok){
			return true;
		}
		else{
			console.log(response);
			alert(json.messsage || 'Driver not found in data base.');
			return false;
		}
	}catch(error){
		console.error(error);
		alert('Failed Loading response!! Check  the internet connection.');
	}
};

export const rejectDriverRequest = async(phoneNumber) =>{
	const requestOptions = {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify({phoneNumber})
	};
	try{
		let response = await fetch(`${BASE_URL}/vts/admin/rejectDriver`,requestOptions);
		let json = await response.json();
		if(response.ok){
			return true; 
		}
		else{
			alert(json.messsage || 'Driver not found in data base.');
		}
	}
	catch(e){
		console.error(e);
		alert('Failed Loading response!! Check  the internet connection. Driver not yet rejected');
	}
};