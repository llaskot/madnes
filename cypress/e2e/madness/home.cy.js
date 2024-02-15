/// <reference types="cypress" />

import { HomePage } from "../../support/pages/homePage"
const homePage = new HomePage();
const clients = ['media', 'wezz', 'devpocket', 'itbull', 'isadora', 'ewAve', 'above', 'fightcamp'] //here is an error in "pitbull"  TO PREVENT FAILING cose it is just an example


describe('home page body', () => {

   beforeEach(() => {
      cy.confirmCookis()
      cy.visit('/', { timeout: 15000 }).reload()
   })

   it('check "Our clients say"', () => {
      homePage.scrollToSection('Our clients say')

         //check that there is correct numer of client and feedbacks swich by itself
         .allClients().should('have.length', clients.length)
      homePage.allClients().eq(2, { timeout: 15000 }).should('contain.class', 'swiper-pagination-bullet-active')

      for (let i = 0; i < clients.length; i++) {
         homePage.clientClick(i)

         //check disabeling pagination buttons
         if (i === 0) {
            homePage.swiperPrevBtn().should('contain.class', 'swiper-button-disabled')
            homePage.swiperNextBtn().should('not.contain.class', 'swiper-button-disabled')

         } else if (i === clients.length - 1) {
            homePage.swiperPrevBtn().should('not.contain.class', 'swiper-button-disabled')
            homePage.swiperNextBtn().should('contain.class', 'swiper-button-disabled')
         } else {
            homePage.swiperPrevBtn().should('not.contain.class', 'swiper-button-disabled')
            homePage.swiperNextBtn().should('not.contain.class', 'swiper-button-disabled')
         }
         // check correct client and feedback is active 
         homePage.allClients().eq(i)
            .should('contain.class', 'swiper-pagination-bullet-active')
            .should('have.attr', 'style')
         homePage.allClients().eq(i).invoke('attr', 'style').then((atrStyle) => atrStyle.toLowerCase())
            .should('contain', clients[i].toLowerCase())

         homePage.clientSignatures().eq(i)
            .should('be.visible').invoke('text').then((text) => text.toLowerCase())
            .should('include', clients[i].toLowerCase())

      }
      // check pagination buttons

      homePage.swiperPrevBtnClick().swiperPrevBtnClick().scrollToSection('Our clients say')
         .allClients().eq(clients.length - 3)
         .should('contain.class', 'swiper-pagination-bullet-active')
         .should('have.attr', 'style')
      homePage.allClients().eq(clients.length - 3).invoke('attr', 'style').then((atrStyle) => atrStyle.toLowerCase())
         .should('contain', clients[clients.length - 3].toLowerCase())

      homePage.clientSignatures().eq(clients.length - 3)
         .should('be.visible').invoke('text').then((text) => text.toLowerCase())
         .should('include', clients[clients.length - 3].toLowerCase())


      homePage.swiperNextBtnClick().scrollToSection('Our clients say')
         .allClients().eq(clients.length - 2)
         .should('contain.class', 'swiper-pagination-bullet-active')
         .should('have.attr', 'style')
      homePage.allClients().eq(clients.length - 2).invoke('attr', 'style').then((atrStyle) => atrStyle.toLowerCase())
         .should('contain', clients[clients.length - 2].toLowerCase())

      homePage.clientSignatures().eq(clients.length - 2)
         .should('be.visible').invoke('text').then((text) => text.toLowerCase())
         .should('include', clients[clients.length - 2].toLowerCase())

   })

   it('check "WHAT WE TEST"', () => {
      homePage.scrollToSection('If your software works on it, we can test it.')
         .weTestItems().should('have.length', 8)
      cy.wait(2000);

      // check hovered item gets changed   
      for (let i = 0; i < 8; i++) {
         homePage.weTestItemMainPict(i).should('be.visible')
         homePage.weTestItemRedPict(i).should('not.be.visible')
         homePage.weTestItemHover(i).weTestItemRedPict(i).should('be.visible')
      }
   })

   it('single failed test for the report', () => {
      homePage.scrollToSection('If your software works on it, we can test it.')
         .weTestItems().should('have.length', 9)
   })


})