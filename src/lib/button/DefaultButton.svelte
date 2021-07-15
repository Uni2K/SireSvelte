<script>
    export let icon;
    export let text;
    import Fa from 'svelte-fa/src/fa.svelte'
</script>

<button class="buttonDefault">
    <Fa icon={icon} size="lg" class=" rounded-full" style="padding: 3px"/>
    <span style="padding-right: 0.75rem"/>
    {text}
</button>

