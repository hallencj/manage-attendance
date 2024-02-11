import { createRouter, createWebHistory } from 'vue-router'
import AttendanceLogsView from '../views/AttendanceLogsView.vue'
import ExportedFilesView from '../views/ExportedFilesView.vue'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/manage-attendance/attendance-logs'
    },
    {
      path: '/manage-attendance/attendance-logs',
      name: 'attendance-logs',
      component: AttendanceLogsView
    },
    {
      path: '/manage-attendance/exported-files',
      name: 'exported-files',
      component: ExportedFilesView
    }
  ]
})
