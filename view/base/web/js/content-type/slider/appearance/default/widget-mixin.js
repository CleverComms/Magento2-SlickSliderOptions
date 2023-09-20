/**
 * Copyright © 2021 SVDevelopments. All rights reserved.
 *
 * @package  CleverComms_Magento2-SlickSliderOptions
 * @author   CleverComms
 */

define([
    'jquery',
    'mage/utils/wrapper',
    'Magento_PageBuilder/js/events',
    'slick'
], function ($, wrapper, events) {
    'use strict';

    return function (sliderWidget) {
        return wrapper.wrap(sliderWidget, function (originalSliderWidgetFunction, config, sliderElement) {
            originalSliderWidgetFunction(config, sliderElement);
    
            const $element = $(sliderElement);
    
            $element.slick(
                'slickSetOption',
                'slidesToShow',
                $element.data('slides-to-show') ?? 1,
                false
            );
    
            $element.slick(
                'slickSetOption',
                'slidesToScroll',
                $element.data('slides-to-scroll') ?? 1,
                true
            );
    
            // Responsive settings
            $element.slick('slickSetOption', 'responsive', [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ], true);
        });
    };

});
