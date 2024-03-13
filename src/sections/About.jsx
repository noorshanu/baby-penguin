import Title from "components/Title";

function About() {
  return (
    <section className=" relative">
      <div className="container-wrapper flex justify-between items-center flex-col sm:flex-row border rounded-xl border-[#0156ea] shadow-lg bg-[#58535352] py-4 px-2">
        <div className="w-full">
          <img src="images/logo.png" alt="" />
        </div>


        <div className="">

          <div>
            <h1 className="text-[#000000] font-bold text-2xl sm:text-3xl lg:text-4xl font-dream uppercase pb-2  ">ABOUT</h1>


            <p className="max-w-5xl  text-[#000000] text-xl py-4">
            In the vibrant universe of memes, a new hero emerges: Shreke, the digital ogre. Born from the fusion of the beloved swamp dweller, and Pepe, the iconic internet frog, Shreke symbolizes the playful heart of internet culture and the daring spirit of cryptocurrency.
            </p>

            <div className=" relative my-4">
              <a
                href="https://raydium.io/"
                target="_blank"
                className="  btn-main  font-bold text-sm sm:text-xl rounded-xl px-12 py-2"
              >
                Trade
              </a>
            </div>
          </div>

        </div>

       </div>
    </section>
  );
}

export default About;
