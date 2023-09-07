import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { IdeaBlogFormComponent } from './idea-blog/idea-blog-form/idea-blog-form.component';
import { IdeaBlogLogComponent } from './idea-blog/idea-blog-log/idea-blog-log.component';
import { BannerComponent } from './inicio/banner/banner.component';
import { NosotrosComponent } from './inicio/nosotros/nosotros.component';
import { ServiciosComponent } from './inicio/servicios/servicios.component';
import { CaracteristicasComponent } from './inicio/caracteristicas/caracteristicas.component';
import { EquipoComponent } from './inicio/equipo/equipo.component';
import { ContactoComponent } from './inicio/contacto/contacto.component';
import { LogoholderComponent } from './shared/footer/logoholder/logoholder.component';
import { FooterSectionsComponent } from './shared/footer/footer-sections/footer-sections.component';
import { FooterSocialLinksComponent } from './shared/footer/footer-social-links/footer-social-links.component';
import { SeparadorComponent } from './shared/separador/separador.component';
import { IdeaBlogComponent } from './idea-blog/idea-blog.component';
import { MemberComponent } from './inicio/equipo/member/member.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    IdeaBlogFormComponent,
    IdeaBlogLogComponent,
    BannerComponent,
    NosotrosComponent,
    ServiciosComponent,
    CaracteristicasComponent,
    EquipoComponent,
    ContactoComponent,
    LogoholderComponent,
    FooterSectionsComponent,
    FooterSocialLinksComponent,
    SeparadorComponent,
    IdeaBlogComponent,
    MemberComponent,
    InicioComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
