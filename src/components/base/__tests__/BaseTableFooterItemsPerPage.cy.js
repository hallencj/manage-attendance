import BaseTableFooterItemsPerPage from '@/components/base/BaseTableFooterItemsPerPage.vue'

describe('BaseTableFooterItemsPerPage', () => {
  it('renders properly', () => {
    cy.mount(BaseTableFooterItemsPerPage)
    cy.get('span').should('contain', 'Items per page')
    cy.get('span').should('contain', '10')
  })
})
