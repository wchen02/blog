<template>
  <div class="full-width-layout">
    <header-section></header-section>
    <router-view></router-view>
    <footer-section></footer-section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderSection from '@/layouts/sections/HeaderSection.vue';
import FooterSection from '@/layouts/sections/FooterSection.vue';

@Component({
  components: {
    HeaderSection,
    FooterSection,
  },
})
export default class FullWidthLayout extends Vue {}
</script>
