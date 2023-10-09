function Experience(){
    const myExperience = [
        {
            companyName : "PT Paraclip Media Nusantara",
            firstDate : "2018",
            lastDate : "August 2020",
            jobPosition : "Mounting",
            contribution : "Berkontribusi dalam melakukan bongkar pasang part dari Parabola" 
        },
        {
            companyName : "Fang Hin",
            firstDate : "August 2020",
            lastDate : "Present",
            jobPosition : "Design Photo Product Online", 
            contribution : "Berkontribusi dalam peningkatan kualitas foto produk pada penjualan produk dimarketplace"
        },
    ]

    return(
        <div className="wrapper">
            <div className="header">
                <h2>EXPERIENCE</h2>
            </div>
            {myExperience.map((items,index) => (
                <div key={index}>
                    <div className="title">
                        <h3>{items.companyName}</h3>
                        <p>{`${items.firstDate} - ${items.lastDate}`}</p>
                    </div>
                    <div className="subtitle">
                        <h4>{items.jobPosition}</h4>
                    </div>
                    <br/>
                    <main>
                        <p>{items.contribution}</p>
                    </main>
                    <br/>
                    <br/> 
                </div>
                
            ))}
        </div>
    )
}

export default Experience;