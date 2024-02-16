export const instagramLink = "https://www.instagram.com/nike/?hl=en"
export const phone = "+45 6 12345678"
export const email = "contact@nike.com"
export const town = "Seattle"
export const region = "Washington"
export const zipcode = "4123NI"
export const country = "United States"

export const ReturnAddress = () => {
    return (
        <>
        Attn: Returns<br/>
        {town}, {region} {zipcode}<br/>
        {country}<br/></>
    )
}

export const ShippingRates = () => {
    return (
        <>
        Netherlands: €6.50 (below 2kg), €10 else<br/>
        Belgium: €9.50 (below 2kg), €15 else<br/>
        Europe: €15 (below 2kg), €20 else<br/>
        Worldwide: €40 (below 2kg), €50 else<br/>

        </>
    )
}

export const ContactDetails = () => {
    return (
        <>
        Phone: {phone}<br/>
        Mail: {email}<br/></>
    )
}