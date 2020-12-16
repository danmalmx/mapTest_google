function initMap() {
    let options = {
        zoom: 12, 
        center: {lat: 57.721001, lng: 12.940250}
    }

    let map = new google.maps.Map(document.getElementById('map'), options);
    
    // let marker = new google.maps.Marker({
    //     position: {lat: 57.736960, lng: 12.949500}, 
    //     map: map,
    //     icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    // });

    // let infoWindow = new google.maps.InfoWindow({
    //     content: '<h1>Home</h1>',
    // });

    // marker.addListener('click', () => {
    //     infoWindow.open(map, marker)
    // })

    let markerArray = [{
        coords: {lat: 57.736960, lng: 12.949500},
        image: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content: '<h1>Home</h1>'
        }, 
        {
            coords: {lat: 57.721000, lng: 12.940250},
            content: '<h1>Not home</h1>'
        }
    ];

    for (let i = 0; i < markerArray.length; i++) {
        addMarker(markerArray[i]);

    };

    function addMarker(props) {
        let marker = new google.maps.Marker({
        position: props.coords,
        map: map,
        icon: props.image,
        });

        if(props.image) {
            marker.setIcon(props.image)
        }

        if (props.content) {
            let infoWindow = new google.maps.InfoWindow({
                content: props.content,
            });

            marker.addListener('click', () => {
                infoWindow.open(map, marker)
            })
        }
    }
}

