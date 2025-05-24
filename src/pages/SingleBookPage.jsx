import React, { useState } from "react";
import { useFetch } from "../Hook/useFetch";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";

//i. to display the single books
//ii. you will be mapping over a different api using the useFetch hook https://example-data.draftbit.com/books/
// this link is incomplete

const SingleBookPage = () => {
  // const {} = useparams
  const { bookId } = useParams();
  const url = `https://example-data.draftbit.com/books/${bookId}`;
  const { isLoading, data: data, isError } = useFetch(url);
  // check rating function
  const checkRating = (rate) => {
    if (rate > 4) {
      return "green";
    } else {
      return "red";
    }
  };
if (isLoading){
  return <Loading/>
}


  return (
    <div>
      <h2 className="text-center text-capitalize">
        Error occured while fetching Books
      </h2>
    </div>
  );
};

export default SingleBookPage;
