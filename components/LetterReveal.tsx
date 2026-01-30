
//import React from 'react';
//import { motion } from 'framer-motion';
//import { RefreshCcw, Heart, X, Sparkles } from 'lucide-react';
//import { LetterData } from '../types';

//interface LetterRevealProps {
//  data: LetterData;
//  onClose: () => void;
//}

//const LetterReveal: React.FC<LetterRevealProps> = ({ data, onClose }) => {
//  return (
//    <div className="relative group">
//      {/* Decorative Ornaments */}
//      <div className="absolute -top-10 -right-10 text-yellow-400 hidden md:block">
//        <Sparkles size={48} />
//      </div>
//      <div className="absolute -bottom-10 -left-10 text-pink-400 hidden md:block">
//        <Heart size={48} fill="currentColor" />
//      </div>

//      <motion.div
//        className="bg-white rounded-xl shadow-2xl p-8 md:p-12 border-t-8 border-pink-500 relative"
//        initial={{ rotate: -2, scale: 0.95 }}
//        animate={{ rotate: 0, scale: 1 }}
//      >
//        {/* Close Button */}
//        <button
//          onClick={onClose}
//          className="absolute top-4 right-4 text-gray-400 hover:text-pink-500 transition-colors"
//        >
//          <X size={24} />
//        </button>

//        <div className="max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
//          <header className="mb-8 text-center">
//            <h2 className="text-3xl font-bold text-gray-800 mb-2 cursive">{data.title}</h2>
//            <div className="flex items-center justify-center gap-2 text-pink-500">
//               <Heart size={16} fill="currentColor" />
//               <span className="text-sm font-medium uppercase tracking-widest italic">{data.date}</span>
//               <Heart size={16} fill="currentColor" />
//            </div>
//          </header>

//          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
//            <p className="font-semibold cursive text-2xl text-pink-600">Thân gửi {data.recipient},</p>

//            <p className="whitespace-pre-line">
//              {data.message}
//            </p>

//            <div className="py-4 border-y border-pink-50 text-pink-600 italic font-medium">
//              "{data.additionalContent}"
//            </div>

//            <p>
//              Mong rằng niềm vui sẽ luôn mỉm cười với bạn trên mọi nẻo đường. Hãy nhớ rằng bạn luôn đặc biệt và tuyệt vời theo cách của riêng mình.
//            </p>

//            <div className="mt-12 text-right">
//              <p className="text-gray-500 text-sm mb-1">Trân trọng,</p>
//              <p className="font-bold text-xl text-pink-600 cursive">{data.sender}</p>
//            </div>
//          </div>
//        </div>

//        <div className="mt-10 flex justify-center">
//          <button
//            onClick={onClose}
//            className="flex items-center gap-2 px-8 py-3 bg-pink-500 text-white rounded-full font-bold shadow-lg hover:bg-pink-600 hover:shadow-pink-200/50 transition-all active:scale-95"
//          >
//            <RefreshCcw size={18} />
//            <span>Đóng</span>
//          </button>
//        </div>
//      </motion.div>
//    </div>
//  );
//};

//export default LetterReveal;



import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCcw, Heart, X, Sparkles } from 'lucide-react';

interface LetterRevealProps {
    onClose: () => void;
}

const LetterReveal: React.FC<LetterRevealProps> = ({ onClose }) => {
    return (
        <div className="relative group">
            {/* Decorative Ornaments */}
            <div className="absolute -top-10 -right-10 text-yellow-400 hidden md:block">
                <Sparkles size={48} />
            </div>
            <div className="absolute -bottom-10 -left-10 text-pink-400 hidden md:block">
                <Heart size={48} fill="currentColor" />
            </div>

            <motion.div
                className="bg-white rounded-xl shadow-2xl p-8 md:p-12 border-t-8 border-pink-500 relative"
                initial={{ rotate: -2, scale: 0.95 }}
                animate={{ rotate: 0, scale: 1 }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-pink-500 transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
                    <header className="mb-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2 cursive">
                            Cảm ơn bạn đã lựa chọn nến thơm của chúng tôi 🌸
                        </h2>
                        <div className="flex items-center justify-center gap-2 text-pink-500">
                            <Heart size={16} fill="currentColor" />
                            <span className="text-sm font-medium uppercase tracking-widest italic">
                                Trân trọng & biết ơn
                            </span>
                            <Heart size={16} fill="currentColor" />
                        </div>
                    </header>

                    <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                        <p className="font-semibold cursive text-2xl text-pink-600">
                            Thân gửi Phúc,
                        </p>

                        <p className="whitespace-pre-line">
                            Cảm ơn bạn đã tin tưởng và lựa chọn sản phẩm nến thơm của chúng tôi.
                            Mỗi cây nến được tạo ra không chỉ để lan tỏa hương thơm, mà còn chứa
                            đựng sự chăm chút và mong muốn mang đến cho bạn những khoảnh khắc
                            thư giãn, ấm áp trong cuộc sống hằng ngày.
                        </p>

                        <div className="py-4 border-y border-pink-50 text-pink-600 italic font-medium">
                            "Một ngọn nến nhỏ có thể thắp sáng cả không gian – cảm ơn bạn đã cho
                            chúng tôi cơ hội được đồng hành cùng bạn."
                        </div>

                        <p>
                            Chúng tôi hy vọng ánh nến dịu nhẹ và hương thơm tinh tế sẽ giúp không
                            gian của bạn trở nên dễ chịu hơn và mang lại thật nhiều năng lượng
                            tích cực.
                        </p>

                        <div className="mt-12 text-right">
                            <p className="text-gray-500 text-sm mb-1">Trân trọng,</p>
                            <p className="font-bold text-xl text-pink-600 cursive">
                                Đội ngũ Nến Thơm
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex justify-center">
                    <button
                        onClick={onClose}
                        className="flex items-center gap-2 px-8 py-3 bg-pink-500 text-white rounded-full font-bold shadow-lg hover:bg-pink-600 hover:shadow-pink-200/50 transition-all active:scale-95"
                    >
                        <RefreshCcw size={18} />
                        <span>Đóng</span>
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default LetterReveal;
