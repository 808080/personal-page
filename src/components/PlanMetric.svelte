<script lang="ts">
  import { link } from 'svelte-spa-router';

  export let title: string;
  export let value: number = 0;
  export let max: number | null = null;
  export let description: string;
</script>

<div class="metric">
  <div class="metric__header d-flex">
    <p class="metric__title f16">{title}</p>

    <p class="metric__usage f14">
      {#if max}
        <span class="metric__usage__value">{value}</span>
        <span style="margin-inline: 4px;">/</span>
        <span>{max}</span>
      {:else}
        Unlimited
      {/if}
    </p>
  </div>

  <div class="metric__bar">
    <div
      class="metric__bar--status"
      class:max={value === max}
      style="width: {max ? (value / max) * 100 : 100}%;"
    ></div>
  </div>

  <div class="metric__description f14">
    {description}
    {#if max}
      <a class="link" href="/plans" use:link>Upgrade your plan</a>
    {/if}
  </div>
</div>

<style lang="scss">
  .metric {
    flex: 0 0 calc(50% - r(20));

    &__header {
      justify-content: space-between;
      p {
        margin: 0;
      }
    }

    &__usage {
      color: $c-grey;

      &__value {
        color: $c-black;
      }
    }

    &__bar {
      width: 100%;
      background-color: $c-grey-light;
      height: 8px;
      border-radius: 4px;
      position: relative;
      overflow: hidden;
      margin-block: r(8);

      &--status {
        top: 0;
        left: 0;
        position: absolute;
        border-radius: 4px;
        height: 100%;
        background-color: $c-secondary;

        &.max {
          background-color: $c-primary;
        }
      }
    }

    &__description {
      color: $c-grey;

      a {
        color: $c-grey;
        &:hover {
          text-decoration: none;
        }
      }
    }
  }
</style>
