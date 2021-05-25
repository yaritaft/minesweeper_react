import axios from "axios";

const getHeaders = ()=>{
    return {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "authorization": localStorage.getItem("authorization")
    };
}

export const apiGet = async  <ReqType>(
    path: string,
    headers?: any,
    params?: any
): Promise<ReqType> => {
  return await axios.get(process.env.REACT_APP_BASE_URL!+path, {
    headers: getHeaders(),
    params
  });
};

export const apiPost = async <ReqType>(
  path: string,
  body?: object,
  headers?: object,
  params?: object
): Promise<ReqType> => {
  const response = axios
    .post(process.env.REACT_APP_BASE_URL! + path, body, {
      headers: getHeaders()
      ,
    })
    .then((response) => {
        console.log(JSON.stringify(response));
        return {data: response.data, status: response.status};
    })
    .catch(err => {
        console.log(err);
        return err;
      });
  return response;
};

export const apiPatch = async <ReqType>(
  path: string,
  body?: object,
  headers?: object,
  params?: object
): Promise<ReqType> => {
  const response = axios
    .patch(process.env.REACT_APP_BASE_URL! + path, body, {
      headers: getHeaders()
      ,
    })
    .then((response) => {
        console.log(JSON.stringify(response));
        return {data: response.data, status: response.status};
    })
    .catch(err => {
        console.log(err);
        return err;
      });
  return response;
};