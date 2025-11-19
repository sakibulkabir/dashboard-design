import { ChartColumn, Home, NotepadText, Package, PackagePlus, Settings, ShoppingBag, UserCheck, UserPlus, Users } from "lucide-react";

import ProfileImage from "@/assets/profile-image.jpg";


export const navbarLinks = [
    {
        title: "Dashboard",
        links: [
            {
                label: "Dashboard",
                icon: Home,
                path: "/",
            },
            {
                label: "Analytics",
                icon: ChartColumn,
                path: "/analytics",
            },
            {
                label: "Reports",
                icon: NotepadText,
                path: "/reports",
            },
        ],
    },
    {
        title: "Customers",
        links: [
            {
                label: "Customers",
                icon: Users,
                path: "/customers",
            },
            {
                label: "New customer",
                icon: UserPlus,
                path: "/new-customer",
            },
            {
                label: "Verified customers",
                icon: UserCheck,
                path: "/verified-customers",
            },
        ],
    },
    {
        title: "Products",
        links: [
            {
                label: "Products",
                icon: Package,
                path: "/products",
            },
            {
                label: "New product",
                icon: PackagePlus,
                path: "/new-product",
            },
            {
                label: "Inventory",
                icon: ShoppingBag,
                path: "/inventory",
            },
        ],
    },
    {
        title: "Settings",
        links: [
            {
                label: "Settings",
                icon: Settings,
                path: "/settings",
            },
        ],
    },
];

export const overviewData = [
    {
        name: "Jan",
        total: 1500,
    },
    {
        name: "Feb",
        total: 2000,
    },
    {
        name: "Mar",
        total: 1000,
    },
    {
        name: "Apr",
        total: 5000,
    },
    {
        name: "May",
        total: 2000,
    },
    {
        name: "Jun",
        total: 5900,
    },
    {
        name: "Jul",
        total: 2000,
    },
    {
        name: "Aug",
        total: 5500,
    },
    {
        name: "Sep",
        total: 2000,
    },
    {
        name: "Oct",
        total: 4000,
    },
    {
        name: "Nov",
        total: 1500,
    },
    {
        name: "Dec",
        total: 2500,
    },
];

export const recentSalesData = [
    {
        id: 1,
        name: "Sakibul Kabir Risat",
        email: "sakibulkabirrisat@email.com",
        image: "https://scontent.fdac207-1.fna.fbcdn.net/v/t39.30808-1/546055271_1071633238467659_7795626560514869574_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGlwb8Zgazhnr2cenXiD8tYHwQ0tLb3l6IfBDS0tveXolk5XlhA_N7QwIrKidBQ7wMxO5EozpsDzMGkfLByVDEi&_nc_ohc=CZ_SuRpF9W8Q7kNvwG2lEZU&_nc_oc=AdlOcqNgN27NRq4YNg9oVeIMe1dSwQRCs7JxOvPB-Rv7docnKZ3QYTcfy_9U8JHIwls&_nc_zt=24&_nc_ht=scontent.fdac207-1.fna&_nc_gid=l5cGWT5nx26Dz08DcKOneQ&oh=00_Afi4jlST4PolvJgcAj_A-dw0tzlGnNBlBWdFXVM7yEGWZg&oe=69240514",
        total: 1500,
    },
    {
        id: 2,
        name: "Sakib",
        email: "sakib@email.com",
        image: "https://scontent.fdac207-1.fna.fbcdn.net/v/t39.30808-6/547235819_1072065435091106_1391905037312378812_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGzQlV1JqO6HoU57Id43cF73pS_RpCj0uHelL9GkKPS4WQz_TseGrnsSj_mVj8SF_s57cesbvXxQUZ6EcFU0sXe&_nc_ohc=uConH3QP8YoQ7kNvwHd1btG&_nc_oc=AdlaEV-eVVZIZ4OhB_af1Mt_0iUTWeItSOkAlVZEAd6qmXoO6kfb-AB9grIFoeRbzww&_nc_zt=23&_nc_ht=scontent.fdac207-1.fna&_nc_gid=WhZQGk69i5BJowoYZIuMWw&oh=00_AfinhuEmY_CA3jGEejMDqnrgKa2FzmyydOCk-jxeNOpHFg&oe=69240111",
        total: 2000,
    },
    {
        id: 3,
        name: "Momin",
        email: "momin@email.com",
        image: "https://scontent.fdac207-1.fna.fbcdn.net/v/t39.30808-6/547283426_1072065368424446_5373348610245605511_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG2_wDsdTNM0_OlYyRwXeoiQgjIyXN-T-9CCMjJc35P786Yx1oPDsN2FS9TRGY_ZtNBpzN8mKMnM29jyaRGxEQP&_nc_ohc=hYn7pwFmOJ8Q7kNvwE0cuDv&_nc_oc=AdmqbcF6haLq50gS4NNwVh_m2EFs2MBAXCfQKw8N9tHkm41ZoT9dg2bTc75uES_2QDM&_nc_zt=23&_nc_ht=scontent.fdac207-1.fna&_nc_gid=qofqEHNeICiCTxmOUsQPvQ&oh=00_AfgGOez97IQk779_4JXgg4607fZcN3GtodBZzBUlwHHhmg&oe=6923FEB6",
        total: 4000,
    },
    {
        id: 4,
        name: "Akber Ali",
        email: "akberali@email.com",
        image: ProfileImage,
        total: 3000,
    },
    {
        id: 5,
        name: "Maime Rahman",
        email: "maime@email.com",
        image: ProfileImage,
        total: 2500,
    },
    {
        id: 6,
        name: "Rifat",
        email: "rifat@email.com",
        image: ProfileImage,
        total: 4500,
    },
    {
        id: 7,
        name: "Imaran",
        email: "imran@email.com",
        image: ProfileImage,
        total: 5300,
    },
];

export const topProducts = [
    {
        number: 1,
        name: "Wireless Headphones",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkbbG5kD726502-oCNBAu0UyAuP9jlAFmrpg&s",
        description: "High-quality noise-canceling wireless headphones.",
        price: 99.99,
        status: "In Stock",
        rating: 4.5,
    },
    {
        number: 2,
        name: "Smartphone",
        image: "https://www.excelestore.com.bd/public/uploads/all/3ME4WcLO1oHDYgMTY9wZTl01WRVk8XVCmFw7D4VR.webp",
        description: "Latest 5G smartphone with excellent camera features.",
        price: 799.99,
        status: "In Stock",
        rating: 4.7,
    },
    {
        number: 3,
        name: "Gaming Laptop",
        image: "https://storage-asset.msi.com/event/2022/cnd/i-want-it-all/images/reason-img-02.jpg",
        description: "Powerful gaming laptop with high-end graphics.",
        price: 1299.99,
        status: "In Stock",
        rating: 4.8,
    },
    {
        number: 4,
        name: "Smartwatch",
        image: "https://i5.walmartimages.com/seo/Smart-Watch-Fits-for-Android-and-iPhone-EEEkit-Fitness-Health-Tracker-Waterproof-Smartwatch-for-Women-Men_819cb65b-8437-4eb3-aba1-ce6513dc8d58.312f5775b50ab18c130fe5a454149fa9.jpeg",
        description: "Stylish smartwatch with fitness tracking features.",
        price: 199.99,
        status: "Out of Stock",
        rating: 4.4,
    },
    {
        number: 5,
        name: "Bluetooth Speaker",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQkqyygeqj9NBDBZqnhdWcD0ezFhw7Nz06LA&s",
        description: "Portable Bluetooth speaker with deep bass sound.",
        price: 59.99,
        status: "In Stock",
        rating: 4.3,
    },
    {
        number: 6,
        name: "4K Monitor",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0C9fGDaHNikuoG-zxVmPCwzdAW99Be3Z9vA&s",
        description: "Ultra HD 4K monitor with stunning color accuracy.",
        price: 399.99,
        status: "In Stock",
        rating: 4.6,
    },
    {
        number: 7,
        name: "Mechanical Keyboard",
        image: "https://www.startech.com.bd/image/cache/catalog/keyboard/havit/kb884l/kb884l-01-500x500.webp",
        description: "Mechanical keyboard with customizable RGB lighting.",
        price: 89.99,
        status: "In Stock",
        rating: 4.7,
    },
    {
        number: 8,
        name: "Wireless Mouse",
        image: "https://img.drz.lazcdn.com/static/bd/p/c0d02aa039ac103afd234003ebb980ac.jpg_720x720q80.jpg",
        description: "Ergonomic wireless mouse with precision tracking.",
        price: 49.99,
        status: "In Stock",
        rating: 4.5,
    },
    {
        number: 9,
        name: "Action Camera",
        image: "https://www.techlandbd.com/cache/images/uploads/products/P5542506015/cover_cache_optimize-60.webp",
        description: "Waterproof action camera with 4K video recording.",
        price: 249.99,
        status: "In Stock",
        rating: 4.8,
    },
    {
        number: 10,
        name: "External Hard Drive",
        image: "https://m.media-amazon.com/images/I/61ce2jSVk4L._AC_SL1500_.jpg",
        description: "Portable 2TB external hard drive for data storage.",
        price: 79.99,
        status: "Out of Stock",
        rating: 4.5,
    },
];
