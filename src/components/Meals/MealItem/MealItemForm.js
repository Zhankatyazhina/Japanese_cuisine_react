import Input from '../../UI/Input.js';
import styles from './MealItemForm.module.css';
import {useRef , useState} from 'react';

const MealItemForm =(props)=>{
    const [inputIsValid , setInputIsValid] = useState(true);
    const amountInputRef = useRef();
    const submitHandler = (event)=>{
        event.preventDefault();

        const inputAmount = amountInputRef.current.value;
        if(inputAmount.trim().length === 0 || +inputAmount < 1|| +inputAmount > 10){
            setInputIsValid(false);
        }

        props.onAddCart(+inputAmount);
    }
    return(
        <form className={styles.form} onSubmit={submitHandler}>
            <Input label='Количество'
            ref={amountInputRef} 
            input={{
                id : props.id,
                type : 'number',
                min: '1',
                step: '1',
                defaultValue : '1'
            }}/>
            <button>Добавить</button>
            {!inputIsValid && <p>Пожалуйста введите число от 1 до 10</p>}
        </form>
    )
}

export default MealItemForm;