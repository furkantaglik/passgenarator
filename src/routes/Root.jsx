import { useState, useEffect } from "react";
import { IoMdRefresh } from "react-icons/io";
import { FaCopy } from "react-icons/fa";

export default function Root() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateCustomPassword() {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()-=_+[]{}|;:,.<>?";

    const allChars =
      lowercaseChars + uppercaseChars + numberChars + symbolChars;
    let newPassword = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = getRandomNumber(0, allChars.length - 1);
      newPassword += allChars.charAt(randomIndex);
    }

    console.log("Oluşturulan Şifre:", newPassword);
    setPassword(newPassword);
  }

  function handleCopyPass() {
    navigator.clipboard.writeText(password);
    alert("Şifre Kopyalandı");
  }
  function handleLengthChange(e) {
    const inputValue = e.target.value;

    if (/^\d+$/.test(inputValue)) {
      setLength(inputValue);
    }
  }

  useEffect(() => {
    generateCustomPassword();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-80">
      <div className="p-5 shadow-teal-600 shadow-lg rounded-lg border-teal-400 font-bold mb-5 bg-slate-950 text-white">
        <p>{password}</p>
      </div>
      <div className="flex gap-x-10 border-teal-400 rounded-full border-t-2 shadow-lg shadow-teal-500 ">
        <button
          className="p-2 bg-black rounded-lg hover:text-white font-bold text-2xl"
          onClick={generateCustomPassword}
        >
          <IoMdRefresh />
        </button>
        <input
          value={length}
          onChange={handleLengthChange}
          type="text"
          className="bg-transparent border-0 outline-none w-10 text-center"
          placeholder="16"
        />
        <button
          className="p-2 bg-black rounded-lg hover:text-white font-bold text-2xl"
          onClick={handleCopyPass}
        >
          <FaCopy />
        </button>
      </div>
    </div>
  );
}
