<script setup>
defineProps(
  {
    total_pages: {
      type: Number,
      default: 0
    }
  }
)
</script>

<template>
  <v-icon
    color="neutral-40" 
    icon="$first" 
    size="14" 
  />

  <v-icon
    class="mx-4"
    color="neutral-40" 
    icon="fa:fas fa-caret-left" 
    size="16" 
  />

  <span class="text-neutral-400">Page</span>

  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        class="text-capitalize text-body-1 font-weight-regular pa-0 mx-2"
        variant="outlined"
        color="neutral-40"
        height="24"
      >
      <span class="text-neutral-60">1</span>
      </v-btn>
    </template>

    <v-list>
      <v-list-item>1</v-list-item>
    </v-list>
  </v-menu>
  
  <span class="text-neutral-400">of {{ total_pages ? total_pages : 0 }}</span>

  <v-icon
    class="mx-4"
    color="neutral-40" 
    icon="fa:fas fa-caret-right" 
    size="16" 
  />

  <v-icon
    color="neutral-40" 
    icon="$last" 
    size="14" 
  />
</template>