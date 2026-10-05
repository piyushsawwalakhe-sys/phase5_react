type ProductListProps = {
  items: string[];
  heading: string;
  onSelectProduct: (product: string) => void;
};

function ProductList({
  items,
  heading,
  onSelectProduct,
}: ProductListProps) {
  return (
    <div>
      <h2>{heading}</h2>

      {items.map((product) => (
        <button
          key={product}
          onClick={() => onSelectProduct(product)}
        >
          {product}
        </button>
      ))}
    </div>
  );
}

export default ProductList;