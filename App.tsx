
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Mail, RefreshCcw, Send, Settings2 } from 'lucide-react';
import { AppState, LetterData } from './types';
import Envelope from './components/Envelope';
import LetterReveal from './components/LetterReveal';
import ConfigurationModal from './components/ConfigurationModal';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.CLOSED);
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [letterData, setLetterData] = useState<LetterData>({
    sender: "Người gửi thầm lặng",
    recipient: "Phúc",
    title: "Cảm ơn bạn vì tất cả",
    message: "Chào bạn, đây là một lá thư nhỏ tớ muốn gửi đến bạn. Cảm ơn bạn đã luôn ở bên cạnh, lắng nghe và sẻ chia. Sự hiện diện của bạn là một món quà vô giá đối với tớ.",
    additionalContent: "Hy vọng ngày hôm nay của bạn thật tuyệt vời và tràn ngập niềm vui!",
    date: new Date().toLocaleDateString('vi-VN')
  });

  const handleOpen = () => {
    setAppState(AppState.OPENING);
    setTimeout(() => {
      setAppState(AppState.REVEALED);
    }, 1500);
  };

  const resetLetter = () => {
    setAppState(AppState.CLOSED);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-pink-50 relative overflow-hidden px-4">
      {/* Background Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-200"
            initial={{ 
              top: Math.random() * 100 + '%', 
              left: Math.random() * 100 + '%',
              scale: Math.random() * 0.5 + 0.5,
              opacity: 0.3
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Heart size={24 + Math.random() * 40} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {appState !== AppState.REVEALED ? (
          <motion.div
            key="envelope-container"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1, y: -50 }}
            className="z-10 flex flex-col items-center"
          >
            <div className="mb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-2 cursive">Bạn có một lá thư mới!</h1>
              <p className="text-gray-500">Ấn vào phong thư bên dưới để khám phá bất ngờ</p>
            </div>
            
            <Envelope 
              isOpen={appState === AppState.OPENING} 
              onOpen={handleOpen} 
              recipient={letterData.recipient}
                      />

                       {/*an nut*/}

            {/*          <div className="mt-12 flex gap-4">*/}

            {/*  <button*/}
            {/*    onClick={() => setIsConfigOpen(true)}*/}
            {/*    className="flex items-center gap-2 px-6 py-2 bg-white text-pink-500 rounded-full shadow-md hover:shadow-lg transition-all border border-pink-100 hover:bg-pink-50"*/}
            {/*  >*/}
            {/*    <Settings2 size={18} />*/}
            {/*    <span>Chỉnh sửa nội dung</span>*/}
            {/*  </button>*/}
            {/*</div>*/}
          </motion.div>
        ) : (
          <motion.div
            key="letter-revealed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="z-20 w-full max-w-2xl"
          >
            <LetterReveal 
              data={letterData} 
              onClose={resetLetter} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      <ConfigurationModal 
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        data={letterData}
        onSave={(newData) => setLetterData(newData)}
      />

      <footer className="absolute bottom-4 text-pink-300 text-sm italic">
        Made with Love & React
      </footer>
    </div>
  );
};

export default App;
