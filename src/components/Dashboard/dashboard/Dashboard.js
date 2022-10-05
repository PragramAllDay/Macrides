import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SideBarAdmin from "../SidebarForAdmin/SidebarAdmin";
import { setRole } from "../../../reducers/Role";
import axios from "axios";
import SideBar from "../SideBarInvestor/Sidebar";
import SimpleAccordion from "../FAQSInvestor/SimpleAccordion";
import Footer from "../Footer/Footer";

const Dashboard = () => {
  const { jwt, identifier } = useSelector((state) => state.login.value);
  const { name } = useSelector((state) => state.Role.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = localStorage.getItem("username", name);

  useEffect(() => {
    // const jwt = localStorage.getItem("jwt");
    const getRole = async () => {
      if (jwt) {
        const response = await axios.get("http://localhost:1337/api/profiles", {
          headers: { Authorization: `Bearer ${jwt}` },
        });
        localStorage.setItem("role", response.data.role.name);
        dispatch(setRole(response.data.role.name));
        console.log(response.data);
      }
    };
    getRole();
  }, [dispatch]);
  const role = localStorage.getItem("role", name);
  console.log(role);

  return (
    <div>
      {role === "Investor" ? (
        <div>
          <SideBar />
          <img
            src="./images/1651837077097-self-drive-car-rental.jpg"
            alt=""
            style={{
              height: " 480px",
              width: "100%",
              objectFit: "cover",
            }}
          />
          <div>
            <div>
              <h1 className="text-4xl font-bold text-center pt-10">
                Welcome {username}
              </h1>
              <div className="pt-20 md:pt-30 lg:pt-20 xl:pt-45 mx-auto flex flex-col">
                <h1 className=" font-bold text-[30] md:text-[28px] lg:text-[30px] xl:text-[40px] 2xl:text-[50px] text-center">
                  FREQUENTLY ASKED QUESTIONS
                </h1>
                <div className="flex justify-center">
                  <div className="pt-20 md:pt-30 lg:pt-20 xl:pt-45 flex flex-col">
                    <SimpleAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <Footer />
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <SideBarAdmin />
          <img
            src="./images/admin.png"
            alt=""
            style={{
              height: " 480px",
              width: "100%",
              objectFit: "cover",
            }}
          />
          <h1 className="text-4xl font-bold text-center pt-10">
            Welcome {username}
          </h1>

          <div className="flex justify-center w-[100%]">
            <div className=" flex flex-col w-[500px]">
              <h1 className="text-2xl font-bold text-center pt-10">
                Your Role
              </h1>
              <p className="text-center pt-10">
                Your role is to respond to the investors handle thier queries.
                Assist them anyway you can. Registration requests will come to
                you. You can accept or reject them after having thorough check
                on the documents. You can also add new cars to the inventory.
                You can also add new drivers to the inventory. You can also add
                new investors to the inventory. You can also add new admins to
                the inventory.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
