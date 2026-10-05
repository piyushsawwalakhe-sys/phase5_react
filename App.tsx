import ProductList from "./ProductList";

function App() {
  const products = [
    "Laptop",
    "Mobile",
    "Headphones",
    "Keyboard",
    "Mouse",
  ];

  const handleSelectProduct = (product: string) => {
    console.log("Selected product:", product);
  };

  return (
    <div className="container mt-4">
      <ProductList
        items={products}
        heading="Electronic Products"
        onSelectProduct={handleSelectProduct}
      />
    </div>
  );
}

export default App;