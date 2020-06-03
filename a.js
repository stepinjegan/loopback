function fetchproducts() {
    fetch('http://localhost:3000/products')
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(json => {
        let a = `<div></div> `;
             json.forEach(product => {
             a += `<h1>${product.name}</h1>
             <img  class="ac"src=${product.image}><span><button onClick="addtocart('${product.name},${product.price}')" class="z" >ADD TO CART</button>
             <h1>$${product.price}</h1>`;
                   
        });
        document.getElementById("x").innerHTML = a;
      })
      .catch(error => {
        console.log(error);
      });
  }
  fetchproducts();

  function addtocart(name)
  {
   (async () => {
        const tocart = await fetch('http://localhost:3000/carts', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({"total": 100, "quantity": 1,"name":name,"price":100})
        });
        const cartdetails = await tocart.json();
        console.log(cartdetails);
        alert('SUCCESSFULLY ADDED TO CART');
      })();
}