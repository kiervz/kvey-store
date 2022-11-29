import React, { useState } from 'react';
import { FaRegCircle, FaDotCircle } from 'react-icons/fa';

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
          { selected === item.value ?
            <FaDotCircle 
              id={item.value} 
              className='w-4 h-4 text-slate-900 bg-gray-100 border-gray-300 cursor-pointer'
              onClick={() => handleSelected(item.value)}
            /> :
            <FaRegCircle 
              id={item.value} 
              className='w-4 h-4 text-slate-900 bg-gray-100 border-gray-300 cursor-pointer'
              onClick={() => handleSelected(item.value)}
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
