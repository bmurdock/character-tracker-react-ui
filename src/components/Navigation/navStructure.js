export default [
    {
        label: 'Home',
        route: '/',
    },
    {
        label: 'Create Character',
        route: '/create-character',
    },
    {
        label: 'View Profile',
        route: '/view-profile',
    },
    {
        label: 'Test',
        children: [
            {
                label: 'First',
            },
            {
                label: 'Second',
            },
        ],
    },
]