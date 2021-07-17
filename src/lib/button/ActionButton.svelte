<script>
    export let icon;
    export let text;
    let classStr="buttonDefault";
    import Fa from 'svelte-fa/src/fa.svelte'
</script>

<button on:click class="{classStr}">
    <Fa icon={icon} size="lg"  class=" rounded-full" style="padding: 3px; color:black"/>
    <br>
    <span style="padding-left: 0.75rem">{text}</span>
</button>

