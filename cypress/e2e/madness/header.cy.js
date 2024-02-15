/// <reference types="cypress" />

import { BasePage } from "../../support/pages/basePage"
import { urls } from "../../support/urls"

const header = new BasePage()
const company = ['About Us', 'Why QA Madness', 'Join our network']
const services = ['Quality Assurance', 'Digital Commerce', 'Development & AI', 'Cybersecurity', 'Manual testing', 'Automated testing', 'Web application testing', 'Mobile application testing', 'Desktop App Testing', 'Wearables testing', 'Testing documentation', 'QA audit & consulting']
const coverage = ['Functional testing', 'Exploratory testing', 'UI testing', 'Accessibility Testing', 'Performance Testing', 'Regression testing', 'Compatibility testing', 'Integration testing', 'Acceptance testing', 'Localization testing']
const idustries = ['E-commerce', 'Healthcare', 'Gaming', 'IoT', 'Business Solutions', 'Start-ups', 'Software Development', 'AI, Big Data', 'Blockchain', 'E-learning']
const resources = ['Blog', 'Knowledge Base']


describe('madness cookies popup, header items', () => {
  
  beforeEach(() => {
    cy.visit('/')
  })

  it('confirm cookies and check drps', () => {

    header.logoMouseHover()
      .confirmCookiesBtn().should('be.visible')
    header.confirmCookiesBtnClick()
      .confirmCookiesBtn().should('not.be.visible')

    /*
        Check each header dropdown (number, order, and names of items)
    **/

    header.headDrpMouseHover('Company')
      .drpList('Company').should('have.length', company.length)
    header.listItem('Company', 0).should('be.visible').and('have.text', company[0])
    header.listItem('Company', 1).should('be.visible').and('have.text', company[1])
    header.listItem('Company', 2).should('be.visible').and('have.text', company[2])

    header.headDrpMouseHover('Services')
      .drpList('Services').should('have.length', services.length)
    for (let i = 0; i < services.length; i++) {
      header.listItem('Services', i).should('be.visible').and('have.text', services[i])
    }

    header.headDrpMouseHover('Coverage')
      .drpList('Coverage').should('have.length', coverage.length)
    for (let i = 0; i < coverage.length; i++) {
      header.listItem('Coverage', i).should('be.visible').and('have.text', coverage[i])
    }

    header.headDrpMouseHover('Industries')
      .drpList('Industries').should('have.length', idustries.length)
    for (let i = 0; i < idustries.length; i++) {
      header.listItem('Industries', i).should('be.visible').and('have.text', idustries[i])
    }

    header.headDrpMouseHover('Resources')
      .drpList('Resources').should('have.length', resources.length)
    header.listItem('Resources', 0).should('be.visible').and('have.text', resources[0])
    header.listItem('Resources', 1).should('be.visible').and('have.text', resources[1])


  })

  it('check "case studies", "contact us", and "logo" btns', () => {
    header.logoMouseHover()
      .confirmCookiesBtn().should('be.visible')
    header.confirmCookiesBtnClick()
      .confirmCookiesBtn().should('not.be.visible')
    header.headerBtnClick('Case Studies')
    cy.url().should('eq', urls.case_studies)
    header.logoBtnClick()
    cy.url().should('eq', urls.home_page)
    header.contactUsBtnClick()
    cy.url().should('eq', urls.contact_us)

  })



})