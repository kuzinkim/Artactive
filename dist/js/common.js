var debugTimes=!1;$(document).ready(function(){var e;new Swiper(".swiper-container.swiper-container--service",{navigation:{nextEl:".service-button-next.swiper-button-next-custom",prevEl:".service-button-prev.swiper-button-prev-custom"}}),new Swiper(".swiper-container.swiper-container--reviews",{loop:!0,spaceBetween:25,navigation:{nextEl:".reviews-button-next.swiper-button-next-custom",prevEl:".reviews-button-prev.swiper-button-prev-custom"}});ymaps.ready(function(){e=new ymaps.Map("map",{center:[57.65770623686952,39.846335285409644],zoom:16},{searchControlProvider:"yandex#search"}),myPlacemark=new ymaps.Placemark(e.getCenter(),{hintContent:"Собственный значок метки",balloonContent:"Это красивая метка"},{iconLayout:"default#image",iconImageHref:"assets/images/pin.png",iconImageSize:[25,38],iconImageOffset:[-17,-38]}),e.geoObjects.add(myPlacemark),e.behaviors.disable("scrollZoom")})});