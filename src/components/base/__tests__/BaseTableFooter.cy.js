import BaseTableFooter from '@/components/base/BaseTableFooter.vue'

describe('BaseTableFooter', () => {
  it('renders properly', () => {
    cy.mount(BaseTableFooter, { props: { total_pages: 0, total_items: 0 } })
  })
})
