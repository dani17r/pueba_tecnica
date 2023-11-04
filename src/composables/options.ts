export default () => {
  const scrollPanel = {
    wrapper: {
      style: { 'border-right': '10px solid var(--surface-ground)' }
    },
    bary: 'hover:bg-primary-400 bg-primary-300 opacity-100'
  };

  const routesHeaders = [
    {
      label: 'Inicio',
      icon: 'pi pi-fw pi-home',
      route: '/'
    },
    {
      label: 'Carrito de compras',
      icon: 'pi pi-fw pi-calendar',
      route: '/shopping-cart'
    }
  ];

  return {
    scrollPanel,
    routesHeaders
  };
};
