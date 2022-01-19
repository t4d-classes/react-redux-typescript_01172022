import { useState, ChangeEvent } from 'react';

export type HTMLFormControls =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

export type Change = (e: ChangeEvent<HTMLFormControls>) => void;

export type ResetForm = () => void;

export type UseForm = <T>(initialFormData: T) => [T, Change, ResetForm ];

export const useForm: UseForm = (initialFormData) => {

  const [form, setForm] = useState({ ...initialFormData });

  const change: Change = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.type === 'number'
        ? parseInt(e.target.value, 10) : e.target.value,
    });
  };

  const resetForm: ResetForm = () => setForm({ ...initialFormData });

  return [ form, change, resetForm ];

};


const doIt = () => {

  const T = 2;

  doIt2(T);

}

const doIt2 = (S) => {

  S // is whatever type is passed
}