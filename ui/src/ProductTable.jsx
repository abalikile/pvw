import React from 'react';
import { Link } from 'react-router-dom';
function ProductRow({ product }) {
  return (
    <tr>
      <td>{product.productname}</td>
      <td>
        $
        {product.price}
      </td>
      <td>{product.category}</td>
      <td><Link to={`/view/${product.id}`}>View</Link></td>
	  <td><Link to={`/edit/${product.id}`}>Edit</Link></td>
    </tr>
  );
}

export default function ProductTable({ products }) {
  const productRows = products.map((product) => (
    // id is taken as key value which uniquely identifies a row.
    <ProductRow key={product.id} product={product} />
  ));
  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th className="color1">Product Name</th>
          <th className="color2">Price</th>
          <th className="color1">Category</th>
          <th className="color2">Image</th>
		  <th className="color1">Action</th>
        </tr>
      </thead>
      <tbody>
        {productRows}
      </tbody>
    </table>
  );
}
