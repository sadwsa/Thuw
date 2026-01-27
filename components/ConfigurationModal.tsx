
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, X, Wand2 } from 'lucide-react';
import { LetterData } from '../types';
import { GoogleGenAI } from "@google/genai";

interface ConfigurationModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: LetterData;
  onSave: (data: LetterData) => void;
}

const ConfigurationModal: React.FC<ConfigurationModalProps> = ({ isOpen, onClose, data, onSave }) => {
  const [formData, setFormData] = useState<LetterData>(data);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const generateAIText = async () => {
    if (!process.env.API_KEY) {
        alert("Tính năng AI cần API Key để hoạt động.");
        return;
    }

    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Viết một lời cảm ơn chân thành và cảm động để gửi cho ${formData.recipient}. Người gửi là ${formData.sender}. Nội dung khoảng 3-4 câu, mang tính khích lệ và yêu thương. Trả lời bằng tiếng Việt.`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      if (response.text) {
        setFormData(prev => ({
          ...prev,
          message: response.text.trim()
        }));
      }
    } catch (error) {
      console.error("AI Generation Error:", error);
      alert("Đã có lỗi xảy ra khi tạo tin nhắn AI.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="bg-pink-500 px-6 py-4 flex items-center justify-between text-white">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Save size={20} />
                Cấu hình lá thư
              </h3>
              <button onClick={onClose} className="hover:bg-white/20 p-1 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto max-h-[80vh]">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Người nhận</label>
                  <input
                    type="text"
                    value={formData.recipient}
                    onChange={(e) => setFormData({ ...formData, recipient: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Người gửi</label>
                  <input
                    type="text"
                    value={formData.sender}
                    onChange={(e) => setFormData({ ...formData, sender: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Tiêu đề</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-sm font-semibold text-gray-700">Nội dung chính</label>
                  <button 
                    type="button"
                    onClick={generateAIText}
                    disabled={isGenerating}
                    className="text-xs flex items-center gap-1 text-pink-600 hover:text-pink-700 font-bold bg-pink-50 px-2 py-1 rounded transition-colors disabled:opacity-50"
                  >
                    <Wand2 size={12} />
                    {isGenerating ? "Đang tạo..." : "Dùng AI viết hộ"}
                  </button>
                </div>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Lời nhắn thêm (Quote)</label>
                <input
                  type="text"
                  value={formData.additionalContent}
                  onChange={(e) => setFormData({ ...formData, additionalContent: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-gray-600 font-bold hover:bg-gray-50 transition-all"
                >
                  Hủy bỏ
                </button>
                <button
                  type="submit"
                  className="flex-2 flex-grow-[2] px-4 py-3 bg-pink-500 text-white rounded-xl font-bold hover:bg-pink-600 shadow-lg shadow-pink-100 transition-all"
                >
                  Lưu thay đổi
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ConfigurationModal;
