export default (ctx, inject) => {
  const services = () => {
      alert('Привет из сервиса');
  };
  inject('services', services)
}


