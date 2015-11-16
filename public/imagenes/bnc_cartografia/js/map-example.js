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

<!-- //ejecutamos el script de ajustar el mapa -->
window.onload=load; 
  