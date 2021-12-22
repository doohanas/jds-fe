<template>
  <v-app>
    <Header/>
    <FormSection/>
  </v-app>
</template>

<script>
import Header from '@/views/Header'
import FormSection from '@/views/FormSection';

export default {
  name: 'App',
  components: {
    Header,
    FormSection
  },
};
</script>
