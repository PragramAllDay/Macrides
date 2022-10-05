import React from "react";
import Header from "../reusableComponents/Header";
import "./termsofuse.css";
import Footer from "../reusableComponents/Footer";

const TermsOfUse = () => {
  return (
    <div>
      <Header />
      <img
        src="images\1611245295596-Terms-of-Use-final .jpg"
        alt=""
        className="imageterms"
      />
      <div className="termsOfUseContainer">
        <h1 className="font-bold text-[20] md:text-[23px] lg:text-[25px] xl:text-[30] pt-10 md:pt-20 lg:pt-25 xl:pt-30 pl-20">
          Our Terms
        </h1>
        <br />
        <h2 className="font-bold">
          Please read the Agreement below carefully before using the Mac Ride
          Platform. If you do not agree to be bound by the terms and conditions
          of this agreement, you may not access or use the Mac Ride platform.
        </h2>
        <br />
        <p>
          1. Using the Mac Ride Platform constitutes your agreement to be bound
          by this agreement. Mac Ride may terminate this Agreement with respect
          to you, cease offering or deny access to the Mac Ride Platform at any
          time for any reason without notice.
        </p>
        <br />

        <p>
          Mac Ride may amend this Agreement and its Terms and Conditions from
          time to time. These amendments will be effective upon the posting of
          the updated Agreement at this location or other locations which Mac
          Ride maintains and updates. You continuing to access or use the Mac
          Ride platform after such updates would constitute your consent to be
          bound by this amended Agreement.
        </p>
        <br />
        <p>
          2. Mac Ride Platform is a digital network provider which enables the
          user to arrange and schedule a car for rent for a defined/agreed
          period of time. The cars and te Drivers which the Users book are Third
          Party Providers who are registered with Mac Ride but are independent
          entities. YOU ACCEPT THAT YOUR ABILITY TO OBTAIN TRANSPORTATION,
          THROUGH THE USE OF RENTLY SERVICES DOES NOT ESTABLISH RENTLY AS A
          PROVIDER OF TRANSPORTATION, LOGISTICS OR DELIVERY SERVICES OR AS A
          TRANSPORTATION CARRIER.
        </p>
        <br />
        <h1 className="font-bold">LIMITATION OF LIABILITY</h1>
        <p>
          Mac Ride and its affiliates and its partners shall not be liable for
          indirect, incidental, special, exemplary, punitive or consequential
          damages, including lost profits, lost data, personal injury or
          property damage related to, in connection with, or otherwise resulting
          from any use of the Mac Ride platform or services, even if Mac Ride
          has been advised of the possibility of such damages. Mac Ride and its
          affiliates and its partners shall not be liable for any damages,
          liability or losses arising out of: (a) your use of or reliance on the
          Mac Ride platform or the services or your inability to access or use
          the Mac Ride platform or the services; or (b) any transaction or
          relationship between you and any Driver or other third party provider,
          even if Mac Ride or its affiliates or its partners have been advised
          of the possibility of such damages. Mac Ride and its affiliates and
          its partners shall not be liable for delay or failure in performance
          resulting from causes beyond our reasonable control.
        </p>
      </div>
      <div className="pt-10">
        <Footer />
      </div>
    </div>
  );
};

export default TermsOfUse;
