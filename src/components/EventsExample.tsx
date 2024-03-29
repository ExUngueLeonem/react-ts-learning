import React, { FC, useRef, useState } from 'react';


const EventsExample :FC= () => {
    const [value, setValue] = useState<string>('')
    const [IsDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value);
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const onDragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }

    const onDropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
        console.log('drop')
    }

    const onDragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }

    const onDragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    }


    return (
        <div>
            <input value={value} onChange={onChangeHandler} placeholder='brrrrr' />
            <input ref={inputRef} type='text' placeholder='неуправляемый инпут' />
            
            <button onClick={clickHandler}>Example Event</button>
            <div onDrag={onDragHandler} draggable style={{ width: 250, height: 250, background: 'blue' }}></div>
            <div
                onDrop={onDropHandler}
                onDragLeave={onDragLeaveHandler}
                onDragOver={onDragOverHandler}
                style={{ width: 250, height: 250, background: IsDrag ? 'red' : 'blue', marginTop: '15px', }}></div>
        </div>
    );
};

export default EventsExample;