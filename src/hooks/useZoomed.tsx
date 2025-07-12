import { useState, useEffect } from 'react';
import devtoolsDetect from 'devtools-detect';

declare let screen: any;
declare let window: any;

const detectZoom = (function detectZoom() {
  /**
   * Use devicePixelRatio if supported by the browser
   * @return {Number}
   * @private
   */
  const devicePixelRatio = function () {
    return window.devicePixelRatio || 1;
  };

  /**
   * Fallback function to set default values
   * @return {Object}
   * @private
   */
  const fallback = function () {
    return {
      zoom: 1,
      devicePxPerCssPx: 1,
    };
  };
  /**
   * IE 8 and 9: no trick needed!
   * TODO: Test on IE10 and Windows 8 RT
   * @return {Object}
   * @private
   **/
  const ie8 = function () {
    const zoom = Math.round((screen.deviceXDPI / screen.logicalXDPI) * 100) / 100;
    return {
      zoom: zoom,
      devicePxPerCssPx: zoom * devicePixelRatio(),
    };
  };

  /**
   * For IE10 we need to change our technique again...
   * thanks https://github.com/stefanvanburen
   * @return {Object}
   * @private
   */
  const ie10 = function () {
    const zoom = Math.round((document.documentElement.offsetHeight / window.innerHeight) * 100) / 100;
    return {
      zoom: zoom,
      devicePxPerCssPx: zoom * devicePixelRatio(),
    };
  };

  /**
   * For chrome
   *
   */
  const chrome = function () {
    let zoom = Math.round((window.outerWidth / window.innerWidth) * 100) / 100;

    /* devtools throws off calculation so well fallback to DPI method calculation */
    if (devtoolsDetect.isOpen) {
      zoom = Math.round(window.devicePixelRatio * 100) / 100;
    }
    return {
      zoom: zoom,
      devicePxPerCssPx: zoom * devicePixelRatio(),
    };
  };

  /**
   * For safari (same as chrome)
   *
   */
  const safari = function () {
    const zoom = Math.round((document.documentElement.clientWidth / window.innerWidth) * 100) / 100;
    return {
      zoom: zoom,
      devicePxPerCssPx: zoom * devicePixelRatio(),
    };
  };

  /**
   * Mobile WebKit
   * the trick: window.innerWIdth is in CSS pixels, while
   * screen.width and screen.height are in system pixels.
   * And there are no scrollbars to mess up the measurement.
   * @return {Object}
   * @private
   */
  const webkitMobile = function () {
    const deviceWidth = Math.abs(window.orientation as number) === 90 ? screen.height : screen.width;
    const zoom = deviceWidth / window.innerWidth;
    return {
      zoom: zoom,
      devicePxPerCssPx: zoom * devicePixelRatio(),
    };
  };

  /**
   * Desktop Webkit
   * the trick: an element's clientHeight is in CSS pixels, while you can
   * set its line-height in system pixels using font-size and
   * -webkit-text-size-adjust:none.
   * device-pixel-ratio: http://www.webkit.org/blog/55/high-dpi-web-sites/
   *
   * Previous trick (used before http://trac.webkit.org/changeset/100847):
   * documentElement.scrollWidth is in CSS pixels, while
   * document.width was in system pixels. Note that this is the
   * layout width of the document, which is slightly different from viewport
   * because document width does not include scrollbars and might be wider
   * due to big elements.
   * @return {Object}
   * @private
   */
  const webkit = function () {
    const important = function (str) {
      return str.replace(/;/g, ' !important;');
    };

    const div = document.createElement('div');
    div.innerHTML = '1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0';
    div.setAttribute(
      'style',
      important(
        'font: 100px/1em sans-serif; -webkit-text-size-adjust: none; text-size-adjust: none; height: auto; width: 1em; padding: 0; overflow: visible;',
      ),
    );

    // The container exists so that the div will be laid out in its own flow
    // while not impacting the layout, viewport size, or display of the
    // webpage as a whole.
    // Add !important and relevant CSS rule resets
    // so that other rules cannot affect the results.
    const container = document.createElement('div');
    container.setAttribute('style', important('width:0; height:0; overflow:hidden; visibility:hidden; position: absolute;'));
    container.appendChild(div);

    document.body.appendChild(container);
    let zoom = 1000 / div.clientHeight;
    zoom = Math.round(zoom * 100) / 100;
    document.body.removeChild(container);

    return {
      zoom: zoom,
      devicePxPerCssPx: zoom * devicePixelRatio(),
    };
  };

  /**
   * no real trick; device-pixel-ratio is the ratio of device dpi / css dpi.
   * (Note that this is a different interpretation than Webkit's device
   * pixel ratio, which is the ratio device dpi / system dpi).
   *
   * Also, for Mozilla, there is no difference between the zoom factor and the device ratio.
   *
   * @return {Object}
   * @private
   */
  const firefox4 = function () {
    let zoom = mediaQueryBinarySearch('min--moz-device-pixel-ratio', '', 0, 10, 20, 0.0001);
    zoom = Math.round(zoom * 100) / 100;
    return {
      zoom: zoom,
      devicePxPerCssPx: zoom,
    };
  };

  /**
   * Firefox 18.x
   * Mozilla added support for devicePixelRatio to Firefox 18,
   * but it is affected by the zoom level, so, like in older
   * Firefox we can't tell if we are in zoom mode or in a device
   * with a different pixel ratio
   * @return {Object}
   * @private
   */
  const firefox18 = function () {
    return {
      zoom: firefox4().zoom,
      devicePxPerCssPx: devicePixelRatio(),
    };
  };

  /**
   * works starting Opera 11.11
   * the trick: outerWidth is the viewport width including scrollbars in
   * system px, while innerWidth is the viewport width including scrollbars
   * in CSS px
   * @return {Object}
   * @private
   */
  const opera11 = function () {
    let zoom = window.top.outerWidth / window.top.innerWidth;
    zoom = Math.round(zoom * 100) / 100;
    return {
      zoom: zoom,
      devicePxPerCssPx: zoom * devicePixelRatio(),
    };
  };

  /**
   * Use a binary search through media queries to find zoom level in Firefox
   * @param property
   * @param unit
   * @param a
   * @param b
   * @param maxIter
   * @param epsilon
   * @return {Number}
   */
  const mediaQueryBinarySearch = function (property, unit, a, b, maxIter, epsilon) {
    let matchMedia;
    let head, style, div;
    if (window.matchMedia) {
      matchMedia = window.matchMedia;
    } else {
      head = document.getElementsByTagName('head')[0];
      style = document.createElement('style');
      head.appendChild(style);

      div = document.createElement('div');
      div.className = 'mediaQueryBinarySearch';
      div.style.display = 'none';
      document.body.appendChild(div);

      matchMedia = function (query) {
        const rule = '@media ' + query + '{.mediaQueryBinarySearch {text-decoration: underline} }';
        style.sheet.insertRule(rule, 0);
        const matched = getComputedStyle(div, null).textDecoration === 'underline';
        style.sheet.deleteRule(0);
        return { matches: matched };
      };
    }
    const ratio = binarySearch(a, b, maxIter);
    if (div) {
      head.removeChild(style);
      document.body.removeChild(div);
    }
    return ratio;

    function binarySearch(a, b, maxIter) {
      const mid = (a + b) / 2;
      if (maxIter <= 0 || b - a < epsilon) {
        return mid;
      }
      const query = '(' + property + ':' + mid + unit + ')';
      if (matchMedia(query).matches) {
        return binarySearch(mid, b, maxIter - 1);
      } else {
        return binarySearch(a, mid, maxIter - 1);
      }
    }
  };

  /**
   * Generate detection function
   * @private
   */
  const detectFunction = (function () {
    let func = fallback;
    //IE8+
    if (!isNaN(screen.logicalXDPI) && !isNaN(screen.systemXDPI)) {
      func = ie8;
    }
    // IE10+ / Touch
    else if (window.navigator.msMaxTouchPoints) {
      func = ie10;
    }
    //chrome
    else if (!!window.chrome && !(!!window.opera || navigator.userAgent.indexOf(' Opera') >= 0)) {
      func = chrome;
    }
    //safari
    else if (Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0) {
      func = safari;
    }
    //Mobile Webkit
    else if ('orientation' in window && 'webkitRequestAnimationFrame' in window) {
      func = webkitMobile;
    }
    //WebKit
    else if ('webkitRequestAnimationFrame' in window) {
      func = webkit;
    }
    //Opera
    else if (navigator.userAgent.indexOf('Opera') >= 0) {
      func = opera11;
    }
    //Last one is Firefox
    //FF 18.x
    else if (window.devicePixelRatio) {
      func = firefox18;
    }
    //FF 4.0 - 17.x
    else if (firefox4().zoom > 0.001) {
      func = firefox4;
    }

    return func;
  })();

  return {
    /**
     * Ratios.zoom shorthand
     * @return {Number} Zoom level
     */
    zoom: function () {
      return detectFunction().zoom;
    },

    /**
     * Ratios.devicePxPerCssPx shorthand
     * @return {Number} devicePxPerCssPx level
     */
    device: function () {
      return detectFunction().devicePxPerCssPx;
    },
  };
})();

function debounce(func, threshold = null, execAsap = null) {
  let timeout;

  return function debounced(context: any, ...argsCollection: any[]) {
    const obj = context,
      args = argsCollection;
    function delayed() {
      if (!execAsap) func.apply(obj, args);
      timeout = null;
    }

    if (timeout) clearTimeout(timeout);
    else if (execAsap) func.apply(obj, args);

    timeout = setTimeout(delayed, threshold || 100);
  };
}

function useIsZoomed() {
  //const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  //const isRetina = /Mac OS X/i.test(navigator.userAgent);
  const [isZoomed, setIsZoomed] = useState<{ zoom: string | number; device: string | number; isZoomed: boolean }>(() => ({
    zoom: detectZoom.zoom(),
    device: detectZoom.device(),
    isZoomed: detectZoom.zoom() > 1.1,
  }));

  useEffect(() => {
    function getZoomValues() {
      const zoom = detectZoom.zoom();
      const device = detectZoom.device();
      const newZoomVal = parseFloat(zoom as unknown as string).toFixed(2);
      const newDeviceVal = parseFloat(device as unknown as string).toFixed(2);

      setIsZoomed({ zoom: newZoomVal, device: newDeviceVal, isZoomed: zoom > 1.1 });
    }

    const listener = debounce(getZoomValues);

    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, []);

  return isZoomed;
}

export default useIsZoomed;
