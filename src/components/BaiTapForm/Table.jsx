import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteSinhVien } from "../../redux/slice/formSlice";

const Table = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { arrSinhVien } = useSelector((state) => state.formSlice);
  // console.log(arrSinhVien);

  return (
    <div className="container mx-auto mt-3 w-full ">
      <table className="w-full ">
        <thead className="bg-slate-600 text-white">
          <tr>
            <th>Mã SV</th>
            <th>Họ tên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className="text-center">
          {arrSinhVien.map((item, index) => {
            const { maSV, hoTen, soDT, email } = item;
            return (
              <tr key={index}>
                <td>{maSV}</td>
                <td>{hoTen}</td>
                <td>{soDT}</td>
                <td>{email}</td>
                <td>
                  <div>
                    <button
                      onClick={() => {
                        const action = deleteSinhVien(maSV);
                        dispatch(action);
                      }}
                      className="bg-orange-500 py-2 px-3 rounded me-1"
                    >
                      Xoá
                    </button>
                    <button
                      onClick={() => {
                        navigate(`/edit/${maSV}`);
                      }}
                      className="bg-yellow-500 py-2 px-3 rounded"
                    >
                      Sửa
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
