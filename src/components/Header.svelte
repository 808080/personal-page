<script lang="ts">
  import { link } from "svelte-spa-router";

  import Logo from "../assets/logo.svg";
  import Button from "./Button.svelte";
  import company, { companies } from "../utils/companyStore";
</script>

<header class="header">
  <div>
    <img src={Logo} alt="logo" />
  </div>
  <nav>
    <a href="/#" use:link>Money</a>
    <a href="/team" use:link>Team</a>
    <a href="/#" use:link>Cards</a>
    <a href="/#" use:link>Help center</a>
    <a href="/#" use:link>Invite your partners</a>
  </nav>

  <div>
    <Button label="Upgrade plan" />

    <div>
      <span>
        {$company.charAt(0)}
      </span>

      <select bind:value={$company}>
        {#each companies as company}
          <option value={company}>
            {company}
          </option>
        {/each}
      </select>
    </div>
  </div>
</header>

<style>
</style>
