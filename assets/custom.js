          // select the bydefault varient 
          // find the variant with options “Black” & “Medium"  
          document.querySelector(".product-form__submit").addEventListener("click",()=>{
           id = document.querySelector(".product-variant-id");
          // if matched The “Soft Winter Jacket” product will also be automatically added to the cart 
          if(id.value == "45153724891417") {

            async function addItem(variantId, quantity = {}) {
            fetch('/cart/add.js', {
              method: 'POST',
              body: JSON.stringify(
              {
                quantity: quantity,
                id: variantId
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }
            })
            .then(function(response){ 
              return response.json()})
            .then(function(data)
              {console.log(data)}).catch(error => console.error('Error:', error)); 
}
          }
        
            const lineItem = await addItem(45134163443993, 1);
            
        });