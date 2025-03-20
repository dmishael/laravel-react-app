import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function SelectInput(
    { className = '', isFocused = false, options = [], ...props },
    ref,
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <select
            {...props}
            className={
                'rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ' +
                className
            }
            ref={input}
        >
            {options.map((option) => (
                <option key={option}>{option}</option>
            ))}
        </select>
    );
});
