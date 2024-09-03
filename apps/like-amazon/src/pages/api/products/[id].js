export default function handler(req, res) {
  const { id } = req.query; // URLからIDを取得

  const products = {
    "1": {
      id: "1",
      name: "商品1",
      image: "https://m.media-amazon.com/images/I/613+pDQxfXL._AC_SL1000_.jpg",
      price: 1000,
      description: "This is a sample description for 商品1."
    },
    "2": {
      id: "2",
      name: "商品2",
      image: "https://m.media-amazon.com/images/I/81xN+3usCKL._AC_SL1500_.jpg",
      price: 2000,
      description: "This is a sample description for 商品2."
    },
    "3": {
      id: "3",
      name: "商品3",
      image: "https://m.media-amazon.com/images/I/61I66N7SE6L._AC_SL1500_.jpg",
      price: 3000,
      description: "This is a sample description for 商品3."
    },
    "4": {
      id: "4",
      name: "商品4",
      image: "https://m.media-amazon.com/images/I/51eAd8gGMvL._AC_SL1500_.jpg",
      price: 4000,
      description: "This is a sample description for 商品4."
    },
    "5": {
      id: "5",
      name: "商品5",
      image: "https://m.media-amazon.com/images/I/71X+NGKVV5L._AC_SL1500_.jpg",
      price: 5000,
      description: "This is a sample description for 商品5."
    },
    "6": {
      id: "6",
      name: "商品6",
      image: "https://m.media-amazon.com/images/I/61CiqV6azL._AC_SL1000_.jpg",
      price: 6000,
      description: "This is a sample description for 商品6."
    },
    "7": {
      id: "7",
      name: "商品7",
      image: "https://m.media-amazon.com/images/I/71RC3o90shL._AC_SL1500_.jpg",
      price: 7000,
      description: "This is a sample description for 商品7."
    },
    "8": {
      id: "8",
      name: "商品8",
      image: "https://m.media-amazon.com/images/I/81Zt42ioCgL._AC_SL1500_.jpg",
      price: 8000,
      description: "This is a sample description for 商品8."
    }
  };

  // IDに基づいて適切な商品データを返す
  const product = products[id] || { error: "Product not found" };

  if (product.error) {
    res.status(404).json(product);
  } else {
    res.status(200).json(product);
  }
}
