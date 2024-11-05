// eslint-disable-next-line no-unused-vars
import React from 'react';

const MainFeature = () => {
  return (
    <div className="px-4 py-8 bg-gray-50">
      <h1 className="text-2xl font-bold text-center mb-8">Featured Product Category</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { label: 'Atta', imageUrl: 'https://cdn.prod.website-files.com/63e19c2a81cdc506a530afe7/640d1c496953390d716bbdd1_630ba264b91de04922c46938_651534-000001.jpeg' },
          { label: 'Olive Oil', imageUrl: 'https://cdn.thewirecutter.com/wp-content/media/2023/05/oliveoil-2048px-6746.jpg' },
          { label: 'Soap', imageUrl: 'https://gharstuff.com/wp-content/uploads/2018/12/Godrej-No.1-Lime-Aloe-Vera-Soap-4x150g-4_4.jpg' },
          { label: 'GENTLE GEN', imageUrl: 'https://www.shutterstock.com/image-photo/jombang-indonesia-october-24-2024-260nw-2535385129.jpg' },
          { label: 'baby soap', imageUrl: 'https://www.clickoncare.com/cdn/shop/files/4_3b591577-9065-4590-b330-735fabd69be9.jpg?v=1716378231' },
          { label: 'Cadbury', imageUrl: 'https://rukminim2.flixcart.com/fk-p-flap/1100/500/image/b998a58066184f5c.jpeg?q=90' },
        ].map((item, index) => (
          <div
            key={index}
            className="relative p-4 bg-white rounded-lg shadow-lg border-2 border-blue-400"
          >
            <img
              src={item.imageUrl}
              alt={item.label}
              className="w-full h-48 object-cover rounded"
            />
            <div className="absolute bottom-4 left-4 bg-yellow-500 text-white font-semibold py-1 px-3 rounded">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainFeature;
