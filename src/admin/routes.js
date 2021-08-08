import {
  FiHome,
  FiUser,
  FiEdit,
  FiSettings,
  FiList,
  FiMessageSquare,
  FiBook,
  FiCamera,
} from "react-icons/fi";

export const adminRoute = [
  {
    id: 1,
    path: "/admin-panel/home",
    isExtandable: false,
    title: "Home",
    icon: FiHome,
  },
  {
    id: 2,
    path: "/admin-panel/users",
    isExtandable: false,
    title: "Users",
    icon: FiUser,
  },
  {
    id: 3,
    path: "",
    isExtandable: true,
    title: "Blog",
    icon: FiBook,
    subMenu: [
      {
        id: 1,
        path: "/admin-panel/blog-list",
        title: "Blog list",
        icon: FiList,
      },
      {
        id: 2,
        path: "/admin-panel/blogs-categories-list",
        title: "Blog categories list",
        icon: FiList,
      },
      {
        id: 3,
        path: "/admin-panel/new-blog",
        title: "Create new blog",
        icon: FiEdit,
      },
      {
        id: 4,
        path: "/admin-panel/operate-blog-category",
        title: "Create blog category",
        icon: FiEdit,
      },
      {
        id: 5,
        path: "/admin-panel/users-comments",
        title: "Users comments",
        icon: FiMessageSquare,
      },
    ],
  },
  {
    id: 4,
    path: "",
    isExtandable: true,
    title: "Images",
    icon: FiCamera,
    subMenu: [
      {
        id: 1,
        path: "/admin-panel/image-category-list",
        title: "Image categories list",
        icon: FiList,
      },
      {
        id: 2,
        path: "/admin-panel/image-catgegories",
        title: "Image categories",
        icon: FiEdit,
      },
    ],
  },
  {
    id: 5,
    path: "/admin-panel/settings",
    isExtandable: false,
    title: "App settings",
    icon: FiSettings,
  },
];
