export const getLocation = async () => {
    if (!navigator.geolocation) {
        alert('Geolocation not supported!');
        return null;
    }
    const locationPromise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            location => resolve(location),
            err => reject(err)
        )
    });
    try {
        const locationData = await locationPromise;
        return {
            lat: locationData.coords.latitude,
            lng: locationData.coords.longitude
        }
    } catch (e) {
        alert('Geolocation permission denied.');
        return null;
    }
};