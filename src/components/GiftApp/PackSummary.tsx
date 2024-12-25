import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/types/product';
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Package2 } from 'lucide-react';

interface PackSummaryProps {
  items: Product[];
  note: string;
  onNoteChange: (note: string) => void;
}

const PackSummary = ({
  items,
  note,
  onNoteChange,
}: PackSummaryProps) => {
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <motion.div 
      className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 space-y-6 shadow-xl border border-white/20"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-2">
        <Package2 className="w-6 h-6 text-[#700100]" />
        <h2 className="text-2xl font-serif text-[#700100]">Résumé du Pack</h2>
      </div>
      
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {items.map((item, index) => (
            <motion.div
              key={`${item.id}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-between p-3 bg-white/50 rounded-lg backdrop-blur-sm border border-white/30"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-50">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.price.toFixed(2)} TND</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        <Separator className="my-4" />
        
        <div className="flex justify-between items-center text-lg font-medium">
          <span className="text-gray-600">Total</span>
          <motion.span 
            key={totalPrice}
            initial={{ scale: 1.2, color: '#700100' }}
            animate={{ scale: 1, color: '#1a1a1a' }}
            className="text-xl"
          >
            {totalPrice.toFixed(2)} TND
          </motion.span>
        </div>

        <div className="space-y-2 mt-6">
          <Label htmlFor="note" className="text-gray-700">Message Personnel</Label>
          <Textarea
            id="note"
            placeholder="Ajoutez votre message personnalisé ici..."
            value={note}
            onChange={(e) => onNoteChange(e.target.value)}
            className="min-h-[100px] bg-white/50 backdrop-blur-sm border-white/30 resize-none"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default PackSummary;