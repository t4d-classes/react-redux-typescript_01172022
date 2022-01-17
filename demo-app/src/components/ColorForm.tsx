import { useState, ChangeEvent } from 'react';
import { Color, NewColor } from '../models/colors';

export type ColorFormProps = {
    buttonText: string;
    onSubmitColor: (color: NewColor) => void;
}

export const ColorForm = (props: ColorFormProps) => {

    const [ colorForm, setColorForm ] = useState({
        name: '', hexcode: '',
    });

    const submitColor = () => {
        props.onSubmitColor({
            ...colorForm
        });
    };

    const change = (e: ChangeEvent<HTMLInputElement>) => {
        setColorForm({
            ...colorForm,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form>
            <label>
                Color Name:
                <input type="text" name="name" value={colorForm.name} onChange={change} />
            </label>
            <label>
                Color Hexcode:
                <input type="text" name="hexcode" value={colorForm.hexcode} onChange={change} />
            </label>
            <button type="button" onClick={submitColor}>{props.buttonText}</button>
        </form>
    );

};