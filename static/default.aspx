<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Air Quality Partnership</title>
    <link href="https://fonts.googleapis.com/css?family=Material+Icons|Roboto:300,400,500" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/swiper@3.4.1/dist/css/swiper.min.css">
    <link rel="stylesheet" href="/css/styles.css?0.1.0">
  </head>
  <body>
    <header>
      <div>
        <section>
          <button class="demo-menu material-icons">menu</button>
        </section>
        <section class="logo">
          <a href="http://www.dvrpc.org/" target="_blank" style="border-right: 1px solid #aaa;"><img src="/img/dvrpc.png?0.1.0" alt="Delaware Valley Regional Planning Commission" width="162"></a><a href="/" data-root><img src="/img/aqp.png?0.1.0" alt="Air Quality Partnership"></a>
        </section>
      </div>
    </header>
    <div class="content">
      <aside class="drawer">
        <nav class="drawer__drawer">
          <a href="#" class="drawer__close-btn"><span class="material-icons">close</span></a>
          <div class="drawer-list">
            <a class="drawer-list-item" href="/About/">
              About
            </a>
            <a class="drawer-list-item" href="/News/">
              News
            </a>
            <a class="drawer-list-item" href="/Resources/">
              Resources
            </a>
            <a class="drawer-list-item" href="http://delawarevalley.enviroflash.info/signup.cfm" target="_blank">
              Sign Up for Alerts
            </a>
          </div>
        </nav>
        <footer><div>
          <p><a href="mailto:sgreene@dvrpc.org">sgreene@dvrpc.org</a> | 215.238.2860
          <br/><a href="http://www.dvrpc.org/GetInvolved/TitleVI/">Title VI Statement</a>
          </p>
          <p><small>Copyright &copy; 2006-<script>document.write(new Date().getFullYear());</script> Air Quality Partnership
          <br/><i>Last Updated: <script>document.write(document.lastModified.split(' ')[0])</script></i>
          </small></p></div>
        </footer>
      </aside>
      <main>
        <div class="forecast-grid">
          <div class="forecast__prev"><a class="forecast__link--prev" href="#"><i class="material-icons">chevron_left</i><div class="rotate-left"><span>YESTERDAY</span></div></a></div>
          <div class="forecast__next"><a class="forecast__link--next" href="#"><div class="rotate-right"><span>TOMORROW</span></div><i class="material-icons">chevron_right</i></a></div>
          <div class="forecast-grid__content">
            <div class="swiper-container">
              <div class="swiper-wrapper"></div>
            </div>
          </div>
        </div>
        <div class="forecast-details">
          <div class="forecast-details__panel">
            <a href="#" onclick="tipsLink.call(this, event);return false;" class="forecast-details__link forecast-details__link--action">
              Take Action
            </a>
            <div class="forecast-details-panel">
              <a href="#" class="forecast-details-panel__close-btn material-icons">close</a>
              <h2>Take Action</h2>
              <ul class="list-group">
                <li class="list-group-item visible--good visible--moderate visible--sensitive visible--unhealthy">Take transit or rideshare. <small>Ride the bus, train, subway or carpool to work or school.</small></li>
                <li class="list-group-item visible--sensitive visible--unhealthy">Telecommute. <small>Work from home on Air Quality Action days and spend your extra commute hours with your family.</small></li>
                <li class="list-group-item visible--moderate">Trip-link. <small>Do all of you errands in one trip, avoiding unnecessary cold starts.</small></li>
                <li class="list-group-item visible--sensitive visible--unhealthy">Refuel at the end of the day. <small>Ozone levels are usually highest in mid to late afternoon.</small></li>
                <li class="list-group-item visible--good visible--moderate">Don't "top off" your tank when refueling. <small>Spillage adds two tons of air pollution daily.</small></li>
                <li class="list-group-item visible--sensitive visible--unhealthy">Postpone mowing the lawn. <small>Late in the day or on a day when air quality is better. Remember to fill your gas tanks after dusk too.</small></li>
                <li class="list-group-item visible--moderate">Use wood stoves and fire places wisely and sparingly. <small>Burn only untreated hard wood in a properly maintained woodstove or fireplace.</small></li>
                <li class="list-group-item visible--good">Refrain from burning trash or yard waste.</li>
                <li class="list-group-item visible--good visible--moderate">Conserve energy at home. <small>Set the thermostat lower in the winter and high in the summer. Conserving energy not only helps air quality, it also saves you money.</small></li>
                <li class="list-group-item visible--good visible--moderate">Get regular tune-ups and car maintenance checks. <small>A properly running vehicle emits less pollution and saves gas.</small></li>
                <li class="list-group-item visible--moderate">Turn it off. <small>Idling your vehicle wastes gas and pollutes the air.</small></li>
                <li class="list-group-item visible--good">Join your local Transportation Management Association. <small>Your TMA can provide tips and advice on reduce pollution from your commute.</small></li>
                <li class="list-group-item visible--sensitive visible--unhealthy">Avoid harmful fumes. <small>Using oil-based paints, solvents, cleaners, varnishes, or other household and personal products that cause fumes can be hazardous.</small></li>
                <li class="list-group-item visible--good visible--moderate">Keep the right amount of air in the tires. <small>Proper tire pressure saves gas and the air.</small></li>
                <li class="list-group-item visible--sensitive visible--unhealthy">Use teleconferencing instead of driving to meetings.</li>
              </ul>
            </div>
          </div>
          <div class="forecast-details__panel">
            <a href="http://delawarevalley.enviroflash.info/signup.cfm" class="forecast-details__link mobile-only" target="_blank">
              Sign Up for Alerts
            </a>
          </div>
          <!--<div class="forecast-details__panel">
            <a href="#" class="forecast-details__link">
              Forecast
            </a>
            <div class="forecast-details-panel">
              <a href="#" class="forecast-details-panel__close-btn material-icons">close</a>
              <h2>Forecast Details</h2>
              <p class="forecast-details-panel__content"></p>
            </div>
          </div>-->
        </div>
        <div class="content-panel"></div>
      </main>
    </div>
    <footer>
    <div>
          <p class="adjust-col"><a href="mailto:sgreene@dvrpc.org">sgreene@dvrpc.org</a> | 215.238.2860 | <a href="http://www.dvrpc.org/GetInvolved/TitleVI/">Title VI Statement</a>
          <br/>
          <small>Copyright &copy; 2006-<script>document.write(new Date().getFullYear());</script> Air Quality Partnership | <i>Last Updated: <script>document.write(document.lastModified.split(' ')[0])</script></i>
          </small>
          </p>
    </div>
    </footer>
    <script src="https://unpkg.com/swiper@3.4.1/dist/js/swiper.min.js" charset="utf-8"></script>
    <script src="/js/app.js?0.1.0"></script>
    
  </body>
</html>