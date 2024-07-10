import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const useNavigateOnError = (api: any) => {
  const navigate = useNavigate();

  useEffect(() => {
    const interceptor = api.interceptors.response.use(
      (response: any) => response,
      (error: { response: { status: number; }; }) => {
        if (error.response && error.response.status === 403) {
          navigate("/");
        }
        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.response.eject(interceptor);
    };
  }, [navigate, api]);
};
