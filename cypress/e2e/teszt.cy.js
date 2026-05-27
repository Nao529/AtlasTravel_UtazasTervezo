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
})