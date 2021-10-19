import { TextField } from "@material-ui/core";
import { Howler } from "howler";
import React from "react";
import { Link } from "react-router-dom";
function MainPage({ sound, setSound, imgList, img, setImg }) {
  const [input, setInput] = React.useState("");
  const [hint, setHint] = React.useState(false);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  React.useEffect(() => {
    let temp = input.toLowerCase();
    if (temp.includes("ly")) {
      setImg(imgList.ly);
      return;
    }
    if (temp.includes("muvan")) {
      setImg(imgList.my);
      return;
    }

    if (temp.includes("kehuydiettrodua")) {
      setImg(imgList.nhi);
      return;
    }
    if (temp.includes("khongchomuontien")) {
      setImg(imgList.truc);
      return;
    }
    setImg(imgList.default);
  }, [input]);
  const handleSound = () => {
    setSound(!sound);
  };
  React.useEffect(() => {
    Howler.volume(sound ? 0.3 : 0);
  }, [sound]);
  const handleChangePage = (e) => {
    if (img.includes("cat.jpg")) e.preventDefault();
  };
  const [text, setText] = React.useState("Hint");
  const handleChangeMod = () => {
    if (text === "Hint") {
      setText("Quá thất vọng, click lần nữa");
      return;
    } else setHint(true);
  };
  return (
    <>
      <div className="MainPage-component" />
      <div className="MainPage-center">
        <div className="MainPage-center-input">
          <div className="MainPage-center-input-img">
            <img src="arrow.svg" alt="" />
            <Link to="/congrat" className="second" onClick={handleChangePage}>
              <img src={img} alt="" className="second-img" />
            </Link>
            <img src="arrow2.svg" alt="" />
          </div>
          {sound ? (
            <img src="soundon.svg" onClick={handleSound} alt="" />
          ) : (
            <img src="soundoff.svg" onClick={handleSound} alt="" />
          )}
          <TextField
            color="primary"
            onChange={handleChange}
            label="Pass"
            variant="outlined"
            placeholder={"Nhập tên của bạn"}
            value={input}
            className="MainPage-center-input-filed"
          />
          {hint ? (
            <p>
              * Biệt danh mà tôi đặt cho bạn, nếu không có thì ghi tên, thử nhớ
              lại đi nhé, click vào ảnh nếu đúng mật khẩu
            </p>
          ) : (
            <button onClick={handleChangeMod} style={{ width: 80 }}>
              {text}
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default MainPage;
