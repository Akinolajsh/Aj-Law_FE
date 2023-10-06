import axios from "axios";

const url: string = "https://lawaj.onrender.com";

export const RegisterAPI = async (data: any) => {
  try {
    return await axios
      .post(`${url}/api/register-user`, data)
      .then((res: any) => {
        console.log("first222", res.data.data);
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const SignInAPI = async (data: any) => {
  try {
    return await axios.post(`${url}/api/sign-in`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const VerifiedAPI = async (token: any) => {
  try {
    return await axios.patch(`${url}/api/${token}/verify`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const ResetPasswordAPI = async (data: any) => {
  try {
    return await axios
      .patch(`${url}/api/reset-password`, data)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};


export const ChangePasswordAPI = async (token: any, data: any) => {
  try {
    return await axios.patch(
      `${url}/api/${token}/change-password`,
      data
    ).then((res:any)=>{
      return res.data.data
    });
  } catch (error) {
    console.log(error);
  }
};
