<script setup>
import { ref } from 'vue'

const search = ref('')
const showPlaceholder = ref(true)

function handleSearch() {
  // TO:DO
}
</script>

<template>
  <v-card 
    color="#DDDDDD"
    width="200" 
    variant="outlined"
  >
    <v-text-field 
      v-model="search" 
      @click:append-inner="handleSearch()"
      @keyup.enter="handleSearch()"
      @focus="showPlaceholder = false"
      @blur="showPlaceholder = true"
      density="compact"
      variant="solo" 
      bg-color="transparent"
      hide-details
    >
      <template #append-inner>
        <v-icon 
          icon="fa:fas fa-search" 
          color="#DDDDDD"
          size="16"
        />
      </template>
    </v-text-field>

    <span 
      v-show="showPlaceholder" 
      class="search-employee-placeholder"
    >
      Search Employee...
    </span>
  </v-card>
</template>

<style scoped>
.search-employee-placeholder {
  margin-left: 15px;
  position: absolute;
  pointer-events: none;
  text-wrap: nowrap;
  transform: translateY(-50%);
  top: 50%;
}

.v-field__prepend-inner > .v-icon, 
.v-field__append-inner > .v-icon, 
.v-field__clearable > .v-icon {
  opacity: 1;
}
</style>