import ComputerDesktop from "@/Components/Icons/ComputerDesktop";
import ShoppingBag from "@/Components/Icons/ShoppingBag";

export const navLinks = [
    {
        label: 'Dashboard',
        routeName: 'dashboard',
        icon: <ComputerDesktop />,
    },
    {
        label: 'Product',
        parentRouteName: 'product.*', //for opening dropdown dynamically if any sub menu active (use primary common name then ".*")
        icon: <ShoppingBag />,
        subLinks: [
            {
                label: 'Index',
                routeName: 'product.index',
            },
            {
                label: 'Create',
                routeName: 'product.create'
            }
        ]
    }
]