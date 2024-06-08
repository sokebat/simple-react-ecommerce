import { Link } from "react-router-dom";

interface CategoryCardProps {
  data: {
    id: number;
    category: string;
    image: string;
    url:string
  };
}

const CategoryCard = ({ data }: CategoryCardProps) => {
  return (
    <div className="relative rounded-sm overflow-hidden group">
      <img src={data.image} alt={data.category} className="w-72  object-contain rounded-md" />
      <Link
         to={`category/${data.url}`}
        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
      >
        {data.category}
      </Link>
    </div>
  );
};

export default CategoryCard;
