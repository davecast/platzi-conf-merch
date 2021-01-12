import { useState } from 'react';

const useForm = (initialState = {}) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleChanges = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    setFormValues(initialState);
  };

  return [formValues, handleChanges, handleReset];
};

export default useForm;
