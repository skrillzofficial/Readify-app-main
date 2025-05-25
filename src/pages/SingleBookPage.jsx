import { useParams } from 'react-router-dom';
import { useFetch } from '../hook/useFetch';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';

const SingleBookPage = () => {
  const { bookId } = useParams();
  const { data: book, isLoading } = useFetch(
    `https://example-data.draftbit.com/books/${bookId}`
  );

  if (isLoading) return <Loading />;
  if (!book) return <div className="text-center py-10">Book not found</div>;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 p-6 flex justify-center">
            <img
              src={book.image_url}
              alt={book.title}
              className="w-full h-auto max-h-96 object-contain rounded-lg"
            />
          </div>
          <div className="md:w-2/3 p-6">
            <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
            <p className="text-gray-600 mb-4">by {book.authors}</p>
            
            <div className="flex items-center mb-4">
              <span className="text-lg font-semibold mr-2">Rating:</span>
              <span 
                className={`text-lg font-bold ${book.rating < 4 ? 'text-red-500' : 'text-green-500'}`}
              >
                {book.rating}
              </span>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-700">{book.description || 'No description available.'}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="font-semibold">Number of Pages</h3>
                <p>{book.num_pages || 'N/A'}</p>
              </div>
              <div>
                <h3 className="font-semibold">Publication Date</h3>
                <p>{book.publication_date || 'N/A'}</p>
              </div>
              <div>
                <h3 className="font-semibold">Edition</h3>
                <p>{book.edition || 'N/A'}</p>
              </div>
              <div>
                <h3 className="font-semibold">Genres</h3>
                <p>{book.genres || 'N/A'}</p>
              </div>
            </div>

            <Link 
              to="/" 
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded transition duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBookPage;