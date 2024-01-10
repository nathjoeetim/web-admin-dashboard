import {
  FaHome,
  FaClipboardCheck,
  FaUserAlt,
  FaBoxes,
  FaChartLine,
  FaDollarSign,
  FaMoneyBillAlt,
} from "react-icons/fa";
import img1 from "../assets/imgs/img1.png";
import img2 from "../assets/imgs/img2.png";
import img3 from "../assets/imgs/img3.png";

export const SideBarData = [
  {
    icon: FaHome,
    header: "Dashboard",
  },
  {
    icon: FaClipboardCheck,
    header: "orders",
  },
  {
    icon: FaUserAlt,
    header: "Customers",
  },
  {
    icon: FaBoxes,
    header: "product",
  },
  {
    icon: FaChartLine,
    header: "Analytics",
  },
];

export const CardsData = [
  {
    title: "Sales",
    color: {
      background: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,950",
    png: FaDollarSign,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      background: "linear-gradient(180deg, #ff919D 0%, #Fc929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,950",
    png: FaMoneyBillAlt,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      background: " #F9D59B",
      boxShadow: "0px 10px 20px 0px #f9d59bc5",
    },
    barValue: 60,
    value: "4,950",
    png: FaClipboardCheck,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

export const updateData = [
  {
    img: img1,
    name: "Andrew thomas ",
    note: "has ordered apple smart watch 2500mah battery",
    time: "20 seconds ago",
  },
  {
    img: img2,
    name: "jonas samuel ",
    note: "has ordered apple phone xr of 1tb storage ",
    time: "50 min ago",
  },
  {
    img: img3,
    name: "ivery david ",
    note: "has ordered an HP laptop of 8gb ram  ",
    time: "2 hour ago",
  },
];
