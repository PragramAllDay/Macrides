import { width } from "@mui/system";
import React from "react";
import Header from "../reusableComponents/Header";
import { Blogs } from "./BlogData";
import { Button } from "@mui/material";
import Footer from "../reusableComponents/Footer";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <Header />
      <h1 className="font-bold pt-40 text-[25] md:text-[23px] lg:text-[25px] xl:text-[27px] 2xl:text-[50px] text-center ">
        Our Blogs
      </h1>
      <div className="flex flex-wrap gap-10 pt-20 justify-center">
        {Blogs.map((blog, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "360px",
              }}
            >
              <img
                src={blog.image}
                alt=""
                style={{ height: "200px", width: "350px" }}
              />
              <h3 className="font-bold pt-3">{blog.heading}</h3>
              <p className="pt-3">{blog.desc}</p>
              <Link className="flex justify-center">
                <Button
                  style={{
                    backgroundColor: "#161614",
                    color: "white",
                    "&:hover": { backgroundColor: "#161614" },
                    width: "50%",
                    marginTop: "10px",
                  }}
                >
                  Read More
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
