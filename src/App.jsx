import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "./App.css";
import viteLogo from "/vite.svg";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <motion.button layout 
      className="button-switch p-5"
      whileHover={{scale: 1.1,rotate:4}}
      whileTap={{scale: 0.9,rotate:-4}}
      onClick={() => setVisible(!visible)}>Animar</motion.button>
      <div style={{minHeight:"30px"}}>
        <a
          href="#"
          // target="_blank"
        >
          <AnimatePresence mode="popLayout">
            {visible && (
              <motion.img
                src={viteLogo}
                className="logo"
                alt="Vite logo"
                initial={{
                  rotate: 0,
                  scale: 1,
                  x: 0,
                }}
                animate={{
                  rotate: [0,90,180,360],
                  x: [100, 20, 150,0 ],
                  scale: [1, 1.5, 1.5, 1],
                }}
                transition={{
                  duration: 1.5,
                  type: "spring",
                  //ease: "backInOut",
                  times: [0, 0.7, 0.8, 1],
                }}
                exit={{rotate:0, scale: .2, x:0, opacity:0}}
              />
            )}
          </AnimatePresence>
        </a>
        
          {/* <motion.img
            layout
            src={reactLogo}
            // className="logo react"
            alt="React logo"
          /> */}      
      </div>
      
    </>
  );
}

export default App;
