import { message } from "ant-design-vue";
import Axios, {
  AxiosRequestConfig,
  type AxiosResponse,
} from "axios";
import { useUserStore } from '@/store/user';

const userStore = useUserStore();

const service = Axios.create({
  timeout: 60 * 10 * 1000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export interface CustomRequestOptionsInit extends AxiosRequestConfig {
  api: string;
  method: 'get' | 'GET' | 'post' | 'POST';
  data?: object;
  params?: object;
  notToast?: boolean;
  [key: string]: any;
}

service.interceptors.request.use(
  (config) => {
    if (userStore.token) {
      config.headers.token = userStore.token;
    }

    config.headers.xmReqRaw = 1;
    config.headers.xmRespRaw = 1;

    return config;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

service.interceptors.response.use(
  async (response: AxiosResponse): Promise<AxiosResponse> => {
    if (response.data && response.data.code >= 0) {
      return response.data;
    } else {
      return Promise.reject(response.data) as any;
    }
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

const request = <T = any>(options: CustomRequestOptionsInit): Promise<T> => {
  
  return service(options.api, options)
    .then((res) => res)
    .catch((err) => {
      if (err && !options.notToast) {
        if (typeof err === "string") {
          message.error(err);
        } else if (typeof err.msg === "string") {
          message.error(err.msg);
        } else if (typeof err.message === "string") {
          message.error(err.message);
        }
      }
      return Promise.reject(err);
    }) as Promise<T>;
};

export { request };