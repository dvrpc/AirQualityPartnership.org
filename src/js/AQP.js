var BASE_URL = "/";

if ('Promise' in window && 'fetch' in window) {
  init();
}
else {
  inject('https://cdn.polyfill.io/v2/polyfill.min.js?features=Promise,fetch&flags=gated,always', init);
}

if ('ActiveXObject' in window) {
  var css = document.createElement('link');
  css.setAttribute('rel', 'stylesheet');
  css.href = '/ie.css';
  document.head.appendChild(css);
}

inject('https://www.google-analytics.com/analytics.js', function() { ga('create', 'UA-9825778-3', 'auto'); });
inject('https://bs.serving-sys.com/Serving/ActivityServer.bs?cn=as&amp;ActivityID=1038527&amp;rnd=' + new Date().getTime(), undefined);

function inject(url, callback) {
  var js = document.createElement('script');
  js.src = url;
  js.async = true;
  if (callback !== undefined) {
    js.onload = function() {
      callback();
    };
    js.onerror = function() {
      callback(new Error('Failed to load script ' + url));
    };
  }
  document.head.appendChild(js);
}

//attoQuery
var $ = function(qsa) {
  var arr = Array.prototype.slice.call(document.querySelectorAll(qsa))
  
  arr.on = function(ev, callback) {
    arr.forEach(function (el) {
      el.addEventListener(ev, function (e) {
        callback.call(this, e);
      });
    });
    return this;
  }

  arr.addClass = function(classes) {
    arr.forEach(function (el) {
      classes.split(' ').forEach(function (c) {
        el.classList.add(c);
      });
    });
    return this;
  }

  arr.removeClass = function(classes) {
    var r = new RegExp('\\b' + classes.replace('*', '.*') + '\\b');
    arr.forEach(function (el) {
      el.className = el.className.replace(r, '');
    });
    return this;
  }

  arr.toggleClass = function(classes, toggle) {
    arr.forEach(function (el) {
      el.classList.toggle(classes, toggle);
    });
    return this;
  }

  arr.append = function(html) {
    if (html instanceof Element) {
      arr.forEach(function (el) {
        el.appendChild(html.cloneNode(true));
      });
    }
    else {
      arr.forEach(function (el) {
        el.insertAdjacentHTML('beforeend', html);
      });
    }
    return this;
  }

  arr.html = function(html) {
    arr.forEach(function (el) {
      el.innerHTML = html;
    });
    return this;
  }

  arr.scrollTop = function(offset) {
    if (offset !== undefined) {
      arr.forEach(function (el) {
        el.scrollTop = offset;
      });
      return this;
    }
    else {
      return arr[0].scrollTop;
    }
  }

  arr.css = function(prop, val) {
    arr.forEach(function (el) {
      if (arguments.length < 2 && Object.keys(prop).length > 0) {
        Object.keys(prop).forEach(function (k) {
          el.style[k] = prop[k];
        });
      }
      else {
        el.style[prop] = val;
      }
    });
  }

  return arr;
}

function preloadImages(arr) {
  arr.forEach(function (index) {
    var img = document.createElement('img');
    img.src = BASE_URL + 'img/' + index + '.jpg';
  });
}

function renderForecasts(forecasts) {
  var dateString = ['Yesterday', 'Today', 'Tomorrow'];
  forecasts.forEach(function (forecast, i) {
    $('.swiper-wrapper').append('<div class="swiper-slide"><p><small>Greater Philadelphia</small></p><h1>' + dateString[i] + '\'s Air Quality<br/>' + (i === 2 ? 'will be ' : (i === 0 ? 'wa' : 'i') + 's ') + (forecast.index.indexOf('sensitive') > -1 ? 'Unhealthy for Sensitive Groups' : forecast.index.substr(0, 1).toUpperCase() + forecast.index.slice(1)) + '.</h1>' + (window.innerWidth > 641 ? $('.forecast-details__link--action')[0].outerHTML : '') + '</div>');
  });

  swiper.update();
  swiper.slideTo(1);
  //$('.swiper-slide').css('height', $('.forecast-grid__content')[0].offsetHeight + 'px');
}

function renderForecastDetails(forecast) {
  $('.forecast-details-panel__content').html(forecast['forecast']);
}

function tipsLink(e) {
  e.preventDefault();
  $(".forecast-details__panel").addClass("forecast-details__panel--active");
}

function init() {

  function fetchPage(url) {
    history.pushState(null, null, url);
    fetch(url + '?' + new Date().getTime()).then(function (response) {
      return response.text();
    }).then(function (response) {
      $('.content-panel').html('<a href="#" onclick="$(\'.content-panel--active\').removeClass(\'content-panel--active\');history.pushState(null, null, \'/\');return false;" class="forecast-details-panel__close-btn material-icons">close</a>' + response).addClass('content-panel--active').scrollTop(0);
      $('.drawer--active').removeClass('drawer--active');
    });
    logGA(url);
  }

  function logGA(url) {
    window['ga']=window['ga']||function(){(ga.q=ga.q||[]).push(arguments)};ga['l']=+new Date;
    ga && ga('send', 'pageview', url);
  }

  /**
   * @constructor
   * @param {function(Array)=} dataLoaded
   * @extends {Array}
   */
  var Forecasts = function(url, dataLoaded) {
    dataLoaded = dataLoaded || function () {}
    
    
    var arr = [];
    arr.active = 1;
    var _callbacks = {
      'load': {
        fireImmadiate: false, 
        funcs: [dataLoaded.bind(arr)]
      }
    };
    

    fetch(url).then(function (response) {
      return response.json();
    }).then(function (data) {
      data.forEach(function (item) {
        arr.push(item);
      });
      return arr;
    }).then(_executeCallbacks.bind(arr, 'load', true));

    arr.set = function(i) {
      arr.activeIndex = i;
      arr.active = arr[i];
      _executeCallbacks('change');
      return arr[i];
    }

    arr.on = function(event, func) {
      if (!(event in _callbacks)) {
        _callbacks[event] = {
          fireImmediate: false,
          funcs: []
        };
      }
      _callbacks[event].funcs.push(func);
      if (_callbacks[event].fireImmediate) {
        func.call(arr);
      }
      return arr;
    }

    function _executeCallbacks(event, fireImmediate) {
      _callbacks[event].funcs.forEach(function (func) {
        func.call(arr);
      });
      if (fireImmediate !== undefined) {
        _callbacks[event].fireImmediate = fireImmediate;
      }
    }

    return arr;
  }

  window.onload = function() {

    var swiper = new Swiper('.swiper-container', {
      mousewheelControl: true,
      initialSlide: 1
    });
    window['swiper'] = swiper;

    var forecasts = new Forecasts(BASE_URL + 'forecasts_live.aspx');

    forecasts.on('load', function () {
      $('body').addClass('forecast--' + this[1]['index'] + ' forecast--' + this[1]['index'] + '1');

      renderForecasts(this);
      renderForecastDetails(this[1]);

      preloadImages(this.map(function (f, i) { return f['index'] + i}));
    });

    forecasts.on('change', function (data) {
      $('body').removeClass('forecast--*').addClass('forecast--' + this.active['index'] + ' forecast--' + this.active['index'] + this.activeIndex);
      renderForecastDetails(forecasts.active);
    });

    $('.demo-menu').on('click', function () {
      $('.drawer').addClass('drawer--active');
    });

    $('.drawer__close-btn').on('click', function (e) {
      e.preventDefault();
      $('.drawer').removeClass('drawer--active');
    });

    $('.forecast__link--prev').on('click', function (e) {
      e.preventDefault();
      swiper.slidePrev();
    });

    $('.forecast__link--next').on('click', function (e) {
      e.preventDefault();
      swiper.slideNext();
    });

    $('.forecast-details__link[href="#"]').on('click', function (e) {
      e.preventDefault();
      $('.forecast-details__panel').addClass('forecast-details__panel--active');
    });

    $('.forecast-details-panel__close-btn').on('click', function (e) {
      e.preventDefault();
      $('.forecast-details__panel--active').removeClass('forecast-details__panel--active');
    });

    swiper.on('onSlideChangeStart', function (swiper) {
      forecasts.set(swiper.activeIndex);
      $('.forecast__link--prev').toggleClass('hidden', swiper.isBeginning);
      $('.forecast__link--next').toggleClass('hidden', swiper.isEnd);
    });

    window.addEventListener('resize', function () {
      swiper.update();
    });

    $('a:not([href="#"]):not([href^="http"]):not([data-root])').on('click', function (e) {
      if (this.getAttribute('href') === BASE_URL) {
        location.href = BASE_URL;
      }
      e.preventDefault();
      fetchPage(this.href);
    });

  }

  if (location.hash.length) {
    fetchPage(location.hash.slice(1));
  }
  else {
    logGA(location);
  }
}