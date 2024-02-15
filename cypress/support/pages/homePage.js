import { BasePage } from "./basePage";

export class HomePage extends BasePage {

   // ELEMENTS "Our clients say"
   clientsSaySection = () => {
      let elem = cy.get('body').contains('Our clients say').parents('div[class*="container"]').last()
      return elem
   }

   allClients = () => {
      let elem = this.clientsSaySection().find('div[class*="testimonials-pagination"]').find('span')
      return elem
   }

   swiperPrevBtn = () => {
      let elem = this.clientsSaySection().find('span[class*="swiper-button-prev"]')
      return elem
   }

   swiperNextBtn = () => {
      let elem = this.clientsSaySection().find('span[class*="swiper-button-next"]')
      return elem
   }

   clientSignatures = () => {
      let elem = this.clientsSaySection().find('div', '.testimonials-slider').find('div[class*="swiper-slide"]').find('div[class="signature"]')
      return elem
   }







   // METHODS of "Our clients say"



   scrollToSection = (hText) => {
      // cy.get('body').find('h2[class="section-title"]').contains(hText).scrollIntoView({top: -1000, left: 0}).should('be.visible')
      cy.get('body').contains(hText).click().wait(400).should('be.visible') //scroll does not always work here 
      return this
   }

   clientClick = (num) => {
      this.allClients().eq(num).click().wait(200)
      return this
   }

   swiperPrevBtnClick = () => {
      this.swiperPrevBtn().click()
      return this
   }

   swiperNextBtnClick = () => {
      this.swiperNextBtn().click()
      return this
   }



   //ELEMENTS "WHAT WE TEST" section

   weTestItems = () => {
      let elem = cy.get('body').contains('What We Test').parents('div[class*="container"]').last().find('div', 'testing-items show-items').find('div[class="item"]')
      return elem
   }

   weTestItemRedPict = (num) => {
      let elem = this.weTestItems().eq(num).find('img[class = "hover-icon"]')
      return elem
   }

   weTestItemMainPict = (num) => {
      let elem = this.weTestItems().eq(num).find('img[class = "static-icon"]')
      return elem
   }

   // METHODS of "WHAT WE TEST"

   weTestItemHover = (num) => {
      this.weTestItems().eq(num).realHover().wait(100)
      return this
   }
}