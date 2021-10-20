import { TextField } from "@material-ui/core";
import { Howler } from "howler";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
function SecondPage({ sound, setSound }) {
  const history = useHistory();
  const handleSound = () => {
    setSound(!sound);
  };
  React.useEffect(() => {
    Howler.volume(sound ? 0.3 : 0);
  }, [sound]);
  const [imgg, setImg] = React.useState("congrat.gif");
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className="MainPage-component" />
      <div className="MainPage-center">
        <div className="MainPage-center-input">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.5 }}
              src={"flower.gif"}
              alt=""
              className="img"
            />


          {sound ? (
            <img src="soundon.svg" onClick={handleSound} alt="" />
          ) : (
            <img src="soundoff.svg" onClick={handleSound} alt="" />
          )}
          <p>Chúc Mai Phương 20/10 vui vẻ !</p>
          <p>Không có hoa 3D thì mình tặng hoa 2D vậy ^^, nhưng mà con mèo gặm mất rồi chắc không sao nhỉ</p>
        </div>
      </div>
    </>
  );
}

export default SecondPage;
