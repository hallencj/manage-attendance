<template>
  <v-sheet 
    class="text-center align-center justify-center d-flex pt-10" 
    height="564"
  >
    <div>
      <v-progress-circular 
        :size="70" 
        color="green-300"
        indeterminate
      />

      <p class="text-neutral-80 mt-4">Loading... Please Wait...</p>
    </div>
  </v-sheet>
</template>