// router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const Community = () => import('../views/CommunityView.vue');
// const Design = () => import('../views/DesignView.vue');
const WorkSpace = () => import('../views/WorkSpaceView.vue');
const Chat = () => import('../views/ChatView.vue');
// const Login = () => import('../views/LoginView.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  // {
  //   path: '/Login',
  //   name: 'Login',
  //   component: Login
  // },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/Community',
    name: 'community',
    component: Community,

  },
  // {
  //   path: '/Design/:dishgnCode',
  //   name: 'design',
  //   component: Design
  // },
  {
    path: '/WorkSpace',
    name: 'workSpace',
    component: WorkSpace,
  },
  {
    path: '/Chat',
    name: 'chat',
    component: Chat,

  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
