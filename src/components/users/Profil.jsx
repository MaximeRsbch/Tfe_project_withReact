import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

function Profil() {
    const [ShowAbout, setShowAbout] = useState(false);
    const [ShowPost, setShowPost] = useState(false);

    const [user, setUser] = useState([]);

    const token = useRef(localStorage.getItem("token"));
    const tokenDecode = jwtDecode(token.current);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/users/${tokenDecode.id_user}`)
            .then((res) => {
                setUser(res.data.data);
            });
    }, []);

    const showAboutOrNot = () => {
        setShowAbout(true);
        setShowPost(false);
        document.getElementById("about").style.fontWeight = "bold";
        document.getElementById("post").style.fontWeight = "normal";
    };

    const showPostOrNot = () => {
        setShowPost(true);
        setShowAbout(false);
        document.getElementById("post").style.fontWeight = "bold";
        document.getElementById("about").style.fontWeight = "normal";
    };

    return (
        <div className="mx-auto container">
            <img
                className="md:w-full md:h-48 hidden md:flex"
                src="assets/img/background.jpg"
                alt=""
            />
            <div className="md:grid md:grid-cols-2">
                <div className="flex justify-center">
                    <div className="bg-white w-64 h-80 shadow-xl md:absolute md:bottom-40 xl:bottom-56">
                        <div className="flex justify-center pt-10">
                            <img
                                className="rounded-full w-40"
                                src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                            />
                            <div className="absolute top-56 left-52 md:top-36 md:left-44 bg-gray-400 rounded-full w-10 h-10 flex justify-center items-center">
                                <button>
                                    <img
                                        className="w-5 h-5 mx-auto"
                                        src="assets/img/crayon.png"
                                        alt=""
                                    />
                                </button>
                            </div>
                        </div>
                        <p className="text-center pt-4 text-xl font-bold">
                            {user.username}
                        </p>
                        <p className="text-center pt-2">{user.email}</p>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center xl:justify-start pt-8 md:pr-40">
                        <div className="grid grid-cols-2">
                            <button
                                id="about"
                                onClick={showAboutOrNot}
                                className="pr-8 text-lg"
                            >
                                Profil
                            </button>
                            <button
                                id="post"
                                onClick={showPostOrNot}
                                className="pl-8 text-lg"
                            >
                                Posts
                            </button>
                        </div>
                    </div>

                    {ShowAbout && (
                        <div className="flex justify-center xl:justify-start pt-8 pb-8">
                            <div className="bg-white w-52 h-96 shadow-xl md:w-[360px] md:h-64 xl:w-full xl:max-w-2xl ">
                                <p className="pl-2 pt-4 font-semibold">
                                    A propos :
                                </p>
                                <p className="text-center pt-4 mx-4">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Illum nobis sapiente
                                    perspiciatis pariatur aut consequuntur
                                    blanditiis eveniet suscipit, minima velit
                                    quibusdam quidem nostrum possimus tenetur!
                                    Cumque ducimus nemo facilis explicabo dolore
                                    at sunt eaque laborum alias distinctio. Hic,
                                    id nulla.
                                </p>
                            </div>
                        </div>
                    )}

                    {ShowPost && (
                        <div className="flex justify-center pt-8">
                            <div className="bg-white w-52 h-80 shadow-xl">
                                <p className="text-center pt-4">Nom: Slow</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Profil;
