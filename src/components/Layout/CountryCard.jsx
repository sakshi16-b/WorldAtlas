export const CountryCard = ({ country }) => {
    const { population, name, region, capital, flags } = country
    return (
        <li className="country-card card">
            <div className="container-card bg-white-box">
                <img src={flags.svg} alt={flags.alt} />
            </div>
            <div className="country-info">
                <p className="card-title">{name.common}</p>
                <p>
                    <span className="card-description">Population:</span>
                    {population.toLocaleString()}
                </p>
                <p>
                    <span className="card-description">Region:</span>
                    {region}
                </p>
                <p>
                    <span className="card-description">Capital:</span>
                    {capital[0]}
                </p>
            </div>

        </li>
    )
}