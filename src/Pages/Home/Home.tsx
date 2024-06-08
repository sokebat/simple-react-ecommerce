import { Container, HandCoins, PhoneCall } from "lucide-react";
import CategoryCard from "../../components/Card/CategoryCard";
import ProductShowCard from "../../components/Card/ProductShowCard/ProductShowCard";
import {
  useNewArival,
  useProductRecomend,
} from "../../lib/react query/queryAndMutaion";
import { productType } from "../../types/type";
import adsImage from "../../assets/image/ads.jpg";
const Home = () => {
  const catdata = [
    {
      id: 1,
      category: "electronics",
      image:
        "https://cdn.pixabay.com/photo/2016/11/22/18/55/technology-1850021_1280.jpg",
      url: "electronics",
    },
    {
      id: 2,
      category: "jewelery",
      image:
        "https://cdn.pixabay.com/photo/2014/07/18/13/49/jewels-396441_1280.jpg",
      url: "jewelery",
    },
    {
      id: 3,
      category: "men's clothing",
      image:
        "https://cdn.pixabay.com/photo/2017/06/21/20/51/tshirt-2428521_1280.jpg",
      url: "men's clothing",
    },
    {
      id: 4,
      category: "women's clothing",
      image:
        "https://cdn.pixabay.com/photo/2016/08/27/21/46/clothes-1624973_960_720.jpg",
      url: "women's clothing",
    },
  ];

  const { data: arrivalData } = useNewArival();
  const { data: productRecomended } = useProductRecomend();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-center py-36"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://cdn.pixabay.com/photo/2020/08/04/15/03/shopping-5463080_1280.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-12  ">
          <h1 className="text-6xl text-white font-medium mb-4 capitalize">
            best collection for <br /> home decoration
          </h1>
          <p className="text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam{" "}
            <br />
            accusantium perspiciatis, sapiente magni eos dolorum ex quos dolores
            odio
          </p>
          <div className="mt-12">
            <a
              href="#"
              className="bg-primary border border-primary text-white px-8 py-3 font-medium 
                    rounded-md hover:bg-transparent hover:text-primary"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-12   py-16">
        <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
          <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <Container size={60} strokeWidth={1.5} />
            <div>
              <h4 className="font-medium capitalize text-lg">Free Shipping</h4>
              <p className="text-gray-500 text-sm">Order over $200</p>
            </div>
          </div>
          <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <HandCoins size={60} strokeWidth={1.5} />
            <div>
              <h4 className="font-medium capitalize text-lg">Money Rturns</h4>
              <p className="text-gray-500 text-sm">30 days money returs</p>
            </div>
          </div>
          <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <PhoneCall size={60} strokeWidth={1.5} />
            <div>
              <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
              <p className="text-gray-500 text-sm">Customer support</p>
            </div>
          </div>
        </div>
      </div>

      <div className="  container mx-auto px-12  py-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          shop by category
        </h2>
        <div className="grid grid-cols-4 place-content-center place-items-center gap-3">
          {catdata.map((data) => (
            <CategoryCard key={data.id} data={data} />
          ))}
        </div>
      </div>

      <div className=" container mx-auto px-12  py-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          top new arrival
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 place-content-center place-items-center gap-3 ">
          {arrivalData?.map((data: productType) => (
            <ProductShowCard key={data.id} product={data} />
          ))}
        </div>
      </div>

      <div className=" container mx-auto px-12  pb-16">
        <a href="#">
          <img src={adsImage} alt="ads" className="w-full rounded-md" />
        </a>
      </div>

      <div className=" container mx-auto px-12  py-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          recomended for you
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 place-content-center place-items-center gap-3 ">
          {productRecomended?.map((data: productType) => (
            <ProductShowCard key={data.id} product={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
