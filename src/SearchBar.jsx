import React from 'react';
import { Search } from 'lucide-react';


export default function SearchBar({ value, onChange, placeholder = "" }) {
    return (
        <div className="relative w-80 h-11 mb-10 bg-white ">
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full text-black placeholder-gray-400 font-semibold p-2.5 ml-1"
            />
            <Search className="absolute right-3 top-0 translate-y-1/2 text-gray-200" size={25} />
        </div>
    );
}

