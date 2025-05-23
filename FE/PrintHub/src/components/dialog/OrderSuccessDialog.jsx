import { CheckCircle, FileText, Download } from "lucide-react";
import React, { useState } from "react";
import ReceiptDetailsDialog from "./ReceiptDetailsDialog";

const OrderSuccessDialog = ({ open, onClose, order }) => {
  const [showReceipt, setShowReceipt] = useState(false);
  
  if (!open) return null;
  
  const handleShowReceipt = (e) => {
    e.stopPropagation();
    setShowReceipt(true);
  };
  
  return (
    <>
      <div
        className="fixed inset-0 bg-gray-200/75 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md relative flex flex-col max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="shrink-0 flex flex-col items-center">
            <div className="bg-green-100 rounded-full p-4 mb-4 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-500" fill="#4ade80" />
            </div>
            <h2 className="text-2xl font-bold text-center mb-1">
              Đặt in thành công!
            </h2>
            <p className="text-gray-600 text-center mb-4">
              Đơn hàng của bạn đã được xác nhận
            </p>
          </div>
          
          <div className="overflow-y-auto flex-grow custom-scrollbar pr-2">
            <div className="bg-gray-50 rounded-xl p-4 w-full mb-6">
              <div className="flex justify-between mb-2 text-sm">
                <span className="text-gray-500">Mã đơn hàng:</span>
                <span className="font-bold max-w-3/5 text-right">#{order.id}</span>
              </div>
              <div className="flex justify-between mb-2 text-sm">
                <span className="text-gray-500">Thời gian nhận:</span>
                <span className="font-semibold max-w-3/5 text-right">
                  {order.time} {" "}
                  {order.date && new Date(order.date).toLocaleDateString("vi-VN")}
                </span>
              </div>
              <div className="flex justify-between mb-2 text-sm">
                <span className="text-gray-500">Cửa hàng:</span>
                <span className="font-semibold max-w-3/5 text-right">{order.shopName}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Địa chỉ:</span>
                <span className="font-semibold max-w-3/5 text-right">{order.shopAddress}</span>
              </div>
            </div>
          </div>
          
          <div className="flex w-full gap-2 mt-2 shrink-0">
            <button
              className="flex-1 border border-gray-300 rounded-lg py-2 flex cursor-pointer items-center justify-center gap-2 text-gray-700 hover:bg-gray-100"
              onClick={handleShowReceipt}
            >
              <Download className="w-5 h-5" />
              Lưu hóa đơn
            </button>
            <button
              className="flex-1 bg-green-500 text-white rounded-lg py-2 flex cursor-pointer items-center justify-center gap-2 hover:bg-green-600"
              onClick={onClose}
            >
              <CheckCircle className="w-5 h-5" />
              Hoàn tất
            </button>
          </div>
        </div>
      </div>

      <ReceiptDetailsDialog 
        open={showReceipt}
        onClose={() => {
          setShowReceipt(false);
          onClose();
        }}
        orderId={order.id}
      />
      
    </>
  );
};

export default OrderSuccessDialog;
