import countryFacts from "../api/countryData.json"


export const About=()=>{
    return<section className="section-about container">

        <h2 className="container-title">
            Here are the Intersting Facts
            <br/>
            we're proud of
        </h2>

        <div className="gradient-cards">
          
                {
                    countryFacts.map((facts,index)=>(
                          <div className="card" key={index}>
                        <div className="container-card bg-blue-box">
                    <p className="card-title">{facts.country}</p>
                    <p>
                        <span className="card-description">Capital:</span>
                        {facts.capital}
                    </p>
                     <p>
                        <span className="card-description">Population:</span>
                        {facts.population.toLocaleString()}
                    </p>
                     <p>
                        <span className="card-description">Intersting Fact :</span>
                        {facts.fact}
                    </p>
                     
                </div>
                 </div>

                    ))
                }

            
                
           
        </div>
    </section>
}