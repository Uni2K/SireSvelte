<script>
    export let name;
    export let width = "1rem";
    export let height = "1rem";
    export let focusable = false;
    let icons = [
        {
            box: "0 0 15.077 66.015",
            name: "logo",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="15.077" height="66.015" viewBox="0 0 15.077 66.015">
  <path id="Pfad_6" data-name="Pfad 6" d="M307.283,68.681V65.175H292.206v3.506h5.785v59h-5.785v3.506h15.077v-3.506H301.5v-59Z" transform="translate(-292.206 -65.175)" fill="#07a4e9"/>
</svg>
`
        }
    ];
    let displayIcon = icons.find((e) => e.name === name);
</script>
<svg
        class={$$props.class}
        {focusable}
        {width}
        {height}
        viewBox="{displayIcon.box}">{@html displayIcon.svg}</svg>
