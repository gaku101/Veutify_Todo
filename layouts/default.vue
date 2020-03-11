<template>
  <v-app>
    <Navbar />
    <v-content class="grey lighten-4 px-4 mb-4">
        <nuxt />
    </v-content>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: { Navbar },
  data() {
    return {
     
    };
  }
};
</script>
