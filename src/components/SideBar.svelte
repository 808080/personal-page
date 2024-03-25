<script lang="ts">
  import { link } from 'svelte-spa-router';
  import active from 'svelte-spa-router/active';
  import company from '../utils/companyStore';
</script>

<nav class="nav card">
  <div class="nav__group">
    <h5 class="nav__title">Personal</h5>
    <a class="nav__link" href="/profile" use:link use:active>Profile</a>
    <a class="nav__link" href="/security" use:link use:active>Security</a>
    <a class="nav__link" href="/notifications" use:link use:active
      >Notifications</a
    >
  </div>

  <div class="nav__group">
    <h5 class="nav__title">{$company}</h5>
    <a class="nav__link" href="/business-profile" use:link use:active
      >Business profile</a
    >
    <a class="nav__link" href="/invoicing" use:link use:active>E-invoicing</a>
    <a class="nav__link" href="/plans" use:link use:active>Plan and limits</a>
    <a class="nav__link" href="/team" use:link use:active>Team</a>
  </div>
</nav>

<style lang="scss">
  .nav {
    max-width: 304px;
    width: 100%;
    height: 100%;
    padding: r(32) 0;

    &__title {
      padding: 0 r(32);
      margin-top: 0;
      margin-bottom: 6px;
      text-transform: uppercase;
      font-size: r(12);
      color: $c-grey;
      font-weight: 700;
      font-family: 'montserrat', sans-serif;
    }

    &__link {
      padding: 0 r(28);
      display: block;
      text-decoration: none;
      color: $c-black;
      line-height: r(40);
      border-inline-start: solid r(4) transparent;
      transition: border-color 0.2s;

      &:global(.active) {
        border-inline-start-color: $c-primary;
        font-weight: 700;
      }
    }

    &__group {
      &:not(:last-of-type) {
        margin-bottom: 28px;
      }
    }
  }
</style>
