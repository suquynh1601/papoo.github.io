document.addEventListener('DOMContentLoaded', () => {
    const slideshow = document.querySelector('.slideshow');
    const images = slideshow.querySelectorAll('img');
    const firstBtn = document.getElementById('first');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const lastBtn = document.getElementById('last');
    const cart = [];
    
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    firstBtn.addEventListener('click', () => {
        currentIndex = 0;
        showImage(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    lastBtn.addEventListener('click', () => {
        currentIndex = images.length - 1;
        showImage(currentIndex);
    });

    showImage(currentIndex); // Khởi tạo slideshow

    // Tự động chuyển đổi hình ảnh sau mỗi 2 giây
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length; // Tăng chỉ số hiện tại
        showImage(currentIndex); // Hiển thị hình ảnh mới
    }, 2000); // 2000ms = 2 giây

    // Xử lý nút 'Mua Ngay'
    document.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('details-button')) {
            const productId = event.target.closest('.product-item').dataset.productId;
            addToCart(productId);
        }
    });

    function addToCart(productId) {
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
            sacduphong: {
                title: "Sạc dự phòng",
                price: "150.000 VND",
                description: "Dung lượng pin: 1-20000mAh, Công suất sạc: 66W",
                image: "images/sacdp.jpg"
            },
            chuot: {
                title: "Chuột Logitech",
                price: "200.000 VND",
                description: "Chuột Logitech",
                image: "images/chuot.jpeg" // Fixed the image path here
            }
        };

        const product = products[productId];
        if (product) {
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`${product.title} đã được thêm vào giỏ hàng.`);
        }
    }

    // Chuyển hướng đến trang giỏ hàng
    document.querySelectorAll('.details-button').forEach(button => {
        button.addEventListener('click', (event) => {
            if (event.target.textContent.trim() === 'Giỏ Hàng') {
                window.location.href = 'giohang.html';
            }
        });
    });
});
