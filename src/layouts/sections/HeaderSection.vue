<template>
    <div class="header-section">
        <navigation></navigation>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navigation from '@/components/Navigation.vue';

@Component({
  components: {
    Navigation,
  },
})
export default class HeaderSection extends Vue {}
</script>

<style lang="scss" scoped>

</style>
