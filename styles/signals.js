
(function (MapCSS) {
    'use strict';

    function restyle(style, tags, zoom, type, selector) {
        var s_default = {};

        if ((selector == 'meta')) {
            s_default['title'] = 'OpenRailwayMap signalling layer';
            s_default['version'] = '0';
            s_default['description'] = 'Style for a signalling layer railroad network map.';
            s_default['author'] = 'rurseekatze';
            s_default['link'] = 'http://wiki.openstreetmap.org/wiki/OpenRailwayMap';
            s_default['watch-modified'] = 'true';
        }

        if (((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:main'] == 'hp' && tags['railway:signal:main:form'] == 'semaphore') && zoom >= 14)) {
            s_default['z-index'] = 10000;
            s_default['text'] = MapCSS.e_localize(tags, 'ref');
            s_default['text-offset'] = 11;
            s_default['text-size'] = '12';
            s_default['text-color'] = 'black';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = 'white';
            s_default['font-weight'] = 'bold';
            s_default['icon-image'] = 'icons/de-hp-semaphore.png';
            s_default['icon-width'] = '16';
            s_default['icon-height'] = '16';
            s_default['text-allow-overlap'] = 'true';
            s_default['allow-overlap'] = 'true';
        }

        if (((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:distant'] == 'vr' && tags['railway:signal:distant:form'] == 'semaphore') && zoom >= 14)) {
            s_default['z-index'] = 9000;
            s_default['text'] = MapCSS.e_localize(tags, 'ref');
            s_default['text-offset'] = 11;
            s_default['text-size'] = '12';
            s_default['text-color'] = 'black';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = 'white';
            s_default['font-weight'] = 'bold';
            s_default['icon-image'] = 'icons/de-vr-semaphore.png';
            s_default['icon-width'] = '16';
            s_default['icon-height'] = '16';
            s_default['text-allow-overlap'] = 'true';
            s_default['allow-overlap'] = 'true';
        }

        if (((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:main'] == 'hp' && tags['railway:signal:main:form'] == 'light') && zoom >= 14)) {
            s_default['z-index'] = 10000;
            s_default['text'] = MapCSS.e_localize(tags, 'ref');
            s_default['text-offset'] = 11;
            s_default['text-size'] = '12';
            s_default['text-color'] = 'black';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = 'white';
            s_default['font-weight'] = 'bold';
            s_default['icon-image'] = 'icons/de-hp-light.png';
            s_default['icon-width'] = '16';
            s_default['icon-height'] = '16';
            s_default['text-allow-overlap'] = 'true';
            s_default['allow-overlap'] = 'true';
        }

        if (((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:distant'] == 'vr' && tags['railway:signal:distant:form'] == 'light' && tags['railway:signal:distant:repeated'] == 'no' && tags['railway:signal:distant:shortened'] == 'no' && (!tags.hasOwnProperty('railway:signal:main')) && (!tags.hasOwnProperty('railway:signal:distant:states'))) && zoom >= 14) || ((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:distant'] == 'vr' && tags['railway:signal:distant:form'] == 'light' && (!tags.hasOwnProperty('railway:signal:distant:repeated')) && tags['railway:signal:distant:shortened'] == 'no' && (!tags.hasOwnProperty('railway:signal:main')) && (!tags.hasOwnProperty('railway:signal:distant:states'))) && zoom >= 14) || ((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:distant'] == 'vr' && tags['railway:signal:distant:form'] == 'light' && tags['railway:signal:distant:repeated'] == 'no' && (!tags.hasOwnProperty('railway:signal:distant:shortened')) && (!tags.hasOwnProperty('railway:signal:main')) && (!tags.hasOwnProperty('railway:signal:distant:states'))) && zoom >= 14) || ((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:distant'] == 'vr' && tags['railway:signal:distant:form'] == 'light' && (!tags.hasOwnProperty('railway:signal:distant:repeated')) && (!tags.hasOwnProperty('railway:signal:distant:shortened')) && (!tags.hasOwnProperty('railway:signal:main')) && (!tags.hasOwnProperty('railway:signal:distant:states'))) && zoom >= 14)) {
            s_default['z-index'] = 9000;
            s_default['text'] = MapCSS.e_localize(tags, 'ref');
            s_default['text-offset'] = 12;
            s_default['text-size'] = '12';
            s_default['text-color'] = 'black';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = 'white';
            s_default['font-weight'] = 'bold';
            s_default['icon-image'] = 'icons/de-vr0-light-32.png';
            s_default['icon-width'] = '16';
            s_default['icon-height'] = '16';
            s_default['text-allow-overlap'] = 'true';
            s_default['allow-overlap'] = 'true';
        }

        if (((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:distant'] == 'vr' && tags['railway:signal:distant:form'] == 'light' && tags['railway:signal:distant:repeated'] == 'no' && tags['railway:signal:distant:shortened'] == 'no' && (!tags.hasOwnProperty('railway:signal:main')) && (tags.hasOwnProperty('railway:signal:distant:states')) && !(/.*vr2.*/.test(tags['railway:signal:distant:states']))) && zoom >= 14) || ((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:distant'] == 'vr' && tags['railway:signal:distant:form'] == 'light' && (!tags.hasOwnProperty('railway:signal:distant:repeated')) && tags['railway:signal:distant:shortened'] == 'no' && (!tags.hasOwnProperty('railway:signal:main')) && (tags.hasOwnProperty('railway:signal:distant:states')) && !(/.*vr2.*/.test(tags['railway:signal:distant:states']))) && zoom >= 14) || ((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:distant'] == 'vr' && tags['railway:signal:distant:form'] == 'light' && tags['railway:signal:distant:repeated'] == 'no' && (!tags.hasOwnProperty('railway:signal:distant:shortened')) && (!tags.hasOwnProperty('railway:signal:main')) && (tags.hasOwnProperty('railway:signal:distant:states')) && !(/.*vr2.*/.test(tags['railway:signal:distant:states']))) && zoom >= 14) || ((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:distant'] == 'vr' && tags['railway:signal:distant:form'] == 'light' && (!tags.hasOwnProperty('railway:signal:distant:repeated')) && (!tags.hasOwnProperty('railway:signal:distant:shortened')) && (!tags.hasOwnProperty('railway:signal:main')) && (tags.hasOwnProperty('railway:signal:distant:states')) && !(/.*vr2.*/.test(tags['railway:signal:distant:states']))) && zoom >= 14)) {
            s_default['z-index'] = 9000;
            s_default['text'] = MapCSS.e_localize(tags, 'ref');
            s_default['text-offset'] = 12;
            s_default['text-size'] = '12';
            s_default['text-color'] = 'black';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = 'white';
            s_default['font-weight'] = 'bold';
            s_default['icon-image'] = 'icons/de-vr1-light-32.png';
            s_default['icon-width'] = '16';
            s_default['icon-height'] = '16';
            s_default['text-allow-overlap'] = 'true';
            s_default['allow-overlap'] = 'true';
        }

        if (((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:distant'] == 'vr' && tags['railway:signal:distant:form'] == 'light' && tags['railway:signal:distant:repeated'] == 'no' && (!tags.hasOwnProperty('railway:signal:main')) && (tags.hasOwnProperty('railway:signal:distant:states')) && /.*vr2.*/.test(tags['railway:signal:distant:states'])) && zoom >= 14) || ((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:distant'] == 'vr' && tags['railway:signal:distant:form'] == 'light' && (!tags.hasOwnProperty('railway:signal:distant:repeated')) && (!tags.hasOwnProperty('railway:signal:main')) && (tags.hasOwnProperty('railway:signal:distant:states')) && /.*vr2.*/.test(tags['railway:signal:distant:states'])) && zoom >= 14)) {
            s_default['z-index'] = 9000;
            s_default['text'] = MapCSS.e_localize(tags, 'ref');
            s_default['text-offset'] = 12;
            s_default['text-size'] = '12';
            s_default['text-color'] = 'black';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = 'white';
            s_default['font-weight'] = 'bold';
            s_default['icon-image'] = 'icons/de-vr2-light-32.png';
            s_default['icon-width'] = '16';
            s_default['icon-height'] = '16';
            s_default['text-allow-overlap'] = 'true';
            s_default['allow-overlap'] = 'true';
        }

        if (((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:distant'] == 'vr' && tags['railway:signal:distant:form'] == 'light' && tags['railway:signal:distant:repeated'] == 'yes' && (!tags.hasOwnProperty('railway:signal:main')) && (!tags.hasOwnProperty('railway:signal:distant:states'))) && zoom >= 14) || ((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:distant'] == 'vr' && tags['railway:signal:distant:form'] == 'light' && tags['railway:signal:distant:shortened'] == 'yes' && (!tags.hasOwnProperty('railway:signal:main')) && (!tags.hasOwnProperty('railway:signal:distant:states'))) && zoom >= 14)) {
            s_default['z-index'] = 8500;
            s_default['text'] = MapCSS.e_localize(tags, 'ref');
            s_default['text-offset'] = 12;
            s_default['text-size'] = '12';
            s_default['text-color'] = 'black';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = 'white';
            s_default['font-weight'] = 'bold';
            s_default['icon-image'] = 'icons/de-vr0-light-repeated-32.png';
            s_default['icon-width'] = '16';
            s_default['icon-height'] = '16';
            s_default['text-allow-overlap'] = 'true';
            s_default['allow-overlap'] = 'true';
        }

        if (((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:distant'] == 'vr' && tags['railway:signal:distant:form'] == 'light' && tags['railway:signal:distant:repeated'] == 'yes' && (!tags.hasOwnProperty('railway:signal:main')) && (tags.hasOwnProperty('railway:signal:distant:states')) && !(/.*vr2.*/.test(tags['railway:signal:distant:states']))) && zoom >= 14) || ((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:distant'] == 'vr' && tags['railway:signal:distant:form'] == 'light' && tags['railway:signal:distant:shortened'] == 'yes' && (!tags.hasOwnProperty('railway:signal:main')) && (tags.hasOwnProperty('railway:signal:distant:states')) && !(/.*vr2.*/.test(tags['railway:signal:distant:states']))) && zoom >= 14)) {
            s_default['z-index'] = 8500;
            s_default['text'] = MapCSS.e_localize(tags, 'ref');
            s_default['text-offset'] = 12;
            s_default['text-size'] = '12';
            s_default['text-color'] = 'black';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = 'white';
            s_default['font-weight'] = 'bold';
            s_default['icon-image'] = 'icons/de-vr1-light-repeated-32.png';
            s_default['icon-width'] = '16';
            s_default['icon-height'] = '16';
            s_default['text-allow-overlap'] = 'true';
            s_default['allow-overlap'] = 'true';
        }

        if (((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:distant'] == 'vr' && tags['railway:signal:distant:form'] == 'light' && tags['railway:signal:distant:repeated'] == 'yes' && (!tags.hasOwnProperty('railway:signal:main')) && (tags.hasOwnProperty('railway:signal:distant:states')) && /.*vr2.*/.test(tags['railway:signal:distant:states'])) && zoom >= 14) || ((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:distant'] == 'vr' && tags['railway:signal:distant:form'] == 'light' && tags['railway:signal:distant:shortened'] == 'yes' && (!tags.hasOwnProperty('railway:signal:main')) && (tags.hasOwnProperty('railway:signal:distant:states')) && /.*vr2.*/.test(tags['railway:signal:distant:states'])) && zoom >= 14)) {
            s_default['z-index'] = 8500;
            s_default['text'] = MapCSS.e_localize(tags, 'ref');
            s_default['text-offset'] = 12;
            s_default['text-size'] = '12';
            s_default['text-color'] = 'black';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = 'white';
            s_default['font-weight'] = 'bold';
            s_default['icon-image'] = 'icons/de-vr2-light-repeated-32.png';
            s_default['icon-width'] = '16';
            s_default['icon-height'] = '16';
            s_default['text-allow-overlap'] = 'true';
            s_default['allow-overlap'] = 'true';
        }

        if (((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:distant'] == 'db:ne2' && tags['railway:signal:distant:form'] == 'sign') && zoom >= 14)) {
            s_default['z-index'] = 9000;
            s_default['text'] = MapCSS.e_localize(tags, 'ref');
            s_default['text-offset'] = 11;
            s_default['text-size'] = '12';
            s_default['text-color'] = 'black';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = 'white';
            s_default['font-weight'] = 'bold';
            s_default['icon-image'] = 'icons/de-ne2.png';
            s_default['icon-width'] = '10';
            s_default['icon-height'] = '16';
            s_default['text-allow-overlap'] = 'true';
            s_default['allow-overlap'] = 'true';
        }

        if (((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:minor'] == 'sh' && tags['railway:signal:minor:form'] == 'semaphore' && tags['railway:signal:minor:height'] == 'normal') && zoom >= 17) || ((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:minor'] == 'sh' && tags['railway:signal:minor:form'] == 'semaphore' && (!tags.hasOwnProperty('railway:signal:minor:height'))) && zoom >= 17)) {
            s_default['z-index'] = 4000;
            s_default['text'] = MapCSS.e_localize(tags, 'ref');
            s_default['text-offset'] = 11;
            s_default['text-size'] = '12';
            s_default['text-color'] = 'black';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = 'white';
            s_default['font-weight'] = 'bold';
            s_default['icon-image'] = 'icons/de-sh-semaphore.png';
            s_default['icon-width'] = '16';
            s_default['icon-height'] = '16';
            s_default['text-allow-overlap'] = 'true';
            s_default['allow-overlap'] = 'true';
        }

        if (((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:minor'] == 'sh' && tags['railway:signal:minor:form'] == 'semaphore' && tags['railway:signal:minor:height'] == 'dwarf') && zoom >= 17)) {
            s_default['z-index'] = 2000;
            s_default['text'] = MapCSS.e_localize(tags, 'ref');
            s_default['text-offset'] = 11;
            s_default['text-size'] = '12';
            s_default['text-color'] = 'black';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = 'white';
            s_default['font-weight'] = 'bold';
            s_default['icon-image'] = 'icons/de-sh-semaphore-dwarf.png';
            s_default['icon-width'] = '16';
            s_default['icon-height'] = '16';
            s_default['text-allow-overlap'] = 'true';
            s_default['allow-overlap'] = 'true';
        }

        if (((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:minor'] == 'sh' && tags['railway:signal:minor:form'] == 'light' && tags['railway:signal:minor:height'] == 'normal') && zoom >= 17) || ((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:minor'] == 'sh' && tags['railway:signal:minor:form'] == 'light' && (!tags.hasOwnProperty('railway:signal:minor:height'))) && zoom >= 17)) {
            s_default['z-index'] = 5000;
            s_default['text'] = MapCSS.e_localize(tags, 'ref');
            s_default['text-offset'] = 11;
            s_default['text-size'] = '12';
            s_default['text-color'] = 'black';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = 'white';
            s_default['font-weight'] = 'bold';
            s_default['icon-image'] = 'icons/de-sh-light.png';
            s_default['icon-width'] = '16';
            s_default['icon-height'] = '16';
            s_default['text-allow-overlap'] = 'true';
            s_default['allow-overlap'] = 'true';
        }

        if (((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:minor'] == 'sh' && tags['railway:signal:minor:form'] == 'light' && tags['railway:signal:minor:height'] == 'dwarf') && zoom >= 17)) {
            s_default['z-index'] = 3000;
            s_default['text'] = MapCSS.e_localize(tags, 'ref');
            s_default['text-offset'] = 11;
            s_default['text-size'] = '12';
            s_default['text-color'] = 'black';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = 'white';
            s_default['font-weight'] = 'bold';
            s_default['icon-image'] = 'icons/de-sh-light-dwarf.png';
            s_default['icon-width'] = '16';
            s_default['icon-height'] = '16';
            s_default['text-allow-overlap'] = 'true';
            s_default['allow-overlap'] = 'true';
        }

        if (((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:distant'] == 'ks' && tags['railway:signal:distant:form'] == 'light' && tags['railway:signal:distant:states'] == 'ks1;ks2') && zoom >= 14)) {
            s_default['z-index'] = 8000;
            s_default['text'] = MapCSS.e_localize(tags, 'ref');
            s_default['text-offset'] = 11;
            s_default['text-size'] = '12';
            s_default['text-color'] = 'black';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = 'white';
            s_default['font-weight'] = 'bold';
            s_default['icon-image'] = 'icons/de-ks-distant.png';
            s_default['icon-width'] = '16';
            s_default['icon-height'] = '16';
            s_default['text-allow-overlap'] = 'true';
            s_default['allow-overlap'] = 'true';
        }

        if (((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:main'] == 'ks' && tags['railway:signal:main:form'] == 'light' && tags['railway:signal:main:states'] == 'hp0;ks1') && zoom >= 14)) {
            s_default['z-index'] = 10100;
            s_default['text'] = MapCSS.e_localize(tags, 'ref');
            s_default['text-offset'] = 11;
            s_default['text-size'] = '12';
            s_default['text-color'] = 'black';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = 'white';
            s_default['font-weight'] = 'bold';
            s_default['icon-image'] = 'icons/de-ks-main.png';
            s_default['icon-width'] = '16';
            s_default['icon-height'] = '16';
            s_default['text-allow-overlap'] = 'true';
            s_default['allow-overlap'] = 'true';
        }

        if (((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:combined'] == 'ks' && tags['railway:signal:combined:form'] == 'light' && tags['railway:signal:combined:states'] == 'hp0;ks1;ks2') && zoom >= 14)) {
            s_default['z-index'] = 10200;
            s_default['text'] = MapCSS.e_localize(tags, 'ref');
            s_default['text-offset'] = 11;
            s_default['text-size'] = '12';
            s_default['text-color'] = 'black';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = 'white';
            s_default['font-weight'] = 'bold';
            s_default['icon-image'] = 'icons/de-ks-combined.png';
            s_default['icon-width'] = '16';
            s_default['icon-height'] = '16';
            s_default['text-allow-overlap'] = 'true';
            s_default['allow-overlap'] = 'true';
        }

        if (((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:stop'] == 'ne5' && tags['railway:signal:stop:form'] == 'sign') && zoom >= 17)) {
            s_default['z-index'] = 1000;
            s_default['icon-image'] = 'icons/de-ne5-ds301-32.png';
            s_default['icon-width'] = '11';
            s_default['icon-height'] = '16';
            s_default['text-allow-overlap'] = 'true';
            s_default['allow-overlap'] = 'true';
        }

        if (((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:main'] == 'ne1' && tags['railway:signal:main:form'] == 'sign' && tags['railway:signal:main:function'] == 'entry') && zoom >= 14)) {
            s_default['z-index'] = 1000;
            s_default['text'] = MapCSS.e_localize(tags, 'ref');
            s_default['text-offset'] = 11;
            s_default['text-size'] = '12';
            s_default['text-color'] = 'black';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = 'white';
            s_default['font-weight'] = 'bold';
            s_default['icon-image'] = 'icons/de-ne1.png';
            s_default['icon-width'] = '16';
            s_default['icon-height'] = '16';
            s_default['text-allow-overlap'] = 'true';
            s_default['allow-overlap'] = 'true';
        }

        if (((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:main'] == 'AT:trapeztafel' && tags['railway:signal:main:form'] == 'sign' && tags['railway:signal:main:function'] == 'entry') && zoom >= 14)) {
            s_default['z-index'] = 1000;
            s_default['text'] = MapCSS.e_localize(tags, 'ref');
            s_default['text-offset'] = 11;
            s_default['text-size'] = '12';
            s_default['text-color'] = 'black';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = 'white';
            s_default['font-weight'] = 'bold';
            s_default['icon-image'] = 'icons/de-ne1.png';
            s_default['icon-width'] = '16';
            s_default['icon-height'] = '16';
            s_default['text-allow-overlap'] = 'true';
            s_default['allow-overlap'] = 'true';
        }

        if (Object.keys(s_default).length) {
            style['default'] = s_default; }
        return style;
    }
    
    var sprite_images = {
        'icons/de-hp-light.png': {
            width: 16, 
            height: 16, 
            offset: 0
        },
        'icons/de-hp-semaphore.png': {
            width: 16, 
            height: 16, 
            offset: 16
        },
        'icons/de-ks-combined.png': {
            width: 16, 
            height: 16, 
            offset: 32
        },
        'icons/de-ks-distant.png': {
            width: 16, 
            height: 16, 
            offset: 48
        },
        'icons/de-ks-main.png': {
            width: 16, 
            height: 16, 
            offset: 64
        },
        'icons/de-ne1.png': {
            width: 16, 
            height: 16, 
            offset: 80
        },
        'icons/de-ne2.png': {
            width: 16, 
            height: 16, 
            offset: 96
        },
        'icons/de-ne5-ds301-32.png': {
            width: 22, 
            height: 32, 
            offset: 112
        },
        'icons/de-sh-light-dwarf.png': {
            width: 16, 
            height: 16, 
            offset: 144
        },
        'icons/de-sh-light.png': {
            width: 16, 
            height: 16, 
            offset: 160
        },
        'icons/de-sh-semaphore-dwarf.png': {
            width: 16, 
            height: 16, 
            offset: 176
        },
        'icons/de-sh-semaphore.png': {
            width: 16, 
            height: 16, 
            offset: 192
        },
        'icons/de-vr-semaphore.png': {
            width: 16, 
            height: 16, 
            offset: 208
        },
        'icons/de-vr0-light-32.png': {
            width: 31, 
            height: 32, 
            offset: 224
        },
        'icons/de-vr0-light-repeated-32.png': {
            width: 31, 
            height: 32, 
            offset: 256
        },
        'icons/de-vr1-light-32.png': {
            width: 31, 
            height: 32, 
            offset: 288
        },
        'icons/de-vr1-light-repeated-32.png': {
            width: 31, 
            height: 32, 
            offset: 320
        },
        'icons/de-vr2-light-32.png': {
            width: 31, 
            height: 32, 
            offset: 352
        },
        'icons/de-vr2-light-repeated-32.png': {
            width: 31, 
            height: 32, 
            offset: 384
        }
    }, external_images = [], presence_tags = [], value_tags = ['ref', 'railway:signal:stop:form', 'railway:signal:combined:states', 'railway:signal:minor:form', 'railway:signal:main:function', 'railway:signal:stop', 'railway', 'railway:signal:minor:height', 'railway:signal:main', 'railway:signal:minor', 'railway:signal:main:form', 'railway:signal:distant:repeated', 'railway:signal:main:states', 'railway:signal:distant', 'railway:signal:combined', 'railway:signal:distant:states', 'railway:signal:combined:form', 'railway:signal:distant:form', 'railway:signal:distant:shortened'];

    MapCSS.loadStyle('signals', restyle, sprite_images, external_images, presence_tags, value_tags);
    MapCSS.preloadExternalImages('signals');
})(MapCSS);
    