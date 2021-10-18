import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./component/MainPage";
import Theme from "./theme.mp3";
import { Howl, Howler } from "howler";
import SecondPage from "./component/SecondPage";
function App() {
  React.useEffect(() => {
    var sound = new Howl({
      src: Theme,
      autoplay: true,
      loop: true,
      volume: 0.3,
    });

    sound.play();
  }, []);
  const [sound, setSound] = React.useState(true);
  const imgList = {
    default: "cat.jpg",
    my: "my1.jpg",
    ly: "ly.jpg",
    nhi: "nhi.jpg",
    truc: "truc.jpg",
  };
  const [img, setImg] = React.useState(imgList.default);
  return (
    <div className="main">
      <Switch>
        <Route path="/" exact>
          <MainPage
            sound={sound}
            setSound={setSound}
            imgList={imgList}
            img={img}
            setImg={setImg}
          />
        </Route>
        <Route path="/congrat" exact>
          <SecondPage sound={sound} setSound={setSound} img={img}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
