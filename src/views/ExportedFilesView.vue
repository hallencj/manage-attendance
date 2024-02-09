<script setup>
import no_payslip from '@/assets/svg/no-payslip.svg'
import BaseTableFooter from '@/components/base/BaseTableFooter.vue'
</script>

<template>
  <h1>Exported Files</h1>
  <p>No file to download</p>

  <v-card   
    class="mt-5"
    color="neutral-40"
    variant="outlined"
  >
    <v-data-table>
      <template #no-data>
        <v-sheet 
          class="justify-center d-flex"
          height="564"
        >
          <v-card-item>
            <v-img 
              :src="no_payslip"
              height="144"
            />
            <h2>There are no exported items to show on your end.</h2>
            <p>Search for logs and click <span class="export">Export</span> to generate the file here.</p>
          </v-card-item>
        </v-sheet>
      </template>

      <template #bottom>
        <BaseTableFooter />
      </template>
    </v-data-table>
  </v-card>
</template>

<style lang="scss" scoped>
@use '@/assets/css/theme.module.scss' as theme;

h1, h2, p {
  color: theme.$neutral-800;
}

.export {
  color: theme.$green-300;
}
</style>