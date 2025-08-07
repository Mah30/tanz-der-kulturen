import React from 'react';
import massa from "../assets/images/imgStartSeite/massa.png"
import stephanie from "../assets/images/imgStartSeite/stephanie.png"


const QuoteSection = ({ 
  leftQuote="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, repudiandae. Magnam doloremque porro sunt modi inventore rem harum aspernatur, maxime exercitationem labore laudantium eligendi eos officia repudiandae. Labore, possimus deserunt? " ,
  rightQuote="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, repudiandae. Magnam doloremque porro sunt modi inventore rem harum aspernatur, maxime exercitationem labore laudantium eligendi eos officia repudiandae. Labore, possimus deserunt? " 
}) => {

  return (
    <section className="w-screen flex items-center justify-between py-0 bg-gray-50">{/* w-screen */}
      {/* left image */}
      <img
        src={massa}
        alt="Profile image of a Black man with a beard, calm expression, looking straight ahead toward the woman."
        className="w-42 h-auto md:w-52 md:h-auto object-cover m-0"
      />

      {/* quotes and animations */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full max-w-4xl px-4">
        {/* left quotes */}
        <div className="bg-gray-100 shadow-md rounded-xl p-4 w-full md:w-1/2 transform transition duration-300 hover:scale-105 hover:shadow-lg">
          <p className="text-gray-700 italic leading-relaxed">
            “{leftQuote}”
          </p>
        </div>

        {/* right quotes */}
        <div className="bg-gray-100 shadow-md rounded-xl p-4 w-full md:w-1/2 text-right transform transition duration-300 hover:scale-105 hover:shadow-lg">
          <p className="text-gray-700 italic leading-relaxed">
            “{rightQuote}”
          </p>
        </div>
      </div>

      {/* right image */}
      <img
        src={stephanie}
        alt="Profile image of a white woman, smiling, looking straight ahead toward the man."
        className="w-36 h-auto md:w-48 md:h-auto object-cover m-0"
      />
    </section>
  );
};

export default QuoteSection;
