import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/contexts/theme-context";

import Layout from "@/routes/layout";
import DashboardPage from "@/routes/dashboard/page";
import Analytics from "./Pages/Analytics/Analytics";
import Reports from "./Pages/Analytics/Reports/Reports";
import Customers from "./Pages/Customers/Customers";
import NewCustomer from "./Pages/New Customer/NewCustomer";
import VerifiedCustomers from "./Pages/Verified Customers/VerifiedCustomers";
import Products from "./Pages/Products/Products";
import NewProduct from "./Pages/New Product/NewProduct";
import Inventory from "./Pages/Inventory/Inventory";
import Settings from "./Pages/Settings/Settings";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <DashboardPage />,
                },
                {
                    path: "/analytics",
                    element: <Analytics></Analytics>,
                },
                {
                    path: "reports",
                    element: <Reports></Reports>,
                },
                {
                    path: "customers",
                    element:<Customers></Customers>,
                },
                {
                    path: "new-customer",
                    element: <NewCustomer></NewCustomer>,
                },
                {
                    path: "verified-customers",
                    element: <VerifiedCustomers></VerifiedCustomers>,
                },
                {
                    path: "products",
                    element:<Products></Products>,
                },
                {
                    path: "new-product",
                    element: <NewProduct></NewProduct>,
                },
                {
                    path: "inventory",
                    element: <Inventory></Inventory>,
                },
                {
                    path: "settings",
                    element:<Settings></Settings>,
                },
            ],
        },
    ]);

    return (
        <ThemeProvider storageKey="theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
