import { useCallback, useState } from 'react';

// Управление формой
function handleForm() {
  const [values, setValues] = useState({});

  function handleChange(e) {
    const target = e;
    const value = target;
    const name = target;
    setValues({ ...values, [name]: value });
  }

  return { values, handleChange, setValues };
}

// Управление формой с валидацией
function handleFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(e) {
    const target = e;
    const value = target;
    const name = target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValisity());
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  return {
    values, handleChange, errors, isValid, resetForm,
  };
}

export { handleForm, handleFormWithValidation };
