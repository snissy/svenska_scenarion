function BannerView(props) {

    const repeatMsg = "Spelet - Vad gör du ? "
    const nBlocks = 20
    // One paragraph is 188px width  65px height

    let paragraphs = [];
    for (let i = 0; i <nBlocks; i++) {
        paragraphs.push(repeatMsg)
    }

    return (<div className="welcome-topBanner">

        <div className="banner placeHolder-1">
            {paragraphs.map((element, index)=>{
                return (<p className={"welcome-bannerParagraph p"+index}>{element}</p>)
            })}
        </div>
        <div className="banner placeHolder-2">
            {paragraphs.map((element, index)=>{
                return (<p className={"welcome-bannerParagraph p"+index}>{element}</p>)
            })}
        </div>
    </div>)

}

export default BannerView