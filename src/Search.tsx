import {memo } from 'react';

interface SearchProps{
    onChange: (text: string) => void;
}
const Search = ({onChange}: SearchProps) =>{
    console.log("Rendering Search");

    return (
        <>
            <input 
                type="text"
                placeholder="Search users..."
                onChange={ (e) =>{onChange(e.target.value)}}
             />
        </>
    );
}

export default memo(Search);