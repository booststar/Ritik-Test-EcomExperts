          // select the bydefault varient 
          // find the variant with options “Black” & “Medium"  
    document.querySelector(".product-form__submit").addEventListener("click",()=>{
       id = document.querySelector(".product-variant-id");
          // if matched The “Soft Winter Jacket” product will also be automatically added to the cart 
        if(id.value == "40002258468935") {
          console.log("Done"); 
        }    
    });