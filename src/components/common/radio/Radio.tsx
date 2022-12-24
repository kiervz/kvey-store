import React, { useState } from 'react';

interface IRadioProps {
  label: string;
  value: string;
}

interface IRadio {
  data: IRadioProps[],
  onSelected: (selected: string) => void
}

export const Radio = ({ data, onSelected }:IRadio) => {
  const [selected, setSelected] = useState<string>(data[0].value);

  const handleSelected = (value: string) => {
    setSelected(value);
    onSelected(value);
  };

  return (
    <ul>
      { data?.map(item => (
        <li className='flex items-center px-3 py-1' key={item.label}>
          { <input 
            type="radio" 
            id={item.value} 
            className="bg-slate-100 border-slate-300 text-slate-900 focus:ring-slate-200"
            onChange={() => handleSelected(item.value)}
            checked={selected === item.value}
          /> }
          <label 
            htmlFor={item.value} 
            className="ml-2 w-max cursor-pointer text-sm sm:text-md"
            onClick={() => handleSelected(item.value)}
          >
            { item.label }
          </label>
        </li>
      )) }
    </ul>
  );
};
