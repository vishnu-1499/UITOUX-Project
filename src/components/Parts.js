import React from 'react';
import { PartList } from './PartList';
import PartItem from './PartItem';
import './Parts.css';

function Parts() {
  return (
    <div className='parts'>
        <div className='partList'>
            {PartList.map((partItem, key) => {
                    return(
                        <PartItem
                        key={key}
                        image={partItem.image}
                        name={partItem.name}
                        />
                    );
            })}
        </div>
    </div>
  )
}

export default Parts;