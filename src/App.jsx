import './App.css';
import Cards from './Components/Cards';
import Header from './Components/Header';





function App() {

  const products = [
    {
      title: "Winter",
      price: 19.99,
      image: "https://plus.unsplash.com/premium_photo-1670596899123-c4c67735d77a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ludGVyfGVufDB8fDB8fHww",
      id: 1,
    },
    {
      title: "Ocean",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D",
      id: 2,
    },
    {
      title: "Norway",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D",
      id: 3,
    },
    {
      title: "Books",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1440778303588-435521a205bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D",
      id: 4,
    },
  ];
  
  

  return (
    <>
    <Header/>
    <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((data) => (
            <Cards
              key={data.id}
              image={data.image}
              title={data.title}
              price={data.price}
              // onPress={()=> window.open(data.image, '_blank')}
              onPress={()=> window.open(data.image,"_blank")}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
