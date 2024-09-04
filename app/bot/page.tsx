import Form from "@/components/bot/BotForm";
import React from "react";
import formData from "../data/botform.json";
function page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Form data={formData} />
    </div>
  );
}

export default page;
