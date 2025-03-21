import React from "react";
import "./style.css";

const Section_2 = () => {
  return (
    <section className="w-full bg-black text-white">

      <div className="flex flex-row flex-wrap gap-5 justify-center items-center">
        <div className="md:w-[60vw]">
          <h1 className="text-3xl font-bold">
            Your <span className="text-green">trusted </span>partener of
            cryptocurrency
          </h1>
        </div>
        <div className="w-[300px]">
          <p className="text-[15px] text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            non laudantium nam quas atque aut eius est temporibus{" "}
          </p>
        </div>
      </div>

<br /><br />
{/* cards section 2 */}

<div className="w-full flex flex-row flex-wrap justify-center items-center">

<div className="card border-2 border-solid border-white rounded-lg p-6 w-[350px] bg-cardgray">
<span className="text-green font-bold">01.</span>
<h2 className="text-[20px] font-bold">Services for any level of expertise</h2>
<p className="text-gray-400 text-[15px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat pariatur quibusdam saepe </p>
</div>


</div>

    </section>
  );
};

export default Section_2;
