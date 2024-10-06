document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.getElementById('cart-items');
    
    window.addToCart = function() {
        // Create a new list item for the cart
        const newItem = document.createElement('li');
        newItem.textContent = 'Lót Chuột Anime - 100.000 VND';
        newItem.textContent = 'Bàn phìm logitech - 1.000.000 VND';
        newItem.textContent = 'Sạc dự phòng - 150.000 VND';
        newItem.textContent = 'Chuột Logitech - 200.000 VND';
        
        // Append the new item to the cart
        cartItems.appendChild(newItem);
        
        // Show success message
        alert('Sản phẩm đã được thêm vào giỏ hàng thành công!');
    }
});
