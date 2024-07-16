import { useState } from 'react';
export function useFormInput(valeurInitiale) {
  const [value, setValeur] = useState(valeurInitiale);

  function handleChange(e) {
    setValeur(e.target.value);
  }
  const inputProps = {
    value: value,
    onChange: handleChange
  };
  return inputProps;
}
