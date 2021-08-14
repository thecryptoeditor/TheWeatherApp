import React from 'react';
import '../Assets/common.css'

export const TechNews = () => {

	const [tech, techData] = React.useState({
		dataArray: []
	});

	const articleData = async () => {
        const result = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6be551b32ce44eb88189a07bdcd5c324');
        let res = await result.json();
        techData({dataArray: res.articles})
    };

	//tech new related API call: 'https://newsapi.org/'
	// Source: techcrunch
    React.useEffect(() => {
    	articleData();
    }, [])

    console.log(tech)

	return (
		<div className="text-center mt-20 container">
			{tech.dataArray.map(i => (
				<div key={i.title} className="mobile_view_width" style={{width: "60%", margin: "auto", paddingTop: "50px"}}>
					<h3 style={{textAlign: "left"}}>{i.title}</h3>
					<span style={{marginTop: "20px"}} className="d-flex justify-content-between">
						<p style={{margin: "0px 0px 5px 0px"}}>Published By: {i.author}</p>
						<p style={{margin: "0px 0px 5px 0px"}}>
							{new Intl.DateTimeFormat('en-GB', { 
				        		month: 'long', 
				            	day: '2-digit',
				            	year: 'numeric', 
				        	}).format(new Date(i.publishedAt))}
				        </p>
					</span>
					<img style={{margin: "0px 0px 30px 0px", width: "100%"}} alt="tect_img" src={i.urlToImage}/>
					<p style={{textAlign: "left"}}>{i.description} <a style={{textDecoration: "underline", color: "black", fontStyle: "italic"}} href={i.url}>continue</a></p>
					<div style={{borderBottom: "2px solid #32a1ce", width: "60%", margin: "auto", opacity: "0.2"}}></div>
				</div>
			))}
		</div>
	)

}

