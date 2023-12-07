import React from 'react';

const StyledDiv = ({ ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {

  return (
    <div {...props} className={`styled-div`}>
    </div>
  );
}

export default StyledDiv;
