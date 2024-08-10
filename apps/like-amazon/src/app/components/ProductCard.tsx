import Image from 'next/image';
import React from 'react';

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductProps> = ({ name, price, image }) => {
  return (
    <div className="product-card">
      <div style={{ position: 'relative', width: '150px', height: '150px' }}>
        <Image src={image} alt={name} layout="fill" objectFit="cover" />
      </div>
      <h3>{name}</h3>
      <p>¥{price.toLocaleString()}</p>
    </div>
  );
};

export default ProductCard;
