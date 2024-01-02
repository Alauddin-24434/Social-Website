
import PostCard from "./PostCard";

const fakePostData = {
    userName: "John Doe",
    userImage: "https://i.ibb.co/vDzgrz3/replicate-prediction-tt72p7jbdvhnwbili2di7xgygi.jpg",
    postText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    postImage: "https://i.ibb.co/vDzgrz3/replicate-prediction-tt72p7jbdvhnwbili2di7xgygi.jpg",
};

const App = () => {
    return (
        <div className="grid grid-cols-10 items-center bg-yellow-200">
            <div className="col-span-3  bg-red-400">
         
            </div>
            <div className="col-span-4">
                <PostCard post={fakePostData} />
            </div>
            <div className="col-span-3  bg-green-300" >
            
            </div>
        </div>
    );
};

export default App;
