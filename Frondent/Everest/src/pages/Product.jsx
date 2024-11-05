// eslint-disable-next-line no-unused-vars
import React from 'react';
import product from '../assets/Images/bot-img2.jpg'

const Product = () => {
  return (
    <div className="bg-gray-300 p-8">
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
        {/* Left Section: Title and Description */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 text-black">EVEREST</h1>
          <p className="text-lg font-semibold text-black">
            Food and personal care enhance quality of a healthy life today and tomorrow.
          </p>
          <p className="mt-4 text-gray-600">
            Everest Traders Inc. started as a wholesale distributor of ethnic food products in 1998 with an aim to bring the best quality products and services to cater to the growing South Asian community in North America, having its base in Canada.
          </p>
          <p className="mt-4 text-gray-600">
            Since then, with a vision of Mr. Harkiran Boparai - MD and founder of the company, Everest has broken various barriers and expanded its horizon to service retailers across Canada.
          </p>
          <p className="mt-4 text-gray-600">
            Today, Everest has become a renowned distribution company that offers well-known Canadian and South Asian brands like Nanak, Ching’s, PK – Punjab King, Paper Boat, Mehran, Wai Wai, Bambino, KFI, Mr. Favourite, Taj Mahal Tea, Knorr, and many more. Our product range is not limited to Food and Beverages, but also includes Beauty and Personal Care from popular brands of Unilever such as Lifebuoy, Pears, Dove, etc.
          </p>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={product} // Replace with your image path or URL
            alt="Product Display"
            className="w-[100%] h-[100%]object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
