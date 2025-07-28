import React, { useState, useEffect, useRef } from "react";

// Icon Components - Fixed
const Plus = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4v16m8-8H4"
    />
  </svg>
);

const Edit3 = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    />
  </svg>
);

const Trash2 = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
);

const ArrowLeft = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 19l-7-7m0 0l7-7m-7 7h18"
    />
  </svg>
);

const Save = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
    />
  </svg>
);

const Truck = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
    />
  </svg>
);

const X = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const TrendingUp = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    />
  </svg>
);

const FileText = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const Download = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
);

const Mail = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const ChevronDown = ({ className, onClick }) => (
  <svg
    className={className}
    onClick={onClick}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const Calculator = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  </svg>
);

const Package = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    />
  </svg>
);

const User = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const MapPin = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const DollarSign = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const BarChart3 = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

const Clock = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const CheckCircle = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const XCircle = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const AlertCircle = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const Search = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const Filter = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
    />
  </svg>
);

const Home = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

const History = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const Calendar = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const Building2 = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
);

const Navigation = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 10h11m0 0l-4-4m4 4l-4 4m8-4v11a1 1 0 01-1 1H6a1 1 0 01-1-1V7a1 1 0 011-1h4"
    />
  </svg>
);

const FileSignature = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const Ruler = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 5l6 6m0 0l-3-3m3 3l-3 3m3-3H10a4 4 0 00-4 4v5m0-9l-3 3m0-6l3 3"
    />
  </svg>
);

const Weight = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
    />
  </svg>
);

const Layers = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 2L2 9l10 7 10-7-10-7zM2 17l10 7 10-7M2 12l10 7 10-7"
    />
  </svg>
);

const Printer = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
    />
  </svg>
);

const Copy = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
);

const Shield = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
    />
  </svg>
);

// Freightway Logistics Logo Component - Text only version
const FreightwayLogo = ({ className = "" }) => (
  <div className={className}>
    <div
      style={{
        fontSize: "2.5em",
        fontWeight: "900",
        color: "#000",
        fontFamily: "Arial Black, sans-serif",
        letterSpacing: "-1px",
      }}
    >
      FREIGHTWAY
    </div>
    <div
      style={{
        fontSize: "0.8em",
        color: "#2B9FDB",
        fontFamily: "Arial, sans-serif",
        letterSpacing: "10px",
        marginTop: "-8px",
      }}
    >
      LOGISTICS
    </div>
  </div>
);

// Storage functions using localStorage only
const getAllLoads = async () => {
  try {
    const localLoads = localStorage.getItem("tms_loads");
    const loads = localLoads ? JSON.parse(localLoads) : [];
    // Sort by createdAt descending
    return loads.sort((a, b) => {
      const dateA = new Date(a.createdAt || 0);
      const dateB = new Date(b.createdAt || 0);
      return dateB - dateA;
    });
  } catch (error) {
    console.error("Error loading data:", error);
    return [];
  }
};

const saveLoad = async (loadData) => {
  try {
    const loads = await getAllLoads();
    if (loadData.id) {
      // Update existing load
      const index = loads.findIndex((l) => l.id === loadData.id);
      if (index !== -1) {
        loads[index] = {
          ...loadData,
          updatedAt: new Date().toISOString(),
        };
      }
    } else {
      // Create new load
      const newLoadData = {
        ...loadData,
        id: "LOAD" + Date.now() + Math.random().toString(36).substr(2, 5),
        loadNumber: loadData.loadNumber || "LOAD" + Date.now(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        bookingDate: new Date().toISOString(),
      };
      loads.push(newLoadData);
      loadData.id = newLoadData.id;
    }

    localStorage.setItem("tms_loads", JSON.stringify(loads));
    return loadData.id;
  } catch (error) {
    console.error("Error saving data:", error);
    throw error;
  }
};

const deleteLoad = async (loadId) => {
  try {
    const loads = await getAllLoads();
    const filtered = loads.filter((l) => l.id !== loadId);
    localStorage.setItem("tms_loads", JSON.stringify(filtered));
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};

// Storage functions for rate quotes
const saveRateQuote = async (quoteData) => {
  try {
    const quotes = localStorage.getItem("tms_rate_quotes");
    const quotesArray = quotes ? JSON.parse(quotes) : [];
    quotesArray.push({
      ...quoteData,
      id: Date.now() + Math.random().toString(36).substr(2, 5),
      createdAt: new Date().toISOString(),
    });

    localStorage.setItem("tms_rate_quotes", JSON.stringify(quotesArray));
  } catch (error) {
    console.error("Error saving rate quote:", error);
    throw error;
  }
};

const getRateQuotes = async () => {
  try {
    const quotes = localStorage.getItem("tms_rate_quotes");
    return quotes ? JSON.parse(quotes) : [];
  } catch (error) {
    console.error("Error loading rate quotes:", error);
    return [];
  }
};

// Simple toast notification system
const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor =
    type === "success"
      ? "bg-green-500"
      : type === "error"
      ? "bg-red-500"
      : "bg-blue-500";

  return (
    <div
      className={`fixed bottom-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50`}
    >
      {type === "success" && <CheckCircle className="w-5 h-5" />}
      {type === "error" && <XCircle className="w-5 h-5" />}
      {type === "info" && <AlertCircle className="w-5 h-5" />}
      <span>{message}</span>
    </div>
  );
};

// Toast container to manage toasts
const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <div className="fixed bottom-4 right-4 space-y-2 z-50">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};

// Custom hook for toast notifications
const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const toast = {
    success: (message) => {
      const id = Date.now();
      setToasts((prev) => [...prev, { id, message, type: "success" }]);
    },
    error: (message) => {
      const id = Date.now();
      setToasts((prev) => [...prev, { id, message, type: "error" }]);
    },
    info: (message) => {
      const id = Date.now();
      setToasts((prev) => [...prev, { id, message, type: "info" }]);
    },
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return { toasts, toast, removeToast };
};

// Helper functions
const formatDateSafe = (dateString) => {
  if (!dateString) return "";
  try {
    // Parse the date and ensure we're working with the correct date
    const date = new Date(dateString + "T12:00:00"); // Add noon time to avoid timezone issues
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "America/Toronto", // Use local timezone
    };
    return date.toLocaleDateString("en-US", options);
  } catch {
    return dateString;
  }
};

const formatDateShort = (dateString) => {
  if (!dateString) return "";
  try {
    const date = new Date(dateString + "T12:00:00");
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "America/Toronto",
    });
  } catch {
    return dateString;
  }
};

const getCurrentWeekStart = () => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const diff = now.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1); // Adjust for Monday start
  const monday = new Date(now.setDate(diff));
  monday.setHours(0, 0, 0, 0);
  return monday;
};

// Calculate cubic feet
const calculateCubicFeet = (length, width, height, unit) => {
  let l = parseFloat(length) || 0;
  let w = parseFloat(width) || 0;
  let h = parseFloat(height) || 0;

  // Convert to inches first
  if (unit === "cm") {
    l = l / 2.54;
    w = w / 2.54;
    h = h / 2.54;
  } else if (unit === "feet") {
    l = l * 12;
    w = w * 12;
    h = h * 12;
  }

  // Calculate cubic feet
  return (l * w * h) / 1728;
};

// EditableDropdown Component
const EditableDropdown = ({
  value,
  onChange,
  options,
  placeholder,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const filteredOptions = value
    ? options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      )
    : options;

  useEffect(() => {
    if (!isOpen) setSelectedIndex(-1);
  }, [isOpen]);

  const handleKeyDown = (e) => {
    if (!isOpen && (e.key === "ArrowDown" || e.key === "Enter")) {
      setIsOpen(true);
      setSelectedIndex(0);
      e.preventDefault();
      return;
    }

    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredOptions.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < filteredOptions.length) {
          onChange(filteredOptions[selectedIndex]);
          setIsOpen(false);
        }
        break;
      case "Escape":
        setIsOpen(false);
        setSelectedIndex(-1);
        break;
    }
  };

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setIsOpen(true);
            setSelectedIndex(0);
          }}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            setIsOpen(true);
            setSelectedIndex(0);
          }}
          placeholder={placeholder}
          className={`w-full px-3 py-2 border rounded-lg pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
        />
        <ChevronDown
          className="absolute right-2 top-3 w-4 h-4 text-gray-400 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {isOpen && filteredOptions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {filteredOptions.map((option, index) => (
            <div
              key={index}
              className={`px-3 py-2 cursor-pointer text-sm ${
                index === selectedIndex
                  ? "bg-blue-100 text-blue-900"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              {option}
            </div>
          ))}
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-5" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
};

// QuickRateCalculator Component
const QuickRateCalculator = ({ onClose, onCreateLoad, loads = [] }) => {
  const [rateData, setRateData] = useState({
    clientName: "",
    originCity: "",
    originState: "",
    destinationCity: "",
    destinationState: "",
    equipmentType: "Dry Van",
    loadType: "FTL",
    weight: "",
    weightUnit: "lbs",
    commodity: "",
    pieces: "1",
    unitType: "Pallet",
    dimensionUnit: "inches",
    ltlPackages: [
      {
        length: "",
        width: "",
        height: "",
        weight: "",
        pieces: "1",
        stackable: true,
      },
    ],
  });

  const [rateEstimates, setRateEstimates] = useState(null);
  const [similarLoads, setSimilarLoads] = useState([]);
  const [showSimilarLoads, setShowSimilarLoads] = useState(false);

  // Include all equipment types with Ocean and Air
  const equipmentTypes = [
    "Dry Van",
    "Flatbed",
    "Flatbed (Tarped)",
    "Reefer",
    "Step Deck",
    "RGN",
    "Power Only",
    "Hotshot",
    "Box Truck",
    "Rolltite",
    "Sprinter Van",
    "Ocean Shipment",
    "Air Shipment",
  ];

  const weightUnits = ["lbs", "kg"];
  const dimensionUnits = ["inches", "cm", "feet"];

  const getUniqueValues = (field) => {
    const values = loads
      .map((load) => load[field])
      .filter((value) => value && value.trim());
    return [...new Set(values)].sort();
  };

  // Business metrics calculation
  const businessMetrics = (() => {
    const loadsWithRates = loads.filter(l => l.carrierCost && l.clientQuote);
    if (loadsWithRates.length === 0) return null;

    const totalRevenue = loadsWithRates.reduce((sum, l) => sum + parseFloat(l.clientQuote), 0);
    const totalCost = loadsWithRates.reduce((sum, l) => sum + parseFloat(l.carrierCost), 0);
    const totalProfit = totalRevenue - totalCost;
    const avgMarkup = ((totalProfit / totalCost) * 100);

    // Group by equipment type
    const equipmentMarkups = {};
    loadsWithRates.forEach(load => {
      if (!equipmentMarkups[load.equipmentType]) {
        equipmentMarkups[load.equipmentType] = { count: 0, totalMarkup: 0 };
      }
      const markup = ((parseFloat(load.clientQuote) - parseFloat(load.carrierCost)) / parseFloat(load.carrierCost)) * 100;
      equipmentMarkups[load.equipmentType].count++;
      equipmentMarkups[load.equipmentType].totalMarkup += markup;
    });

    return {
      totalLoads: loadsWithRates.length,
      avgMarkup: avgMarkup.toFixed(1),
      totalProfit: totalProfit.toFixed(0),
      equipmentMarkups: Object.entries(equipmentMarkups).map(([type, data]) => ({
        type,
        avgMarkup: (data.totalMarkup / data.count).toFixed(1),
        count: data.count
      })).sort((a, b) => b.count - a.count).slice(0, 5)
    };
  })();

  // Find similar loads when route/client changes
  useEffect(() => {
    if (rateData.originCity && rateData.destinationCity) {
      const similar = loads.filter((load) => {
        const originMatch =
          (load.originCity === rateData.originCity ||
            load.shipperCity === rateData.originCity) &&
          (load.originState === rateData.originState ||
            load.shipperState === rateData.originState);
        
        const destMatch =
          (load.destinationCity === rateData.destinationCity ||
            load.consigneeCity === rateData.destinationCity) &&
          (load.destinationState === rateData.destinationState ||
            load.consigneeState === rateData.destinationState);
        
        const hasRates = load.carrierCost && load.clientQuote;
        
        return (originMatch || destMatch) && hasRates;
      }).slice(0, 5); // Show max 5 similar loads
      
      setSimilarLoads(similar);
    }
  }, [rateData.originCity, rateData.originState, rateData.destinationCity, rateData.destinationState, loads]);

  // Auto-populate from stored quotes
  useEffect(() => {
    const loadQuotes = async () => {
      const quotes = await getRateQuotes();
      const matchingQuote = quotes.find(
        (quote) =>
          quote.originCity === rateData.originCity &&
          quote.originState === rateData.originState &&
          quote.destinationCity === rateData.destinationCity &&
          quote.destinationState === rateData.destinationState &&
          quote.equipmentType === rateData.equipmentType &&
          quote.loadType === rateData.loadType
      );

      if (
        matchingQuote &&
        matchingQuote.carrierCost &&
        matchingQuote.clientQuote
      ) {
        setRateEstimates({
          carrierCost: {
            min: matchingQuote.carrierCost * 0.9,
            avg: matchingQuote.carrierCost,
            max: matchingQuote.carrierCost * 1.1,
          },
          clientQuote: {
            min: matchingQuote.clientQuote * 0.95,
            avg: matchingQuote.clientQuote,
            max: matchingQuote.clientQuote * 1.05,
          },
          confidence: "Based on your previous quote",
          calculationMethod: "Historical quote",
          historicalCount: 1,
          totalCubicFeet: null,
        });
      }
    };
    loadQuotes();
  }, [
    rateData.originCity,
    rateData.originState,
    rateData.destinationCity,
    rateData.destinationState,
    rateData.equipmentType,
    rateData.loadType,
  ]);

  const updateLtlPackage = (index, field, value) => {
    const newPackages = [...rateData.ltlPackages];
    newPackages[index][field] = value;
    setRateData({ ...rateData, ltlPackages: newPackages });
  };

  const addLtlPackage = () => {
    setRateData({
      ...rateData,
      ltlPackages: [
        ...rateData.ltlPackages,
        {
          length: "",
          width: "",
          height: "",
          weight: "",
          pieces: "1",
          stackable: true,
        },
      ],
    });
  };

  const removeLtlPackage = (index) => {
    if (rateData.ltlPackages.length > 1) {
      const newPackages = rateData.ltlPackages.filter((_, i) => i !== index);
      setRateData({ ...rateData, ltlPackages: newPackages });
    }
  };

  const calculateTotalCubicFeet = () => {
    if (rateData.loadType === "LTL") {
      return rateData.ltlPackages.reduce((total, pkg) => {
        const pieces = parseInt(pkg.pieces) || 1;
        const cubicFeet = calculateCubicFeet(
          pkg.length,
          pkg.width,
          pkg.height,
          rateData.dimensionUnit
        );
        return total + cubicFeet * pieces;
      }, 0);
    }
    return 0;
  };

  const calculateQuickRate = async () => {
    // Calculate total cubic feet for LTL if applicable
    const totalCubicFeet = rateData.loadType === "LTL" ? calculateTotalCubicFeet() : 0;

    // Historical rate analysis with multiple matching levels
    let matchingLoads = [];
    let matchLevel = "";
    let avgMarkupPercentage = 15; // Default markup if no historical data

    // Level 1: Exact match - Client, Equipment, Origin, Destination
    matchingLoads = loads.filter((load) => {
      const originMatch =
        (load.originCity === rateData.originCity &&
          load.originState === rateData.originState) ||
        (load.shipperCity === rateData.originCity &&
          load.shipperState === rateData.originState);
      const destMatch =
        (load.destinationCity === rateData.destinationCity &&
          load.destinationState === rateData.destinationState) ||
        (load.consigneeCity === rateData.destinationCity &&
          load.consigneeState === rateData.destinationState);
      const equipMatch = load.equipmentType === rateData.equipmentType;
      const clientMatch = rateData.clientName && load.clientName === rateData.clientName;
      const hasRates = load.carrierCost && load.clientQuote;

      return originMatch && destMatch && equipMatch && clientMatch && hasRates;
    });

    if (matchingLoads.length > 0) {
      matchLevel = "Exact match (client, equipment, route)";
    } else {
      // Level 2: Route and Equipment match (any client)
      matchingLoads = loads.filter((load) => {
        const originMatch =
          (load.originCity === rateData.originCity &&
            load.originState === rateData.originState) ||
          (load.shipperCity === rateData.originCity &&
            load.shipperState === rateData.originState);
        const destMatch =
          (load.destinationCity === rateData.destinationCity &&
            load.destinationState === rateData.destinationState) ||
          (load.consigneeCity === rateData.destinationCity &&
            load.consigneeState === rateData.destinationState);
        const equipMatch = load.equipmentType === rateData.equipmentType;
        const hasRates = load.carrierCost && load.clientQuote;

        return originMatch && destMatch && equipMatch && hasRates;
      });

      if (matchingLoads.length > 0) {
        matchLevel = "Route & equipment match";
      } else {
        // Level 3: Same lane (origin to destination) any equipment
        matchingLoads = loads.filter((load) => {
          const originMatch =
            (load.originCity === rateData.originCity &&
              load.originState === rateData.originState) ||
            (load.shipperCity === rateData.originCity &&
              load.shipperState === rateData.originState);
          const destMatch =
            (load.destinationCity === rateData.destinationCity &&
              load.destinationState === rateData.destinationState) ||
            (load.consigneeCity === rateData.destinationCity &&
              load.consigneeState === rateData.destinationState);
          const hasRates = load.carrierCost && load.clientQuote;

          return originMatch && destMatch && hasRates;
        });

        if (matchingLoads.length > 0) {
          matchLevel = "Same lane (any equipment)";
        } else {
          // Level 4: Client pricing patterns (any route)
          if (rateData.clientName) {
            matchingLoads = loads.filter((load) => {
              const clientMatch = load.clientName === rateData.clientName;
              const equipMatch = load.equipmentType === rateData.equipmentType;
              const hasRates = load.carrierCost && load.clientQuote;

              return clientMatch && equipMatch && hasRates;
            });

            if (matchingLoads.length > 0) {
              matchLevel = `${rateData.clientName} historical ${rateData.equipmentType} rates`;
            }
          }
        }
      }
    }

    // Calculate your average markup percentage from ALL historical data
    const allLoadsWithRates = loads.filter(l => l.carrierCost && l.clientQuote);
    if (allLoadsWithRates.length > 0) {
      const totalMarkup = allLoadsWithRates.reduce((sum, load) => {
        const cost = parseFloat(load.carrierCost);
        const quote = parseFloat(load.clientQuote);
        return sum + ((quote - cost) / cost * 100);
      }, 0);
      avgMarkupPercentage = totalMarkup / allLoadsWithRates.length;
    }

    let carrierCost, clientQuote, confidence, calculationMethod, historicalCount;
    let priceRange = { min: 0, max: 0 };

    if (matchingLoads.length > 0) {
      // Calculate statistics from historical matches
      const costs = matchingLoads.map(l => parseFloat(l.carrierCost));
      const quotes = matchingLoads.map(l => parseFloat(l.clientQuote));
      
      // Calculate averages
      const avgCarrierCost = costs.reduce((a, b) => a + b, 0) / costs.length;
      const avgClientQuote = quotes.reduce((a, b) => a + b, 0) / quotes.length;
      
      // Calculate min/max for ranges
      const minCost = Math.min(...costs);
      const maxCost = Math.max(...costs);
      const minQuote = Math.min(...quotes);
      const maxQuote = Math.max(...quotes);
      
      // Calculate actual markup from this specific data set
      const actualMarkup = ((avgClientQuote - avgCarrierCost) / avgCarrierCost) * 100;

      carrierCost = Math.round(avgCarrierCost);
      clientQuote = Math.round(avgClientQuote);
      
      priceRange = {
        minCost,
        maxCost,
        minQuote,
        maxQuote,
        avgMarkup: actualMarkup.toFixed(1)
      };

      confidence = `${matchLevel} (${matchingLoads.length} load${matchingLoads.length > 1 ? 's' : ''})`;
      calculationMethod = "Historical pricing analysis";
      historicalCount = matchingLoads.length;

      // If client-specific match, mention their typical markup
      if (rateData.clientName && matchLevel.includes(rateData.clientName)) {
        const clientLoads = loads.filter(l => 
          l.clientName === rateData.clientName && 
          l.carrierCost && 
          l.clientQuote
        );
        if (clientLoads.length > 0) {
          const clientMarkups = clientLoads.map(l => 
            ((parseFloat(l.clientQuote) - parseFloat(l.carrierCost)) / parseFloat(l.carrierCost)) * 100
          );
          const avgClientMarkup = clientMarkups.reduce((a, b) => a + b, 0) / clientMarkups.length;
          confidence += ` | ${rateData.clientName} avg markup: ${avgClientMarkup.toFixed(1)}%`;
        }
      }
    } else {
      // No historical data - use market estimates with your average markup
      const baseRates = {
        "Dry Van": 2.5,
        Flatbed: 2.75,
        "Flatbed (Tarped)": 2.85,
        Reefer: 3.0,
        "Step Deck": 2.85,
        RGN: 3.25,
        "Power Only": 2.0,
        Hotshot: 3.5,
        "Box Truck": 2.2,
        Rolltite: 2.8,
        "Sprinter Van": 2.1,
        "Ocean Shipment": 0.8,
        "Air Shipment": 5.0,
      };

      let perMile = baseRates[rateData.equipmentType] || 2.5;

      // Adjust for LTL
      if (rateData.loadType === "LTL") {
        const totalWeight = rateData.ltlPackages.reduce(
          (sum, pkg) => sum + (parseFloat(pkg.weight) || 0),
          0
        );
        const density = totalWeight / (totalCubicFeet || 1);

        if (density > 15) perMile *= 0.8;
        else if (density > 10) perMile *= 0.9;
        else if (density < 5) perMile *= 1.2;
      }

      const estimatedMiles = 500; // In real app, calculate from origin/destination
      carrierCost = Math.round(estimatedMiles * perMile);
      clientQuote = Math.round(carrierCost * (1 + avgMarkupPercentage / 100));

      confidence = `No historical data - using market rates with your ${avgMarkupPercentage.toFixed(1)}% average markup`;
      calculationMethod = "Market estimate";
      historicalCount = 0;
    }

    const estimates = {
      carrierCost: {
        min: priceRange.minCost || carrierCost * 0.9,
        avg: carrierCost,
        max: priceRange.maxCost || carrierCost * 1.1,
      },
      clientQuote: {
        min: priceRange.minQuote || clientQuote * 0.95,
        avg: clientQuote,
        max: priceRange.maxQuote || clientQuote * 1.05,
      },
      confidence,
      calculationMethod,
      historicalCount,
      totalCubicFeet: rateData.loadType === "LTL" ? totalCubicFeet : null,
      markupPercentage: priceRange.avgMarkup || avgMarkupPercentage.toFixed(1),
      matchLevel,
    };

    setRateEstimates(estimates);

    // Save the quote
    await saveRateQuote({
      ...rateData,
      carrierCost: carrierCost,
      clientQuote: clientQuote,
    });
  };

  const createLoadFromRate = () => {
    const newLoad = {
      clientName: rateData.clientName,
      originCity: rateData.originCity,
      originState: rateData.originState,
      destinationCity: rateData.destinationCity,
      destinationState: rateData.destinationState,
      origin: `${rateData.originCity}, ${rateData.originState}`,
      destination: `${rateData.destinationCity}, ${rateData.destinationState}`,
      equipmentType: rateData.equipmentType,
      loadType: rateData.loadType,
      weight: rateData.weight,
      weightUnit: rateData.weightUnit,
      commodity: rateData.commodity,
      pieces: rateData.pieces,
      unitType: rateData.unitType,
      dimensionUnit: rateData.dimensionUnit,
      ltlPackages: rateData.loadType === "LTL" ? rateData.ltlPackages : [],
      carrierCost: rateEstimates
        ? rateEstimates.carrierCost.avg.toString()
        : "",
      clientQuote: rateEstimates
        ? rateEstimates.clientQuote.avg.toString()
        : "",
      status: "Quoted",
      loadStatus: "Quoted",
      pickupDate: new Date().toISOString().split("T")[0],
    };

    onCreateLoad(newLoad);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-screen overflow-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Calculator className="w-6 h-6" />
              Quick Rate Calculator
            </h2>
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              <X className="w-4 h-4" />
              Close
            </button>
          </div>

          {businessMetrics && (
            <div className="bg-gray-50 p-3 rounded-lg mb-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-gray-700">Your Pricing Patterns</p>
                <p className="text-xs text-gray-500">Based on {businessMetrics.totalLoads} loads</p>
              </div>
              <div className="grid grid-cols-4 gap-3 text-xs">
                <div>
                  <p className="text-gray-600">Avg Markup</p>
                  <p className="font-bold text-lg">{businessMetrics.avgMarkup}%</p>
                </div>
                <div className="col-span-3">
                  <p className="text-gray-600 mb-1">Markup by Equipment</p>
                  <div className="flex gap-2 flex-wrap">
                    {businessMetrics.equipmentMarkups.map(eq => (
                      <span key={eq.type} className="bg-white px-2 py-1 rounded border">
                        {eq.type}: <span className="font-medium">{eq.avgMarkup}%</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Input Form */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Route & Equipment
              </h3>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Client Name
                </label>
                <EditableDropdown
                  value={rateData.clientName}
                  onChange={(value) =>
                    setRateData({ ...rateData, clientName: value })
                  }
                  options={getUniqueValues("clientName")}
                  placeholder="Select client"
                />
              </div>

              {rateData.clientName && (() => {
                const clientLoads = loads.filter(l => 
                  l.clientName === rateData.clientName && 
                  l.carrierCost && 
                  l.clientQuote
                );
                
                if (clientLoads.length > 0) {
                  const avgMarkup = clientLoads.reduce((sum, load) => {
                    const cost = parseFloat(load.carrierCost);
                    const quote = parseFloat(load.clientQuote);
                    return sum + ((quote - cost) / cost * 100);
                  }, 0) / clientLoads.length;
                  
                  const avgCarrierCost = clientLoads.reduce((sum, load) => 
                    sum + parseFloat(load.carrierCost), 0
                  ) / clientLoads.length;
                  
                  const avgClientQuote = clientLoads.reduce((sum, load) => 
                    sum + parseFloat(load.clientQuote), 0
                  ) / clientLoads.length;
                  
                  return (
                    <div className="col-span-2 bg-blue-50 p-3 rounded-lg text-sm">
                      <p className="font-medium text-blue-800 mb-1">
                        {rateData.clientName} Pricing History
                      </p>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div>
                          <span className="text-gray-600">Avg Cost:</span>
                          <span className="font-medium ml-1">${avgCarrierCost.toFixed(0)}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Avg Quote:</span>
                          <span className="font-medium ml-1">${avgClientQuote.toFixed(0)}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Avg Markup:</span>
                          <span className="font-medium ml-1">{avgMarkup.toFixed(1)}%</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">
                        Based on {clientLoads.length} previous loads
                      </p>
                    </div>
                  );
                }
                return null;
              })()}

              <div>
                <label className="block text-sm font-medium mb-1">
                  Origin *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <EditableDropdown
                    value={rateData.originCity}
                    onChange={(value) =>
                      setRateData({ ...rateData, originCity: value })
                    }
                    options={getUniqueValues("shipperCity")}
                    placeholder="City"
                  />
                  <EditableDropdown
                    value={rateData.originState}
                    onChange={(value) =>
                      setRateData({ ...rateData, originState: value })
                    }
                    options={getUniqueValues("shipperState")}
                    placeholder="State/Province"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Destination *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <EditableDropdown
                    value={rateData.destinationCity}
                    onChange={(value) =>
                      setRateData({ ...rateData, destinationCity: value })
                    }
                    options={getUniqueValues("consigneeCity")}
                    placeholder="City"
                  />
                  <EditableDropdown
                    value={rateData.destinationState}
                    onChange={(value) =>
                      setRateData({ ...rateData, destinationState: value })
                    }
                    options={getUniqueValues("consigneeState")}
                    placeholder="State/Province"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Equipment Type
                  </label>
                  <select
                    className="w-full px-3 py-2 border rounded-lg"
                    value={rateData.equipmentType}
                    onChange={(e) =>
                      setRateData({
                        ...rateData,
                        equipmentType: e.target.value,
                      })
                    }
                  >
                    {equipmentTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Load Type
                  </label>
                  <select
                    className="w-full px-3 py-2 border rounded-lg"
                    value={rateData.loadType}
                    onChange={(e) =>
                      setRateData({ ...rateData, loadType: e.target.value })
                    }
                  >
                    <option value="FTL">FTL</option>
                    <option value="LTL">LTL</option>
                  </select>
                </div>
              </div>

              {/* Weight Section */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Total Weight
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    className="flex-1 px-3 py-2 border rounded-lg"
                    value={rateData.weight}
                    onChange={(e) =>
                      setRateData({ ...rateData, weight: e.target.value })
                    }
                    placeholder="Enter weight"
                  />
                  <select
                    className="px-3 py-2 border rounded-lg"
                    value={rateData.weightUnit}
                    onChange={(e) =>
                      setRateData({ ...rateData, weightUnit: e.target.value })
                    }
                  >
                    <option value="lbs">lbs</option>
                    <option value="kg">kg</option>
                  </select>
                </div>
              </div>

              {/* LTL Dimensions */}
              {rateData.loadType === "LTL" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium flex items-center gap-2">
                      <Package className="w-4 h-4" />
                      Package Dimensions
                    </h4>
                    <select
                      className="px-2 py-1 border rounded text-sm"
                      value={rateData.dimensionUnit}
                      onChange={(e) =>
                        setRateData({
                          ...rateData,
                          dimensionUnit: e.target.value,
                        })
                      }
                    >
                      {dimensionUnits.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))}
                    </select>
                  </div>

                  {rateData.ltlPackages.map((pkg, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-3 bg-gray-50"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">
                          Package {index + 1}
                        </span>
                        {rateData.ltlPackages.length > 1 && (
                          <button
                            onClick={() => removeLtlPackage(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="number"
                          placeholder="Length"
                          className="px-2 py-1 border rounded text-sm"
                          value={pkg.length}
                          onChange={(e) =>
                            updateLtlPackage(index, "length", e.target.value)
                          }
                        />
                        <input
                          type="number"
                          placeholder="Width"
                          className="px-2 py-1 border rounded text-sm"
                          value={pkg.width}
                          onChange={(e) =>
                            updateLtlPackage(index, "width", e.target.value)
                          }
                        />
                        <input
                          type="number"
                          placeholder="Height"
                          className="px-2 py-1 border rounded text-sm"
                          value={pkg.height}
                          onChange={(e) =>
                            updateLtlPackage(index, "height", e.target.value)
                          }
                        />
                        <input
                          type="number"
                          placeholder="Weight"
                          className="px-2 py-1 border rounded text-sm"
                          value={pkg.weight}
                          onChange={(e) =>
                            updateLtlPackage(index, "weight", e.target.value)
                          }
                        />
                        <input
                          type="number"
                          placeholder="Pieces"
                          className="px-2 py-1 border rounded text-sm"
                          value={pkg.pieces}
                          onChange={(e) =>
                            updateLtlPackage(index, "pieces", e.target.value)
                          }
                        />
                        <label className="flex items-center gap-1 text-sm">
                          <input
                            type="checkbox"
                            checked={pkg.stackable}
                            onChange={(e) =>
                              updateLtlPackage(
                                index,
                                "stackable",
                                e.target.checked
                              )
                            }
                          />
                          Stackable
                        </label>
                      </div>
                    </div>
                  ))}

                  <button
                    onClick={addLtlPackage}
                    className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400"
                  >
                    + Add Package
                  </button>
                </div>
              )}

              <button
                onClick={calculateQuickRate}
                className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium flex items-center justify-center gap-2"
                disabled={!rateData.originCity || !rateData.destinationCity}
              >
                <TrendingUp className="w-4 h-4" />
                Calculate Rates
              </button>
            </div>

            {/* Results */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Rate Estimates
              </h3>

              {!rateEstimates ? (
                <div className="bg-gray-100 p-8 rounded-lg text-center">
                  <div className="text-gray-500 mb-2 text-4xl">📊</div>
                  <p className="text-gray-600">
                    Enter route details and click "Calculate Rates"
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">
                      Carrier Cost
                    </h4>
                    <div className="text-center">
                      <div className="text-xl font-bold text-green-800">
                        ${rateEstimates.carrierCost.avg.toLocaleString()}
                      </div>
                      <div className="text-sm text-green-600">
                        Range: ${rateEstimates.carrierCost.min.toLocaleString()}{" "}
                        - ${rateEstimates.carrierCost.max.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">
                      Client Quote
                    </h4>
                    <div className="text-center">
                      <div className="text-xl font-bold text-blue-800">
                        ${rateEstimates.clientQuote.avg.toLocaleString()}
                      </div>
                      <div className="text-sm text-blue-600">
                        Range: ${rateEstimates.clientQuote.min.toLocaleString()}{" "}
                        - ${rateEstimates.clientQuote.max.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">
                      Profit Analysis
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-yellow-800">
                          ${(rateEstimates.clientQuote.avg - rateEstimates.carrierCost.avg).toLocaleString()}
                        </div>
                        <div className="text-xs text-yellow-600">Gross Profit</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-yellow-800">
                          {rateEstimates.markupPercentage}%
                        </div>
                        <div className="text-xs text-yellow-600">Markup</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-100 p-3 rounded">
                    <p className="font-medium text-sm mb-1">{rateEstimates.confidence}</p>
                    <p className="text-gray-600 text-xs">
                      Calculation: {rateEstimates.calculationMethod}
                    </p>
                    {rateEstimates.matchLevel && (
                      <p className="text-gray-600 text-xs">
                        Match type: {rateEstimates.matchLevel}
                      </p>
                    )}
                    {rateEstimates.totalCubicFeet && (
                      <p className="text-gray-600 text-xs">
                        Total volume: {rateEstimates.totalCubicFeet.toFixed(2)} ft³
                      </p>
                    )}
                    {rateEstimates.historicalCount > 0 && (
                      <p className="text-green-600 text-xs font-medium mt-1">
                        ✓ Based on your actual pricing history
                      </p>
                    )}
                  </div>

                  {similarLoads.length > 0 && (
                    <div className="mt-4">
                      <button
                        onClick={() => setShowSimilarLoads(!showSimilarLoads)}
                        className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
                      >
                        <History className="w-4 h-4" />
                        {showSimilarLoads ? "Hide" : "Show"} recent similar loads ({similarLoads.length})
                        <ChevronDown className={`w-4 h-4 transform ${showSimilarLoads ? "rotate-180" : ""}`} />
                      </button>
                      
                      {showSimilarLoads && (
                        <div className="mt-2 space-y-2">
                          {similarLoads.map((load, index) => (
                            <div key={index} className="text-xs bg-white border rounded p-2">
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="font-medium">{load.clientName}</div>
                                  <div className="text-gray-600">
                                    {load.shipperCity || load.originCity} → {load.consigneeCity || load.destinationCity}
                                  </div>
                                  <div className="text-gray-500">
                                    {load.equipmentType} • {formatDateShort(load.pickupDate)}
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="font-medium text-green-600">
                                    ${parseFloat(load.carrierCost).toLocaleString()}
                                  </div>
                                  <div className="font-medium text-blue-600">
                                    ${parseFloat(load.clientQuote).toLocaleString()}
                                  </div>
                                  <div className="text-gray-500">
                                    {(((parseFloat(load.clientQuote) - parseFloat(load.carrierCost)) / parseFloat(load.carrierCost)) * 100).toFixed(1)}%
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  <button
                    onClick={createLoadFromRate}
                    className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium"
                  >
                    Create Load with These Rates
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Load Confirmation Modal
const LoadConfirmation = ({ data, onClose, showToast }) => {
  const [manualNotesShipment, setManualNotesShipment] = useState(
    data?.manualNotes || ""
  );
  const [manualNotesPickupDelivery, setManualNotesPickupDelivery] =
    useState("");
  const confirmationRef = useRef(null);

  if (!data) return null;

  const generatePDF = async () => {
    const printWindow = window.open("", "_blank");

    // Create a clone to avoid modifying the original
    const clonedContent = confirmationRef.current.cloneNode(true);

    // Update the manual notes in the cloned content
    const notesTextarea = clonedContent.querySelector("textarea");
    if (notesTextarea) {
      const notesDiv = document.createElement("div");
      notesDiv.className = "text-sm whitespace-pre-wrap";
      notesDiv.textContent = manualNotesShipment;
      notesTextarea.parentNode.replaceChild(notesDiv, notesTextarea);
    }

    const content = clonedContent.innerHTML;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Load Confirmation - ${data.loadNumber || "PENDING"}</title>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            @media print {
              body { margin: 0; }
            }
          </style>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        </head>
        <body>
          ${content}
          <script>
            // Auto print after loading
            window.onload = function() {
              setTimeout(function() {
                window.print();
              }, 500);
            }
          </script>
        </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();

    showToast.success("Print window opened. Select 'Save as PDF' to download.");
  };

  const downloadPDF = () => {
    // Since we can't generate actual PDFs without a library,
    // we'll use the print method with instructions
    generatePDF();
    showToast.info(
      "In the print dialog, select 'Save as PDF' as your printer to download the file."
    );
  };

  const sendEmail = () => {
    const subject = `Load Confirmation - ${data.loadNumber || "PENDING"}`;
    const body = `Please find attached the load confirmation for load ${
      data.loadNumber || "PENDING"
    }.`;
    window.location.href = `mailto:${
      data.carrierEmail
    }?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    showToast.info("Opening email client...");
  };

  const calculateTotalWeight = () => {
    if (data.loadType === "LTL" && data.ltlPackages) {
      const total = data.ltlPackages.reduce(
        (sum, pkg) => sum + (parseFloat(pkg.weight) || 0),
        0
      );
      return total;
    }
    return parseFloat(data.weight) || 0;
  };

  // Get booking date or use current date
  const getBookingDate = () => {
    if (data.bookingDate) {
      return formatDateShort(data.bookingDate);
    }
    return formatDateShort(new Date().toISOString());
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-screen overflow-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-blue-600">
              Load Confirmation
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div
            ref={confirmationRef}
            className="border-2 border-gray-300 rounded-lg p-8 bg-white"
            style={{ fontFamily: "Arial, sans-serif", fontSize: "16px" }}
          >
            {/* Header */}
            <div className="mb-8">
              <div className="mb-6">
                <FreightwayLogo className="w-96 h-24 mx-auto mb-6" />
                <h1 className="text-center text-3xl font-bold mb-4 tracking-wider">
                  LOAD CONFIRMATION
                </h1>
              </div>

              <div className="text-center text-sm text-gray-600 mb-4">
                32 Fallingbrook Crescent, Toronto, ON M1N 1A9
                <br />
                Phone: 416-694-4447 | Email: ben@freightway.ca
                <br />
                www.freightway.ca
              </div>

              <div className="bg-gray-100 p-3 rounded-lg text-center">
                <p className="text-sm font-medium text-gray-700">LOAD NUMBER</p>
                <p className="text-2xl font-bold text-black">
                  {data.loadNumber || "PENDING"}
                </p>
              </div>
            </div>

            {/* Carrier Information */}
            <div className="mb-6 p-4 border border-gray-300 rounded">
              <h3 className="font-bold text-lg mb-3 text-black">
                CARRIER INFORMATION
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-base">
                    <span className="font-semibold">Company:</span>{" "}
                    {data.carrierName || "TBD"}
                  </p>
                  <p className="text-base">
                    <span className="font-semibold">Contact:</span>{" "}
                    {data.carrierContact || "TBD"}
                  </p>
                </div>
                <div>
                  <p className="text-base">
                    <span className="font-semibold">Phone:</span>{" "}
                    {data.carrierPhone || "TBD"}
                  </p>
                  <p className="text-base">
                    <span className="font-semibold">Email:</span>{" "}
                    {data.carrierEmail || "TBD"}
                  </p>
                </div>
              </div>
            </div>

            {/* Rate Section */}
            <div className="mb-6 grid grid-cols-2 gap-4">
              <div className="p-3 border border-gray-300 rounded bg-green-50">
                <p className="text-sm font-semibold text-gray-700">
                  Agreed Carrier Rate
                </p>
                <p className="text-xl font-bold">
                  ${data.carrierCost} {data.carrierCurrency} All In
                </p>
              </div>
              <div className="p-3 border border-gray-300 rounded">
                <p className="text-sm text-gray-600">Booking Date</p>
                <p className="text-base">{getBookingDate()}</p>
              </div>
            </div>

            {/* Shipment Details */}
            <div className="mb-6 p-4 border border-gray-300 rounded">
              <h3 className="font-bold text-lg mb-3 text-black">
                SHIPMENT DETAILS
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-base">
                    <span className="font-semibold">Equipment Type:</span>{" "}
                    {data.equipmentType}
                  </p>
                  <p className="text-base">
                    <span className="font-semibold">Load Type:</span>{" "}
                    {data.loadType}
                  </p>
                  <p className="text-base">
                    <span className="font-semibold">Total Weight:</span>{" "}
                    {calculateTotalWeight()} {data.weightUnit}
                  </p>
                  <p className="text-base">
                    <span className="font-semibold">Commodity:</span>{" "}
                    {data.commodity}
                  </p>
                </div>
                <div>
                  <p className="text-base">
                    <span className="font-semibold">PO #:</span>{" "}
                    {data.poNumber || "N/A"}
                  </p>
                  <p className="text-base">
                    <span className="font-semibold">Units:</span>{" "}
                    {data.pieces || "1"} {data.unitType || "Pallet"}
                  </p>
                  {data.customsBroker && (
                    <p className="text-base">
                      <span className="font-semibold">Customs Broker:</span>{" "}
                      {data.customsBroker}
                    </p>
                  )}
                </div>
              </div>

              {/* LTL Package Dimensions */}
              {data.loadType === "LTL" &&
                data.ltlPackages &&
                data.ltlPackages.length > 0 && (
                  <div className="mt-4 p-3 border border-gray-300 rounded">
                    <p className="font-semibold text-base mb-2">
                      Package Dimensions:
                    </p>
                    <div className="space-y-1">
                      {data.ltlPackages.map((pkg, index) => (
                        <div key={index} className="text-base">
                          <span className="font-medium">
                            Package {index + 1}:
                          </span>{" "}
                          {pkg.length || "0"}x{pkg.width || "0"}x
                          {pkg.height || "0"} {data.dimensionUnit || "inches"}
                          {pkg.stackable && " - Stackable"}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* Manual Notes Section */}
              <div className="mt-4 p-3 border border-gray-300 rounded bg-yellow-50">
                <label className="font-semibold text-base">
                  Additional Shipment Notes:
                </label>
                <textarea
                  className="w-full mt-1 p-2 border border-gray-300 rounded text-base"
                  rows="3"
                  value={manualNotesShipment}
                  onChange={(e) => setManualNotesShipment(e.target.value)}
                  placeholder="Enter any additional shipment notes here..."
                />
              </div>
            </div>

            {/* Pickup/Delivery Information */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 border-2 border-green-600 rounded">
                <h4 className="font-bold mb-2 text-green-800">
                  PICKUP LOCATION
                </h4>
                <p className="font-semibold text-base">{data.shipperName}</p>
                <p className="text-base">
                  {data.shipperContact && (
                    <>
                      Contact: {data.shipperContact}
                      <br />
                    </>
                  )}
                  {data.shipperAddress}
                </p>
                <p className="text-base">
                  {data.shipperCity}, {data.shipperState} {data.shipperZip}
                </p>
                {data.shipperPhone && (
                  <p className="text-base">
                    <span className="font-semibold">Phone:</span> {data.shipperPhone}
                  </p>
                )}
                <p className="text-base mt-2">
                  <span className="font-semibold">Date:</span>{" "}
                  {formatDateSafe(data.pickupDate)}
                </p>
                <p className="text-base">
                  <span className="font-semibold">Time:</span>{" "}
                  {data.pickupTime || "TBD"}
                </p>
                {data.pickupAppointment && (
                  <p className="text-base font-semibold text-red-600 mt-1">
                    APPOINTMENT REQUIRED
                  </p>
                )}
              </div>
              <div className="p-4 border-2 border-red-600 rounded">
                <h4 className="font-bold mb-2 text-red-800">
                  DELIVERY LOCATION
                </h4>
                <p className="font-semibold text-base">{data.consigneeName}</p>
                <p className="text-base">
                  {data.consigneeContact && (
                    <>
                      Contact: {data.consigneeContact}
                      <br />
                    </>
                  )}
                  {data.consigneeAddress}
                </p>
                <p className="text-base">
                  {data.consigneeCity}, {data.consigneeState}{" "}
                  {data.consigneeZip}
                </p>
                {data.consigneePhone && (
                  <p className="text-base">
                    <span className="font-semibold">Phone:</span> {data.consigneePhone}
                  </p>
                )}
                <p className="text-base mt-2">
                  <span className="font-semibold">Date:</span>{" "}
                  {formatDateSafe(data.deliveryDate)}
                </p>
                <p className="text-base">
                  <span className="font-semibold">Time:</span>{" "}
                  {data.deliveryTime || "TBD"}
                </p>
                {data.deliveryAppointment && (
                  <p className="text-base font-semibold text-red-600 mt-1">
                    APPOINTMENT REQUIRED
                  </p>
                )}
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="text-xs border border-gray-400 rounded p-4 bg-gray-50">
              <div className="text-center text-sm text-gray-600 mb-3">
                Freightway Logistics Inc. | 32 Fallingbrook Crescent, Toronto,
                ON M1N 1A9 | 416-694-4447
              </div>

              <h4 className="font-bold text-sm mb-2 text-black">
                TERMS AND CONDITIONS
              </h4>
              <div className="space-y-2 text-gray-700">
  <div className="text-center font-bold text-sm mb-2">
    📄 Freightway Logistics Inc. – Load Confirmation Terms & Conditions
  </div>
  <div className="text-center text-xs mb-3">
    <strong>Address:</strong> 32 Fallingbrook Crescent, Toronto, ON M1N 1A9 | 
    <strong>Phone:</strong> 416-694-4447 | <strong>Email:</strong> ben@freightway.ca
  </div>
  <ol className="list-decimal list-inside space-y-2 text-xs">
    <li>
      <strong>Carrier Agreement:</strong> By accepting this load, Carrier confirms it holds all required operating authority, permits, and insurance to transport the freight legally and safely across all jurisdictions involved.
    </li>
    <li>
      <strong>Insurance Requirements:</strong> Carrier must maintain active insurance policies with the following minimum coverages: Cargo Insurance: $1,000,000 CAD, Commercial General Liability: $2,000,000 CAD, Automobile Liability: $1,000,000 CAD, Workers' Compensation: As required by law. Proof of insurance must be supplied upon request. Loads may be canceled immediately if insurance is invalid or insufficient.
    </li>
    <li>
      <strong>Liability Disclaimer:</strong> Freightway Logistics Inc. accepts zero liability—under any circumstances—for cargo loss, damage, delay, or any issues involving the freight. Carrier assumes full responsibility for the care, custody, condition, and timely delivery of the shipment. All claims, penalties, or liabilities—including those for delays, lost time, freight damage, or third-party consequences—are solely the Carrier's responsibility.
    </li>
    <li>
      <strong>Payment Terms:</strong> Net 30 days from date of receipt of: (1) Valid invoice (include GST/HST number if applicable) (2) Clean and legible POD. All documents must be submitted to ben@freightway.ca. Incomplete or unreadable documentation will delay payment.
    </li>
    <li>
      <strong>Indemnification:</strong> Carrier shall fully indemnify and hold harmless Freightway Logistics Inc., its officers, agents, and clients from all losses, claims, suits, fines, or expenses arising from Carrier's operations, negligence, subcontractors, or performance of service.
    </li>
    <li>
      <strong>Cross-Border:</strong> Carrier must be FAST-approved and maintain valid PARS/PAPS credentials. Carrier is fully liable for all customs compliance, paperwork accuracy, border delays, and related penalties.
    </li>
    <li>
      <strong>Confidentiality:</strong> Carrier must not disclose any rates, customer details, or shipment information. Breach will result in permanent removal from future business and possible legal action.
    </li>
    <li>
      <strong>Governing Law:</strong> This agreement is governed by the laws of Ontario, Canada. All disputes will be resolved via binding arbitration in Toronto, ON.
    </li>
  </ol>
</div>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={generatePDF}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center gap-2"
            >
              <Printer className="w-4 h-4" />
              Print
            </button>
            <button
              onClick={downloadPDF}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </button>
            <button
              onClick={sendEmail}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Email to Carrier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Bill of Lading Modal
const BillOfLading = ({ data, onClose, showToast }) => {
  const bolRef = useRef(null);
  
  if (!data) return null;

  const generatePDF = async () => {
    const printWindow = window.open("", "_blank");

    const content = bolRef.current.innerHTML;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Bill of Lading - ${data.loadNumber || "PENDING"}</title>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; margin: 10px; }
            @media print { body { margin: 0; } }
          </style>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        </head>
        <body>
          ${content}
          <script>
            // Auto print after loading
            window.onload = function() {
              setTimeout(function() {
                window.print();
              }, 500);
            }
          </script>
        </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();

    showToast.success("Print window opened. Select 'Save as PDF' to download.");
  };

  const downloadPDF = () => {
    // Since we can't generate actual PDFs without a library,
    // we'll use the print method with instructions
    generatePDF();
    showToast.info(
      "In the print dialog, select 'Save as PDF' as your printer to download the file."
    );
  };

  const calculateTotalWeight = () => {
    if (data.loadType === "LTL" && data.ltlPackages) {
      const total = data.ltlPackages.reduce(
        (sum, pkg) => sum + (parseFloat(pkg.weight) || 0),
        0
      );
      return total;
    }
    return parseFloat(data.weight) || 0;
  };

  const formatDimensions = (pkg) => {
    if (!pkg.length && !pkg.width && !pkg.height) return "N/A";
    const unit = data.dimensionUnit || "inches";
    const length = pkg.length || "0";
    const width = pkg.width || "0";
    const height = pkg.height || "0";
    return `${length}x${width}x${height} ${unit} (${pkg.pieces || 1} pcs)`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-screen overflow-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-blue-600">Bill of Lading</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div
            ref={bolRef}
            className="border border-gray-400 p-6 bg-white"
            style={{ fontFamily: "Arial, sans-serif", minHeight: "11in" }}
          >
            {/* Header */}
            <div className="mb-6">
              <div className="flex justify-between items-start mb-4">
                <FreightwayLogo className="w-64 h-16" />
                <div className="text-right">
                  <h1 className="text-xl font-bold mb-1">BILL OF LADING</h1>
                  <p className="text-sm">
                    1 SHIPPING COPY - ORIGINAL - NOT NEGOTIABLE
                  </p>
                  <p className="text-xs mt-1">
                    THANK YOU FOR USING Freightway Logistics
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm">
                    FREIGHT CHARGES ARE PREPAID ON THIS
                    <br />
                    BILL OF LADING UNLESS MARKED COLLECT
                  </p>
                  <div className="flex gap-8 mt-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" checked readOnly />
                      <span className="text-sm">PREPAID</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" readOnly />
                      <span className="text-sm">COLLECT</span>
                    </label>
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-sm">
                    <span className="font-semibold">TRACKING NO.:</span>{" "}
                    {data.loadNumber || "TBD"}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">CUSTOMER ORDER NO.:</span>{" "}
                    {data.poNumber || "TBD"}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">PURCHASE ORDER NO.:</span>{" "}
                    {data.poNumber || "TBD"}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">DATE SHIPPED:</span>{" "}
                    {formatDateShort(data.pickupDate)}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="border border-gray-400 p-2">
                  <p className="text-xs font-bold">PLACE PRO-BILL HERE</p>
                  <div className="h-16"></div>
                </div>
              </div>
            </div>

            {/* Carrier Information */}
            <div className="mb-4 p-3 border-2 border-gray-600 bg-gray-50">
              <h3 className="font-bold text-sm mb-2">CARRIER INFORMATION</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm">
                    <span className="font-semibold">Carrier Name:</span> {data.carrierName || "TO BE DETERMINED"}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Contact:</span> {data.carrierContact || "TBD"}
                  </p>
                </div>
                <div>
                  <p className="text-sm">
                    <span className="font-semibold">Phone:</span> {data.carrierPhone || "TBD"}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Email:</span> {data.carrierEmail || "TBD"}
                  </p>
                </div>
              </div>
            </div>

            {/* Shipper/Consignee */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="border border-gray-400 p-3">
                <h3 className="font-bold text-sm mb-2">SHIPPER (FROM)</h3>
                <p className="text-sm font-semibold">{data.shipperName}</p>
                <p className="text-xs">ADDRESS: {data.shipperAddress}</p>
                <p className="text-xs">
                  CITY: {data.shipperCity}, PROVINCE/STATE: {data.shipperState}{" "}
                  POSTAL CODE: {data.shipperZip}
                </p>
                <p className="text-xs mt-1">
                  SHIPPER'S PHONE NO.: {data.shipperPhone}
                </p>
              </div>
              <div className="border border-gray-400 p-3">
                <h3 className="font-bold text-sm mb-2">CONSIGNEE (TO)</h3>
                <p className="text-sm font-semibold">{data.consigneeName}</p>
                <p className="text-xs">ADDRESS: {data.consigneeAddress}</p>
                <p className="text-xs">
                  CITY: {data.consigneeCity}, PROVINCE/STATE:{" "}
                  {data.consigneeState} POSTAL CODE: {data.consigneeZip}
                </p>
                <p className="text-xs mt-1">
                  CONSIGNEE'S PHONE NO.: {data.consigneePhone}
                </p>
              </div>
            </div>

            {/* Third Party Billing - Improved Layout */}
            <div className="mb-4 p-3 border border-gray-400">
              <p className="text-sm font-bold mb-2">
                BILL THIRD PARTY FREIGHT CHARGES TO:
              </p>
              <div className="text-sm">
                <p>
                  <strong>NAME/COMPANY:</strong> Freightway Logistics Inc.
                </p>
                <p>
                  <strong>ADDRESS:</strong> 32 Fallingbrook Crescent, Toronto,
                  ON M1N 1A9
                </p>
                <p>
                  <strong>CONTACT:</strong> Ben Ghaffarian
                </p>
                <p>
                  <strong>PHONE:</strong> 416-694-4447
                </p>
              </div>
            </div>

            {/* Commodity Table */}
            <table className="w-full border-collapse mb-4 text-sm">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-600 p-1 text-xs">
                    NUMBER SHIPPING UNITS
                  </th>
                  <th className="border border-gray-600 p-1 text-xs">HM*</th>
                  <th className="border border-gray-600 p-1 text-xs">
                    KIND OF PACKAGING, DESCRIPTION OF ARTICLES, SPECIAL MARKS
                    AND EXCEPTIONS
                  </th>
                  <th className="border border-gray-600 p-1 text-xs">
                    WEIGHT (LBS) Subject to Corrections
                  </th>
                  <th className="border border-gray-600 p-1 text-xs">
                    NMFC NO.
                  </th>
                  <th className="border border-gray-600 p-1 text-xs">CLASS</th>
                </tr>
              </thead>
              <tbody>
                {data.loadType === "LTL" && data.ltlPackages ? (
                  data.ltlPackages.map((pkg, index) => (
                    <tr key={index}>
                      <td className="border border-gray-400 p-1 text-center text-xs">
                        {pkg.pieces || "1"} {data.unitType || "Pallet"}
                      </td>
                      <td className="border border-gray-400 p-1 text-center text-xs">
                        {data.hazmat ? "X" : ""}
                      </td>
                      <td className="border border-gray-400 p-1 text-xs">
                        {data.commodity}
                        {pkg.length && pkg.width && pkg.height && (
                          <span className="ml-2">
                            ({pkg.length}x{pkg.width}x{pkg.height}{" "}
                            {data.dimensionUnit || "inches"})
                          </span>
                        )}
                      </td>
                      <td className="border border-gray-400 p-1 text-center text-xs">
                        {pkg.weight || "0"}
                      </td>
                      <td className="border border-gray-400 p-1 text-center text-xs">
                        {data.nmfcNumber || ""}
                      </td>
                      <td className="border border-gray-400 p-1 text-center text-xs">
                        {data.freightClass || ""}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="border border-gray-400 p-1 text-center text-xs">
                      {data.pieces || "1"} {data.unitType || "Pallet"}
                    </td>
                    <td className="border border-gray-400 p-1 text-center text-xs">
                      {data.hazmat ? "X" : ""}
                    </td>
                    <td className="border border-gray-400 p-1 text-xs">
                      {data.commodity}
                    </td>
                    <td className="border border-gray-400 p-1 text-center text-xs">
                      {data.weight || "0"}
                    </td>
                    <td className="border border-gray-400 p-1 text-center text-xs">
                      {data.nmfcNumber || ""}
                    </td>
                    <td className="border border-gray-400 p-1 text-center text-xs">
                      {data.freightClass || ""}
                    </td>
                  </tr>
                )}
                {/* Empty rows for additional space */}
                {[
                  ...Array(Math.max(0, 5 - (data.ltlPackages?.length || 1))),
                ].map((_, i) => (
                  <tr key={`empty-${i}`}>
                    <td className="border border-gray-400 p-1 h-6">&nbsp;</td>
                    <td className="border border-gray-400 p-1">&nbsp;</td>
                    <td className="border border-gray-400 p-1">&nbsp;</td>
                    <td className="border border-gray-400 p-1">&nbsp;</td>
                    <td className="border border-gray-400 p-1">&nbsp;</td>
                    <td className="border border-gray-400 p-1">&nbsp;</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Consignee Signature */}
            <div className="mb-4 border border-gray-400 p-2">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold">
                    CONSIGNEE'S SIGNATURE - RECEIVED IN GOOD ORDER:
                  </p>
                  <div className="border-b border-gray-400 mt-4 mb-1"></div>
                </div>
                <div>
                  <p className="text-xs font-bold">PRINT - CONSIGNEE NAME:</p>
                  <div className="border-b border-gray-400 mt-4 mb-1"></div>
                </div>
              </div>
            </div>

            {/* Legal Terms and Conditions */}
            <div className="mt-6 p-4 border border-gray-400 bg-gray-50">
  <p className="text-xs font-bold mb-3 text-center">
    ✅ Complete BOL Terms with Declared Value Section
  </p>
  
  <div className="mb-3 p-2 bg-white border border-gray-300">
    <p className="text-xs font-bold">Declared Value (CAD): ___________________</p>
    <p className="text-xs italic">*If left blank, liability is limited to $4.41 CAD/kg (~$2.00/lb) under Ontario statute.*</p>
  </div>

  <div className="space-y-2 text-xs">
    <div>
      <p className="font-bold">1. Liability & Custody</p>
      <p>Carrier assumes full and unconditional responsibility for the cargo from pickup through delivery—including loss, damage, delay, theft, contamination, misrouting, or shortage. Freightway Logistics Inc. accepts no liability, acting strictly as a freight broker.</p>
    </div>
    
    <div>
      <p className="font-bold">2. No Double Brokering / Subcontracting</p>
      <p>Carrier shall not re-broker, subcontract, or reassign this load without written approval. Unauthorized loading results in non-payment and full liability.</p>
    </div>
    
    <div>
      <p className="font-bold">3. Seal & Cargo Integrity</p>
      <p>Carrier is responsible for verifying and maintaining seal integrity and load security. Broken, missing, or tampered seals constitute grounds for full cargo claim liability.</p>
    </div>
    
    <div>
      <p className="font-bold">4. POD & Documentation Compliance</p>
      <p>Carrier must submit a clean, signed POD and invoice to ben@freightway.ca within 24 hours of delivery. Payment is Net 30 days from receipt of complete documentation. Carrier is responsible for any delays or deductions arising from incomplete paperwork.</p>
    </div>
    
    <div>
      <p className="font-bold">5. Indemnification</p>
      <p>Carrier shall indemnify, defend, and hold harmless Freightway Logistics Inc., its officers, agents, and clients from all claims, liabilities, damages, losses, or costs arising from Carrier's operations, omissions, or use of subcontractors.</p>
    </div>
    
    <div>
      <p className="font-bold">6. Jurisdiction & Dispute Resolution</p>
      <p>This BOL is governed by Ontario law. All disputes shall be resolved by binding arbitration in Toronto, Ontario. Carrier waives right to litigate in other jurisdictions.</p>
    </div>
    
    <div>
      <p className="font-bold">7. Non‑Circumvention</p>
      <p>Carrier agrees not to solicit or accept cargo from any shipper or consignee introduced by Freightway Logistics Inc., directly or indirectly, for 12 months following delivery. Breach results in legal action and injunctive relief.</p>
    </div>
  </div>

  <div className="grid grid-cols-2 gap-4 mt-4">
    <div className="border-t border-gray-600 pt-2">
      <p className="text-xs">SHIPPER SIGNATURE</p>
    </div>
    <div className="border-t border-gray-600 pt-2">
      <p className="text-xs">CARRIER SIGNATURE / PER</p>
    </div>
  </div>
</div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={generatePDF}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center gap-2"
            >
              <Printer className="w-4 h-4" />
              Print
            </button>
            <button
              onClick={downloadPDF}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Safety Check Component - New!
const DataSafetyCheck = ({ loads = [] }) => {
  return (
    <div className="fixed bottom-20 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
      <Shield className="w-5 h-5" />
      <span>Data Safe: {loads.length} loads in localStorage</span>
    </div>
  );
};

// Main TruckingTMS Component - Part 1
const TruckingTMS = () => {
  const [currentView, setCurrentView] = useState("dashboard");
  const [showRateCalculator, setShowRateCalculator] = useState(false);
  const [editingLoad, setEditingLoad] = useState(null);
  const [documentData, setDocumentData] = useState(null);
  const [loads, setLoads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [dimensionUnit, setDimensionUnit] = useState("inches");
  const [showDataSafety, setShowDataSafety] = useState(true);
  const { toasts, toast, removeToast } = useToast();

  const [stops, setStops] = useState([
    {
      type: "pickup",
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      contact: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      appointment: false,
    },
  ]);

  const [ltlPackages, setLtlPackages] = useState([
    {
      length: "",
      width: "",
      height: "",
      weight: "",
      pieces: "1",
      stackable: true,
    },
  ]);

  const [formData, setFormData] = useState({
    clientName: "",
    origin: "",
    destination: "",
    originCity: "",
    originState: "",
    destinationCity: "",
    destinationState: "",
    equipmentType: "Dry Van",
    loadType: "FTL",
    carrierName: "",
    carrierPhone: "",
    carrierContact: "",
    carrierEmail: "",
    carrierCost: "",
    carrierCurrency: "CAD",
    clientQuote: "",
    clientCurrency: "CAD",
    status: "Quoted",
    loadStatus: "Quoted", // Changed default from "Booked" to "Quoted"
    pickupDate: new Date().toISOString().split("T")[0],
    deliveryDate: "",
    weight: "",
    weightUnit: "lbs",
    commodity: "",
    loadNumber: "", // Changed from referenceNumber
    poNumber: "",
    shipperName: "",
    shipperAddress: "",
    shipperCity: "",
    shipperState: "",
    shipperZip: "",
    shipperContact: "",
    shipperPhone: "",
    shipperEmail: "", // Added
    pickupTime: "",
    pickupTimeEnd: "",
    pickupAppointment: false,
    pickupNumber: "",
    consigneeName: "",
    consigneeAddress: "",
    consigneeCity: "",
    consigneeState: "",
    consigneeZip: "",
    consigneeContact: "",
    consigneePhone: "",
    consigneeEmail: "", // Added
    deliveryTime: "",
    deliveryTimeEnd: "",
    deliveryAppointment: false,
    deliveryInstructions: "",
    dockHours: "",
    customsBroker: "", // Added
    notes: "",
    specialInstructions: "",
    manualNotes: "", // Added for manual info area
    pieces: "1",
    unitType: "Pallet",
    packageType: "Pallet",
    dimensionUnit: "inches", // Added
    hazmat: false,
    nmfcNumber: "",
    freightClass: "",
    declaredValue: "",
    cod: false,
    codAmount: "",
    codFeeTerms: "Collect",
  });

  const equipmentTypes = [
    "Dry Van",
    "Flatbed",
    "Flatbed (Tarped)",
    "Reefer",
    "Step Deck",
    "RGN",
    "Power Only",
    "Hotshot",
    "Box Truck",
    "Rolltite",
    "Sprinter Van",
    "Ocean Shipment",
    "Air Shipment",
  ];

  const statusOptions = ["Quoted", "Won"]; // Changed from ["Quoted", "Won", "Lost"]
  const loadStatusOptions = ["Quoted", "Booked", "In Transit", "Delivered"];
  const currencyOptions = ["CAD", "USD"];
  const dimensionUnits = ["inches", "cm", "feet"];

  const unitTypes = [
    "Pallet",
    "Skid",
    "Box",
    "Crate",
    "Bundle",
    "Roll",
    "Machine",
    "Mold",
    "Container",
    "Other",
  ];

  // Data Safety Check on mount
  useEffect(() => {
    console.log('🔍 TMS Starting - Checking for existing data...');
    try {
      const existingData = localStorage.getItem('tms_loads');
      if (existingData) {
        const parsedData = JSON.parse(existingData);
        console.log(`✅ Found ${parsedData.length} existing loads`);
      } else {
        console.log('📦 No existing data found - starting fresh');
      }
    } catch (error) {
      console.error('Error checking data:', error);
    }

    // Hide safety indicator after 5 seconds
    setTimeout(() => setShowDataSafety(false), 5000);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const firebaseLoads = await getAllLoads();
        setLoads(firebaseLoads);
      } catch (error) {
        console.error("Error fetching loads:", error);
        toast.error("Failed to load data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Auto-expand ltlPackages array when pieces change
  useEffect(() => {
    if (formData.loadType === "LTL" && formData.pieces) {
      const targetCount = parseInt(formData.pieces) || 1;
      const currentCount = ltlPackages.length;

      if (targetCount > currentCount) {
        // Add new packages
        const newPackages = [...ltlPackages];
        for (let i = currentCount; i < targetCount; i++) {
          newPackages.push({
            length: "",
            width: "",
            height: "",
            weight: "",
            pieces: "1",
            stackable: true,
          });
        }
        setLtlPackages(newPackages);
      } else if (targetCount < currentCount) {
        // Remove extra packages
        setLtlPackages(ltlPackages.slice(0, targetCount));
      }
    }
  }, [formData.pieces, formData.loadType, ltlPackages.length]);

  const getUniqueValues = (field) => {
    const values = loads
      .map((load) => load[field])
      .filter((value) => value && value.trim());
    return [...new Set(values)].sort();
  };

  const calculateProfit = () => {
    const cost = parseFloat(formData.carrierCost) || 0;
    const quote = parseFloat(formData.clientQuote) || 0;
    return quote - cost;
  };

  const resetForm = () => {
    setFormData({
      clientName: "",
      origin: "",
      destination: "",
      originCity: "",
      originState: "",
      destinationCity: "",
      destinationState: "",
      equipmentType: "Dry Van",
      loadType: "FTL",
      carrierName: "",
      carrierPhone: "",
      carrierContact: "",
      carrierEmail: "",
      carrierCost: "",
      carrierCurrency: "CAD",
      clientQuote: "",
      clientCurrency: "CAD",
      status: "Quoted",
      loadStatus: "Quoted",
      pickupDate: new Date().toISOString().split("T")[0],
      deliveryDate: "",
      weight: "",
      weightUnit: "lbs",
      commodity: "",
      loadNumber: "",
      poNumber: "",
      shipperName: "",
      shipperAddress: "",
      shipperCity: "",
      shipperState: "",
      shipperZip: "",
      shipperContact: "",
      shipperPhone: "",
      shipperEmail: "",
      pickupTime: "",
      pickupTimeEnd: "",
      pickupAppointment: false,
      pickupNumber: "",
      consigneeName: "",
      consigneeAddress: "",
      consigneeCity: "",
      consigneeState: "",
      consigneeZip: "",
      consigneeContact: "",
      consigneePhone: "",
      consigneeEmail: "",
      deliveryTime: "",
      deliveryTimeEnd: "",
      deliveryAppointment: false,
      deliveryInstructions: "",
      dockHours: "",
      customsBroker: "",
      notes: "",
      specialInstructions: "",
      manualNotes: "",
      pieces: "1",
      unitType: "Pallet",
      packageType: "Pallet",
      dimensionUnit: "inches",
      hazmat: false,
      nmfcNumber: "",
      freightClass: "",
      declaredValue: "",
      cod: false,
      codAmount: "",
      codFeeTerms: "Collect",
    });

    setStops([
      {
        type: "pickup",
        name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        contact: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        appointment: false,
      },
    ]);

    setLtlPackages([
      {
        length: "",
        width: "",
        height: "",
        weight: "",
        pieces: "1",
        stackable: true,
      },
    ]);
  };

  const updateLtlPackage = (index, field, value) => {
    const newPackages = [...ltlPackages];
    // Ensure the array has enough elements
    while (newPackages.length <= index) {
      newPackages.push({
        length: "",
        width: "",
        height: "",
        weight: "",
        pieces: "1",
        stackable: true,
      });
    }
    newPackages[index][field] = value;
    setLtlPackages(newPackages);
  };

  const addLtlPackage = () => {
    setLtlPackages([
      ...ltlPackages,
      {
        length: "",
        width: "",
        height: "",
        weight: "",
        pieces: "1",
        stackable: true,
      },
    ]);
  };

  const removeLtlPackage = (index) => {
    if (ltlPackages.length > 1) {
      setLtlPackages(ltlPackages.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = async () => {
    if (
      !formData.clientName ||
      !formData.carrierCost ||
      !formData.clientQuote
    ) {
      toast.error("Please fill in required fields");
      return;
    }

    try {
      const profit = calculateProfit();
      const loadData = {
        ...formData,
        profit,
      };

      // Ensure origin and destination are set
      if (!loadData.origin && loadData.originCity && loadData.originState) {
        loadData.origin = `${loadData.originCity}, ${loadData.originState}`;
      }
      if (
        !loadData.destination &&
        loadData.destinationCity &&
        loadData.destinationState
      ) {
        loadData.destination = `${loadData.destinationCity}, ${loadData.destinationState}`;
      }

      if (stops.length > 1) {
        loadData.stops = stops;
      }

      if (formData.loadType === "LTL" && parseInt(formData.pieces) > 0) {
        loadData.ltlPackages = ltlPackages.slice(0, parseInt(formData.pieces));
        loadData.dimensionUnit = formData.dimensionUnit; // Ensure dimension unit is saved
      }

      if (editingLoad && editingLoad.id) {
        await saveLoad({ ...loadData, id: editingLoad.id });
        setLoads(
          loads.map((load) =>
            load.id === editingLoad.id
              ? { ...loadData, id: editingLoad.id }
              : load
          )
        );
        toast.success("Load updated successfully!");
      } else {
        const id = await saveLoad(loadData);
        setLoads([...loads, { ...loadData, id }]);
        toast.success("Load created successfully!");
      }

      resetForm();
      setCurrentView("history");
      setEditingLoad(null);
    } catch (error) {
      console.error("Error saving load:", error);
      toast.error("Failed to save load");
    }
  };

  const handleEdit = (load) => {
    setFormData(load);
    if (load.stops && load.stops.length > 0) {
      setStops(load.stops);
    }
    if (load.ltlPackages && load.ltlPackages.length > 0) {
      setLtlPackages(load.ltlPackages);
    } else if (load.loadType === "LTL") {
      // Initialize ltlPackages based on pieces count
      const pieces = parseInt(load.pieces) || 1;
      const packages = [];
      for (let i = 0; i < pieces; i++) {
        packages.push({
          length: "",
          width: "",
          height: "",
          weight: "",
          pieces: "1",
          stackable: true,
        });
      }
      setLtlPackages(packages);
    }
    setEditingLoad(load);
    setCurrentView("edit");
  };

  const handleDelete = async (loadId) => {
    if (window.confirm("Delete this load?")) {
      try {
        await deleteLoad(loadId);
        setLoads(loads.filter((l) => l.id !== loadId));
        toast.success("Load deleted successfully");
      } catch (error) {
        console.error("Error deleting load:", error);
        toast.error("Failed to delete load");
      }
    }
  };

  const handleDuplicate = (load) => {
    // Create a new load object without the ID and dates
    const { id, createdAt, updatedAt, bookingDate, ...duplicatedData } = load;

    // Set new dates
    const newLoad = {
      ...duplicatedData,
      pickupDate: new Date().toISOString().split("T")[0],
      deliveryDate: "",
      loadNumber: "",
      status: "Quoted",
      loadStatus: "Quoted",
    };

    // Set form data
    setFormData(newLoad);

    // Set stops if they exist
    if (load.stops && load.stops.length > 0) {
      setStops(load.stops.map((stop) => ({ ...stop, date: "" })));
    }

    // Reset LTL packages to default based on pieces count
    if (load.loadType === "LTL") {
      const pieces = parseInt(load.pieces) || 1;
      const emptyPackages = [];
      for (let i = 0; i < pieces; i++) {
        emptyPackages.push({
          length: "",
          width: "",
          height: "",
          weight: "",
          pieces: "1",
          stackable: true,
        });
      }
      setLtlPackages(emptyPackages);
    } else {
      // Reset to default single package for non-LTL loads
      setLtlPackages([
        {
          length: "",
          width: "",
          height: "",
          weight: "",
          pieces: "1",
          stackable: true,
        },
      ]);
    }

    // Switch to create view
    setEditingLoad(null);
    setCurrentView("create");

    toast.info("Load duplicated - please update dates, load number, and package dimensions");
  };

  const handleCreateFromCalculator = (loadData) => {
    setFormData({ ...formData, ...loadData });
    setEditingLoad(null);
    setCurrentView("create");
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Quoted":
        return "bg-gray-100 text-gray-800";
      case "Booked":
        return "bg-blue-100 text-blue-800";
      case "In Transit":
        return "bg-yellow-100 text-yellow-800";
      case "Delivered":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Quoted":
        return <Clock className="w-4 h-4" />;
      case "Booked":
        return <Calendar className="w-4 h-4" />;
      case "In Transit":
        return <Truck className="w-4 h-4" />;
      case "Delivered":
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getActiveLoads = () => {
    return loads.filter(
      (load) => load.loadStatus === "Booked" || load.loadStatus === "In Transit"
    );
  };

  const getFilteredLoads = () => {
    let filteredLoads = currentView === "dashboard" ? getActiveLoads() : loads;

    if (searchTerm) {
      filteredLoads = filteredLoads.filter(
        (load) =>
          load.clientName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          load.origin?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          load.destination?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          load.carrierName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          load.shipperName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          load.consigneeName
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          (load.loadNumber &&
            load.loadNumber.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (load.id && load.id.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return filteredLoads;
  };

  const addStop = (type) => {
    setStops([
      ...stops,
      {
        type,
        name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        contact: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        appointment: false,
      },
    ]);
  };

  const removeStop = (index) => {
    if (stops.length > 1) {
      setStops(stops.filter((_, i) => i !== index));
    }
  };

  const updateStop = (index, field, value) => {
    const newStops = [...stops];
    newStops[index][field] = value;
    setStops(newStops);
  };

  const formatPickupDestination = (load) => {
    const pickup =
      load.shipperCity ||
      load.originCity ||
      load.origin?.split(",")[0] ||
      "TBD";
    const destination =
      load.consigneeCity ||
      load.destinationCity ||
      load.destination?.split(",")[0] ||
      "TBD";
    return `${pickup} - ${destination}`;
  };

  const formatDimensionsDisplay = (load) => {
    if (load.loadType !== "LTL" || !load.ltlPackages) return "N/A";

    const totalPackages = load.ltlPackages.length;
    const totalCubicFeet = load.ltlPackages.reduce((total, pkg) => {
      const pieces = parseInt(pkg.pieces) || 1;
      const cubicFeet = calculateCubicFeet(
        pkg.length,
        pkg.width,
        pkg.height,
        load.dimensionUnit || "inches"
      );
      return total + cubicFeet * pieces;
    }, 0);

    return `${totalPackages} pkg(s), ${totalCubicFeet.toFixed(1)} ft³`;
  };

  // CREATE/EDIT VIEW
  if (currentView === "create" || currentView === "edit") {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <ToastContainer toasts={toasts} removeToast={removeToast} />
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={() => {
                setCurrentView("history");
                resetForm();
                setEditingLoad(null);
              }}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <h1 className="text-2xl font-bold">
              {currentView === "edit" ? "Edit Load" : "New Load"}
            </h1>
          </div>

          <div className="space-y-6">
            {/* Basic Info */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <User className="w-5 h-5" />
                Basic Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Client Name *
                  </label>
                  <EditableDropdown
                    value={formData.clientName}
                    onChange={(value) =>
                      setFormData({ ...formData, clientName: value })
                    }
                    options={getUniqueValues("clientName")}
                    placeholder="Enter client name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Load # (Manual Entry)
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.loadNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        loadNumber: e.target.value,
                      })
                    }
                    placeholder="Enter load number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    PO Number
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.poNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, poNumber: e.target.value })
                    }
                    placeholder="Purchase order"
                  />
                </div>
              </div>
            </div>

            {/* Route Info */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Navigation className="w-5 h-5" />
                Route Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Origin
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-lg"
                      value={formData.originCity}
                      onChange={(e) =>
                        setFormData({ ...formData, originCity: e.target.value })
                      }
                      placeholder="City"
                    />
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-lg"
                      value={formData.originState}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          originState: e.target.value,
                        })
                      }
                      placeholder="State/Province"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Destination
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-lg"
                      value={formData.destinationCity}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          destinationCity: e.target.value,
                        })
                      }
                      placeholder="City"
                    />
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-lg"
                      value={formData.destinationState}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          destinationState: e.target.value,
                        })
                      }
                      placeholder="State/Province"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Shipper Information */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                Shipper Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Company Name
                  </label>
                  <EditableDropdown
                    value={formData.shipperName}
                    onChange={(value) =>
                      setFormData({ ...formData, shipperName: value })
                    }
                    options={getUniqueValues("shipperName")}
                    placeholder="Shipper company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.shipperContact}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        shipperContact: e.target.value,
                      })
                    }
                    placeholder="Contact person"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.shipperAddress}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        shipperAddress: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">City</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.shipperCity}
                    onChange={(e) =>
                      setFormData({ ...formData, shipperCity: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    State/Province
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.shipperState}
                    onChange={(e) =>
                      setFormData({ ...formData, shipperState: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    ZIP/Postal
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.shipperZip}
                    onChange={(e) =>
                      setFormData({ ...formData, shipperZip: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.shipperPhone}
                    onChange={(e) =>
                      setFormData({ ...formData, shipperPhone: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.shipperEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, shipperEmail: e.target.value })
                    }
                    placeholder="shipper@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Pickup Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.pickupDate}
                    onChange={(e) =>
                      setFormData({ ...formData, pickupDate: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Time Window
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.pickupTime}
                    onChange={(e) =>
                      setFormData({ ...formData, pickupTime: e.target.value })
                    }
                    placeholder="8:00 AM - 5:00 PM"
                  />
                </div>
                <div className="flex items-center">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.pickupAppointment}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          pickupAppointment: e.target.checked,
                        })
                      }
                      className="mr-2"
                    />
                    Appointment Required
                  </label>
                </div>
              </div>
            </div>

            {/* Consignee Information */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                Consignee Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Company Name
                  </label>
                  <EditableDropdown
                    value={formData.consigneeName}
                    onChange={(value) =>
                      setFormData({ ...formData, consigneeName: value })
                    }
                    options={getUniqueValues("consigneeName")}
                    placeholder="Consignee company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.consigneeContact}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        consigneeContact: e.target.value,
                      })
                    }
                    placeholder="Contact person"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.consigneeAddress}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        consigneeAddress: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">City</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.consigneeCity}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        consigneeCity: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    State/Province
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.consigneeState}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        consigneeState: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    ZIP/Postal
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.consigneeZip}
                    onChange={(e) =>
                      setFormData({ ...formData, consigneeZip: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.consigneePhone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        consigneePhone: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.consigneeEmail}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        consigneeEmail: e.target.value,
                      })
                    }
                    placeholder="consignee@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Delivery Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.deliveryDate}
                    onChange={(e) =>
                      setFormData({ ...formData, deliveryDate: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Time Window
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.deliveryTime}
                    onChange={(e) =>
                      setFormData({ ...formData, deliveryTime: e.target.value })
                    }
                    placeholder="8:00 AM - 5:00 PM"
                  />
                </div>
                <div className="flex items-center">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.deliveryAppointment}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          deliveryAppointment: e.target.checked,
                        })
                      }
                      className="mr-2"
                    />
                    Appointment Required
                  </label>
                </div>
              </div>
            </div>

            {/* Load Details */}
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Package className="w-5 h-5" />
                Load Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Equipment Type
                  </label>
                  <select
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.equipmentType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        equipmentType: e.target.value,
                      })
                    }
                  >
                    {equipmentTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Load Type
                  </label>
                  <div className="flex gap-4 pt-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="FTL"
                        checked={formData.loadType === "FTL"}
                        onChange={(e) =>
                          setFormData({ ...formData, loadType: e.target.value })
                        }
                        className="mr-2"
                      />
                      FTL
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="LTL"
                        checked={formData.loadType === "LTL"}
                        onChange={(e) =>
                          setFormData({ ...formData, loadType: e.target.value })
                        }
                        className="mr-2"
                      />
                      LTL
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Load Status
                  </label>
                  <select
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.loadStatus}
                    onChange={(e) =>
                      setFormData({ ...formData, loadStatus: e.target.value })
                    }
                  >
                    {loadStatusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Total Weight
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      className="flex-1 px-3 py-2 border rounded-lg"
                      value={formData.weight}
                      onChange={(e) =>
                        setFormData({ ...formData, weight: e.target.value })
                      }
                    />
                    <select
                      className="px-3 py-2 border rounded-lg"
                      value={formData.weightUnit}
                      onChange={(e) =>
                        setFormData({ ...formData, weightUnit: e.target.value })
                      }
                    >
                      <option value="lbs">lbs</option>
                      <option value="kg">kg</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Commodity
                  </label>
                  <EditableDropdown
                    value={formData.commodity}
                    onChange={(value) =>
                      setFormData({ ...formData, commodity: value })
                    }
                    options={getUniqueValues("commodity")}
                    placeholder="Enter commodity"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Units
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.pieces}
                    onChange={(e) =>
                      setFormData({ ...formData, pieces: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Unit Type
                  </label>
                  <select
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.unitType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        unitType: e.target.value,
                        packageType: e.target.value,
                      })
                    }
                  >
                    {unitTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Customs Broker
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.customsBroker}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        customsBroker: e.target.value,
                      })
                    }
                    placeholder="Enter customs broker name"
                  />
                </div>
              </div>

              {/* Manual Notes Area */}
              <div className="mt-4">
                <label className="block text-sm font-medium mb-1">
                  Manual Notes / Additional Information
                </label>
                <textarea
                  className="w-full px-3 py-2 border rounded-lg"
                  rows="3"
                  value={formData.manualNotes}
                  onChange={(e) =>
                    setFormData({ ...formData, manualNotes: e.target.value })
                  }
                  placeholder="Enter any additional information about this load..."
                />
              </div>

              {/* LTL Dimensions */}
              {formData.loadType === "LTL" && (
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium flex items-center gap-2">
                      <Ruler className="w-4 h-4" />
                      Package Dimensions
                    </h4>
                    <select
                      className="px-2 py-1 border rounded text-sm"
                      value={formData.dimensionUnit}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dimensionUnit: e.target.value,
                        })
                      }
                    >
                      {dimensionUnits.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))}
                    </select>
                  </div>

                  {Array.from(
                    { length: Math.min(parseInt(formData.pieces) || 1, 20) },
                    (_, i) => i
                  ).map((index) => {
                    // Ensure ltlPackages has an entry for this index
                    if (!ltlPackages[index]) {
                      const newPackages = [...ltlPackages];
                      newPackages[index] = {
                        length: "",
                        width: "",
                        height: "",
                        weight: "",
                        pieces: "1",
                        stackable: true,
                      };
                      setLtlPackages(newPackages);
                    }

                    return (
                      <div
                        key={index}
                        className="border rounded-lg p-3 bg-white"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">
                            Package {index + 1}
                          </span>
                          <label className="flex items-center gap-1 text-sm">
                            <input
                              type="checkbox"
                              checked={ltlPackages[index]?.stackable || false}
                              onChange={(e) =>
                                updateLtlPackage(
                                  index,
                                  "stackable",
                                  e.target.checked
                                )
                              }
                            />
                            <Layers className="w-3 h-3" />
                            Stackable
                          </label>
                        </div>
                        <div className="grid grid-cols-5 gap-2">
                          <input
                            type="number"
                            placeholder="Length"
                            className="px-2 py-1 border rounded text-sm"
                            value={ltlPackages[index]?.length || ""}
                            onChange={(e) =>
                              updateLtlPackage(index, "length", e.target.value)
                            }
                          />
                          <input
                            type="number"
                            placeholder="Width"
                            className="px-2 py-1 border rounded text-sm"
                            value={ltlPackages[index]?.width || ""}
                            onChange={(e) =>
                              updateLtlPackage(index, "width", e.target.value)
                            }
                          />
                          <input
                            type="number"
                            placeholder="Height"
                            className="px-2 py-1 border rounded text-sm"
                            value={ltlPackages[index]?.height || ""}
                            onChange={(e) =>
                              updateLtlPackage(index, "height", e.target.value)
                            }
                          />
                          <input
                            type="number"
                            placeholder="Weight"
                            className="px-2 py-1 border rounded text-sm"
                            value={ltlPackages[index]?.weight || ""}
                            onChange={(e) =>
                              updateLtlPackage(index, "weight", e.target.value)
                            }
                          />
                          <input
                            type="number"
                            placeholder="Pieces"
                            className="px-2 py-1 border rounded text-sm"
                            value={ltlPackages[index]?.pieces || "1"}
                            onChange={(e) =>
                              updateLtlPackage(index, "pieces", e.target.value)
                            }
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Carrier Info */}
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Truck className="w-5 h-5" />
                Carrier Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Carrier Name
                  </label>
                  <EditableDropdown
                    value={formData.carrierName}
                    onChange={(value) =>
                      setFormData({ ...formData, carrierName: value })
                    }
                    options={getUniqueValues("carrierName")}
                    placeholder="Enter carrier name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Carrier Contact
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.carrierContact}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        carrierContact: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Carrier Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.carrierPhone}
                    onChange={(e) =>
                      setFormData({ ...formData, carrierPhone: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Carrier Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.carrierEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, carrierEmail: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Pricing
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Carrier Cost *
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.carrierCost}
                    onChange={(e) =>
                      setFormData({ ...formData, carrierCost: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Currency
                  </label>
                  <select
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.carrierCurrency}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        carrierCurrency: e.target.value,
                      })
                    }
                  >
                    {currencyOptions.map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Client Quote *
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.clientQuote}
                    onChange={(e) =>
                      setFormData({ ...formData, clientQuote: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Currency
                  </label>
                  <select
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.clientCurrency}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        clientCurrency: e.target.value,
                      })
                    }
                  >
                    {currencyOptions.map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Status
                  </label>
                  <select
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.value })
                    }
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium mb-1">
                  Estimated Profit
                </label>
                <div
                  className={`px-3 py-2 border rounded-lg font-bold text-lg ${
                    calculateProfit() >= 0
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  ${calculateProfit().toFixed(2)}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t">
                <p className="text-sm font-medium mb-2">Preview Documents</p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setDocumentData({ type: "confirmation", data: formData })
                    }
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center gap-2"
                  >
                    <FileSignature className="w-4 h-4" />
                    Preview Load Confirmation
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setDocumentData({ type: "bol", data: formData })
                    }
                    className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    Preview Bill of Lading
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-6 pt-6 border-t">
            <button
              onClick={handleSubmit}
              className="flex items-center gap-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              <Save className="w-4 h-4" />
              {currentView === "edit" ? "Update Load" : "Save Load"}
            </button>
            <button
              onClick={() => {
                setCurrentView("history");
                resetForm();
                setEditingLoad(null);
              }}
              className="px-6 py-2 border text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </div>

        {documentData && documentData.type === "confirmation" && (
          <LoadConfirmation
            data={documentData.data}
            onClose={() => setDocumentData(null)}
            showToast={toast}
          />
        )}

        {documentData && documentData.type === "bol" && (
          <BillOfLading
            data={documentData.data}
            onClose={() => setDocumentData(null)}
            showToast={toast}
          />
        )}
      </div>
    );
  }

  // DASHBOARD VIEW
  if (currentView === "dashboard") {
    const activeLoads = getActiveLoads();
    const bookedCount = activeLoads.filter(
      (l) => l.loadStatus === "Booked"
    ).length;
    const inTransitCount = activeLoads.filter(
      (l) => l.loadStatus === "In Transit"
    ).length;
    const deliveredCount = loads.filter(
      (l) => l.loadStatus === "Delivered"
    ).length;
    const quotedCount = loads.filter(
      (l) => l.loadStatus === "Quoted"
    ).length;

    return (
      <div className="min-h-screen bg-gray-50 p-3">
        <ToastContainer toasts={toasts} removeToast={removeToast} />
        {showDataSafety && <DataSafetyCheck loads={loads} />}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow p-4 mb-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold flex items-center gap-2">
                  <Truck className="w-6 h-6 text-blue-600" />
                  Freightway Logistics TMS
                </h1>
                <p className="text-gray-600 text-sm">Dashboard - Active Loads</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentView("history")}
                  className="px-3 py-1.5 text-sm bg-gray-500 text-white rounded-lg hover:bg-gray-600 flex items-center gap-1"
                >
                  <History className="w-4 h-4" />
                  History
                </button>
                <button
                  onClick={() => setShowRateCalculator(true)}
                  className="px-3 py-1.5 text-sm bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center gap-1"
                >
                  <Calculator className="w-4 h-4" />
                  Rate
                </button>
                <button
                  onClick={() => setCurrentView("create")}
                  className="px-3 py-1.5 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-1"
                >
                  <Plus className="w-4 h-4" />
                  New
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-4">
            <div className="bg-white rounded-lg shadow p-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-600">Total</p>
                  <p className="text-2xl font-bold">{loads.length}</p>
                </div>
                <BarChart3 className="w-8 h-8 text-gray-400" />
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow p-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-700">Quoted</p>
                  <p className="text-2xl font-bold text-gray-600">
                    {quotedCount}
                  </p>
                </div>
                <Clock className="w-8 h-8 text-gray-400" />
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg shadow p-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-blue-800">Booked</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {bookedCount}
                  </p>
                </div>
                <Calendar className="w-8 h-8 text-blue-400" />
              </div>
            </div>
            <div className="bg-yellow-50 rounded-lg shadow p-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-yellow-800">Transit</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {inTransitCount}
                  </p>
                </div>
                <Truck className="w-8 h-8 text-yellow-400" />
              </div>
            </div>
            <div className="bg-green-50 rounded-lg shadow p-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-green-800">Delivered</p>
                  <p className="text-2xl font-bold text-green-600">
                    {deliveredCount}
                  </p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow">
            <div className="p-3 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">
                  Active Loads (Booked & In Transit)
                </h2>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-8 pr-3 py-1.5 text-sm border rounded-lg"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {loading ? (
              <div className="text-center py-8">
                <div className="text-gray-500">Loading...</div>
              </div>
            ) : getFilteredLoads().length === 0 ? (
              <div className="text-center py-8">
                <Truck className="w-10 h-10 mx-auto text-gray-400 mb-3" />
                <h3 className="text-base font-medium text-gray-900 mb-1">
                  No active loads
                </h3>
                <p className="text-sm text-gray-500">
                  All loads have been delivered or are quoted
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Load #
                      </th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Client
                      </th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Route
                      </th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Pickup
                      </th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Delivery
                      </th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Status
                      </th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {getFilteredLoads().map((load) => (
                      <tr key={load.id} className="hover:bg-gray-50">
                        <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-blue-600">
                          {load.loadNumber || load.id.slice(0, 8).toUpperCase()}
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm">
                          {load.clientName}
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm">
                          <div className="text-xs">
                            <div className="font-medium">
                              {load.shipperCity || load.originCity || "TBD"}
                            </div>
                            <div className="text-gray-500">
                              {load.consigneeCity || load.destinationCity || "TBD"}
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm">
                          {formatDateShort(load.pickupDate)}
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm">
                          {formatDateShort(load.deliveryDate) || "TBD"}
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          <span
                            className={`px-2 py-0.5 rounded-full text-xs font-medium flex items-center gap-1 w-fit ${getStatusColor(
                              load.loadStatus
                            )}`}
                          >
                            {getStatusIcon(load.loadStatus)}
                            {load.loadStatus}
                          </span>
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          <div className="flex gap-1">
                            <button
                              onClick={() => handleEdit(load)}
                              className="text-blue-600 hover:text-blue-800 p-1"
                              title="Edit"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() =>
                                setDocumentData({
                                  type: "confirmation",
                                  data: load,
                                })
                              }
                              className="text-green-600 hover:text-green-800 p-1"
                              title="Confirmation"
                            >
                              <FileSignature className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() =>
                                setDocumentData({ type: "bol", data: load })
                              }
                              className="text-purple-600 hover:text-purple-800 p-1"
                              title="BOL"
                            >
                              <FileText className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {showRateCalculator && (
          <QuickRateCalculator
            onClose={() => setShowRateCalculator(false)}
            onCreateLoad={handleCreateFromCalculator}
            loads={loads}
          />
        )}

        {documentData && documentData.type === "confirmation" && (
          <LoadConfirmation
            data={documentData.data}
            onClose={() => setDocumentData(null)}
            showToast={toast}
          />
        )}

        {documentData && documentData.type === "bol" && (
          <BillOfLading
            data={documentData.data}
            onClose={() => setDocumentData(null)}
            showToast={toast}
          />
        )}
      </div>
    );
  }

  // HISTORY VIEW
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <ToastContainer toasts={toasts} removeToast={removeToast} />
      {showDataSafety && <DataSafetyCheck loads={loads} />}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-3">
                <History className="w-8 h-8 text-gray-600" />
                Load History
              </h1>
              <p className="text-gray-600 mt-1">All shipments</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setCurrentView("dashboard")}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Dashboard
              </button>
              <button
                onClick={() => setShowRateCalculator(true)}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center gap-2"
              >
                <Calculator className="w-4 h-4" />
                Quick Rate
              </button>
              <button
                onClick={() => setCurrentView("create")}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                New Load
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by load #, client, carrier, origin, destination..."
                className="w-full pl-10 pr-4 py-3 border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="px-4 py-3 border rounded-lg hover:bg-gray-50 flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          {loading ? (
            <div className="text-center py-12">
              <div className="text-gray-500">Loading...</div>
            </div>
          ) : loads.length === 0 ? (
            <div className="text-center py-12">
              <Truck className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No loads yet
              </h3>
              <p className="text-gray-500 mb-4">
                Create your first load to get started
              </p>
              <button
                onClick={() => setCurrentView("create")}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Create Load
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr className="text-xs">
                    <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase">
                      Load #
                    </th>
                    <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase">
                      Client Name
                    </th>
                    <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase">
                      Pickup - Destination
                    </th>
                    <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase">
                      Pickup Date
                    </th>
                    <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase">
                      Price Cost
                    </th>
                    <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase">
                      Price Quoted
                    </th>
                    <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase">
                      Quoted/Won
                    </th>
                    <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase">
                      Carrier Name
                    </th>
                    <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase">
                      Dimensions
                    </th>
                    <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {getFilteredLoads().map((load) => (
                    <tr key={load.id} className="hover:bg-gray-50">
                      <td className="px-4 py-2 whitespace-nowrap font-medium text-blue-600 text-sm">
                        {load.loadNumber || load.id.slice(0, 8).toUpperCase()}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">
                        {load.clientName}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">
                        {formatPickupDestination(load)}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">
                        {formatDateShort(load.pickupDate)}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">
                        ${load.carrierCost} {load.carrierCurrency}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">
                        ${load.clientQuote} {load.clientCurrency}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            load.status === "Won"
                              ? "bg-green-100 text-green-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {load.status}
                        </span>
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">
                        {load.carrierName || "TBD"}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">
                        {formatDimensionsDisplay(load)}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(load)}
                            className="text-blue-600 hover:text-blue-800"
                            title="Edit"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDuplicate(load)}
                            className="text-orange-600 hover:text-orange-800"
                            title="Duplicate"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() =>
                              setDocumentData({
                                type: "confirmation",
                                data: load,
                              })
                            }
                            className="text-green-600 hover:text-green-800"
                            title="Load Confirmation"
                          >
                            <FileSignature className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() =>
                              setDocumentData({ type: "bol", data: load })
                            }
                            className="text-purple-600 hover:text-purple-800"
                            title="Bill of Lading"
                          >
                            <FileText className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(load.id)}
                            className="text-red-600 hover:text-red-800"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {showRateCalculator && (
        <QuickRateCalculator
          onClose={() => setShowRateCalculator(false)}
          onCreateLoad={handleCreateFromCalculator}
          loads={loads}
        />
      )}

      {documentData && documentData.type === "confirmation" && (
        <LoadConfirmation
          data={documentData.data}
          onClose={() => setDocumentData(null)}
          showToast={toast}
        />
      )}

      {documentData && documentData.type === "bol" && (
        <BillOfLading
          data={documentData.data}
          onClose={() => setDocumentData(null)}
          showToast={toast}
        />
      )}
    </div>
  );
};

export default TruckingTMS;
