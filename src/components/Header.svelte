<script lang="ts">
  import { link } from "svelte-spa-router";

  import Logo from "../assets/images/logo.svg";
  import Button from "./Button.svelte";
  import company, { companies } from "../utils/companyStore";
</script>

<header class="header container">
  <div class="logo">
    <img class="logo__img" src={Logo} alt="logo" />
  </div>

  <nav class="nav">
    <a class="nav__link" href="/#" use:link>Money</a>
    <a class="nav__link" href="/team" use:link>Team</a>
    <a class="nav__link" href="/#" use:link>Cards</a>
    <a class="nav__link" href="/#" use:link>Help center</a>
    <a class="nav__link" href="/#" use:link>Invite your partners</a>
  </nav>

  <div class="account">
    <Button label="Upgrade plan" classList="upgrade" />

    <div class="account__company">
      <span class="account__company__initial">
        {$company.charAt(0)}
      </span>

      <select class="account__company__select" bind:value={$company}>
        {#each companies as company}
          <option value={company}>
            {company}
          </option>
        {/each}
      </select>
    </div>
  </div>
</header>

<style lang="scss">
  .header {
    max-width: 1530px;
    color: $c-grey;
  }
  // .account {

  // }
</style>
