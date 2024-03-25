<script lang="ts">
  import { fade } from 'svelte/transition';

  export let value: string = '';
  export let items: string[];
  let show = false;

  const onSelect = (index: number) => {
    value = items[index];
  };

  const toggleShow = () => {
    show = !show;
  };

  const hide = () => {
    show = false;
  };
</script>

<div class="select">
  <button
    class={`select__label f18 ${show ? 'select__label--open' : ''}`}
    on:click={toggleShow}
    on:blur={hide}
  >
    {value}
  </button>

  {#if show}
    <div class="select__list" transition:fade={{ duration: 100 }}>
      {#each items as item, index}
        <button
          class="select__item f16 item-hover"
          on:mousedown={() => onSelect(index)}
        >
          {item}
        </button>
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  button {
    background: none;
    border: none;
    text-align: start;
  }

  .select {
    position: relative;

    &__label {
      display: block;
      width: clamp(130px, 100%, 150px);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-inline: 10px;
      position: relative;

      &::after {
        position: absolute;
        display: block;
        width: r(10);
        height: r(6);
        background-size: contain;
        content: '';
        background-repeat: no-repeat;
        background-image: url('../assets/images/chevron.svg');
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }

      &--open {
        &::after {
          transform: translateY(-50%) rotate(180deg);
        }
      }
    }

    &__list {
      position: absolute;
      top: calc(100% + 10px);
      z-index: 2;
      left: 50%;
      transform: translateX(-50%);
      width: 180px;
      background-color: #fff;
      border-radius: r(16);
      overflow: hidden;
      padding-block: r(10);
    }

    &__item {
      padding: r(10) r(16);
      display: block;
      width: 100%;
      position: relative;
    }
  }

  .item-hover {
    border-inline-start: solid 4px transparent;
    transition: border-color 0.2s;

    &:hover {
      border-inline-start-color: $c-primary;
    }
  }
</style>
