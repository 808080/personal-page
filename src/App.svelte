<script lang="ts">
  import Router, { link } from 'svelte-spa-router';
  import active from 'svelte-spa-router/active';

  import routes from './utils/routes';
  import Header from './components/Header.svelte';
  import company from './utils/companyStore';
</script>

<main>
  <Header />

  <div class="container page-content">
    <nav class="nav">
      <h5>Personal</h5>
      <a class="nav__link" href="/profile" use:link use:active>Profile</a>
      <a class="nav__link" href="/security" use:link use:active>Security</a>
      <a class="nav__link" href="/notifications" use:link use:active
        >Notifications</a
      >

      <h5>{$company}</h5>
      <a class="nav__link" href="/business-profile" use:link use:active
        >Business profile</a
      >
      <a class="nav__link" href="/invoicing" use:link use:active>E-invoicing</a>
      <a class="nav__link" href="/plans" use:link use:active>Plan and limits</a>
      <a class="nav__link" href="/team" use:link use:active>Team</a>
    </nav>

    <div>
      <Router {routes} />
    </div>
  </div>
</main>

<style lang="scss">
  .page-content {
    max-width: 1150px;
  }
  .nav {
    &__link {
      font-size: r(24);
    }
  }
</style>
