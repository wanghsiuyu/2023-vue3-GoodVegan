import Swal from 'sweetalert2';
export default Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 1500,
});
