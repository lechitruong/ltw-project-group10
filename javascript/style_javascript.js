/* tạo nút back to top*/
$(document).ready(function() {
    $('#backtop').hide(); // ẩn nút go-to-top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) { //thực hiện lệnh điều kiện Khi lăn chuột xuống dưới hơn 100px
            $('#backtop').slideDown(300); //Xuất hiện nút
        } else {
            $('#backtop').fadeOut(300); //Ngược lại thì ẩn nút
        }
    });
    $('#backtop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 900); //Animation giúp hoạt ảnh scroll ngược lên đầu trang sẽ mượt hơn
    });
});



/*tạo hieu ung menu*/
$(document).ready(function() {
    var chieucao;
    var t = document.getElementsByTagName("header").value;
    if (t == undefined) { // kiem tra xem trang co ton tai the header hay khong
        chieucao = parseFloat($("#nav_menu").height()); // khong co ->trang con ->lay chieu cao the nav de xu lí
    } else {
        chieucao = parseFloat($("header").height()); // co -> trang chu ->lay chieu vao the header xu li
    }
    $(window).scroll(function() {
        if ($(this).scrollTop() >= chieucao + 1) {
            $('#nav_menu').addClass("permanent"); // add class
        } else {
            $('#nav_menu').removeClass("permanent"); // remove class
        }
    })
})


$(window).ready(function() {
    $('.form-support').hide();
    $('#hotro').click(function() {
        $('.form-support').slideDown(500);
    })
    $('#knot').click(function() {
        $('.form-support').hide();
    })
})

document.addEventListener('DOMContentLoaded', function() {
    var overlay = document.querySelector('.overlay');
    var product = document.querySelector('.product');
    var hideOverlay = document.querySelectorAll('.test_overlay');
    var close = document.querySelector('.product--close');
    var infoProduct = document.querySelector('.info-dog');
    // Xử lý khi người dùng nhấn nút Đóng
    hideOverlay.forEach(function(element){
        element.addEventListener('click', function() {
            overlay.classList.add('ds-block');
            product.style.display= 'block';
            const imageSrc = infoProduct.querySelector('img').src;
            const productName = infoProduct.querySelector('h6').textContent;
            const productPrice = infoProduct.querySelector('.info-dog--money').textContent;
      
            // Hiển thị thông tin
            product.querySelector('.product-container img').src = imageSrc;
            product.querySelector('.product-information h2').textContent = productName;
            product.querySelector('.product-information .product__money--new').textContent = productPrice;
        });
    })
    
    // Dong giao dien san pham
    close.addEventListener('click', function(){
        overlay.classList.remove('ds-block');
        product.style.display= 'none';
    });
});
// Phương thức giảm số lượng
function decreaseQuantity() {
    var quanlityProduct = document.querySelector(".input-text");
    var currentQuantity = parseInt(quanlityProduct.value);
    if (currentQuantity > 0) {
        quanlityProduct.value = currentQuantity - 1;
    }
}

// Phương thức tăng số lượng
function increaseQuantity() {
    var quanlityProduct = document.querySelector(".input-text");
    var currentQuantity = parseInt(quanlityProduct.value);
    quanlityProduct.value = currentQuantity + 1;
}


