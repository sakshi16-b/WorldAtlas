import { useEffect, useTransition, useState } from "react"
import { getCountryData } from "../api/postApi"
import { Loader } from "../components/UI/Loader"
import { CountryCard } from "../components/Layout/CountryCard"
import { SearchFilter } from "../components/UI/SearchFilter"



export const Country = () => {
    const [isPending, startTransition] = useTransition()
    const [countries, setCountries] = useState([])

    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState("all")


    console.log(search, filter)

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData()
            setCountries(res.data)

        })
    }, [])
    if (isPending) return <h1><Loader /></h1>

    const searchCountry = (country) => {
        console.log(country)
        if (search) {//search can be any country which user is searching
          return  country.name.common.toLowerCase().includes(search.toLowerCase())
            
        } else {
            return country;// Include all countries when there's no search
        }
    }
    const filterRegion = (country) => {
        if (filter === "all") return country;
        return country.region === filter;
    }
    //main logic
    const filterCountries = countries.filter((country) => 
    searchCountry(country) && filterRegion(country)
)



    return (
        <section className="country-section">
            <SearchFilter
                search={search}
                setSearch={setSearch}
                filter={filter}
                setFilter={setFilter} 
                countries={countries}
                setCountries={setCountries}/>
              <ul className="grid grid-four-cols">{
                filterCountries.map((currcountry, index) => {
                    return <CountryCard country={currcountry} key={index} />
                })
            }

            </ul>
        </section>




    )
}