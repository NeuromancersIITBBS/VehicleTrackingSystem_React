import ActiveDriverMarker from './DriverMarkers/ActiveDefault.svg';
import InactiveDriverMarker from './DriverMarkers/Inactive.svg';
import AcadComplexDriverMarker from './DriverMarkers/AcadComplex.svg';
import MHRDriverMarker from './DriverMarkers/MHR.svg';
import SHRDriverMarker from './DriverMarkers/SHR.svg';
import AcadComplexUserMarker from './UserMarkers/AcadComplex.svg';
import MHRUserMarker from './UserMarkers/MHR.svg';
import SHRUserMarker from './UserMarkers/SHR.svg';
import CustomUserMarker from './UserMarkers/Custom.svg';

export const MHRSide = ['BHR', 'MHR', 'LG'];
export const SHRSide = ['GHR', 'SHR', 'CC', 'GH', 'SC', 'SQ'];
export const AcadSide = ['MBLD', 'MG', 'SES', 'LBCF', 'LBCC', 'SBS', 'SIF', 'SMS'];

export const getDriverMarker = (status, destination) => {
    if(status !== 'active') return InactiveDriverMarker;
    if(destination === null) return ActiveDriverMarker;
    if(MHRSide.includes(destination)) return MHRDriverMarker;
    if(SHRSide.includes(destination)) return SHRDriverMarker;
    if(AcadSide.includes(destination)) return AcadComplexDriverMarker;
    return ActiveDriverMarker;
};

export const getUserMarker = (destination) => {
    if(destination === null) return CustomUserMarker;
    if(MHRSide.includes(destination)) return MHRUserMarker;
    if(SHRSide.includes(destination)) return SHRUserMarker;
    if(AcadSide.includes(destination)) return AcadComplexUserMarker;
    return CustomUserMarker;
};
