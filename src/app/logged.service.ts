export class LoggedService {
  logged = false;
  userLogged = 'anonimo';

  logInUser(usuarioLogeado: string) {
    this.logged = true;
    this.userLogged = usuarioLogeado;
  }
}
