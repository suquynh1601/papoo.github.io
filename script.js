function showProductDetails(productId) {
    const products = {
        lotchuot: {
            title: "Lót chuột Anime girl",
            price: "100.000 VND",
            description: "Lót chuột Zero two 40x50cm, chống nước",
            image: "images/lotchuot.jpg"
        },
        banphim: {
            title: "Bàn phím Logitech",
            price: "1.000.000 VND",
            description: "Bàn phím cơ Logitech, chống nước",
            image: "images/bplgitech.webp"
        },
        // Add other products here similarly
        sacduphong: {
            title: "Sạc dự phòng",
            price: "150.000VND",
            description: "Dung lượng pin: 1-20000mAh, Công suất sạc: 66W",
            image: "images/sacdp.jpg"
        },
        chuot: {
            title: "Chuột Logitech",
            price: "200.000 VND",
            description: "Chuột Logitech",
            image: "images/ch"
        }
    };

    const product = products[productId];
    if (product) {
        document.querySelector('.container').innerHTML = `
            <div class="product-item">
                <img src="${product.image}" alt="${product.title}" width="30%">
                <h3>${product.title}</h3>
                <p>Giá: ${product.price}</p>
                <p>${product.description}</p>
                <div class="actions">
                    <a href="#" class="details-button">Mua Ngay</a>
                    <a href="giohang.html" class="details-button">Giỏ Hàng</a>
                </div>
            </div>
        `;
    }
}
