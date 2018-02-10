    function myMap() {
        myCenter = new google.maps.LatLng(40.7831, -73.9712);
        var mapOptions = {
            center: myCenter,
            zoom: 11,
            scrollwheel: false,
            draggable: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

        var marker = new google.maps.Marker({
            position: myCenter,
        });
        marker.setMap(map);
    }

    // Modal Image Gallery
    function onClick(element) {
        $("#img01").src = element.src;
        $("#modal01").style.display = "block";
        var captionText = document.getElementById("caption");
        captionText.innerHTML = element.alt;
    }

    // Change style of navbar on scroll
    // window.onscroll = function() { navbar() };

    // function navbar() {
    //     var navbar = document.getElementById("myNavbar");
    //     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    //         navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-black";
    //     } else {
    //         navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    //     }
    // }

    // Used to toggle the menu on small screens when clicking on the menu button
    function toggleFunction() {
        var x = document.getElementById("mobileNav");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }
    }

    
 