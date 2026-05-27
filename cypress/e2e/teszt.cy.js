const OLDAL = "https://nao529.github.io/AtlasTravel_UtazasTervezo/";
describe('nao_utazas_kartya_tesztesetek', () => {
  it('0) oldal_letezik', () => {
    cy.visit(OLDAL);
  })
  it('1) utazas_kartya_megjelenik', () => {
    cy.visit(OLDAL);
    cy.get('#utazasok .utazas-kartya').should('exist');
  })
  it('2) van_kep', () => {
    cy.visit(OLDAL);
    cy.get('#utazasok .utazas-kartya img').should('exist');
  })
  it('3) van_cim', () => {
    cy.visit(OLDAL);
    cy.get('#utazasok .utazas-kartya h3').should('exist');
  })
  it('4) van_leiras', () => {
    cy.visit(OLDAL);
    cy.get('#utazasok .leiras').should('exist');
  })
  it('5) van_reszletek_gomb', () => {
    cy.visit(OLDAL);
    cy.get('#utazasok .reszletek-gomb').should('exist');
  })
  it('6) van_ar', () => {
    cy.visit(OLDAL);
    cy.get('#utazasok .kartya-ar').should('exist');
  })
  it('7) van_idotartam', () => {
    cy.visit(OLDAL);
    cy.get('#utazasok .kartya-info span').first().should('exist');
  })
  it('8) van_letszam', () => {
    cy.visit(OLDAL);
    cy.get('#utazasok .kartya-info span').eq(1).should('exist');
  })
  it('9) reszletek_gomb_kattinthato', () => {
    cy.visit(OLDAL);
    cy.get('#utazasok .reszletek-gomb').first().click();
  })
  it('10) kartya_tartalmaz_nevet_es_orszagot', () => {
    cy.visit(OLDAL);
    cy.get('#utazasok .utazas-kartya h3').first().invoke('text').should('not.be.empty');
  })
  it('11) ar_szoveg_ft_formatum', () => {
    cy.visit(OLDAL);
    cy.get('#utazasok .kartya-ar').first().should('contain', 'Ft');
  })
  it('12) modal_megnyilik_reszletek_gombra', () => {
    cy.visit(OLDAL);
    cy.get('#utazasok .reszletek-gomb').first().click();
    cy.get('#modal').should('be.visible');
  })
  it('13) modal_cim_megjelenik', () => {
    cy.visit(OLDAL);
    cy.get('#utazasok .reszletek-gomb').first().click();
    cy.get('#modal-cim').invoke('text').should('not.be.empty');
  })
  it('14) modal_tartalom_megjelenik', () => {
    cy.visit(OLDAL);
    cy.get('#utazasok .reszletek-gomb').first().click();
    cy.get('#modal-leiras').should('exist');
  })
  it('15) foglalas_form_megjelenik_gombra', () => {
    cy.visit(OLDAL);
    cy.get('#utazasok .reszletek-gomb').first().click();
    cy.get('.modal-foglalas').first().click();
    cy.get('#foglalasForm').should('exist');
  })
})

describe('maja_tesztesetek', () => {
  it('0) oldal_letezik', () => {
    cy.visit(OLDAL);
  })
   it('1) foglalasok_megjelennek', () => {
    cy.visit(OLDAL);

    cy.contains('Foglalásaim').click();

    cy.get('#foglalasok .foglalasKartya')
      .should('exist');
  });

  it('2) lemondas_gomb_letezik', () => {
    cy.visit(OLDAL);

    cy.contains('Foglalásaim').click();

    cy.get('.lemond')
      .should('exist');
  });

  it('3) lemondas_gomb_kattinthato', () => {
    cy.visit(OLDAL);

    cy.contains('Foglalásaim').click();

    cy.get('.lemond')
      .first()
      .click();
  });

  it('4) kereses_gomb_letezik', () => {
    cy.visit(OLDAL);

    cy.get('#keresesGomb')
      .should('exist');
  });

  it('5) nev_szerinti_kereses_mukodik', () => {
    cy.visit(OLDAL);

    cy.get('#nevKereso')
      .type('Párizs');

    cy.get('#keresesGomb')
      .click();

    cy.get('.utazas-kartya')
    .should('have.length', 1);
    
    cy.contains(
      '.utazas-kartya h3',
      'Párizs'
    ).should('exist');

  });

  it('6) rendezes_gomb_letezik', () => {
    cy.visit(OLDAL);

    cy.get('#ar_no')
      .should('exist');

    cy.get('#ar_csokk')
      .should('exist');
  });
  it('7) 8_fo_kereses_bali_egyetlen_talalat', () => {

    cy.visit(OLDAL);

    cy.get('#letszamKereso')
      .select('8 fő');

    cy.get('#keresesGomb')
      .click();

    cy.get('.utazas-kartya')
      .should('have.length', 1);

    cy.contains(
      '.utazas-kartya h3',
      'Bali'
    ).should('exist');

  });
  it('8) olcsotol_dragaig_megfelelo_sorrend', () => {

    cy.visit(OLDAL);

    cy.get('#ar_no')
      .click();

    cy.get('.utazas-kartya h3')
      .eq(0)
      .should('contain','Bécs');

    cy.get('.utazas-kartya h3')
      .eq(1)
      .should('contain','Prága');

    cy.get('.utazas-kartya h3')
      .eq(2)
      .should('contain','Párizs');

    cy.get('.utazas-kartya h3')
      .eq(3)
      .should('contain','Barcelona');

    cy.get('.utazas-kartya h3')
      .eq(4)
      .should('contain','Amszterdam');

    cy.get('.utazas-kartya h3')
      .eq(5)
      .should('contain','Róma');

    cy.get('.utazas-kartya h3')
      .eq(6)
      .should('contain','Dubrovnik');

    cy.get('.utazas-kartya h3')
      .eq(7)
      .should('contain','Isztambul');

    cy.get('.utazas-kartya h3')
      .eq(8)
      .should('contain','London');

    cy.get('.utazas-kartya h3')
      .eq(9)
      .should('contain','Santorini');

    cy.get('.utazas-kartya h3')
      .eq(10)
      .should('contain','Bali');

    cy.get('.utazas-kartya h3')
      .eq(11)
      .should('contain','New York');

  });
  it('9) dragatol_olcsoig_megfelelo_sorrend', () => {

    cy.visit(OLDAL);

    cy.get('#ar_csokk')
      .click();

    cy.get('.utazas-kartya h3')
      .eq(0)
      .should('contain','New York');

    cy.get('.utazas-kartya h3')
      .eq(1)
      .should('contain','Bali');

    cy.get('.utazas-kartya h3')
      .eq(2)
      .should('contain','Santorini');

    cy.get('.utazas-kartya h3')
      .eq(3)
      .should('contain','London');

    cy.get('.utazas-kartya h3')
      .eq(4)
      .should('contain','Isztambul');

    cy.get('.utazas-kartya h3')
      .eq(5)
      .should('contain','Róma');

    cy.get('.utazas-kartya h3')
      .eq(6)
      .should('contain','Dubrovnik');

    cy.get('.utazas-kartya h3')
      .eq(7)
      .should('contain','Amszterdam');

    cy.get('.utazas-kartya h3')
      .eq(8)
      .should('contain','Barcelona');

    cy.get('.utazas-kartya h3')
      .eq(9)
      .should('contain','Párizs');

    cy.get('.utazas-kartya h3')
      .eq(10)
      .should('contain','Prága');

    cy.get('.utazas-kartya h3')
      .eq(11)
      .should('contain','Bécs');

  });
  it('10) datum_megadasakor_minden_utazas_megmarad', () => {

    cy.visit(OLDAL);

    cy.get('#datumKereso')
      .type('2026-08-10');

    cy.get('#keresesGomb')
      .click();

    cy.get('.utazas-kartya')
      .should('have.length',12);

  });
  it('11) foglalas_letrehozasa_kereses_utan_es_lemondas', () => {
  cy.visit(OLDAL);

  cy.get('#nevKereso').type('Párizs');
  cy.get('#keresesGomb').click();

  cy.get('.utazas-kartya').should('have.length', 1);
  cy.contains('.utazas-kartya h3', 'Párizs').should('exist');

  cy.get('.reszletek-gomb').first().click();
  cy.get('.modal-foglalas').click();

  cy.get('#foglalasForm input[name="nev"]').type('Teszt Elek');
  cy.get('#foglalasForm input[name="email"]').type('teszt@teszt.hu');
  cy.get('#foglalasForm input[name="telefon"]').type('+36301234567');
  cy.get('#foglalasForm input[name="datum"]').type('2026-08-10');
  cy.get('#foglalasForm input[name="letszam"]').type('2');
  cy.get('#foglalasForm input[name="adatvedelem"]').check();

  cy.get('#foglalasForm button[type="submit"]').click();

  cy.contains('Foglalásaim').click();

  cy.contains('.foglalasKartya', 'Teszt Elek').should('exist');
  cy.contains('.foglalasKartya', 'Párizs').should('exist');

  cy.contains('.foglalasKartya', 'Teszt Elek')
    .find('.lemond')
    .click();

  cy.contains('.foglalasKartya', 'Teszt Elek')
    .should('not.exist');
  });
});