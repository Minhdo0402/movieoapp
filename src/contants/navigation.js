import { PiTelevision } from "react-icons/pi";
import { RiMovie2Line } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
export const navigation = [
    {
      label: "TV Shows",
      href: "tv",
      icon: <PiTelevision />
    },
    {
      label: "Movies",
      href: "movie",
      icon: <RiMovie2Line />
    },
  ];
  
  export const mobileNavigation = [
    {
      label : 'Home',
      href : '/',
      icon : <IoHomeOutline />
    },
    ...navigation,
    {
        label : 'Search',
        href : '/search',
        icon : <IoSearchOutline/>
    }
  ];