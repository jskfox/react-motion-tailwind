import { AnimatePresence, motion, MotionConfig, useAnimationControls, useInView, useScroll, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import "./App.css";
import ScrollRevealEffect from "./components/ScrollEffect";
import viteLogo from "/vite.svg";

function App() {
  const [visible, setVisible] = useState(true);
  const controls = useAnimationControls();
  const ref = useRef();
  const divIsInView = useInView(ref,{once:true});
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });
  const css = {
    motionButton: 'button-switch p-2 m-4',
  }
  const handleClick = () => {
    controls.start("girar");
    controls.set("inicial");
  }

  
  return (
    <>      
      <motion.div className="h-6 w-screen top-0 left-0 bg-lime-500 text-gray-800 sticky origin-left"
        style={{ scaleX }}
      />          
      
      <MotionConfig transition={{ duration: 0.1, ease: "easeInOut" }}>
        <motion.button
          layout
          className={css.motionButton}
          whileHover={{ scale: 1.1, rotate: 4 }}
          whileTap={{ scale: 0.9, rotate: -4 }}
          onClick={() => setVisible(!visible)}
        >
          Animar
        </motion.button>

        <motion.button
          layout
          className={css.motionButton}
          whileHover={{ scale: 1.1, rotate: 4 }}
          whileTap={{ scale: 0.9, rotate: -4 }}
          onClick={() => setVisible(!visible)}
          transition={{ duration: 0.3, ease: "linear" }} // Slower than the global transition in MotionConfig
        >
          Haz click!
        </motion.button>
      </MotionConfig>
      
      <button onClick={handleClick}>Girar!</button>

      <div className="flex items-center justify-center h-72 w-1/2 m-auto">
        <AnimatePresence mode="popLayout">          
          {visible && (
            <motion.img
              src={viteLogo}
              className="logo w-32 m-auto"
              alt="Vite logo"
              initial={{
                rotate: 0,
                scale: 1.5,
                x: 0,
              }}
              animate={{
                rotate: [0, 90, 180, 360],
                x: [100, 20, 150, 0],
              }}
              transition={{
                duration: 1.5,
                type: "spring",
                times: [0, 0.7, 0.8, 1],
              }}
              exit={{ rotate: 0, scale: 0.2, x: 0, opacity: 0 }}
            />
          )}
        </AnimatePresence>
      </div>

      <motion.div 
        className="m-auto w-80 pt-32 bg-slate-200 align-middle items-center h-screen  text-gray-800"
        variants={{
          inicial: {rotate: 0},
          girar: {rotate: 360},
        }}
        initial="inicial"
        animate={controls}             
        >
            Contenido
      </motion.div>
      
      
      
      <motion.div className="flex m-auto h-screen w-96  bg-cyan-600"
        initial={{
          opacity:0,
          // scale:0.5,
          // x:800
        }}
        transition={{duration:0.5}}
        whileInView={{
          opacity:1, 
          // scale:0.5,
          // x:0,
          // type: "spring",
        }}
      >
      </motion.div>
      <ScrollRevealEffect>
        <motion.div className={`transition-colors m-auto duration-1000 h-screen w-96 ${!divIsInView ? "bg-green-400":"bg-orange-400"} `}
          ref={ref}
          initial={{
            opacity:1,
          }}
          transition={{duration:1}}
          whileInView={{
            opacity:1, 
          }}
        >
        </motion.div>
      </ScrollRevealEffect>
    </>
  );
}

export default App;
