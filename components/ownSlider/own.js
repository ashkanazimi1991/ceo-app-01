import sliderStyles from "./own.module.css";

export default function Own({img1,img2,img3,img4,img5,img6,bgColor,bg1Color,bg2Color,bg3Color,bg4Color,bg5Color,bg6Color,objectFit1,objectFit2,objectFit3,objectFit4,objectFit5,objectFit6}) {
  return (
    <>
      <div className={sliderStyles["sliderMain"]} style={{backgroundColor:bgColor}}>
        <div className={sliderStyles["image1"]} style={{backgroundColor:bg1Color}}>
          <img src={img1} alt="ceo" style={{ objectFit: objectFit1 }}/>
        </div>
        <div className={sliderStyles["image2"]} style={{backgroundColor:bg2Color}}>
        <img src={img2} alt="ceo" style={{ objectFit: objectFit2 }}/>
        </div>
        <div className={sliderStyles["image3"]} style={{backgroundColor:bg3Color}}>
        <img src={img3} alt="ceo" style={{ objectFit: objectFit3 }}/>
        </div>
        <div className={sliderStyles["image4"]} style={{backgroundColor:bg4Color}}>
        <img src={img4} alt="ceo" style={{ objectFit: objectFit4 }}/>
        </div>
        <div className={sliderStyles["image5"]} style={{backgroundColor:bg5Color}}>
        <img src={img5} alt="ceo" style={{ objectFit: objectFit5 }}/>
        </div>
        <div className={sliderStyles["image6"]} style={{backgroundColor:bg6Color}}>
        <img src={img6} alt="ceo" style={{ objectFit: objectFit6 }}/>
        </div>
        <div className={sliderStyles["borderContainer"]}>
          <div className={sliderStyles["border"]}>
            <h1 style={{ marginLeft: "5px" }}></h1>
            <h1 style={{ marginLeft: "5px", textAlign: "center" }}>   
            </h1>
            <h1 style={{ marginLeft: "5px" }}></h1>
            <h1 style={{ marginLeft: "5px", textAlign: "left" }}>
               
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
