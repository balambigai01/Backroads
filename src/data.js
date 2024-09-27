import { CiFacebook, CiTwitter } from "react-icons/ci";
import { FaSocks, FaTree, FaWallet } from "react-icons/fa";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import Tour1 from './images/tour-1.jpeg'
import Tour2 from './images/tour-2.jpeg'
import Tour3 from './images/tour-3.jpeg'
import Tour4 from './images/tour-4.jpeg'
import Tour5 from './images/tour-5.jpeg'
import Tour6 from './images/tour-6.jpeg'
export const PageLinks=[
    {
        id:1,
        href:'#home',
        text:'home'
    },
    {
        id:2,
        href:'#about',
        text:'about'
    },
    {
        id:3,
        href:'#services',
        text:'services'
    },
    {
        id:4,
        href:'#tours',
        text:'tours'
    }
]
export const SocialLinks = [
  {
    id: 1,
    href: "https://www.twitter.com",
    icon: <CiFacebook />,
  },
  {
    id: 2,
    href: "https://www.twitter.com",
    icon: <CiTwitter />,
  },
  {
    id: 3,
    href: "https://www.twitter.com",
    icon: <HiOutlineSquares2X2 />,
  },
];
export const Service = [
  {
    id: 1,
    icon: <FaWallet />,
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: <FaTree />,
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: <FaSocks />,
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];
export const Tour = [
  {
    id: 1,
    image: Tour1,
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime sed minima expedita recusandae qui consequatur",
    duration: "6 ",
    price: "2100",
    country: "china",
    date: "NOVEMBER 26th, 2020",
  },
  {
    id: 2,
    image: Tour2,
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime sed minima expedita recusandae qui consequatur",
    duration: "6 ",
    price: "2100",
    country: "china",
    date: "OCTOBER 26th, 2020",
  },
  {
    id: 3,
    image: Tour3,
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime sed minima expedita recusandae qui consequatur",
    duration: "6 ",
    price: "2100",
    country: "china",
    date: "SEPTEMBER 26th, 2020",
  },
  {
    id: 4,
    image: Tour4,
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime sed minima expedita recusandae qui consequatur",
    duration: "6 ",
    price: "2100",
    country: "china",
    date: "august 26th, 2020",
  },
  {
    id: 5,
    image: Tour5,
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime sed minima expedita recusandae qui consequatur",
    duration: "6 ",
    price: "2100",
    country: "china",
    date: "JULY 26th, 2020",
  },
  {
    id: 6,
    image: Tour6,
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime sed minima expedita recusandae qui consequatur",
    duration: "6 ",
    price: "2100",
    country: "china",
    date: "JUNE 26th, 2020",
  },
];