import React from 'react';
import Map from '../../Components/Map/Map2';
import UserPanel from '../../Components/UserPanel/UserPanel';
import BookModal from '../../Components/BookModal/BookModal';

const User = (props) => {
	return (
		<div>
			<BookModal />
			<Map />
			<UserPanel />
		</div>
	);
}

export default User;
