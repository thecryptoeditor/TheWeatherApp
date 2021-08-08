import React from 'react';

export const TechNews = () => {

	const [tech, techData] = React.useState([]);

	const articleData = async () => {
        const result = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6be551b32ce44eb88189a07bdcd5c324');
        let res = await result.json();
        techData(res.articles)
    };

	//tech new related API call: 'https://newsapi.org/'
    React.useEffect(() => {
    	articleData();
    }, [])

    console.log(tech)

	return (
		<div className="text-center mt-20 container">
{/*			<img alt="tect_img" src={tech.articleData[0].urlToImage}/>
			<h5>{tech.articleData[0].title}</h5>
			<p>{tech.articleData[0].description}</p>*/}
		</div>
	)

}

