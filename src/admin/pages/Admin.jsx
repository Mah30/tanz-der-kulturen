import AdminLayout from "../components/AdminLayout";
import Home from "../components/Home";
import { Outlet } from "react-router-dom";

export default function Admin() {
  return (
    <AdminLayout>
      <Home />
    </AdminLayout>
  );
}
