function cart() {
    var final=0;
    fetch('http://localhost:3000/carts')
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(json => {
        let b= `<div></div>`
      let a =`<div></div> `
      json.forEach(cart => {
          var t =cart.name;
         var res= t.substring(t.length, t.indexOf(',')+1);   
         final=Number(res)+Number(final);

        a += `<h1 class="c">${cart.name}</h1>`;
    });
         b += `<h1> Total : ${final}</h1>`;
      document.getElementById("x").innerHTML = a;
      document.getElementById("y").innerHTML = b;
    })
    .catch(error => {
      console.log(error);
    });
  }
  cart();