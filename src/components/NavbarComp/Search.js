import React,{useState, useEffect} from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBBtn,
  MDBInputGroup
} from 'mdb-react-ui-kit';

const Search = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>

      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
            <input className='form-control'
              placeholder="Search products"
              aria-label="Search"
              type='Search'
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}

            />
            
            <MDBBtn outline>Search</MDBBtn>
          </MDBInputGroup>
        </MDBContainer>
      </MDBNavbar>
      {/* <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul> */}
    </div>
  )
}

export default Search