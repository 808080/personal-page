<script lang="ts">
  export let label: string;
  export let classList: string = "";
  export let onClick: ((event: MouseEvent) => {}) | undefined = undefined;
</script>

<button type="button" class={`btn ${classList}`} on:click={onClick}>{label}</button>

<style lang="scss">
  .btn {
    border-radius: r(8);
  }
</style>
