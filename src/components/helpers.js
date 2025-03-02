// src/utils/helpers.js

/**
 * สร้างรหัสสุ่มจากตัวอักษรและตัวเลข
 * @param {number} length ความยาวของรหัสที่ต้องการ
 * @returns {string} รหัสที่สร้างขึ้น
 */
export const generateRandomCode = (length) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };
  
  /**
   * แปลง timestamp เป็น string วันที่ในรูปแบบไทย
   * @param {number} timestamp เวลาในรูปแบบ timestamp
   * @returns {string} วันที่ในรูปแบบไทย
   */
  export const formatThaiDateTime = (timestamp) => {
    if (!timestamp) return "ไม่ระบุวันเวลา";
    
    return new Date(timestamp).toLocaleString('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };
  
  /**
   * เปรียบเทียบวันที่
   * @param {Date|string} date1 วันที่แรก
   * @param {Date|string} date2 วันที่สอง
   * @returns {boolean} true ถ้าเป็นวันเดียวกัน
   */
  export const isSameDay = (date1, date2) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    
    return (
      d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getFullYear() === d2.getFullYear()
    );
  };
