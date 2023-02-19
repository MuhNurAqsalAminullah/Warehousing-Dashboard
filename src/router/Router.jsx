import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layout";
import Dashboard from "../page/Dashboard";
import DataBarang from "../page/DataBarang/DataBarang";
import BarangSatuan from "../page/BarangSatuan/BarangSatuan";
import BarangMasuk from "../page/BarangMasuk/BarangMasuk";
import BarangKeluar from "../page/BarangKeluar/BarangKeluar";
import LaporanStok from "../page/LaporanStok/LaporanStok";
import LaporanBarangMasuk from "../page/LaporanMasuk.jsx/LaporanBarangMasuk";
import LaporanBarangKeluar from "../page/LaporanKeluar/LaporanBarangKeluar";
import Login from "../page/Auth/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="data-barang" element={<DataBarang />} />
          <Route path="barang-satuan" element={<BarangSatuan />} />
          <Route path="barang-masuk" element={<BarangMasuk />} />
          <Route path="barang-keluar" element={<BarangKeluar />} />
          <Route path="laporan-stok" element={<LaporanStok />} />
          <Route path="laporan-barang-masuk" element={<LaporanBarangMasuk />} />
          <Route
            path="laporan-barang-keluar"
            element={<LaporanBarangKeluar />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
