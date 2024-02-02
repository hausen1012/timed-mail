import { request } from '@/axios';


interface GetUserInfo {
  userId: number;
}
export function getUserInfo(params: GetUserInfo) {
  return request({
    api: '/api/getUserInfo',
    method: 'get',
    params
  });
}

interface GetList {
  page: number;
  size: number;
}
export async function getList(data: GetList) {
  return request({
    api: '/api/getList',
    method: 'post',
    data
  });
}