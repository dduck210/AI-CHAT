<<<<<<< HEAD
import { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";

const Loading = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-white">
        <span className="text-blue-600 font-semibold text-lg mb-4">
          Loading...
        </span>
        <CircularProgress color="primary" size={48} />
      </div>
    );
  }

  return children;
};

export default Loading;
=======
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const GradientCircularProgress = () => {
  return (
    <>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e01cd5" />
            <stop offset="100%" stopColor="#1CB5E0" />
          </linearGradient>
        </defs>
      </svg>

      <CircularProgress
        sx={{
          "svg circle": { stroke: "url(#my_gradient)" },
        }}
      />
    </>
  );
};

const CustomizedProgressBars = () => {
  return (
    <Box
      sx={{
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <GradientCircularProgress />
    </Box>
  );
};

export default CustomizedProgressBars;
export { GradientCircularProgress };
>>>>>>> 43412db93fe9d94b28b35c76aa372662a9b4db87
