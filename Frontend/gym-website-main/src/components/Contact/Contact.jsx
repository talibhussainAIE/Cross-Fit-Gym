import React, { useState } from "react";
import Modal from "./Modal";
const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" }); // Form data state
  const [responseMessage, setResponseMessage] = useState(""); // For showing response from backend

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Post form data to backend
      // const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/form`, formData);
      const response = await fetch('http://localhost:5001/api/form',{
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })
      setResponseMessage(response.data.message);
      setFormData({ name: "", email: "", message: "" }); // Reset form fields after submission
      closeModal(); // Close modal after submission
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage("Error submitting form");
    }
  };

  return (
    <>
      <span id="contact"></span>
      <div data-aos="zoom-in" className="dark:bg-black dark:text-white py-14">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-100 dark:bg-dark py-8 px-6">
            <div className="col-span-2 space-y-3">
              <h1 className="text-3xl sm:text-4xl font-bold text-black/80 dark:text-white">
                <span className="text-primary">Work hard now, glow later.</span>{" "}
                Your body reflects the choices you make every day
              </h1>
            </div>
            <div className="sm:grid sm:place-items-center">
              <button
                onClick={openModal}
                className="inline-block font-semibold py-2 px-6 bg-primary text-white hover:bg-primary/80 duration-200 tracking-widest uppercase"
              >
                JOIN US
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
      
        isOpen={isModalOpen}
        onClose={closeModal}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        responseMessage={responseMessage} // Pass response message for feedback
      />
    </>
  );
};

export default Contact;
