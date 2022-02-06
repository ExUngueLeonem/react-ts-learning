import React, { FC, useState } from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface cardPropsType {
    width?: string;
    height?: string;
    variant?: CardVariant;
    children: React.ReactChild | React.ReactNode;
    onClick: (num: number) => void
}

const Card: FC<cardPropsType> =
    ({
        width,
        height,
        children,
        variant,
        onClick

    }) => {
        const [state, setState] = useState(0)
        
        return (
            <div style={{
                width, height,
                border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
                background: variant === CardVariant.primary ? 'green' : ''
            }}
                onClick={() => onClick(state)}
            >
                {children}
            </div>
        );
    };

export default Card;