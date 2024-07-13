import ProductList from "./components/homePage/ProductList"
import CustomButton from "./components/shared/CustomButton";

function App() {
 
  return (
    <main>
      <h1>Welcome</h1>

      <div>
        <CustomButton bgColor="green">Click me</CustomButton>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToS9cKAd7bR58G1S5VgupH5eJ7ew7mYJRI-A&s" 
        height={25}
        width={25}
        alt="" />
        <CustomButton bgColor="red">Sign in</CustomButton>
        <CustomButton bgColor="yellow">Read more</CustomButton>
        
      </div>
      <ProductList/>
    </main>
);
};

export default App
