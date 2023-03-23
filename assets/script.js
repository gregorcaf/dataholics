url = "http://localhost:8000/get-timeline-data?name=zan&month=february"

function initMap() {
    // The location of Uluru
    const uluru = { lat: 48.1370339, lng: 11.5732385 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: uluru,
    });

    let infowindow = new google.maps.InfoWindow();

    let marker, i;
    
    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i]['lat'], locations[i]['lng']),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i]['name']);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }

  }

  function getData() {
    // fetch(url).then(response => {
    //   console.log(response)
    // })
    fetch(url, {mode:"no-cors"}).then((response) => console.log(response)) //.then((data) => console.log(data));
  }

  let locations = [
    {name: 'A', lat: 48.1370339, lng: 11.5732385 },
    {name: 'B', lat: 48.18, lng: 11.578 },
    {name: 'C', lat: 48.12, lng: 11.7 },
    {name: 'D', lat: 48.16, lng: 11.5 },
    {name: 'E', lat: 48.19, lng: 11.6 }
  ]
  
  window.initMap = initMap;
  window.onload = getData;