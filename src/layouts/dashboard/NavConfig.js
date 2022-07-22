// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
    {
      title: 'dashboard',
      path: '/dashboard/app',
      icon: getIcon('eva:pie-chart-2-fill'),
    },
    {
      title: 'users',
      path: '/dashboard/user',
      icon: getIcon('eva:people-fill'),
    },
    {
      title: 'Apply for leave',
      path: '/dashboard/leaves',
      icon: getIcon('bi:calendar-event-fill'),
    },

    {
      title: 'Request Module',
      path: '/dashboard/requestModules',
      icon: getIcon('eva:lock-fill'),
    },
  ];

export default navConfig;
