
import AxiosFactory from "@src/modules/axios/AxiosFactory";

const EmployeeListInstance  = AxiosFactory.createInstance({
  baseURL:"admin/pages/dashBoard",
});

export default EmployeeListInstance;