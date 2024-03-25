<script lang="ts">
  import { link, push } from 'svelte-spa-router';
  import Button from '../components/Button.svelte';
  import type { MouseEventHandler } from 'svelte/elements';
  import { onMount } from 'svelte';
  import PlanMetric from '../components/PlanMetric.svelte';

  $$props;

  let showFeature = true;
  const featureClose = () => {
    showFeature = false;
  };
  const featureOpen = () => {
    if (showFeature) return;
    showFeature = true;
  };

  let underline: HTMLDivElement;

  onMount(() => {
    const btn = document.querySelector('.tabs__btn') as HTMLButtonElement;
    underline.style.maxWidth = `${btn.offsetWidth}px`;
  });

  type Tab = 'invoices' | 'limits';
  let currentTab: Tab = 'limits';
  const selectTab: MouseEventHandler<HTMLButtonElement> = (e) => {
    const btn = e.currentTarget;
    const tab = btn.value as Tab;
    if (currentTab === tab) return;
    currentTab = tab;
    underline.style.transform = `translateX(${btn.offsetLeft}px)`;
    underline.style.maxWidth = `${btn.offsetWidth}px`;
  };
</script>

<div class="card">
  <div class="d-flex title-wrap">
    <h1 class="f36 title f-montserrat">Invoicing Start</h1>

    <a class="link f16" href="/plans" use:link>Change plan</a>
  </div>

  <p class="price f28 f-montserrat">6,99 € <span class="f20">/mo</span></p>

  <div class="billing f14">
    <span>We’ll charge 6,99 € on Jul 24, 2020</span>

    <a class="link" href="/invoicing" use:link
      >Change card *** 5423 or billing info</a
    >
  </div>

  <div class="switch-plan">
    <Button
      label="Switch to annual plan"
      classList="switch-plan__link"
      onClick={() => push('/plans')}
    />

    <span class="f14">and save 24,00 € a year</span>
  </div>

  <div class="explore">
    <div class="d-flex explore__title-wrap">
      <h2 class="explore__title f-montserrat f20">Explore new features</h2>

      {#if !showFeature}
        <button on:click={featureOpen} class="explore__show-feature"></button>
      {/if}
    </div>

    {#if showFeature}
      <div class="feature d-flex">
        <div class="feature__col">
          <h3 class="feature__title f-montserrat f24">Invoicing Premium</h3>

          <ul class="feature__list">
            <li class="feature__list__item f14">
              Unlimited outgoing e-invoices
            </li>
            <li class="feature__list__item f14">Unlimited connected banks</li>
            <li class="feature__list__item f14">10 users</li>
            <li class="feature__list__item f14">Expense management</li>
          </ul>
        </div>

        <div class="feature__col feature__col--right">
          <button class="feature__close" on:click={featureClose}></button>

          <p class="feature__price-month f-montserrat f24">€20.99 /mo</p>
          <p class="feature__price">
            billed annually or 24.99 €<br />billed monthly
          </p>

          <Button
            label="Upgrade"
            classList="feature__link"
            onClick={() => push('/plans')}
          />
        </div>
      </div>
    {/if}
  </div>
</div>

<div class="card">
  <div class="tabs">
    <div class="tabs__btns">
      <button
        value="limits"
        on:click={selectTab}
        class="tabs__btn f18"
        class:active={currentTab === 'limits'}
      >
        Limits
      </button>
      <button
        value="invoices"
        on:click={selectTab}
        class="tabs__btn f18"
        class:active={currentTab === 'invoices'}
      >
        Invoices
      </button>
      <div class="tabs__underline" bind:this={underline}></div>
    </div>

    <div class="tabs__content">
      {#if currentTab === 'limits'}
        <div class="tabs__limits">
          <PlanMetric
            title="Team members"
            description="Need more members?"
            value={3}
            max={6}
          />
          <PlanMetric
            title="Outgoing e-invoices"
            description="Send as many e-invoices as you want"
          />
          <PlanMetric
            title="Connected sources (banks)"
            description="Need more banks to connect?"
            value={5}
            max={5}
          />
        </div>
      {:else if currentTab === 'invoices'}
        Invoices
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  .explore {
    &__title {
      font-weight: 700;
      line-height: 1.2;
      &::after {
        content: '';
        background-image: url('../assets//images/dizzy.png');
        background-repeat: no-repeat;
        display: inline-block;
        vertical-align: middle;
        width: r(24);
        height: r(24);
        background-size: contain;
        margin-inline-start: 8px;
      }
    }

    &__show-feature {
      border: none;
      outline: none;
      background: transparent no-repeat center;
      background-image: url('../assets/images/chevron.svg');
      background-size: 14px;
      padding: 12px;
    }

    &__title-wrap {
      justify-content: space-between;
    }
  }

  .tabs {
    position: relative;

    &__content {
      margin-top: 40px;
    }

    &__btn {
      border: none;
      background: none;
      padding: 0;
      color: #c4c4c4;
      margin-right: r(40);
      margin-block: 12px;

      &.active {
        font-weight: 700;
        color: $c-black;
      }
    }

    &__underline {
      background-color: $c-primary;
      height: 4px;
      width: 100%;
      border-radius: 4px;
      transition: 0.3s;
    }

    &__limits {
      display: flex;
      flex-wrap: wrap;
      gap: r(40);
    }
  }

  .feature {
    background-color: $c-secondary-light;
    border-radius: r(12);
    padding: r(24) r(40);
    justify-content: space-between;
    align-items: flex-start;

    &__col {
      &--right {
        text-align: end;
      }
    }

    &__title {
      margin: 0;
      color: $c-secondary;
      font-weight: 700;
    }

    &__list {
      list-style-image: url('../assets/images/check.svg');
      padding-inline-start: 25px;
      line-height: 2.2;
      margin-bottom: 0;
    }

    &__close {
      border: none;
      outline: none;
      background: transparent no-repeat center;
      background-image: url('../assets/images/close.svg');
      background-size: 8px;
      padding: 10px;
    }

    &__closed {
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    &__price-month {
      font-weight: 700;
      margin-block: r(12);
    }

    &__price {
      color: $c-grey;
      margin-top: 0;
      margin-bottom: r(25);
    }
  }

  .link {
    color: $c-secondary;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
  .title-wrap {
    justify-content: space-between;
  }
  .title {
    margin: 0;
    line-height: 1.2;
    font-weight: 700;
  }
  .price {
    line-height: 1.2;
    font-weight: 700;
    margin-block: r(8);
  }
  .billing {
    color: $c-grey;
    margin-block: r(20);

    .link {
      margin-inline-start: r(22);
    }
  }
  .switch-plan {
    padding-bottom: r(40);
    border-bottom: solid 1px rgba($color: $c-black, $alpha: 0.08);
  }
</style>
