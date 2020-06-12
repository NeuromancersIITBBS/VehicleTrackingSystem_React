import ActiveMarker from './DriverMarkers/ActiveDefault.svg';
import InactiveMarker from './DriverMarkers/Inactive.svg';
import AcadComplexMarker from './DriverMarkers/AcadComplex.svg';
import MHRMarker from './DriverMarkers/MHR.svg';
import SHRMarker from './DriverMarkers/SHR.svg';

const MHRSide = ['BHR', 'MHR', 'LG'];
const SHRSide = ['GHR', 'SHR', 'CC', 'GH', 'SC', 'SQ'];
const AcadSide = ['MBLD', 'MG', 'SES', 'LBCF', 'LBCC', 'SBS', 'SIF', 'SMS'];

export const getDriverMarker = (status, destination) => {
    if(status !== 'active') return InactiveMarker;
    if(destination === null) return ActiveMarker;
    console.log(destination);
    if(MHRSide.includes(destination)) return MHRMarker;
    if(SHRSide.includes(destination)) return SHRMarker;
    if(AcadSide.includes(destination)) return AcadComplexMarker;
    return ActiveMarker;
};