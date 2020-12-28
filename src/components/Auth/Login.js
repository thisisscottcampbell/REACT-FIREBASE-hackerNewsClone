import React, { useState } from 'react';
import useFormValidation from './useFormValidation';
import validateLogin from './validateLogin';

const Login = () => {
	const INIT_STATE = {
		name: '',
		email: '',
		password: '',
	};

	const {
		values,
		errors,
		handleSubmit,
		handleChange,
		handleBlur,
		isSubmitting,
	} = useFormValidation(INIT_STATE, validateLogin);
	const [login, setLogin] = useState(true);

	return (
		<div>
			<h2 className="mv3">{login ? 'Login' : 'Create Account'}</h2>
			<form onSubmit={handleSubmit} className="flex flex-column">
				{!login && (
					<input
						onChange={handleChange}
						values={values.name}
						type="text"
						placeholder="your name"
						name="name"
						autoComplete="off"
					/>
				)}
				<input
					onChange={handleChange}
					onBlur={handleBlur}
					values={values.email}
					type="email"
					placeholder="your email"
					name="email"
					autoComplete="off"
				/>
				{errors.email && <p className="error-text">{errors.email}</p>}
				<input
					onChange={handleChange}
					onBlur={handleBlur}
					values={values.password}
					type="password"
					placeholder="password"
					name="password"
				/>
				{errors.password && <p className="error-text">{errors.password}</p>}
				<div className="flex mt3">
					<button
						type="submit"
						className="button pointer mr2"
						disabled={isSubmitting}
						style={{
							background: isSubmitting ? 'grey' : 'orange',
						}}
					>
						Submit
					</button>
					<button
						type="submit"
						className="button pointer"
						onClick={() => setLogin((prevLogin) => !prevLogin)}
					>
						{login ? 'need to create an account?' : 'already have an account'}
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
