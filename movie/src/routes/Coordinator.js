export const homePage = (navigate) => {
    navigate(`/main`)
}

export const detailsPage = (navigate, id) => {
    navigate(`/details/${id}`)
}

export const goBack = (navigate) => {
    navigate(-1)
}