const header = document.querySelector("header");
const cartIcon = header.lastElementChild;
const cart = document.querySelector(".cart");
cartIcon.addEventListener("click", () => {
    cart.classList.toggle("show");
});

const headerMenu = document.querySelector("header");
const cartIconMenu = headerMenu.firstElementChild;
const cartMenu = document.querySelector(".cartMenu");
cartIconMenu.addEventListener("click", () => {
    cartMenu.classList.toggle("showMenu");
});

const closeCart = document.querySelector(".cart__close");
closeCart.addEventListener("click", () => {
    cart.classList.remove("show");
});

const closeCartMenu = document.querySelector(".cartMenu__close");
closeCartMenu.addEventListener("click", () => {
    cartMenu.classList.remove("showMenu");
});

const iconRemove = document.querySelectorAll(".remove");
iconRemove.forEach(elem => {
    elem.addEventListener("click", () => {
        const elementParent = elem.parentElement;
        elementParent.remove();
    })
});

function badgeAdd() {
    const numeroProd = document.getElementsByClassName("cartMenu__item");
    const badgAdd = numeroProd.length;
    const badge = document.querySelector(".badge");
    badge.innerHTML = badgAdd;
}

function badgeDelete() {
    const numeroProd = document.getElementsByClassName("cartMenu__item");
    const badgADelete = numeroProd.length - 1;
    const badge = document.querySelector(".badge");
    badge.innerHTML = badgADelete;
}

function agregarProductos(id, alt, imagen, titulo, precio ) {
    const cartProdL = document.querySelector(".cartMenu__Products");
    const cartProdR = document.querySelector(".cart__Products");
    const sectionL = document.createElement("section");
    sectionL.classList.add("cartMenu__item");
    const sectionR = document.createElement("section");
    sectionR.classList.add("cart__item");
    cartProdL.appendChild(sectionL); 
    cartProdR.appendChild(sectionR); 
    const cartL = document.querySelector(".cartMenu__Products");
    const cartR = document.querySelector(".cart__Products");
    const cartItemL = cartL.lastElementChild;
    const cartItemR = cartR.lastElementChild;
    //Creando id
    const idProd = document.createElement("p"); 
    idProd.classList.add("idProducto");
    idProd.innerText = id;
    idProd.setAttribute("hidden", "true");
    cartItemL.appendChild(idProd);  
    //Creando elemento img
    const imgProdL = document.createElement("img");
    imgProdL.classList.add("cartMenu__img");
    imgProdL.setAttribute("alt", alt);
    imgProdL.setAttribute("src", imagen);
    cartItemL.appendChild(imgProdL);
    const imgProdR = document.createElement("img");
    imgProdR.classList.add("cart__img");
    imgProdR.setAttribute("alt", alt);
    imgProdR.setAttribute("src", imagen);
    cartItemR.appendChild(imgProdR);
    //Creando elemento p
    const priceL = document.createElement("p");
    priceL.classList.add("cartMenu__description");
    priceL.innerText = titulo;
    cartItemL.appendChild(priceL);
    const pricelR = document.createElement("p");
    pricelR.classList.add("cart__description");
    pricelR.innerText = titulo;
    cartItemR.appendChild(pricelR);
    //Creando otro elemento p
    const pl2 = document.createElement("p");
    pl2.classList.add("cartMenu__price");
    pl2.innerText = precio;
    pl2.id = "cartMenuPrecio"
    cartItemL.appendChild(pl2);
    const pr2 = document.createElement("p");
    pr2.classList.add("cart__price");
    pr2.innerText = precio;
    pr2.id = "cartMenuPrecio"
    cartItemR.appendChild(pr2);
    //Creando otro elemento i
    const iL = document.createElement("i");
    iL.classList.add("removeProductoL");
    cartItemL.appendChild(iL);
    const iR = document.createElement("i");
    iR.classList.add("removeProductoR");
    cartItemR.appendChild(iR);
    //Creando icono de borrar
    const iconDeleteL = document.createElement("img");
    iconDeleteL.classList.add("cartMenu__icon", "borrarProductoL");
    iconDeleteL.setAttribute("src", "img/delet.png");
    const iconDeleteR = document.createElement("img");
    iconDeleteR.classList.add("cartMenu__icon", "borrarProductoR");
    iconDeleteR.setAttribute("src", "img/delet.png");
    const iDeleteL = document.querySelector(".removeProductoL");
    const iDeleteR = document.querySelector(".removeProductoR");
    cartItemL.appendChild(iconDeleteL);
    cartItemR.appendChild(iconDeleteR);
    badgeAdd();
    iconDeleteL.addEventListener("click", () => {
        badgeDelete();
        const borrarL = iconDeleteL.parentElement;
        const borrarR = iconDeleteR.parentElement;
        borrarL.remove();            
        borrarR.remove();            
    });

    iconDeleteR.addEventListener("click", () => {
        badgeDelete();
        const borrarR = iconDeleteR.parentElement;
        const borrarL = iconDeleteL.parentElement;
        borrarR.remove();            
        borrarL.remove();
    });
}

function productosCar() {
    const idProdCart = document.querySelectorAll(".cartMenu__item");
    const ids = [];
    idProdCart.forEach(element => {
        const id = element.querySelector(".idProducto");
        ids.push(id.innerHTML);
    });
    return ids;
}

const prod = document.querySelectorAll(".products__btn");
prod.forEach(elem => {
    elem.addEventListener("click", () => {
        const padre = elem.parentElement;
        const id = padre.querySelector(".idProd");
        const imgProd = padre.querySelector(".products__item img");
        const h3 = padre.querySelector(".products__item h3");
        const h4 = padre.querySelector(".products__item h4");
        const idProd = id.innerHTML;
        const alt = h3.innerHTML;
        const imagen = imgProd.src;
        const titulo = h3.innerHTML;
        const precio = h4.innerHTML;
        const productos = document.getElementsByClassName("badge");
        const badge = document.querySelector(".badge");
        const numProd = badge.innerHTML;
        const ids = productosCar();
        if(numProd == 0){
            agregarProductos(idProd, alt, imagen, titulo, precio);            
        }else if(ids.includes(idProd)){
            alert(`El articulo ${titulo} ya se encuentra en el carrito.`);
        }else {
            agregarProductos(idProd, alt, imagen, titulo, precio); 
        }
    });
});



