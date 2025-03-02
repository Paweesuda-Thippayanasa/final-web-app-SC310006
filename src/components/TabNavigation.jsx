// src/components/checkin/TabNavigation.jsx
import React from "react";

const TabNavigation = ({ activeTab, setActiveTab, studentCount, scoreCount }) => {
  return (
    <div className="flex mb-6 border-b border-gray-200">
      <button
        onClick={() => setActiveTab("studentList")}
        className={`px-6 py-3 font-medium text-lg transition-colors ${
          activeTab === "studentList"
            ? "text-blue-600 border-b-2 border-blue-500"
            : "text-gray-500 hover:text-gray-900"
        }`}
      >
        รายชื่อผู้เช็คชื่อ ({studentCount})
      </button>
      <button
        onClick={() => setActiveTab("scoreList")}
        className={`px-6 py-3 font-medium text-lg transition-colors ${
          activeTab === "scoreList"
            ? "text-blue-600 border-b-2 border-blue-500"
            : "text-gray-500 hover:text-gray-900"
        }`}
      >
        การให้คะแนน ({scoreCount})
      </button>
    </div>
  );
};

export default TabNavigation;
