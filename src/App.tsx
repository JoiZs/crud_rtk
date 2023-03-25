import AuthorBox from "./components/authorBox";
import BookForm from "./components/bookForm";
function App() {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <BookForm />
      <AuthorBox />
    </div>
  );
}

export default App;
