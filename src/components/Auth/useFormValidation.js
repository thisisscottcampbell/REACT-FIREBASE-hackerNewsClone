import React, { useState, useEffect } from 'react';

const useFormValidation = (initState, validate) => {
	const [values, setValues] = useState(initState);
	const [errors, setErrors] = useState({});
	const [isSubmitting, setSubmitting] = useState(false);

	useEffect(() => {
		if (isSubmitting) {
			const noErrors = Object.keys(errors).length === 0;
			if (noErrors) {
				console.log('authenticated', values);
				setSubmitting(false);
			} else setSubmitting(false);
		}
	}, [errors]);

	const handleChange = (e) => {
		e.persist();
		setValues((prevValues) => ({
			...prevValues,
			[e.target.name]: e.target.value,
		}));
	};

	const handleBlur = () => {
		const validationErrors = validate(values);
		setErrors(validationErrors);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validate(values);
		setErrors(validationErrors);
		setSubmitting(true);
		console.log({ values });
	};

	return {
		values,
		errors,
		handleSubmit,
		handleChange,
		handleBlur,
		isSubmitting,
	};
};

export default useFormValidation;
