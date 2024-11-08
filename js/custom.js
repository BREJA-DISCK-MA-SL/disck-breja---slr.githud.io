// Custom Script
// Developed by: mateus 
$(function() {
    // Configura a data de término (25 de novembro de 2024 às 08:30)
    const agora = new Date();
    const dataFinal = new Date(2024, 10, 8, 22, 5, 0, 0).getTime();
  
    // Verifica a contagem regressiva
    $('.countdown.simple').countdown({ date: dataFinal });
  
    $('.countdown.styled').countdown({
        date: dataFinal,
        render: function(data) {
            $(this.el).html("<div>" + this.leadingZeros(data.days, 3) + " <span>days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
        },
        onEnd: function() {
            console.log("Contagem finalizada!"); // Log para depuração
            $('#botaoRedirecionar').show(); // Exibe o botão
        }
    });

    // Adiciona o botão de redirecionamento
    $('body').append('<button id="botaoRedirecionar" style="display:none;">Acessar Página</button>'); // Cria o botão
    $('#botaoRedirecionar').on('click', function() {
        window.location.href = 'https://catalago-disck-breja.webloja.app/#!'; // Altere para a URL da página desejada
    });

    // Esconde o botão até que a contagem seja finalizada
    if (agora.getTime() < dataFinal) {
        $('#botaoRedirecionar').hide();
    } else {
        $('#botaoRedirecionar').show();
    }
});
  
// O restante do seu código permanece inalterado
var customScripts = {
    onePageNav: function () {
        $('#mainNav').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 950,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing',
            begin: function () {},
            end: function () {
                if (!$('#main-nav ul li:first-child').hasClass('active')) {
                    $('.header').addClass('addBg');
                } else {
                    $('.header').removeClass('addBg');
                }
            },
            scrollChange: function ($currentListItem) {
                if (!$('#main-nav ul li:first-child').hasClass('active')) {
                    $('.header').addClass('addBg');
                } else {
                    $('.header').removeClass('addBg');
                }
            }
        });
  
        $("a[href='#top']").click(function () {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });
        $("a[href='#basics']").click(function () {
            $("html, body").animate({ scrollTop: $('#services').offset().top }, "slow");
            return false;
        });
    },
    waySlide: function() {
        $('#services').waypoint(function() {
            $('#services .col-md-3').addClass('animated fadeInUp show');
        }, { offset: 800 });
        $('#aboutUs').waypoint(function() {
            $('#aboutUs').addClass('animated fadeInUp show');
        }, { offset: 800 });
        $('#contactUs').waypoint(function() {
            $('#contactUs .parlex-back').addClass('animated fadeInUp show');
        }, { offset: 800 });
    },
    init: function() {
        customScripts.onePageNav();
        customScripts.waySlide();
    }
}

$('document').ready(function () {
    $.backstretch([
        "images/img1.jpg",
        "images/img2.jpg",
        "images/img3.jpg"
    ], { duration: 3000, fade: 1250 });
  
    customScripts.init();
    $('#services .col-md-3, #features, #aboutUs, #clients, #portfolio, #plans, #contactUs .parlex-back').css('opacity', '0');
    $("#menuToggle").toggle(function() {
        $(this).find('i').removeClass('fa-bars').addClass('fa-remove');
        $('#mainNav').animate({ "right": "0px" }, "slow");
    }, function() {
        $('#mainNav').animate({ "right": "-200px" }, "slow");
        $(this).find('i').removeClass('fa-remove').addClass('fa-bars');
    });
});
