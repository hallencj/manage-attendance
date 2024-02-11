import BaseTableFooterPagination from '@/components/base/BaseTableFooterPagination.vue'

describe('BaseTableFooterPagination', () => {
  it('renders properly', () => {
    cy.mount(BaseTableFooterPagination, { props: { total_pages: 0 } })
    cy.get('span').should('contain', 'of 0')
  })

  it('renders properly without props', () => {
    cy.mount(BaseTableFooterPagination)
    cy.get('span').should('contain', 'of 0')
  })

  it('counts properly', () => {
    cy.mount(BaseTableFooterPagination, { props: { total_pages: 5 } })
    cy.get('span').should('contain', 'of 5')
  })
})
