import axios from "axios";

const studentsUrl = "http://localhost:5000/students";
const staffUrl = "http://localhost:5000/staff";

export const fetchStudents = () => axios.get(studentsUrl);
export const createStudent = (newStudent) =>
  axios.post(studentsUrl, newStudent);
export const getSingleStudent = (id) => axios.get(`${studentsUrl}/${id}`);
export const deleteStudent = (id) => axios.delete(`${studentsUrl}/${id}`);
export const updateStudent = (id, updatedStudent) =>
  axios.patch(`${studentsUrl}/${id}`, updatedStudent);

export const fetchStaff = () => axios.get(staffUrl);
export const createTeacher = (newTeacher) => axios.post(staffUrl, newTeacher);
export const getSingleTeacher = (id) => axios.get(`${staffUrl}/${id}`);
export const deleteTeacher = (id) => axios.delete(`${staffUrl}/${id}`);
export const updateTeacher = (id, updatedTeacher) =>
  axios.patch(`${staffUrl}/${id}`, updatedTeacher);
