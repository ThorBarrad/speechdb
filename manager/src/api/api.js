import { getRequest, postJsonRequest, postRequest } from '@/utils/request'

export function upload_img(data) {
  return postRequest('/upload-img', data)
}
export function upload_video(data) {
  return postRequest('/upload-video', data)
}


export function uploadStatistic(data) {
  return postRequest('/statistic-upload', data)
}
export function getStatistic() {
  return postJsonRequest('/statistic-all')
}


export function uploadCooperate(data) {
  return postRequest('/cooperate-upload', data)
}
export function getCooperate() {
  return postJsonRequest('/cooperate-all')
}


export function getCourseAll() {
  return postJsonRequest('/course-info-hot')
}
export function uploadCourse(data) {
  return postRequest('/course-upload', data)
}
export function updateCourse(data) {
  return postRequest('/course-update',data)
}
export function deleteCourse(data) {
  return postJsonRequest('/course-delete',data)
}


export function getTeacherAll() {
  return postJsonRequest('/teacher-info-all')
}
export function uploadTeacher(data) {
  return postRequest('/teacher-upload', data)
}
export function updateTeacher(data) {
  return postRequest('/teacher-update',data)
}
export function deleteTeacher(data) {
  return postJsonRequest('/teacher-delete',data)
}

export function getInfoAll() {
  return postJsonRequest('/article-info-all')
}
export function uploadInfo(data) {
  return postRequest('/article-upload', data)
}
export function updateInfo(data) {
  return postRequest('/article-update',data)
}
export function deleteInfo(data) {
  return postJsonRequest('/article-delete',data)
}



// export function getTopBg() {
//   return postRequest('/top-bg')
// }
// export function uploadTopBg(data) {
//   return postRequest('/top-bg-upload', data)
// }
// export function deleteTopBg(data) {
//   return postJsonRequest('/top-bg-delete',data)
// }

export function getTopBg() {
  return postJsonRequest('/headpic-info-all')
}
export function uploadTopBg(data) {
  return postRequest('/headpic-upload', data)
}
export function deleteTopBg(data) {
  return postJsonRequest('/headpic-delete',data)
}


export function Login(params) {
  return postJsonRequest('/login', params)
}
export function getPubKey() {
  return getRequest('/public-key')
}
export function getUserInfo() {
  return getRequest('/user-info')
}
export function Logout() {
  return postRequest('/logout')
}

export function UploadWork(data) {
  return postRequest('/work-upload', data)
}
export function getWorkByAuthor() {
  return postJsonRequest('/work-info-by-author-all')
}
export function getAllWorks() {
  return postJsonRequest('/work-info-all')
}
export function updateWork(data) {
  return postRequest('/work-update',data)
}
export function deleteWork(data) {
  return postJsonRequest('/work-delete',data)
}



export function getSections() {
  return postRequest('/sections')
}
export function getSection(data) {
  return postJsonRequest('/section',data)
}
export function getSectionsFrontLimit() {
  return postRequest('/sections-front-limit')
}
export function uploadSection(data) {
  return postJsonRequest('/section-upload',data)
}
export function updateSection(data) {
  return postJsonRequest('/section-update',data)
}
export function deleteSection(data) {
  return postJsonRequest('/section-delete',data)
}

export function getItemBySection(data) {
  return postJsonRequest('/item-info-by-section',data)
}
export function uploadItem(data) {
  return postJsonRequest('/item-upload',data)
}
export function deleteItem(data) {
  return postJsonRequest('/item-delete',data)
}