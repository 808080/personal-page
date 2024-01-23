<script lang="ts">
  import Router, { link } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
  import "./style.scss";

  import routes from "./utils/routes";
  import Header from "./components/Header.svelte";
  import company from "./utils/companyStore";
</script>

<main>
  <Header />
  <nav class="nav">
    <a class="nav__link" href="/profile" use:link use:active>profile</a>
    <a href="/team" use:link use:active>team</a>
    <a href="/invoicing" use:link use:active>invoicing</a>
    <a class="f28" href="/plans" use:link use:active>plans</a>
  </nav>
  {$company}
  <div>
    <Router {routes} />
  </div>
</main>

<style lang="scss">
  .nav {
    &__link {
      font-size: 28px;
    }
  }
</style>
