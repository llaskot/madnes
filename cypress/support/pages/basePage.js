export class BasePage {

   // ELEMENTS :
   confirmCookiesBtn = () => {
      return cy.get('#wt-cli-accept-all-btn')
   }

   headerDrp = (item) => {
      return cy.get('header').contains(item)
   }

   drpList = (item) => {
      let elem = this.headerDrp(item).parent().find('li[id*="menu-item"]');
      return elem;
   }

   listItem = (item, num) => {
       let elem = this.drpList(item).eq(num);
       return elem;
   }

   // METHODS :
   logoMouseHover = () => {
      cy.get('header').find('.brand').realHover()
      return this
   }

   confirmCookiesBtnClick = () => {
      this.confirmCookiesBtn().click()
      return this
   }

   headDrpMouseHover = (item) => {
      this.headerDrp(item).realHover()
      return this
   }

   headerBtnClick = (item) => {
      this.headerDrp(item).scrollIntoView().click()
      return this
   }

   logoBtnClick = () => {
      cy.get('header').find('.brand').scrollIntoView().click()
      return this
   }


   contactUsBtnClick = () => {
      cy.get('header').find('a[class="started-btn"]').click()
      return this
   }
}