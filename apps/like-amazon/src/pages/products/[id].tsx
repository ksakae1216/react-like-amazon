import Image from 'next/image'; // next/imageをインポート
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Define a type for the product
type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
};

const ImageGallery = ({ image }: { image: string }) => {
  console.log('image -> ', image);
  return (
    <div>
      <Image src={image} alt="Selected" width={500} height={500} />
    </div>
  );
};

const ProductDetails = ({ product }: { product: Product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>価格: ¥{product.price.toLocaleString()}</p>
      <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
        カートに追加
      </button>
    </div>
  );
};

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json() as Product;
        setProduct(data);
      } catch (error) {
        setError('Failed to fetch product');
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ImageGallery image={product.image} />
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductDetailPage;
