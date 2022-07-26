import { RouteInfo } from "./sidebar.metadata";
export const ROUTES: RouteInfo[] = [
  {
    path: "",
    title: "MENUITEMS.MAIN.TEXT",
    moduleName: "",
    iconType: "",
    icon: "",
    class: "",
    groupTitle: true,
    badge: "",
    badgeClass: "",
    role: ["All"],
    submenu: [],
  },

  {
    path: "",
    title: "Administración",
    moduleName: "administracion",
    iconType: "feather",
    icon: "monitor",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      /*{
        path: "/administracion/grupo",
        title: "Grupos",
        moduleName: "administracion",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/administracion/filtrobusqueda",
        title: "prueba",
        moduleName: "prueba",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/administracion/materia",
        title: "Materias",
        moduleName: "administracion",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },*/
      {
        path: "/administracion/alumno",
        title: "Alumnos",
        moduleName: "administracion",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [
          /*{
            path: "/administracion/alumno/agregar-alumno",
            title: "Agregar",
            moduleName: "Administracion",
            iconType: "",
            icon: "",
            class: "ml-menu",
            groupTitle: false,
            badge: "",
            badgeClass: "",
            role: [""],
            submenu: [] 
          },
          {
            path: "/administracion/alumno/editar-alumno",
            title: "Editar",
            moduleName: "Administracion",
            iconType: "",
            icon: "",
            class: "ml-menu",
            groupTitle: false,
            badge: "",
            badgeClass: "",
            role: [""],
            submenu: []
          },*/
          {
            path: "/administracion/alumno/todos-alumnos",
            title: "Todos los Alumnos",
            moduleName: "Administracion",
            iconType: "",
            icon: "",
            class: "ml-menu",
            groupTitle: false,
            badge: "",
            badgeClass: "",
            role: [""],
            submenu: []
          },
          {
            path: "/administracion/alumno/vista-profesor",
            title: "Vista profe",
            moduleName: "Administracion",
            iconType: "",
            icon: "",
            class: "ml-menu",
            groupTitle: false,
            badge: "",
            badgeClass: "",
            role: [""],
            submenu: []
          }
        ]
      },
      {
        path: "/administracion/profesores",
        title: "Profesores",
        moduleName: "administracion profesor",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [
          {
            path: "/administracion/profesores/todos-profesores",
            title: "Todos los profesores",
            moduleName: "Todos los profesores",
            iconType: "",
            icon: "",
            class: "ml-menu",
            groupTitle: false,
            badge: "",
            badgeClass: "",
            role: [""],
            submenu: []
          },
        ]
      }
      
      /*{
        path: "/administracion/ciclo",
        title: "Ciclos",
        moduleName: "Administracion",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [
        {
          path: "/administracion/ciclos/agregar-ciclo",
          title: "Agregar",
          moduleName: "Administracion",
          iconType: "",
          icon: "",
          class: "ml-menu",
          groupTitle: false,
          badge: "",
          badgeClass: "",
          role: [""],
          submenu: []
        },
        {
          path: "/administracion/ciclos/editar-ciclo",
          title: "Editar",
          moduleName: "Administracion",
          iconType: "",
          icon: "",
          class: "ml-menu",
          groupTitle: false,
          badge: "",
          badgeClass: "",
          role: [""],
          submenu: []
        },
        {
          path: "/administracion/ciclos/todos-ciclos",
          title: "Todos los Ciclos",
          moduleName: "Administracion",
          iconType: "",
          icon: "",
          class: "ml-menu",
          groupTitle: false,
          badge: "",
          badgeClass: "",
          role: [""],
          submenu: []
        }
        ]
      },*/

    ]
  },
  
  // Admin Modules
  /*{
    path: "",
    title: "MENUITEMS.DASHBOARD.TEXT",
    moduleName: "dashboard",
    iconType: "feather",
    icon: "monitor",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/dashboard/main",
        title: "MENUITEMS.DASHBOARD.LIST.DASHBOARD1",
        moduleName: "dashboard",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/dashboard/dashboard2",
        title: "MENUITEMS.DASHBOARD.LIST.DASHBOARD2",
        moduleName: "dashboard",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/dashboard/dashboard2",
        title: "MENUITEMS.DASHBOARD.LIST.GRUPO",
        moduleName: "dashboard",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      }
    ],
  },*/

  // Employee Modules
  /*{
    path: "/employee/dashboard",
    title: "MENUITEMS.EMPLOYEE.DASHBOARD",
    moduleName: "dashboard",
    iconType: "feather",
    icon: "airplay",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Employee"],
    submenu: [],
  },*/

  // Client Modules
  {
    path: "/alumno/perfil",
    title: "MENUITEMS.CLIENT.DASHBOARD",
    moduleName: "dashboard",
    iconType: "feather",
    icon: "airplay",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Alumno"],
    submenu: [],
  },

  // Common Modules
  /*{
    path: "",
    title: "Authentication",
    moduleName: "authentication",
    iconType: "feather",
    icon: "user-check",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/authentication/signin",
        title: "Sign In",
        moduleName: "authentication",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/authentication/signup",
        title: "Sign Up",
        moduleName: "authentication",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/authentication/forgot-password",
        title: "Forgot Password",
        moduleName: "authentication",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/authentication/locked",
        title: "Locked",
        moduleName: "authentication",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/authentication/page404",
        title: "404 - Not Found",
        moduleName: "authentication",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/authentication/page500",
        title: "500 - Server Error",
        moduleName: "authentication",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  /*{
    path: "",
    title: "Extra Pages",
    moduleName: "extra-pages",
    iconType: "feather",
    icon: "anchor",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/extra-pages/blank",
        title: "Blank Page",
        moduleName: "extra-pages",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },*/
  /*{
    path: "",
    title: "Multi level Menu",
    moduleName: "multilevel",
    iconType: "feather",
    icon: "chevrons-down",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/multilevel/first1",
        title: "First",
        moduleName: "multilevel",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/",
        title: "Second",
        moduleName: "secondlevel",
        iconType: "",
        icon: "",
        class: "ml-sub-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [
          {
            path: "/multilevel/secondlevel/second1",
            title: "Second 1",
            moduleName: "secondlevel",
            iconType: "",
            icon: "",
            class: "ml-sub-sub-menu",
            groupTitle: false,
            badge: "",
            badgeClass: "",
            role: [""],
            submenu: [],
          },
          {
            path: "/multilevel/secondlevel/second2",
            title: "Second 2",
            moduleName: "secondlevel",
            iconType: "",
            icon: "",
            class: "ml-sub-sub-menu",
            groupTitle: false,
            badge: "",
            badgeClass: "",
            role: [""],
            submenu: [],
          },
        ],
      },
      {
        path: "/multilevel/first3",
        title: "Third",
        moduleName: "multilevel",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },*/
];
