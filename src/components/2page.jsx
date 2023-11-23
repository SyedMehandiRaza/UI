import designWhite from"../image/DesignWhite.png";
import News from "./News";

export default function SecPage() {
  return (
    <div className="sec-page">
      <div className="border-radius"></div>
      <div className="about">About</div>
      <div><img src={designWhite} className="design-white"/></div>
      <div className="sec-page-intro">
        <div>Architecture is the learned game, correct a magnificient,
      <br />
       of forms assembled in the light. So keeping this in mind we
       <br />
        started with our work. We are a team of 5 Arcitects with a 
        <br />
        clean and white vision.
        </div>
        <p>Read More</p><span> +</span>
      </div>
      <hr />
      <News />
    </div>
  )
}