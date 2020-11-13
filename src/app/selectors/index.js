
export const appNavBarSelector = (
    {
        configuration: {
            launchId
        }
    },
    {
        match: {
            params: {
                tab = 'tex-chtml'
            }
        }
    }
) => ({
    launchId,
    tab
})