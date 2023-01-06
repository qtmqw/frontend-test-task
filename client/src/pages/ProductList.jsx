import React, { useEffect, useState } from 'react'
import { Card, Container, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';

const ProductList = () => {

  // all products
  const [products, setProducts] = useState([]);
  // all selected products
  const [selected, setSelected] = useState({
    product_ids: [],
  });

  useEffect(function () {
    fetch("http://localhost:8080/")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);


  function handleCheckbox(event) {
    const { name, value } = event.target;

    let selectedProduct_ids = selected.product_ids;
    selectedProduct_ids.push(value);
    const newSelectedProducts = {
      ...selected,
      [name]: selectedProduct_ids,
    };
    setSelected(newSelectedProducts);
  }

  const [product, setProduct] = useState([])
  const deleteProduct = async id => {
    console.log(selected)
    await axios.delete(`http://localhost:8080/delete/${selected.product_ids}`)
    setProduct(product.filter(selected => selected.product_ids !== id))
    window.location.reload();
  }

  return (
    <Container>
      <header>
        <h1>Product List</h1>
        <div >
          <Link to='/add' className="space"><Button>ADD</Button></Link>
          <Button variant='danger' id="delete-product-btn" onClick={deleteProduct}>MASS DELETE</Button>
        </div>
        <br />
      </header>
      <form action="" id="product_list_form">
        <div className="flex-container">
          <section>
            {products.map(product => (
              <Card style={{ width: '19rem' }} key={product.id} className="card">
                <Card.Body className='text-center'>
                  <input
                    type="checkbox"
                    className="delete-checkbox"
                    id={product.id}
                    name="product_ids"
                    onChange={handleCheckbox}
                    value={product.id}
                  />
                  <p className="up">{product.Sku}</p>
                  <p>{product.Name}</p>
                  <p>{product.Price} $</p>
                  {
                    product.Size ? (
                      <p>Size: {product.Size} MB</p>
                    ) : ""
                  }
                  {
                    product.Weight ? (
                      <p>Weight: {product.Weight} KG</p>
                    ) : ""
                  }
                  {
                    product.Height ? (
                      <p>Dimension: {product.Height} x {product.Width} x {product.Lenght}</p>
                    ) : ""
                  }
                </Card.Body>
              </Card>
            ))}
          </section>
        </div>
      </form>
    </Container>
  )
}

export default ProductList