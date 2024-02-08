<script setup>

</script>

<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        class="text-capitalize text-body-1 font-weight-regular"
        color="#2FC7E2"
      >
        <v-avatar 
          class="mr-4"
          color="#C4C4C4" 
          size="30" 
        />

        Admin
        
        <v-icon 
          class="ml-1" 
          icon="fa:fas fa-caret-down"
          size="16"
        />
      </v-btn>
    </template>
  </v-menu>
</template>