import { Layout } from "@/components/Layout";
import { productColors } from "@/data";
import { useState } from "react";

function ItemPage() {
  const [selectedImageUrl, setSelectedImageUrl] = useState<string>(
    productColors?.[0]?.이미지URL
  );

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const color = event.target.value;
    const productColor = productColors.find(
      (product) => product.색상 === color
    );
    if (productColor) {
      setSelectedImageUrl(productColor.이미지URL);
    }
  };

  return (
    <div className="item-main-frame">
      <h1>Product Color Selector</h1>
      <select
        onChange={handleColorChange}
        defaultValue={productColors?.[0]?.색상 || ""}
      >
        <option value="" disabled>
          Choose a color
        </option>
        {productColors.map((product) => (
          <option key={product.색상} value={product.색상}>
            {product.색상}
          </option>
        ))}
      </select>
      {selectedImageUrl ? (
        <img src={selectedImageUrl} alt="Selected Product" />
      ) : (
        <h5>No Product Image</h5>
      )}
    </div>
  );
}

export default Layout(ItemPage);
