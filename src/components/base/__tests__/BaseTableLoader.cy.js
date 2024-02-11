import BaseTableLoader from '@/components/base/BaseTableLoader.vue'

describe('BaseTableLoader', () => {
  it('renders properly', () => {
    cy.mount(BaseTableLoader)
    cy.get('p').should('contain', 'Loading... Please Wait...')
  })
})
1