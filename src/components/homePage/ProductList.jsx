import BootstrapCard from "./BootstrapCard"



const ProductList =(props) => {
  const styles = {
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
    },
  };

  const laptops = [
    {
        title: "Dell XPS 15",
        imgUrl: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/12/3747141/1.jpg?4481",
        description: "Powerful laptop with a stunning display and great performance.",
        price: 1899.99
    },
    {
        title: "MacBook Pro 13",
        imgUrl: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/32/2367101/1.jpg?9545",
        description: "Sleek design with macOS, ideal for creative professionals.",
        price: 1799.99
    },
    {
        title: "HP Spectre x360",
        imgUrl: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/87/6363651/1.jpg?0570",
        description: "Convertible laptop with a premium build and long battery life.",
        price: 1599.99
    },
    {
        title: "Lenovo ThinkPad X1 Carbon",
        imgUrl: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/44/871479/1.jpg?5583",
        description: "Business-class laptop known for its durability and performance.",
        price: 1499.99
    },
    {
        title: "Asus ROG Zephyrus G14",
        imgUrl: "https://example.com/rog-zephyrus-g14.jpg",
        description: "Gaming laptop with powerful specs and a compact form factor.",
        price: 1699.99
    },
    {
        title: "Microsoft Surface Laptop 4",
        imgUrl: "https://example.com/surface-laptop-4.jpg",
        description: "Premium ultraportable with a high-resolution touchscreen.",
        price: 1299.99
    },
    {
        title: "Acer Predator Helios 300",
        imgUrl: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/32/2367101/1.jpg?9545",
        description: "Affordable gaming laptop with strong performance and cooling.",
        price: 1199.99
    },
    {
        title: "Razer Blade 15",
        imgUrl: "https://example.com/razer-blade-15.jpg",
        description: "Slim gaming laptop with customizable RGB lighting.",
        price: 1799.99
    },
    {
        title: "Google Pixelbook Go",
        imgUrl: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/87/6363651/1.jpg?0570",
        description: "Lightweight Chromebook with a fantastic keyboard and long battery life.",
        price: 999.99
    },
    {
        title: "Samsung Galaxy Book Pro 360",
        imgUrl: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/44/871479/1.jpg?5583",
        description: "Versatile 2-in-1 laptop with a vibrant AMOLED display.",
        price: 1499.99
    }
];

console.log(laptops);

  return (
    <div className="P-5">
      <h1>OurProducts</h1>
    <div style={styles.grid}>
      {laptops.map((product)=>
        (<BootstrapCard title={product.title} price={product.price} description={product.description} imgUrl={product.imgUrl}/>
          

        ) )}
    </div>
    
</div>
 
  );
};

export default ProductList