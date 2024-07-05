import React from 'react'

const DangerouslyInnerHTML = () => {
    const content= "<h1 style='color:blue;'>Simple Application</h1>";
    return (
      <div dangerouslySetInnerHTML={{__html:content}} />
    );
}

export default DangerouslyInnerHTML