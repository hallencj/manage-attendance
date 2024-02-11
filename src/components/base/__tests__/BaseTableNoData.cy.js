import BaseTableNoData from '@/components/base/BaseTableNoData.vue'

describe('BaseTableNoData', () => {
  it('renders properly', () => {
    cy.mount(BaseTableNoData, { props: { title: 'Sample Title', description: 'Sample Description' } })
    cy.get('h2').should('contain', 'Sample Title')
    cy.get('div').should('contain', 'Sample Title')
  })
})
1