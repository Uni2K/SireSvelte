<script>
    export let icon;
    export let text;
    export let inverted=false;
    let classStr="buttonDefault";
    $: if(inverted)classStr="buttonInverted";
    import Fa from 'svelte-fa/src/fa.svelte'
</script>

<button on:click class="{classStr}">
    <Fa icon={icon} size="lg"  class=" rounded-full" style="padding: 3px; color:{inverted?'white':'black'}"/>
    <span style="padding-left: 0.75rem">{text}</span>
</button>

