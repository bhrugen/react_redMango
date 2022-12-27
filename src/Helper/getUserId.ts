import jwt_decode from "jwt-decode";
const getUserId = () => {
  const token = localStorage.getItem("token") ?? "";
  if (token) {
    const decode: {
      id: string;
    } = jwt_decode(token);
    return decode.id;
  }
  return null;
};

export default getUserId;
