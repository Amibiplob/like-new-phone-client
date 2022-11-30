import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
console.log(isAdmin)
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/admin/user?email=${email}`)
        .then((res) => res.json())
        .then((data) => {

          setIsAdmin(data[0].userRole);
          setIsAdminLoading(false);
        });
    }
  }, [email]);
  return [isAdmin, isAdminLoading];
};
export default useAdmin;
