import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductProps> = ({ id, name, price, image }) => {
  return (
    <Link className="product-card" href={`/products/${id}`} passHref>
      <div style={{ position: 'relative', width: '150px', height: '150px' }}>
        <Image src={image} alt={name} layout="fill" objectFit="cover" />
      </div>
      <h3>{name}</h3>
      <p>¥{price.toLocaleString()}</p>
    </Link>
  );
};

export default ProductCard;
