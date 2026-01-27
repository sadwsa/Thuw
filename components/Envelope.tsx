
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface EnvelopeProps {
  isOpen: boolean;
  onOpen: () => void;
  recipient: string;
}

const Envelope: React.FC<EnvelopeProps> = ({ isOpen, onOpen, recipient }) => {
  return (
    <div className="relative cursor-pointer group" onClick={!isOpen ? onOpen : undefined}>
      {/* Shadow */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-black/5 blur-xl rounded-full"></div>

      <motion.div 
        className="relative w-[300px] h-[200px] md:w-[400px] md:h-[260px] bg-pink-100 rounded-b-lg shadow-2xl overflow-hidden preserve-3d"
        animate={isOpen ? { scale: 1.05 } : {}}
      >
        {/* Envelope Body */}
        <div className="absolute inset-0 bg-[#fff5f5] border-2 border-pink-200"></div>
        
        {/* Left Fold */}
        <div className="absolute top-0 left-0 w-0 h-0 border-t-[100px] border-l-[150px] md:border-t-[130px] md:border-l-[200px] border-t-transparent border-l-pink-200/40 z-20"></div>
        
        {/* Right Fold */}
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[100px] border-r-[150px] md:border-t-[130px] md:border-r-[200px] border-t-transparent border-r-pink-200/40 z-20"></div>
        
        {/* Bottom Fold */}
        <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[100px] border-l-[150px] border-r-[150px] md:border-b-[130px] md:border-l-[200px] md:border-r-[200px] border-l-transparent border-r-transparent border-b-pink-200/60 z-30"></div>

        {/* Content Preview (The Letter inside) */}
        <motion.div
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[90%] h-32 bg-white rounded shadow-inner z-10 flex flex-col items-center justify-center p-4 border border-pink-50"
          animate={isOpen ? { y: -80, scale: 1.1 } : { y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-12 h-1 bg-pink-100 rounded mb-2"></div>
          <div className="w-24 h-1 bg-pink-50 rounded"></div>
        </motion.div>

        {/* Top Flap */}
        <motion.div
          className="absolute top-0 left-0 w-0 h-0 border-l-[150px] border-r-[150px] border-t-[100px] md:border-l-[200px] md:border-r-[200px] md:border-t-[130px] border-l-transparent border-r-transparent border-t-pink-300 z-40 origin-top"
          initial={{ rotateX: 0 }}
          animate={isOpen ? { rotateX: 180, zIndex: 0 } : { rotateX: 0 }}
          transition={{ duration: 0.6 }}
        ></motion.div>

        {/* Recipient Label */}
        <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
           <div className="bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full shadow-sm border border-pink-100 scale-90 md:scale-100">
              <span className="text-pink-600 font-semibold text-sm">To: {recipient}</span>
           </div>
        </div>

        {/* Heart Seal */}
        <motion.div 
          className="absolute top-[80px] md:top-[110px] left-1/2 -translate-x-1/2 z-50 text-pink-500 bg-white p-2 rounded-full shadow-lg border-2 border-pink-400 cursor-pointer"
          animate={isOpen ? { opacity: 0, scale: 0 } : { scale: [1, 1.1, 1] }}
          transition={isOpen ? { duration: 0.3 } : { repeat: Infinity, duration: 2 }}
          whileHover={{ scale: 1.2 }}
        >
          <Heart fill="currentColor" size={24} />
        </motion.div>
      </motion.div>

      {/* Pulsing Hint */}
      {!isOpen && (
        <motion.div
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-pink-400 font-medium whitespace-nowrap"
          animate={{ y: [0, 5, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Nhấn để mở
        </motion.div>
      )}
    </div>
  );
};

export default Envelope;
