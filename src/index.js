import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './Store/store';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	// <React.StrictMode>
	<Provider store={store}>
		<App />
	</Provider>
	// </React.StrictMode>
	, document.getElementById('root')
);

// ============== FOR DEVLOPEMENT ================================
serviceWorker.unregister();

// ============== FOR DEPLOYMENT  ================================
// serviceWorker.register({
// 	onUpdate: registration => {	
// 		alert('New version available! Updating the web-app.....');
// 		console.log('Updating....');
// 		if (registration && registration.waiting) {
// 			registration.waiting.postMessage({ type: 'SKIP_WAITING' });
// 		}
// 		window.location.reload();
// 	}
// });