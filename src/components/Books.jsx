import {Link} from 'react-router-dom'

const Books = ({ id, authors, description, title, image_url, rating }) => {
  // display the books here
  // write the condition for the rating

  return (
    <Link to={`/book/${id}`}>
    <div className="w-full h-[350px] px-3 py-5 flex flex-col items-start rounded-sm gap-2">
      <span>
        <img src={image_url} alt="" className="w-[320px] animate__animated animate__flipInX h-[282px] rounded-md" />
      </span>
      <h1 className=" flex text-center  font-semibold text-lg">{title}</h1>
      <div className=" w-full flex gap-10 items-center justify-between font-semibold text-sm text-gray-800">
        <p className="text-gray-500 text-sm">{authors}</p>
        <p>
          Rating:{" "}
          <span
            className="text-sm font-bold"
            style={{ color: rating < 4 ? "red" : "green" }}
          >
            {rating}
          </span>
        </p>
      </div>
    </div>
    </Link>
  );
};
export default Books
