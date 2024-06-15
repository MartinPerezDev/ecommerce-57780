import { ClockLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ClockLoader color="red" size={60} />
    </div>
  );
};
export default Loading;
