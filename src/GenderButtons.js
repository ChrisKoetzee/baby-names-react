import React from 'react';

const GenderButtons = ({array}) => {
    const Boys = array.forEach((child)=>{
        if (child.sex === "m" ) {
            return (child.name)
          }});
     const Girls = array.forEach((child)=>{
            if (child.sex === "f" ) {
                return (child.name)   
            }});   

    return (
        <div>
            <form>
                <input className="boy" 
                        type='checkbox'
                        style={{backgroundColor: 'blue'}}
                        onChange={Boys} 
                        />
                        <label>Select for Boys</label>
                <input className="girl" 
                        type='checkbox'
                        style={{backgroundColor: 'pink'}}
                        onChange={Girls}
                        />
                        <label>Select for Girls</label>
            </form>
        </div>
    )
};

export default GenderButtons;