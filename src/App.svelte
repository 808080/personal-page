<script lang="ts">
  import { onMount } from 'svelte';
  import Router, { push } from 'svelte-spa-router';

  import routes from './utils/routes';
  import Header from './components/Header.svelte';
  import SideBar from './components/SideBar.svelte';

  onMount(() => {
    push('/plans');
  });
</script>

<main class="page">
  <Header />

  <div class="container page__content">
    <SideBar />

    <div class="page__inner">
      <Router {routes} />
    </div>
  </div>
</main>

<style lang="scss">
  .page {
    &__content {
      max-width: 1150px;
      display: flex;
      gap: r(32);
    }

    &__inner {
      width: 100%;
    }
  }
</style>
