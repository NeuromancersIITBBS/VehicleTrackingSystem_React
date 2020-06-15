// Don't remove val='BHR' as it is default value in BookModal
export const pickupPoints = [
	{ val: 'BHR', text: 'BHR' },
	{ val: 'MHR', text: 'MHR' },
	{ val: 'SHR', text: 'SHR' },
	{ val: 'GHR', text: 'GHR' },
	{ val: 'LG', text: 'L-Gate' },
	{ val: 'MBLD', text: 'Admin Building' },
	{ val: 'MG', text: 'Main Gate' },
	{ val: 'SES', text: 'SES' },
	{ val: 'LBCF', text: 'LBC Front' },
	{ val: 'LBCC', text: 'LBC Charging Point' },
	{ val: 'SBS', text: 'SBS' },
	{ val: 'SIF', text: 'SIF/SMS' },
	{ val: 'CC', text: 'Community Center' },
	{ val: 'GH', text: 'Guest House' },
	{ val: 'SC', text: 'Shopping Complex' },
	{ val: 'SQ', text: 'Staff Quarters' },
]

export const getPickupPointName = (val) => {
	const pickupPoint = pickupPoints.find(point => point.val === val)
	if(!pickupPoint) return val
	return pickupPoint.text
}