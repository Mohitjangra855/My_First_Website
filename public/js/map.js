mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: alllistings.geometry.coordinates, // starting position [lng, lat]
    zoom: 9 // starting zoom
});

// Create a default Marker and add it to the map.
const marker = new mapboxgl.Marker({ color: 'red' })
    .setLngLat(alllistings.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 9 }).setHTML(
        `<h6>${alllistings.location.toUpperCase() }</h6>
        <p>Exact location will be provided after booking</p>`
    )
    )
    .addTo(map);