const images = {
    1: {
        imageUrl: "https://testImages.com/book",
        imageData: "This is a Book",
        altText: "Sorry could not load this book",
    },
    2: {
        imageUrl: "https://testImages.com/cd",
        imageData: "This is a CD",
        altText: "Sorry could not load this cd",
    },
    4: {
        imageUrl: "https://testImages.com/calculator",
        imageData: "This is a Calculator",
        altText: "Sorry could not laod this Calculator",
    },
};
const products = {
    10: {
        name: "book",
        productId: 10,
        imageId: 1,
    },
    11: {
        name: "cd",
        productId: 11,
        imageId: 2,
    },
    12: {
        name: "laptop",
        productId: 12,
    },
    13: {
        name: "calculator",
        productId: 13,
        imageId: 4,
    },
};
function generateProducts(ids) {
    return ids.map((id) => {
        const product = products[id];
        if (product && product.imageId !== undefined && images[product.imageId] !== undefined) {
            const { imageUrl, imageData, altText } = images[product.imageId];
            const productImage = Object.assign(Object.assign({}, product), { imageUrl, imageData, altText });
            return productImage;
        }
        return product;
    });
}
console.log(generateProducts([11, 9, 6]));
let SteffisBestellung = {
    Ordernumber: 7,
    Amount: 13,
    ProductIds: 2,
    email: "test@web.de"
};
let SteffisNaechsteBestellung = {
    Ordernumber: 3,
    Amount: 15,
    ProductIds: 70,
    ccn: 398263
};
//-------------------------------------
function checkCreditOrPayPal(order) {
    console.log(order);
}
function processCreditCardOrder(order) {
    console.log("Contacting Credit Card Company for Order ", order);
}
function processPaypalOrder(order) {
    console.log("Contacting PayPal for Order ", order);
}
function isCreditCardOrder(order) {
    return "ccn" in order;
}
;
checkCreditOrPayPal(SteffisBestellung);
checkCreditOrPayPal(SteffisNaechsteBestellung);
//# sourceMappingURL=week4_2.js.map