<script lang="ts">
  import { link, push } from 'svelte-spa-router';

  import Button from './Button.svelte';
  import company, { companies } from '../utils/companyStore';
  import Select from './Select.svelte';
</script>

<header class="header container d-flex">
  <a href="/" class="logo f20" use:link>
    <h3>Logo</h3>
  </a>

  <nav class="nav d-flex">
    <a class="nav__link f18" href="/#" use:link>Money</a>
    <a class="nav__link f18" href="/team" use:link>Team</a>
    <a class="nav__link f18" href="/#" use:link>Cards</a>
    <a class="nav__link f18" href="/#" use:link>Help center</a>
    <a class="nav__link f18 present" href="/#" use:link>Invite your partners</a>
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
    width: 100%;
    max-width: r(165);
    text-decoration: none;
    color: $c-primary;
    font-weight: 700;
  }

  .nav {
    &__link {
      color: $c-black;
      padding-inline: r(20);
      line-height: 1;
      white-space: nowrap;

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

  .present {
    &::before {
      content: '';
      background-image: url('../assets/images/wrapped-present.png');
      display: inline-block;
      vertical-align: middle;
      width: r(24);
      height: r(24);
      background-size: contain;
      margin-inline-end: r(8);
      background-repeat: no-repeat;
    }
  }
</style>
