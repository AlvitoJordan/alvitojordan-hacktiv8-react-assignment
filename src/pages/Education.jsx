function Education(){
    const myEducation = [
        {
            name : "Perguruan Ahmad Yani Binjai",
            firstDate : "2007",
            lastDate : "2013",
            major : "Sekolah Dasar (SD)" 
        },
        {
            name : "Perguruan Ahmad Yani Binjai",
            firstDate : "2013",
            lastDate : "2016",
            major : "SMP (Sekolah Menengah Pertama)" 
        },
        {
            name : "Perguruan Ahmad Yani Binjai",
            firstDate : "2016",
            lastDate : "2019",
            major : "SMA (Sekolah Menengah Atas)" 
        },
        {
            name : "Universitas Mikroskil",
            firstDate : "October 2020",
            lastDate : "Present",
            major : "Teknik Informatika" 
        }
    ]

    return(
        <div className="wrapper">
            <div className="header">
                <h2>EDUCATION</h2>
            </div>
            {myEducation.map((items,index) => (
                <div key={index}>
                    <div className="title">
                        <h3>{items.name}</h3>
                        <p>{`${items.firstDate} - ${items.lastDate}`}</p>
                    </div>
                    <div className="subtitle">
                        <h4>{items.major}</h4>
                    </div>
                    <br/>  
                </div>
                
            ))}
      </div>
    )
}

export default Education;