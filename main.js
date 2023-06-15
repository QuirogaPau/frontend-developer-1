const menuNav = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart')
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuNav.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);

function toggleDesktopMenu() {
     const isAsideClosed = aside.classList.contains('inactive');

     if(!isAsideClosed) {
          aside.classList.add('inactive');   
     }

     desktopMenu.classList.toggle('inactive');
     
}

function toggleMobileMenu() {
     const isAsideClosed = aside.classList.contains('inactive');

     if(!isAsideClosed) {
          aside.classList.add('inactive');   
     }

     mobileMenu.classList.toggle('inactive');
}

function toggleCartAside() {
     const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopClosed = desktopMenu.classList.contains('inactive');
     if (!isMobileMenuClosed) {
          // Abrir el aside
          mobileMenu.classList.toggle('inactive');
     } else if (!isDesktopClosed) {
          desktopMenu.classList.toggle('inactive');
     }

     aside.classList.toggle('inactive');
}

// objeto classList, que permite añadir, eliminar, alternar y consultar clases CSS cómodamente: En donde va a indicar que si esta inactivo si active y viceversa 

const productList = [];
productList.push({
     name: 'Bike',
     price: 120.00,
     image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

})
productList.push({
     name: 'Sillon',
     price: 120.00,
     image: 'https://images.pexels.com/photos/4138152/pexels-photo-4138152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
       
})
productList.push({
     name: 'Florero',
     price: 120.00,
     image: 'https://images.pexels.com/photos/6707632/pexels-photo-6707632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
       
})
productList.push({
     name: 'Wall-e',
     price: 120.00,
     image: 'https://images.pexels.com/photos/981588/pexels-photo-981588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
       
})
productList.push({
     name: 'Houseplant',
     price: 120.00,
     image: 'https://images.pexels.com/photos/3401161/pexels-photo-3401161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
       
})
productList.push({
     name: 'Dress',
     price: 120.00,
     image: 'https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
       
})
productList.push({
     name: 'Dress',
     price: 120.00,
     image: 'https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
       
})
productList.push({
     name: 'Dress',
     price: 120.00,
     image: 'https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
       
})
productList.push({
     name: 'Dress',
     price: 120.00,
     image: 'https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
       
})
productList.push({
     name: 'Dress',
     price: 120.00,
     image: 'https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
       
})
productList.push({
     name: 'Dress',
     price: 120.00,
     image: 'https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
       
})
productList.push({
     name: 'Dress',
     price: 120.00,
     image: 'https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
       
})
productList.push({
     name: 'Dress',
     price: 120.00,
     image: 'https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
       
})
productList.push({
     name: 'Dress',
     price: 120.00,
     image: 'https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
       
})
productList.push({
     name: 'Dress',
     price: 120.00,
     image: 'https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
       
})

productList.push({
     name: 'Dress',
     price: 120.00,
     image: 'https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
       
})

function renderProducts(arr) {
   for (product of arr) {
   const productCard =  document.createElement('div');
     productCard.classList.add('product-card');
      
   const productImg = document.createElement('img');
   productImg.setAttribute('src', product.image);

   const productInfo =  document.createElement('div');
   productInfo.classList.add('product-info');

   const productInfoDiv = document.createElement('div');
    
   const productPrice = document.createElement('p');
     productPrice.innerText = '$' + product.price;
   const productName = document.createElement('p');
     productName.innerText =  product.name;

   const productInfoFigure = document.createElement('figure');
   const productImgCart = document.createElement('img');
     productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

     productInfoFigure.appendChild(productImgCart);
          
     productInfo.appendChild(productInfoDiv);
     productInfoDiv.appendChild(productPrice); 
     productInfo.appendChild(productInfoFigure);
     productInfoDiv.appendChild(productName);
     productCard.appendChild(productImg);
     productCard.appendChild(productInfo);

     cardsContainer.appendChild(productCard);
}  
}
renderProducts(productList);