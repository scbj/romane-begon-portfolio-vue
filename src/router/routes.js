const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/espace-client',
    name: 'clientArea',
    component: () => import('@/views/ClientArea.vue')
  },
  {
    path: '/a-propos',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/:prestation',
    component: () => import('@/views/Prestation.vue'),
    children: [
      {
        path: '',
        name: 'prestationInfos',
        component: () => import('@/views/PrestationInfos.vue')
      },
      {
        path: 'galerie',
        name: 'prestationGallery',
        component: () => import('@/views/PrestationGallery.vue')
      }
    ]
  }
]

// TODO: Handle unknow routes (404)

export default routes
