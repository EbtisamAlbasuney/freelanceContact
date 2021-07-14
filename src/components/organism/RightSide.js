import React from 'react';


export const RightSide = () => {
  return (
    <div className="mt-10 md:mt-10 lg:mt-20">
      <div className=" w-full h-96">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13701.484520994985!2d30.86137795!3d30.84828275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1626301897921!5m2!1sar!2seg"
        width="600" height="250" allowfullscreen="" loading="lazy"></iframe>
      </div>
      <ul className="relative   -top-20 left-20 md:relative   md:-top-20 md:left-20 lg:relative lg:left-0  lg:-top-20 ">
        <li style={{color: "grey"}}><span className=" text-xl text-black">Location :</span>66 rassel ,München </li>
        <li style={{color: "grey"}}><span className=" text-xl  text-black">Number :</span>+491794281193
</li>
<li style={{color: "grey"}}><span  className=" text-xl text-black">Email :</span>support @gob.com
</li>
      </ul>
    </div>
    
  )
}
