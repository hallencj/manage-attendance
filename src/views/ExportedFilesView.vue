<script setup>
import BaseTableNoData from '@/components/base/BaseTableNoData.vue'
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
        <BaseTableNoData 
          title="There are no exported items to show on your end."
          description="<p>Search for logs and click <span class='text-green-300'>Export</span> to generate the file here.</p>"
        />
      </template>

      <template #bottom>
        <BaseTableFooter 
          :total_pages="1"
          :total_items="0"
        />
      </template>
    </v-data-table>
  </v-card>
</template>