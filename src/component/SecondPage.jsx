import { TextField } from "@material-ui/core";
import { Howler } from "howler";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
function SecondPage({ sound, setSound, img }) {
  const history = useHistory();
  const handleSound = () => {
    setSound(!sound);
  };
  React.useEffect(() => {
    Howler.volume(sound ? 0.3 : 0);
  }, [sound]);
  const [imgg, setImg] = React.useState("congrat.gif");
  const [open, setOpen] = React.useState(false);
  const mess = {
    my: "Nhớ đưa t đi ăn 20-10",
    ly: "Thảo Ly 20-10 vui vẻ, bớt hỏi bài lại nha k bày mô",
    nhi: "Đặc quyền 20-10 t sẽ không giận m ^^",
    truc: "Bạn tốt ri mà không cho mượn tiền :(",
  };
  const img2 = {
    my: "my2.jpg",
    ly: "ly2.jpg",
    nhi: "nhi2.jpg",
    truc: "truc2.jpg",
  };
  const [mes, setMes] = React.useState("");
  useEffect(() => {
    if (img.includes("my")) {
      setMes(mess.my);
      setImg(img2.my);
      return;
    }
    if (img.includes("truc")) {
      setMes(mess.truc);
      setImg(img2.truc);
      return;
    }
    if (img.includes("nhi")) {
      setMes(mess.nhi);
      setImg(img2.nhi);
      return;
    }
    if (img.includes("ly")) {
      setMes(mess.ly);
      setImg(img2.ly);
      return;
    }
    history.push("/");
  }, [img]);
  return (
    <>
      <div className="MainPage-component" />
      <div className="MainPage-center">
        <div className="MainPage-center-input">
          {open ? (
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.5 }}
              src={imgg}
              alt=""
              className="img"
            />
          ) : (
            <img src="congrat.gif" alt="" className="img" />
          )}

          {sound ? (
            <img src="soundon.svg" onClick={handleSound} alt="" />
          ) : (
            <img src="soundoff.svg" onClick={handleSound} alt="" />
          )}
          <button style={{ width: 60 }} onClick={() => setOpen(true)}>
            Mở ảnh
          </button>
          <p>{open ? mes : "Đăng nhập thành công"}</p>
        </div>
      </div>
    </>
  );
}

export default SecondPage;
