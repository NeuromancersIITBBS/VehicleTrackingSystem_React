import { BASE_URL } from '../Data/Constants';
export const verifyDriversList = async(dList) => {
    console.log('Event triggered..verify driver');
    const requestOptions = {
        method: 'POST',
        mode : 'no-cors',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(dList)
    }
    try{
        let response = await fetch(`${BASE_URL}/vts/admin/DriverVerified`,requestOptions);
        let json = await response.json();
        if(response.ok){
            return true;
        }
        else{
            alert(json.messsage || 'Driver not found in data base.');
            return false;
        }
    }catch(error){
        console.error(error);
        alert('Failed Loading response!! Check  the internet connection.')
    }
}

export const rejectDriverRequest = async(phoneNumber) =>{
    const requestOptions = {
        method: 'DELETE',
        mode : 'no-cors',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(phoneNumber)
    }
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
        alert('Failed Loading response!! Check  the internet connection. Driver not yet rejected')
    }
}