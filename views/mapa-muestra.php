<!-- css de menu -->
<style>#content ul.flat,#content ul.links,#content ul.flat li,#content ul.links li,.vertical-tab-button{list-style-type:none;list-style-image:none;margin-left:0;padding-left:0;}@media (min-width:47.5em){#nav-content li.active,#nav-content li.active-parent a{background-color:white;border:1px solid #dddddd;border-bottom:0;-webkit-border-radius:7px 7px 0 0;-moz-border-radius:7px 7px 0 0;-ms-border-radius:7px 7px 0 0;-o-border-radius:7px 7px 0 0;border-radius:7px 7px 0 0;}#nav-content ul:after{content:"";display:table;clear:both;}#nav-content ul li{float:left;margin-bottom:-1px;}#nav-content ul li a{color:#0678be;display:block;float:left;height:30px;padding:0;margin-right:1.384614em;}@media (min-width:47.5em){#nav-content ul li a{padding:5px 11px 0 11px;padding:4px 12px 5px 12px;margin-right:0;}}#nav-content li.active a.active,#nav-content li.active-parent a{padding:0;margin-right:1.384614em;}@media (min-width:47.5em){#nav-content li.active a.active,#nav-content li.active-parent a{padding:0.307692em 0.692307em 0.846153em 0.692307em;margin-right:0;}}#nav-content li.active a.active,#nav-content li.active-parent a,#nav-content li a:hover,#nav-content li a:focus,#nav-content li.active-parent a{color:black;}#nav-content li a:hover,#nav-content li a:focus{text-decoration:none;}</style>

<!-- content -->
<div id="header" class="span-24 last append-bottom"> 
  <div id="nav-content" style="">
     <ul class="links" style="margin-bottom: -11px;" >
          <li >
                <a href="/content/cartografias">Introducción</a>
          </li>
         <li>
                <a href="/content/cartografias_tradicionales">Tradicionales</a>
          </li>
          <li class="active">
                <a href="/content/cartografias_festivales"  class="active">Festivales<span class="element-invisible">(active tab)</span></a>
          </li>
          <li>
                <a href="/content/cartografias_indigenas">Indígenas</a>
          </li>
          <li>
                <a href="/content/cartografias_redes">Redes</a>
          </li>
          <li>
                <a href="/content/cartografias_bandas" >Bandas</a>
          </li>
          <li> 
                <a href="/content/cartografias_tesauro" >Tesauro</a>
          </li>  
    </ul>        
  </div>
  <img heigth="50%" src="http://www.bibliotecanacional.gov.co/imagenes/cartografias/festivales.png" alt="" width="100%">
</div>

<script src="http://maps.google.com/maps/api/js?sensor=false"
            type="text/javascript"></script>
    <script type="text/javascript">
    //<![CDATA[


   var customIcons = {
      festival: {
        icon: 'http://www.bibliotecanacional.gov.co/CDM/festivales/theme/festivales/img/festival_icon.png'
      },
    };


    function load() {
      var map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(4.228045, -72.953885),
        zoom: 6,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      var infoWindow = new google.maps.InfoWindow;

      // Change this depending on the name of your PHP file
      downloadUrl("http://www.bibliotecanacional.gov.co/CDM/google_location/gen_xml_festivales.php", function(data) {
        var xml = data.responseXML;
        var markers = xml.documentElement.getElementsByTagName("marker");
        for (var i = 0; i < markers.length; i++) {
          var id= markers[i].getAttribute("id");
          var name = "<a href='http://www.bibliotecanacional.gov.co/CDM/festivales/festivales/view/"+id+"' target='_blank' >"+markers[i].getAttribute("name")+"</a>";
          var address = markers[i].getAttribute("address");
          var type = markers[i].getAttribute("type");
          var point = new google.maps.LatLng(
              parseFloat(markers[i].getAttribute("lat")),
              parseFloat(markers[i].getAttribute("lng")));
          var html = "<b>" + name + "</b> <br/>" + address;
          var icon = customIcons[type] || {};
          var marker = new google.maps.Marker({
            map: map,
            position: point,
            //icon: icon.icon,
            icon: 'http://www.bibliotecanacional.gov.co/CDM/festivales/theme/festivales/img/festival_icon.png',
            shadow: icon.shadow
          });
          bindInfoWindow(marker, map, infoWindow, html);
        }
      });
    }

    function bindInfoWindow(marker, map, infoWindow, html) {
      google.maps.event.addListener(marker, 'click', function() {
        infoWindow.setContent(html);
        infoWindow.open(map, marker);
      });
    }

    function downloadUrl(url, callback) {
      var request = window.ActiveXObject ?
          new ActiveXObject('Microsoft.XMLHTTP') :
          new XMLHttpRequest;

      request.onreadystatechange = function() {
        if (request.readyState == 4) {
          request.onreadystatechange = doNothing;
          callback(request, request.status);
        }
      };

      request.open('GET', url, true);
      request.send(null);
    }

    function doNothing() {}

    //]]>

<!-- ejecutamos el script de ajustar el mapa -->
window.onload=load; 
  </script>

 <div id="map" style="width: 100%; height: 800px"></div>