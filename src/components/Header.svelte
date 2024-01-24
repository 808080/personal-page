<script lang="ts">
  import { link, push } from 'svelte-spa-router';

  import Logo from '../assets/images/logo.svg';
  import Button from './Button.svelte';
  import company, { companies } from '../utils/companyStore';
  import Select from './Select.svelte';
</script>

<header class="header container d-flex">
  <div class="logo">
    <img class="logo__img" src={Logo} alt="logo" />
  </div>

  <nav class="nav d-flex">
    <a class="nav__link f18" href="/#" use:link>Money</a>
    <a class="nav__link f18" href="/team" use:link>Team</a>
    <a class="nav__link f18" href="/#" use:link>Cards</a>
    <a class="nav__link f18" href="/#" use:link>Help center</a>
    <a class="nav__link f18" href="/#" use:link>Invite your partners</a>
  </nav>

  <div class="account d-flex">
    <Button
      label="Upgrade plan"
      classList="upgrade"
      onClick={() => push('/plans')}
    />

    <div class="account__company d-flex">
      <span class="account__company__initial f16">
        {$company.charAt(0)}
      </span>

      <Select items={companies} bind:value={$company} />
    </div>
  </div>
</header>

<style lang="scss">
  .header {
    padding-block: 30px;
    max-width: 1530px;
  }

  .logo {
    margin-inline-end: 10%;
  }

  .nav {
    // margin-inline-start: r(100);
    &__link {
      color: $c-black;
      padding-inline: r(20);
      line-height: 1;

      &:not(:hover) {
        text-decoration: none;
      }
    }
  }

  .account {
    margin-inline-start: auto;

    &__company {
      margin-inline: r(32);

      &__initial {
        background-color: $c-primary-light;
        color: $c-primary;
        font-weight: 700;
        width: r(32);
        line-height: r(32);
        text-align: center;
        border-radius: r(12);
        text-transform: uppercase;
      }
    }
  }
</style>
