import ComputerDesktop from "@/Components/Icons/ComputerDesktop";
import Users from "@/Components/Icons/Users";
import WrenchScrewdriver from "@/Components/Icons/WrenchScrewdriver";

export const navLinks = [
    {
        label: 'Dashboard',
        routeName: 'dashboard',
        icon: <ComputerDesktop />,
    },
    {
        label: 'Users',
        parentRouteName: 'users.*', //for opening dropdown dynamically if any sub menu active (use primary common name then ".*")
        icon: <Users />,
        subLinks: [
            {
                label: 'List',
                routeName: 'users.index',
            },
            {
                label: 'Create',
                routeName: 'users.create'
            }
        ]
    },
    {
        label: 'Permission',
        routeName: 'permissions.index',
        icon: <WrenchScrewdriver />,
    },
]