import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getCurrentSinhVien,
  updateSinhVien,
} from "../../redux/slice/formSlice";

const Edit = () => {
  const navigate = useNavigate();
  const params = useParams();
  //   console.log(params);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentSinhVien(params));
  }, []);

  const { currentSinhVien } = useSelector((state) => state.formSlice);
  const [hoTen, setHoTen] = useState(currentSinhVien.hoTen);
  const [soDT, setSoDT] = useState(currentSinhVien.soDT);
  const [email, setEmail] = useState(currentSinhVien.email);
  useEffect(() => {
    if (currentSinhVien) {
      setHoTen(currentSinhVien.hoTen);
      setEmail(currentSinhVien.email);
      setSoDT(currentSinhVien.soDT);
    }
  }, [currentSinhVien]);
  const handleHoTenChange = (event) => {
    setHoTen(event.target.value);
  };
  const handleSoDTChange = (event) => {
    setSoDT(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateSinhVien(newSinhVien));
    navigate("/");
    resetForm();
  };
  const newSinhVien = {
    ...currentSinhVien,
    hoTen,
    soDT,
    email,
  };
  const resetForm = () => {
    setHoTen("");
    setSoDT("");
    setEmail("");
  };

  return (
    <div className="bg-gray-400">
      <div className="flex w-full h-screen justify-center items-center">
        <div className="w-1/2 border bg-green-400 text-white p-5">
          <h1 className="text-center text-2xl">Chỉnh sửa thông tin</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="hoTen"
              >
                Họ và tên
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="hoTen"
                type="text"
                name="hoTen"
                placeholder="Họ và tên"
                value={hoTen}
                onChange={handleHoTenChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="soDT"
              >
                Số điện thoại
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="soDT"
                type="text"
                name="soDT"
                placeholder="Số điện thoại"
                value={soDT}
                onChange={handleSoDTChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="py-2 px-5 text-white bg-red-500 cursor-pointer rounded"
              >
                Cập nhật
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
