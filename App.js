
import './App.css';
import Dogs from './Dogs';
function App() {

  const DogBreeds = [
    {
        title:"Labrador Retriever",
        subtitle:"Labrador",
        description:"Swimming, chasing, playing, walking with its owner – the Labrador Retriever is up for anything and everything! If you want a breed that makes training easy, that’s very intelligent, balanced and, above all, playful, the Labrador Retriever is for you.",
        image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F06%2F25%2Flabrador-retriever-yellow-sitting-275580695-2000.jpg",
    },
    {
        title:"German Shepherd",
        subtitle:"German Shepherd",
        description:"When well trained German Shepherds can be even tempered, self-assured, vigilant, docile and highly intelligent. This long list of qualities makes them good companions and protectors, and excellent guarding and herding dogs.German Shepherds are driven by their motivation to work. ",
        image:"https://cdn.mos.cms.futurecdn.net/Tdom4TwTjsVFLhXrNqnZHS.jpg",
    },
    {
        title:"Golden Retriever",
        subtitle:"Golden Retriever",
        description:"Golden Retrievers make fantastic family pets, but they’re also versatile sporting and working dogs.In sports they excel in disciplines as varied as obedience and agility; they also serve as search-and-rescue and guide dogs; not to mention their outstanding ability as trackers and retrievers on the hunt.",
        image:"https://www.petmd.com/sites/default/files/2020-11/picture-of-golden-retriever-dog_0.jpg",
    },
    {
        title:"Doberman Pinschers",
        subtitle:"Doberman",
        description:"Doberman Pinschers originated in Germany during the late 19th century, mostly bred as guard dogs. Their exact ancestry is unknown, but they’re believed to be a mixture of many dog breeds, including the Rottweiler, Black and Tan Terrier, and German Pinscher.",
        image:"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12224830/Doberman-Pinscher-standing-outdoors.jpg",
    },
    {
      title:"Pomeranian",
      subtitle:"Pomeranian",
      description:"Descended from large sled dog breeds, the now-tiny Pomeranian has a long and interesting history. The foxy-faced dog, nicknamed “the little dog who thinks he can,” is compact, active, and capable of competing in agility and obedience or simply being a family friend.",
      image:"https://thehappypuppysite.com/wp-content/uploads/2018/07/white-pomeranian-long.jpg",
    },
    {
      title:"Rottweiler",
      subtitle:"Rottweiler",
      description:"Rottweilers are large, muscular and active dogs who are always alert to what is happening around them. Although they can take a while to warm to strangers, they make loyal and rewarding family pets.",
      image:"https://www.bil-jac.com/media/nhyd0qet/rottweiler-868607572.jpg",
    }
  ]
  return(
      <div>
          <h1 className="Service-title">All Services</h1>
          <div className="container">
              {
                  DogBreeds.map((Dog,index)=>(
                      <Dogs key={index} title={Dog.title} subtitle={Dog.subtitle} description={Dog.description} image={Dog.image} />
                  ))
              }
          </div>
      </div>
      
  );
}

export default App;
