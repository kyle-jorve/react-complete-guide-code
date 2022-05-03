import React, { useState, Fragment } from 'react';
import Modal from './components/Modal/Modal';
import Form from './components/Form/Form';
import UserList from './components/UserList/UserList';

function App() {
	const [usersList, setUsersList] = useState([]);
	const [modalActive, setModalActive] = useState(false);
	const [modalMessage, setModalMessage] = useState([]);

	function addUserHandler(data) {
		setUsersList(prevState => {
			return [data, ...prevState];
		});
	}

	function invalidInputHandler(message) {
		setModalActive(true);
		setModalMessage(message);
	}

	return (
		<Fragment>
			<Modal
				active={modalActive}
				message={modalMessage}
				onButtonClick={() => setModalActive(false)}
			/>
			<section className="wrapper wrapper--grid">
				<Form
					onAddUser={addUserHandler}
					onInvalidInput={invalidInputHandler}
				/>
				<UserList users={usersList} />
			</section>
		</Fragment>
	);
}

export default App;
