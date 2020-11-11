// активация кнопки прокрутки
$(document).on("scroll", function () {
    var h = $(window).height();
    var allHeight = $(document).scrollTop();

    if (allHeight > 0) {
        $('.scroll-up').addClass("active");
    } else if ((allHeight < h)) {
        $('.scroll-up').removeClass("active");
    }
})

// добавление в избранное
$(".card-favorite").on("click", function () {
    $(this).toggleClass('active');

    if ($(this).hasClass("active")) {
        var timeout;

        $(".allert-like").addClass("active");
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            $(".allert-like").removeClass("active");
        }, 2000);
    }
});


$(".allert-like__icon").on("click", function () {
    $(".allert-like").removeClass("active");
})


// мобильное меню
$(".burger-menu").on("click", function () {
    $(this).toggleClass('active');
    $(".mobile-menu").toggleClass('active');
    $("header").toggleClass('fixed');
});


// активация дропдаунов
$(".filter-active").on("click", function () {
    if ($(this).parent().attr("data-active") === "0") {
        $(".filter-active").parent().attr("data-active", "0");
        $(this).parent().attr("data-active", "1");
    } else {
        $(this).parent().attr("data-active", "0");
    }
});


$(".filter-list li").on("click", function () {
    $(this).parent().parent().attr("data-active", "0");
})

$(document).on("click touchstart", function (event) {
    if ($(event.target).closest(".filter").length) return;
    $(".filter-active").parent().attr("data-active", "0");
    event.stopPropagation();
});



//Плавный скрол при нажатии на иконку скролла
$('.scroll-up').on('click', function () {
    $("body,html").animate({ scrollTop: 0 }, 500);
});



$(".checkbox").on("click", function () {
    if ($(this).attr("data-active") === "0" && $('input[type="email"]').attr("data-valid") === "0") {
        $(this).attr("data-active", "1");
        $(".subscribe__btn").addClass("lock");
    } else if ($(this).attr("data-active") === "0" && $('input[type="email"]').attr("data-valid") === "1") {
        $(this).attr("data-active", "1");
        $(".subscribe__btn").removeClass("lock");
    } else if ($(this).attr("data-active") === "1" && $('input[type="email"]').attr("data-valid") === "1") {
        $(this).attr("data-active", "0");
        $(".subscribe__btn").addClass("lock");
    } else if ($(this).attr("data-active") === "1" && $('input[type="email"]').attr("data-valid") === "0") {
        $(this).attr("data-active", "0");
        $(".subscribe__btn").addClass("lock");
    }
});



// Проверка на ввод E-mail
function ValidateEmail() {
    $('input[type="email"]').on("keyup", function () {
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if (testEmail.test(this.value) && $(".checkbox").attr("data-active") === "1") {
            $('input[type="email"]').attr("data-valid", "1")
            $(this).css("color", "lightgreen")
            $(".subscribe__btn").removeClass("lock");
        } else if (testEmail.test(this.value) && $(".checkbox").attr("data-active") === "0") {
            $('input[type="email"]').attr("data-valid", "1")
            $(".subscribe__btn").addClass("lock");
            $(this).css("color", "lightgreen")
        } else {
            $('input[type="email"]').attr("data-valid", "0")
            $(".subscribe__btn").addClass("lock");
            $(this).css("color", "red")
        }
    });
}

ValidateEmail();


// Сортировка по возрастанию
function sort(parent, class_sort) {
    var nodeList = document.querySelectorAll(parent);
    var itemsArray = [];
    var parent = nodeList[0].parentNode;
    for (var i = 0; i < nodeList.length; i++) {
        itemsArray.push(parent.removeChild(nodeList[i]));
    }
    itemsArray.sort(function (nodeA, nodeB) {

        var textA = nodeA.querySelector(class_sort).innerHTML;
        var textB = nodeB.querySelector(class_sort).innerHTML;
        var numberA = parseInt(textA);
        var numberB = parseInt(textB);
        if (numberA < numberB) return -1;
        if (numberA > numberB) return 1;
        return 0;
    })
        .forEach(function (node) {
            parent.appendChild(node)
        });
}


// Сортировка по убыванию
function sortRev(parent, class_sort) {
    var nodeList = document.querySelectorAll(parent);
    var itemsArray = [];
    var parent = nodeList[0].parentNode;
    for (var i = 0; i < nodeList.length; i++) {
        itemsArray.push(parent.removeChild(nodeList[i]));
    }
    itemsArray.sort(function (nodeA, nodeB) {

        var textA = nodeA.querySelector(class_sort).innerHTML;
        var textB = nodeB.querySelector(class_sort).innerHTML;
        var numberA = parseInt(textA);
        var numberB = parseInt(textB);
        if (numberA < numberB) return 1;
        if (numberA > numberB) return -1;
        return 0;
    })
        .forEach(function (node) {
            parent.appendChild(node)
        });
}

