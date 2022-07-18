<template>
  <v-btn icon rounded small plain color="primary" @click="$emit('click')">
    <v-icon color="grey"> {{ icon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  props: ["icon"],
};
</script>
