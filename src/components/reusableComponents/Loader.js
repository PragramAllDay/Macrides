// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { setLogin } from "../../reducers/DashboardForm";
// import { setLoginInvester } from "../../reducers/DashboardFormInvester";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useDispatch } from "react-redux";

// const Loader = () => {
//   const { jwt, identifier, role } = useSelector((state) => state.login.value);
//   const { jwtinvester: jwtInvester } = useSelector(
//     (state) => state.loginInvester.value
//   );
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   useEffect(() => {
//     // const jwt = localStorage.getItem("jwt");
//     const getRole = async () => {
//       if (jwt) {
//         const response = await axios.get("http://localhost:1337/api/profiles", {
//           headers: { Authorization: `Bearer ${jwt}` },
//         });
//         dispatch(setLogin(response.data.role.name));
//         console.log(response);
//         if (response.data.role.name === "Authenticated") {
//           navigate("/admin-panel");
//         } else navigate("/");
//       }
//     };

//     getRole();
//   }, [jwt]);
//   console.log(role);
//   return (
//     <div className="text-bold text-[25px] text-center mt-20">Loading...</div>
//   );
// };

// export default Loader;
