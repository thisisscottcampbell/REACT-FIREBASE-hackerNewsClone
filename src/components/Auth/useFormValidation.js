// import { useState } from 'react';

// const useFormValidation = (initState, validate, authenticated) => {
// 	const [values, setValues] = useState(initState);
// 	const [errors, setErrors] = useState({});
// 	const [isSubmitting, setSubmitting] = useState(false);

// 	// useEffect(() => {
// 	// 	if (isSubmitting) {
// 	// 		const noErrors = Object.keys(errors).length === 0;
// 	// 		if (noErrors) {
// 	// 			authenticated();
// 	// 			setSubmitting(false);
// 	// 		} else setSubmitting(false);
// 	// 	}
// 	// }, [isSubmitting, authenticated, errors]);

// 	const handleChange = (e) => {
// 		e.persist();
// 		setValues((prevValues) => ({
// 			...prevValues,
// 			[e.target.name]: e.target.value,
// 		}));
// 	};

// 	const handleBlur = () => {
// 		const validationErrors = validate(values);
// 		setErrors(validationErrors);
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();

// 		setSubmitting(true);

// 		const validationErrors = validate(values);

// 		Object.keys(errors).length === 0
// 			? await authenticated()
// 			: setErrors(validationErrors);

// 		setSubmitting(false);
// 	};

// 	return {
// 		values,
// 		errors,
// 		handleSubmit,
// 		handleChange,
// 		handleBlur,
// 		isSubmitting,
// 	};
// };

// export default useFormValidation;

import React from 'react';

function useFormValidation(initialState, validate, authenticate) {
	const [values, setValues] = React.useState(initialState);
	const [errors, setErrors] = React.useState({});
	const [isSubmitting, setSubmitting] = React.useState(false);

	React.useEffect(() => {
		if (isSubmitting) {
			const noErrors = Object.keys(errors).length === 0;
			if (noErrors) {
				authenticate();
				setSubmitting(false);
			} else {
				setSubmitting(false);
			}
		}
	}, [errors]);

	function handleChange(event) {
		event.persist();
		setValues((previousValues) => ({
			...previousValues,
			[event.target.name]: event.target.value,
		}));
	}

	function handleBlur() {
		const validationErrors = validate(values);
		setErrors(validationErrors);
	}

	function handleSubmit(event) {
		event.preventDefault();
		const validationErrors = validate(values);
		setErrors(validationErrors);
		setSubmitting(true);
	}

	return {
		handleSubmit,
		handleBlur,
		handleChange,
		values,
		errors,
		isSubmitting,
	};
}

export default useFormValidation;
