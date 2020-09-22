
let products = [
    {
      id: 1,
      name: "Black Tshirt",
      size: "L",
      color: "black",
      price: 1200,
      image: "images/image1.jpg",
      description: "Good looking black tshirt",
    },
    {
      id: 2,
      name: "Denim Shirt",
      size: "M",
      color: "Multi",
      price: 1500,
      image: "images/image2.jpg",
      description: "Good looking shirt",
    },
  
    {
      id: 3,
      name: "White t-Shirt",
      size: "S",
      color: "White",
      price: 900,
      image: "images/image3.jpg",
      description: "Good looking t-Shirt",
    },
  
    {
      id: 4,
      name: "Jeans female",
      size: "M",
      color: "Multi",
      price: 3000,
      image: "images/image4.jpg",
      description: "Beautiful jeans",
    },
  
    {
      id: 5,
      name: "Jeans male",
      size: "S",
      color: "Blue",
      price: 1300,
      image: "images/image5.jpg",
      description: "Good looking jeans",
    },
  
    {
      id: 6,
      name: "Jeans black male",
      size: "M",
      color: "black",
      price: 1500,
      image: "images/image6.jpg",
      description: "black jeans",
    },

    ///// QUESTION NO 1 SOLUTION
    {
        id: 7,
        name: "t-Shirt",
        size: "L",
        color: "black",
        price: 5000,
        image: "images/image7.jpg",
        description: "polo tshirt",
      },

      {
        id: 8,
        name: "Golden polo shirt",
        size: "XL",
        color: "yellow",
        price: 3500,
        image: "images/image8.jpg",
        description: "Golden polo tshirt cotton",
      },

      {
        id: 9,
        name: "white Tshirt",
        size: "S",
        color: "White",
        price: 800,
        image: "images/image9.jpg",
        description: "Kids Wear White Colored Top",
      },

      {
        id: 10,
        name: "black jeans ladies",
        size: "S",
        color: "Grey black",
        price: 600,
        image: "images/image10.jpg",
        description: "black ladies wear jeans",
      },

      {
        id: 11,
        name: "white Pants",
        size: "M",
        color: "White",
        price: 2500,
        image: "images/image11.jpg",
        description: "White Pants ladies",
      },

      {
        id: 12,
        name: "Denim jeans ladies",
        size: "XL",
        color: "blue",
        price: 1000,
        image: "images/image12.jpg",
        description: "Denim jeans ladies",
      },
  ];
  
  cart = [];
  
  function displayProducts(productsData, who = "productwrapper") {
    let productsString = "";
  
    productsData.forEach(function (product, index) {
      let { id, name, image, color, description, price, size } = product;
  
      if (who == "productwrapper") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="addToCart(${id})">Add to Cart</button>
          </p>
        </div>`;
      } else if (who == "cart") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="removeFromCart(${id})">Remove from Cart</button>
          </p>
        </div>`;
      }
    });
  
    document.getElementById(who).innerHTML = productsString;
  }
  
  displayProducts(products);
  
  function searchProduct(searchValue) {
    let searchedProducts = products.filter(function (product, index) {
      let searchString =
        product.name + " " + product.color + " " + product.description;
  
      return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });
  
    displayProducts(searchedProducts);
  }
  
  // this is a function to get a product based on id from a particular array
  // @param 1 the array u want to get products from
  // @param 2 the id u want to search
  
  function getProductByID(productArray, id) {
    return productArray.find(function (product) {
      return product.id == id;
    });
  }
  

  let flag = 0;
  function addToCart(id) {
    flag = 0;
    let pro = getProductByID(products, id);

    cart.forEach(function(ele){
      if(ele.id == pro.id){
        flag=1;
      }
    });

    if(flag==0){
    cart.push(pro);
    displayProducts(cart, "cart");
    CountCartItems();
    }
    else
    {
      alert("This Product is already in cart");
    }
  }
  
  function removeFromCart(id) {
    // getting the index based on id
    let index = cart.findIndex(function (product) {
      return product.id == id;
    });
  
    //   removing from cart based on index
    cart.splice(index, 1);
    displayProducts(cart, "cart");
    CountCartItems();
  }

  function filterByPrice(){
      let minPrice = document.getElementById('min-price').value;
      let maxPrice = document.getElementById('max-price').value;
      let filteredProducts = products.filter(function(prod){
        return prod.price>=minPrice && prod.price<=maxPrice;

      });

      displayProducts(filteredProducts);
  }

  function CountCartItems(){
    document.getElementById("CartCount").value = cart.length;
    //console.log(c);
  }

  CountCartItems();