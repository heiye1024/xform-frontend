import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';



const routes: Array<RouteRecordRaw> = [

    { 
        path: '/admin',
        name: 'admin',
        component: null

    }
]
const router = createRouter({
    history: createWebHistory(), //路由模式的配置采用API调用的方式 不再是之前的字符串 此处采用的hash路由
    routes,
  });
  
  export default router;
  
