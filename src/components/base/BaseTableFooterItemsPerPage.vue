<template>
  <span class="text-neutral-400">Items per page</span>

  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        class="text-capitalize text-body-1 font-weight-regular pa-0 ml-2"
        variant="outlined"
        color="neutral-60"
        height="24"
      >
        <span class="text-neutral-400">10</span>
        
        <v-icon 
          class="ml-4" 
          color="neutral-400"
          icon="fa:fas fa-chevron-down"
          size="16"
        />
      </v-btn>
    </template>

    <v-list>
      <v-list-item>10</v-list-item>
    </v-list>
  </v-menu>
</template>