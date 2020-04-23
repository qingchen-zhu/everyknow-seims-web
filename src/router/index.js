import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  // {
  //   path: '/schoolbase',
  //   component: Layout,
  //   redirect: '/schoolbase/college',
  //   name: 'SchoolBaseInformation',
  //   meta: { title: '学校基础信息管理', icon: 'example' },
  //   children: [
  //     {
  //       path: 'college',
  //       name: 'College',
  //       component: () => import('@/views/schoolbaseinformation/College'),
  //       meta: { title: '学院管理', icon: 'college' }
  //     },
  //     {
  //       path: 'dept',
  //       name: 'Dept',
  //       component: () => import('@/views/schoolbaseinformation/Dept'),
  //       meta: {title: '专业管理', icon: 'dept'}
  //     },
  //     {
  //       path: 'clazz',
  //       name: 'Clazz',
  //       component: () => import('@/views/schoolbaseinformation/Clazz'),
  //       meta: {title: '班级管理', icon: 'clazz'}
  //     }
  //   ]
  // },
  {
    path: '/studentinfo',
    component: Layout,
    redirect: '',
    name: 'StudentInformation',
    meta: {title: '毕业生信息管理', icon: 'info-mannger'},
    children: [
      {
        path: 'baseInfo',
        name: 'BaseInfo',
        component: () => import('@/views/graduateinformation/BaseInfo'),
        meta: {title: '基础信息管理', icon: 'base-info'}
      },
      {
        path: 'noEmploy',
        component: () => import('@/views/graduateinformation/NoEmployStudentList'),
        meta: {title: '未登记就业信息统计', icon: 'student-employ'}
      },
      {
        path: 'noFile',
        component: () => import('@/views/graduateinformation/NoFileStudentList'),
        meta: {title: '未登记档案信息统计', icon: 'student-file'}
      },
      {
        path: 'import',
        name: 'Import',
        component: () => import('@/views/graduateinformation/upload-excel'),
        meta: {title: '基础数据导入(excel)', icon: 'upload'}
      },
      {
        path: 'addStudent',
        component: () => import('@/views/graduateinformation/add-student'),
        name: 'AddStudent',
        hidden: true,
        meta: {title: '新增学生', icon: 'addition'}
      },
      {
        path: 'editStudent/:id(\\d+)',
        component: () => import('@/views/graduateinformation/edit-student'),
        name: 'EditStudent',
        hidden: true,
        meta: { title: '编辑学生信息', icon: 'editor', noCache: true }
      },
      {
        path: 'editFile/:stuId',
        component: () => import('@/views/graduateinformation/StudentFileEdit'),
        name: 'StudentFileEdit',
        hidden: true,
        meta: { title: '编辑档案信息', icon: 'editor', noCache: true }
      },
      {
        path: 'editEmploy/:stuId',
        component: () => import('@/views/graduateinformation/StudentEmployEdit'),
        name: 'StudentEmployEdit',
        hidden: true,
        meta: { title: '编辑就业信息', icon: 'editor', noCache: true }
      },
    ]

  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },


]

export const asyncRoutes = [
  {
    path: '/schoolbase',
    component: Layout,
    redirect: '/schoolbase/college',
    name: 'SchoolBaseInformation',
    meta: { title: '学校基础信息管理', icon: 'example', roles: ['admin'] },
    children: [
      {
        path: 'college',
        name: 'College',
        component: () => import('@/views/schoolbaseinformation/College'),
        meta: { title: '学院管理', icon: 'college' }
      },
      {
        path: 'dept',
        name: 'Dept',
        component: () => import('@/views/schoolbaseinformation/Dept'),
        meta: {title: '专业管理', icon: 'dept'}
      },
      {
        path: 'clazz',
        name: 'Clazz',
        component: () => import('@/views/schoolbaseinformation/Clazz'),
        meta: {title: '班级管理', icon: 'clazz'}
      }
    ]
  },
  {
    path: '/studentperson',
    component: Layout,
    redirect: '/studentperson/editStudent',
    name: 'StudentPersonInfo',
    meta: {title: '毕业生个人中心', icon: 'example', roles: ['student']},
    children: [
      {
        path: 'editStudent',
        component: () => import('@/views/studentperson/StudentDetail'),
        name: 'EditStudent',
        hidden: true,
        meta: { title: '毕业生个人信息', icon: 'editor', noCache: true }
      },
      {
        path: 'editEmploy',
        component: () => import('@/views/graduateinformation/StudentEmployEdit'),
        name: 'StudentEmployEdit',
        hidden: true,
        meta: { title: '档案信息', icon: 'editor', noCache: true }
      },
      {
        path: 'editFile',
        component: () => import('@/views/graduateinformation/StudentFileEdit'),
        name: 'StudentFileEdit',
        hidden: true,
        meta: { title: '就业信息', icon: 'editor', noCache: true }
      }
    ]
  },
  {
    path: '/external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
