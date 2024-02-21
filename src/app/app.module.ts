import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { AuthenticationInterceptor } from './interceptories/interceptior.service';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { IConfig, NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask, provideNgxMask} from 'ngx-mask';
import { EsqueciSenhaComponent } from './pages/esqueci-senha/esqueci-senha.component';

const maskConfig: Partial<IConfig> = {
  validation: true, // Ativar validação de máscara
  dropSpecialCharacters: false, // Manter ou remover caracteres especiais
  showMaskTyped: true, // Exibir a máscara enquanto o usuário digita
  clearIfNotMatch: false, // Limpar o campo se a entrada não coincidir com a máscara completa
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CadastroComponent,
    EsqueciSenhaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxMaskDirective, 
    NgxMaskPipe
  ],
  providers: [HttpClient, { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true }, provideEnvironmentNgxMask(maskConfig), provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
