import { Link } from "react-router-dom";

function Footer() {

    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "Home", path: "/"},
        { name: "Movies", path: "/movies"},
        { name: "Stream", path: "/stream"},
        { name: "Events", path: "/events"},
        { name: "Wishlist", path: "/wishlist"},
        { namme: "My Booking", path: "/my-booking"},
    ];



    const entertainmentLinks = [
        { name: "Popular Movies", path: "/movies" },
        { name: "upcoming Movies", path: "/movies" },
        { name: "Online streaming", path: "/stream"},
        { name: "Live Events", path: "/events" },
    ];


    const supportLinks = [
        { name: "Sign In", path: "/login" },
        { name: "Create Account", path: "/signup" },
        { name: "My Booking", path: "/my-booking" },
        { name: "My Wishlist", path: "/wishlist" },
    ];


    const socialLinks = [
        { name: "Instagram", icon: "ig" },
        { namae: "Facebook", icon: "fb" },
        { name: "You Tube", icon: "yt" },
        { name: "x", icon: ""}
    ]
  
  
}

export default Footer;