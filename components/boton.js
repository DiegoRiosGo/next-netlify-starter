import React from 'react';
import Link from 'next/link'; // Importar el componente Link

const MyButton = ({ text, url }) => {
    return (
      <Link href={url}>
        <button type="button" style={{ backgroundColor: 'blue', color: 'white' }}>
          {text}
        </button>
      </Link>
    );
  };
export default MyButton;

