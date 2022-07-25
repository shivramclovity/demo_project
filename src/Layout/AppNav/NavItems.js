/* Role-wise dynamically used */
export const USER_dashboard = [
  {
    icon: "icon-Dashboard---2",
    label: "Dashboard",
    to: "/dashboard",
  },
];

export const ADMN_primary = [
  {
    icon: "icon-User---Square",
    label: "Vendor",
    content: [
      {
        label: "Invite Vendor",
        to: "/vendor/invite-vendor",
      } /* ,
      {
        label: "Vendor Information",
        to: "/vendor/vendor-information",
      },
      {
        label: "Vendor Status",
        to: "/vendor/vendor-status",
      }, */,
    ],
  },
];

export const USER_primary = [
  {
    icon: "icon-User---Square",
    label: "Vendor",
    content: [
      {
        label: "Invite Vendor",
        to: "/vendor/invite-vendor",
      },
      /* {
        label: "Vendor Information",
        to: "/vendor/vendor-information",
      },
      {
        label: "Vendor Status",
        to: "/vendor/vendor-status",
      }, */
    ],
  },
];

export const USER_secondary = [
  {
    icon: "icon-Log-Out",
    label: "Logout",
    to: "/logout",
  },
];

export const ADMN_secondary = [
  /* {
    icon: "icon-Gear---2",
    label: "Administrative",
    to: "/admin",
  }, */
  {
    icon: "icon-Log-Out",
    label: "Logout",
    to: "/logout",
  },
];

export const VNDR_primary = [
  {
    icon: "icon-User---Square",
    label: "Vendor",
    content: [
      {
        label: "Vendor Information",
        to: "/vendor/vendor-information",
      },
      {
        label: "Vendor Status",
        to: "/vendor/vendor-status",
      },
    ],
  },
];

export const VNDR_questionnaire = [
  {
    icon: "icon-Newspaper",
    label: "Questionnaire",
    to: "/questionnaire",
  },
];

export const VNDR_legal = [
  {
    icon: "icon-Chart---Bar",
    label: "Legal docs",
    to: "/vendor/legal",
  },
];

export const ADMN_questionnaire = [
  {
    icon: "icon-Newspaper",
    label: "Questionnaire",
    to: "/questionnaire",
  },
];
