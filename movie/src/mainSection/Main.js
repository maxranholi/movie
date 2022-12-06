import { ContainerMain } from "./Mainstyled";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Main = () => {
  const [title, setTitle] = useState("")

  useEffect(() => {
    axios
    .get(
      "https://api.themoviedb.org/3/movie/76341?api_key=cd166892adfe5c00fbc2a247dd12001f"
    )
    .then((res) => {
      setTitle(res.data.original_title);
    }, []);
  })
 
  return <ContainerMain>
<h1>{title}</h1>
  </ContainerMain>;
};

export default Main;
