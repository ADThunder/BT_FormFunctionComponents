import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { searchSinhVien, setArrSinhVien } from "../../redux/slice/formSlice";

const Form = () => {
  const dispatch = useDispatch();
  const { arrSinhVien } = useSelector((state) => state.formSlice);

  const formik = useFormik({
    initialValues: {
      maSV: "",
      hoTen: "",
      soDT: "",
      email: "",
      search: "",
    },
    onSubmit: (values) => {
      //   console.log(values);
      const checkMaSv = arrSinhVien.some(
        (sinhVien) => sinhVien.maSV === values.maSV
      );
      if (checkMaSv) {
        alert("Mã sinh viên đã tồn tại vui lòng nhập mã khác");
      } else {
        dispatch(setArrSinhVien(values));
        formik.resetForm();
      }
    },
    validationSchema: Yup.object().shape({
      maSV: Yup.string()
        .required("Vui lòng nhập thông tin")
        .matches(/^[0-9]{4,6}$/, "Vui lòng nhập mã sinh viên từ 4 đến 6 số"),
      hoTen: Yup.string()
        .required("Vui lòng nhập đầy đủ thông tin")
        .matches(
          /^[a-zA-Z'-'\sáàảãạăâắằấầặẵẫậéèẻ ẽẹếềểễệóòỏõọôốồổỗộ ơớờởỡợíìỉĩịđùúủũụưứ� �ửữựÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠ ƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼ� ��ỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞ ỠỢỤỨỪỬỮỰỲỴÝỶỸửữựỵ ýỷỹ]*$/,
          "Vui lòng nhập đúng định dạng họ tên"
        ),
      soDT: Yup.string()
        .required("Vui lòng nhập đầy đủ thông tin")
        .matches(
          /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
          "Vui lòng nhập đúng định dạng số điện thoại"
        ),
      email: Yup.string()
        .required("Vui lòng nhập đầy đủ thông tin")
        .matches(
          /^[a-zA-Z0-9._%+-]{1,18}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,18}$/,
          "Vui lòng nhập đúng định dạng email"
        ),
    }),
  });

  return (
    <div>
      <div className="bg-slate-600">
        <h1 className="text-white font-bold py-3 text-2xl text-center">
          Thông tin sinh viên
        </h1>
      </div>
      <div className="container mx-auto">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 grid grid-cols-2 gap-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="maSV"
            >
              Mã sinh viên
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="maSV"
              type="text"
              name="maSV"
              placeholder="Mã sinh viên"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.maSV}
            />
            {formik.touched.maSV && formik.errors.maSV && (
              <p className="text-red-500">{formik.errors.maSV}</p>
            )}
          </div>
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.hoTen}
            />
            {formik.touched.hoTen && formik.errors.hoTen && (
              <p className="text-red-500">{formik.errors.hoTen}</p>
            )}
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.soDT}
            />
            {formik.touched.soDT && formik.errors.soDT && (
              <p className="text-red-500">{formik.errors.soDT}</p>
            )}
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500">{formik.errors.email}</p>
            )}
          </div>
          <div className="mb-4 mt-5">
            <button
              type="submit"
              className="px-2 py-3 bg-green-600 rounded text-white cursor-pointer"
            >
              Thêm sinh viên
            </button>
          </div>
          <div className="mb-4">
            <label
              htmlFor="search"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Search
            </label>
            <input
              name="search"
              id="searchInput"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Search by name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              values={formik.values.search}
            />
            <button
              onClick={() => {
                const action = formik.values.search;
                dispatch(searchSinhVien(action));
              }}
              className="px-2 py-3 bg-green-600 rounded text-white cursor-pointer mt-3"
              type="button"
            >
              Search nào
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
