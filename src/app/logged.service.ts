export class LoggedService {
  usuariosPermitidos = {};

  logged = false;
  userLogged = 'anonimo';

  logInUser(usuarioLogeado: string) {
    this.logged = true;
    this.userLogged = usuarioLogeado;
  }
}
