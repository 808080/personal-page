<script lang="ts">
  export let label: string;
  export let classList: string = '';
  export let onClick: ((event: MouseEvent) => {}) | undefined = undefined;
</script>

<button type="button" class={`btn f14 ${classList}`} on:click={onClick}>
  <span class="btn__label">{label}</span>
</button>

<style lang="scss">
  .btn {
    border-radius: r(8);
    padding: r(7) r(12);
    border: none;
    font-weight: 600;
    line-height: 16px;
    transition: 0.2s;
    white-space: nowrap;

    &__label {
      padding-inline: 4px;
    }

    &::before {
      display: inline-block;
      vertical-align: middle;
      width: r(16);
      height: r(16);
      background-size: contain;
      margin-inline-end: 4px;
      background-repeat: no-repeat;
    }
  }

  .upgrade {
    background-color: rgba($c-secondary, 0.12);
    color: $c-secondary;

    &:hover {
      background-color: $c-secondary;
      color: #fff;
    }

    &::before {
      content: '';
      background-image: url('../assets/images/rocket.png');
    }
  }
</style>
