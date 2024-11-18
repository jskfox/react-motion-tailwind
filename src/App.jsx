import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "./App.css";
import viteLogo from "/vite.svg";

function App() {
  const [visible, setVisible] = useState(true);
  const css = {
    motionButton: 'button-switch p-2 m-4',
  }
  return (
    <>
      <motion.button layout 
      className={css.motionButton}
      whileHover={{scale: 1.1,rotate:4}}
      whileTap={{scale: 0.9,rotate:-4}}
      onClick={() => setVisible(!visible)}>Animar</motion.button>
      
      <motion.button layout 
      className={css.motionButton}
      whileHover={{scale: 1.1,rotate:4}}
      whileTap={{scale: 0.9,rotate:-4}}
      onClick={() => setVisible(!visible)}>Haz click!</motion.button>
      
      <div className="flex items-center justify-center h-screen">
        
          <AnimatePresence mode="popLayout">
            {visible && (
              <motion.img
                src={viteLogo}
                className="logo size-56"
                alt="Vite logo"
                initial={{
                  rotate: 0,
                  scale: 1.5,
                  x: 0,
                }}
                animate={{
                  rotate: [0,90,180,360],
                  x: [100, 20, 150,0 ],
                }}
                transition={{
                  duration: 1.5,
                  type: "spring",
                  times: [0, 0.7, 0.8, 1],
                }}
                exit={{rotate:0, scale: .2, x:0, opacity:0}}
              />
            )}
          </AnimatePresence>
        
      </div>
    </>
  );
}

export default App;
