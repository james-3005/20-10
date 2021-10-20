import { Button, TextField } from "@material-ui/core";
import { Howler } from "howler";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Mail from "./Mail";
function MainPage({ sound, setSound }) {
  const [input, setInput] = React.useState("");
  const [hint, setHint] = React.useState(false);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  // React.useEffect(() => {
  //   let temp = input.toLowerCase();
  //   if (temp.includes("ly")) {
  //     setImg(imgList.ly);
  //     return;
  //   }
  //   if (temp.includes("muvan")) {
  //     setImg(imgList.my);
  //     return;
  //   }

  //   if (temp.includes("kehuydiettrodua")) {
  //     setImg(imgList.nhi);
  //     return;
  //   }
  //   if (temp.includes("khongchomuontien")) {
  //     setImg(imgList.truc);
  //     return;
  //   }
  //   setImg(imgList.default);
  // }, [input]);
  const [img, setImg] = React.useState("cat.jpg");
  const handleSound = () => {
    setSound(!sound);
  };
  React.useEffect(() => {
    Howler.volume(sound ? 0.3 : 0);
  }, [sound]);
  const [float, setFloat] = useState(false);
  const handleSubmit = () => {
    const value = input.toLowerCase();
    if (
      value.includes("mai phuong") ||
      value.includes("mp") ||
      value.includes("mai phương") ||
      value.includes("maiphuong")
    )
      setFloat(true);
    setImg("cat2.jpg");
  };
  return (
    <>
      <div className="MainPage-component" />
      <div className="MainPage-center">
        <div className="MainPage-center-input">
          <div className="MainPage-center-input-img">
            <img src="arrow.svg" alt="" />
            <Link className="second">
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
          <Button
            color="primary"
            variant="outlined"
            style={{ width: 120 }}
            onClick={handleSubmit}
          >
            Xác nhận
          </Button>
          {float && (
            <Link to="/congrat" >
              <Mail />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default MainPage;
