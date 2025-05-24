import Books from "./Books";
import { useFetch } from "../hook/useFetch";
// import { useState } from "react";
import Loading from "../components/Loading";

const FeaturedBooks = () => {
  // const [isLoading, setIsLoading] = useState(false)
  // i. fetch from the books api here here using a usefetch hook, the api ("https://example-data.draftbit.com/books?_limit=16")
  const { data, isLoading  } = useFetch(
    "https://example-data.draftbit.com/books?_limit=16");
  // console.log(data);
  console.log(isLoading);
  
  //  ii. pass data to the book component
  // iii. import your loading component here
  //   iv. map over the data and pass the results to the book component, thats where you will style the indivial books
  return (
    <div> 
      <div className="flex flex-col items-center bg-gray-100 py-20 px-5 ">
        <h2 className="text-3xl text-center my-3 font-semibold">Featured Books</h2>
        <hr className=" border-t-6 w-25 border-orange-300" />
        { isLoading && <Loading/>}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 w-full items-center">
          {data.map((dat) => {
              return <Books key={dat.id} {...dat} />; 
        })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBooks;
