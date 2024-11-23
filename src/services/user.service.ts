import axiosInstance from '@/axios';

const getUsers = (queryParams: string, isSearch = false) => {
  const url = `/users${isSearch ? '/search' : ''}${queryParams}`;
  return axiosInstance.get(url);
};

const deleteUser = (id: number) => {
  const url = `/users/${id}`;
  return axiosInstance.delete(url);
};

const updateUser = (id: number, body: any) => {
  const url = `/users/${id}${body}`;
  return axiosInstance.put(url);
};

export const userService = {
  getUsers,
  deleteUser,
  updateUser,
};
