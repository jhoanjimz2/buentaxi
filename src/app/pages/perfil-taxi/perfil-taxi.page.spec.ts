import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfilTaxiPage } from './perfil-taxi.page';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from 'src/app/components/components.module';
import { CompartirComponent } from '../../modals/compartir/compartir.component';
import { CalificarGustoComponent } from '../../modals/calificar-gusto/calificar-gusto.component';
import { CalificarNoGustoComponent } from '../../modals/calificar-no-gusto/calificar-no-gusto.component';
import { TranslateModule } from '@ngx-translate/core';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { taxistas_prueba_data } from 'src/assets/data/taxistas';

describe('PerfilTaxiPage', () => {
  let component: PerfilTaxiPage;
  let fixture: ComponentFixture<PerfilTaxiPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PerfilTaxiPage,
        CompartirComponent,
        CalificarGustoComponent,
        CalificarNoGustoComponent
      ],
      imports: [
        IonicModule.forRoot(),
        HttpClientModule,
        ComponentsModule,
        TranslateModule.forRoot()
      ],
      providers: [ 
        SocialSharing
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilTaxiPage);
    component = fixture.componentInstance;
    component.taxistas = taxistas_prueba_data;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
