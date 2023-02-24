$(document).ready(function () {
    /* Video */
    const videoSrc = $(".player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function () {
        if ($(".video-popup").hasClass("open")) {
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src", "");
        } else {
            $(".video-popup").addClass("open");
            if ($(".player-1").attr("src") == '') {
                $(".player-1").attr("src", videoSrc);
            }
        }

    });

    // const videoSrc2 = $(".player-2").attr("src");
    // $(".video-play-btn-2, .video-popup-2").on("click", function () {
    //     if ($(".video-popup-2").hasClass("open")) {
    //         $(".video-popup-2").removeClass("open");
    //         $("#player-2").attr("src", "");
    //     } else {
    //         $(".video-popup-2").addClass("open");
    //         if ($(".player-2").attr("src") == '') {
    //             $(".player-2").attr("src", videoSrc2);
    //         }
    //     }

    // });
});


function scrollUp() {
    const scrollUp = document.querySelector('.scroll-up');
    // Lorsque le défilement est supérieur à la hauteur de 200 viewport, ajoutez la classe show-scroll à la balise a avec la classe scroll-top
    if (this.scrollY >= 200) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);


/* Services */
$('.services-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
        2000: {
            items: 5,
        }
    }
});


$('.actu-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 5,
            nav: true,
            loop: false
        }
    }
})

const sidebar = document.querySelector('aside');
const showShidebarBtn = document.querySelector('#show__sidebar-btn');
const hideShidebarBtn = document.querySelector('#hide__sidebar-btn');

const showSidebar = () => {
  sidebar.style.left = '0';
  showShidebarBtn.style.display = 'none';
  hideShidebarBtn.style.display = 'inline-block';
}

const hideSidebar = () => {
  sidebar.style.left = '-100%';
  showShidebarBtn.style.display = 'inline-block';
  hideShidebarBtn.style.display = 'none';
}

showShidebarBtn.addEventListener('click', showSidebar);
hideShidebarBtn.addEventListener('click', hideSidebar);

$(".nav-link").on("click", function(){
    $(".navbar-collapse").collapse("hidden");
});