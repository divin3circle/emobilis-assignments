import React from "react";

const About = () => {
  const image1Adress =
    "data:image/jpeg;base64,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";
  const image2Adress =
    "https://blkrev.com/cdn/shop/products/07_2_11d98b46-c547-4952-9194-f2afee6962c7.jpg?v=1672928861&width=1445";
  const image3Adress =
    "https://img.freepik.com/premium-photo/black-envelope-with-red-wax-seal-stamp-pen-dark-table-closeup_253401-7264.jpg";

  return (
    <div className="flex">
      {/*images div*/}
      <div className="flex justify-between">
        {/*section 1*/}
        <div className="p-2 flex  flex-col gap-4">
          <div className="w-[35%]">
            <img
              src={image1Adress}
              alt="image1"
              className="rounded-lg  pt-32"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold pl-12 text-orange-600">6+</h1>
            <p className="text-3xl pl-8">--years of writing code</p>
          </div>
        </div>
        {/*section 2*/}
        <div className="w-[55%]">
          <div className="w-[50%] pl-4">
            <img src={image2Adress} alt="image2" className="rounded-lg" />
          </div>
          <div className="w-[40%] py-8">
            <img src={image3Adress} alt="image3" className="rounded-lg" />
          </div>
        </div>
      </div>
      {/*text div*/}
      <div className="w-[50%]">
        <div>
          <h1 className="text-gray-700 font-semibold text-xl">About us</h1>
          <h1 className="text-5xl font-bold ">We create incredible</h1>
          <h1 className="font-mono text-5xl p-2">digital experience</h1>
          <p className="p-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic cumque
            nemo modi ut velit fugiat consequuntur aliquam, obcaecati
            dignissimos cum maxime mollitia quisquam eum est aut, illum,
            cupiditate numquam dolorem! Aliquam officiis minima labore quaerat,
            debitis, quibusdam beatae libero dicta voluptas cupiditate
            consequatur ipsa nemo, praesentium eligendi natus adipisci vitae
            corporis cum voluptatum. Facilis, magnam. Perspiciatis quis minima
            nemo deleniti? Facere consectetur eveniet, eum laudantium aliquam
            nisi rerum necessitatibus doloribus minus doloremque, reprehenderit
            nemo! Non optio ullam quasi commodi a, tenetur voluptatum, esse
            quis, tempore ipsum quam explicabo. Assumenda, itaque! Culpa nam non
            earum id tempore vero placeat. Possimus nesciunt harum numquam,
            itaque reiciendis necessitatibus rerum molestias voluptate, eos
            aspernatur minima doloribus quas aliquam fugiat ullam modi tenetur
            officia omnis? Accusantium esse qui officia expedita ut mollitia
            sunt magni tempora earum aliquam ratione sequi, hic nemo dolorem
            consectetur temporibus? Possimus laudantium, quisquam fuga itaque
            repudiandae tempore nisi similique ducimus beatae.
          </p>
        </div>
        <div className="p-4">
          <ul>
            <li>Creative</li>
            <li>Responsive</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
