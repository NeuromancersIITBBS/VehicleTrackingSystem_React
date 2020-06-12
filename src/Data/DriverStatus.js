// Note: don't remove the item with val: 'active' 
// (as it is used as default value in DriverPanel)
export const driverStatus = [
    { val: 'active', text: 'Active' },
    { val: 'charging', text: 'Charging' },
    { val: 'inactive', text: 'Inactive/ Under Maintenance' },
    { val: 'reserved', text: 'Reserved/ Full' },
];

export const getStatusText = (val) => {
    const status = driverStatus.find(status => status.val === val);
    if(!status) return val;
    return status.text;
};
