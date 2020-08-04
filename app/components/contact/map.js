var myMap;
ymaps.ready(init);

function init () {
    myMap = new ymaps.Map('map', {
        center: [57.65770623686952,39.846335285409644], 
        zoom: 16
    }, {
        searchControlProvider: 'yandex#search'
    });

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'assets/images/pin.png',
        iconImageSize: [25, 38],
        iconImageOffset: [-17, -38]
    });

    myMap.geoObjects.add(myPlacemark)
    myMap.behaviors.disable('scrollZoom');
}