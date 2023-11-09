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
<<<<<<< HEAD
       var overlay = document.querySelector('.overlay');
    $('.form-support').hide();
    $('#hotro').click(function() {
        $('.form-support').slideDown(500);
        overlay.classList.add('ds-block');
    })
    $('#knot').click(function() {
        $('.form-support').hide();
        overlay.classList.remove('ds-block');
=======
    $('#hotro').click(function() {
        $('.form-support').slideDown(500);
        $('.form-support').style.display = 'block';
        $('.overlay').style.display = 'block';
    })
    $('#knot').click(function() {
        $('.form-support').hide();
        $('.overlay').style.display = 'none';
>>>>>>> 8637778 (init project)
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
<<<<<<< HEAD
=======
    // su kien doi mat khau
   const changePasswordButton = document.querySelector('.change_password');
   const passNotify = document.querySelector('.pass-notify');
   const overlayPass = document.querySelector('.overlay__pass');
   const loginButton = document.querySelector('.login_button');
 
   // Sự kiện click nút "Đổi mật khẩu"
   changePasswordButton.addEventListener('click', function() {
     // Ẩn form đổi mật khẩu và hiển thị thông báo
     passNotify.style.display = 'block';
     overlayPass.style.display = 'block';
   });
 
   // Sự kiện click nút "Đăng nhập" trên thông báo
   loginButton.addEventListener('click', function() {
     // Chuyển đến màn hình đăng nhập
     location.href = './login.html';
   });

>>>>>>> 8637778 (init project)
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
<<<<<<< HEAD


=======
// xoa san pham
function deleteProduct(button) {
    const product = button.closest('.header__cart-product-sp');
    if (product) {
      const list = document.getElementById('productList');
      const productHeight = product.clientHeight;
      product.remove();
  
      const remainingProducts = list.querySelectorAll('.header__cart-product-sp');
  
      for (let i = 0; i < remainingProducts.length; i++) {
        remainingProducts[i].style.transform = `translateY(0)`;
      }
    }
  }  
  // tao su kien chay san pham
  $(document).ready(function() {
    $(".list-dog.hot-pets").each(function() {
        var section = $(this);
        var items = section.find(".item-pet");
        var numItems = items.length;
        var itemsToShow = 4;
        var currentIndex = 0;

        function updateVisibleItems() {
            items.css("display", "none");
            for (var i = 0; i < itemsToShow; i++) {
                var indexToShow = (currentIndex + i) % numItems;
                items.eq(indexToShow).css("display", "block");
            }
        }

        section.find(".nextBtn").click(function(event) {
            event.preventDefault();
            currentIndex = (currentIndex + 1) % numItems;
            updateVisibleItems();
        });

        section.find(".prevBtn").click(function(event) {
            event.preventDefault();
            currentIndex = (currentIndex - 1 + numItems) % numItems;
            updateVisibleItems();
        });

        updateVisibleItems();
    });
});

function addComment() {
    var newCommentText = document.getElementById("userReview").value;
    var newComment = createCommentElement("user1.jpg", "User 1", getCurrentTime(), newCommentText);
    document.getElementById("comment-list").appendChild(newComment);
    document.getElementById("userReview").value = "";
    var commentList = document.getElementById("comment-list");
    commentList.scrollTop = commentList.scrollHeight;
}
function createCommentElement(imageSrc, name, time, text) {
    // Function to create a new comment element
    var comment = document.createElement("div");
    comment.className = "comment";

    // Add the comment info (avatar, name, timestamp)
    var commentInfo = document.createElement("div");
    commentInfo.className = "comment-info";

    var userDetails = document.createElement("div");
    userDetails.className = "user-details";
    userDetails.innerHTML = "<img src='" + imageSrc + "' alt='" + name + "'>" +
                            "<h3>" + name + "</h3>" +
                            "<p class='timestamp'>" + time + "</p>";
    commentInfo.appendChild(userDetails);
    comment.appendChild(commentInfo);
    var commentText = document.createElement("p");
    commentText.className = "comment-text";
    commentText.innerText = text;
    comment.appendChild(commentText);
    return comment;
}

function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    return hours + ":" + (minutes < 10 ? "0" : "") + minutes;
}
// js tao nut bam cho tung trang
var currentPage = 1;
var productsPerPage = 20; // Số lượng sản phẩm trên mỗi trang
var productList = document.getElementById('product-container').children;

function showPage(page) {
    var startIndex = (page - 1) * productsPerPage;
    var endIndex = startIndex + productsPerPage - 1;

    for (var i = 0; i < productList.length; i++) {
        if (i >= startIndex && i <= endIndex) {
            productList[i].style.display = 'block';
        } else {
            productList[i].style.display = 'none';
        }
    }

    updatePagination();
}

function updatePagination() {
    var totalPages = Math.ceil(productList.length / productsPerPage);
    var paginationContainer = document.getElementById('pagination-buttons');
    paginationContainer.innerHTML = '';

    for (var i = 1; i <= totalPages; i++) {
        var pageButton = document.createElement('li');
        pageButton.innerHTML = i;
        pageButton.setAttribute('onclick', 'changePage(' + i + ')');

        if (i === currentPage) {
            pageButton.classList.add('is_active');
        }

        paginationContainer.appendChild(pageButton);
    }
}

function changePage(page) {
    currentPage = page;
    showPage(currentPage);
}

// Mặc định hiển thị trang đầu tiên khi trang web được tải
window.onload = function () {
    showPage(currentPage);
};
>>>>>>> 8637778 (init project)
