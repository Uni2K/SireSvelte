<script>



    export let currentScale = 100;
    const min = 80;
    const max = 100;
    let bubbleWidth;

    let sliderVal;
    $: sliderVal = Number(((currentScale - min) * 100) / (max - min));


</script>

<div id="scaleWrapper">
<div style="margin-left: {sliderVal*1.15+3}px" id="bubble" bind:clientWidth={bubbleWidth}   >{currentScale}%</div>
<input type="range" min={min} max={max} bind:value={currentScale} name="scale" class="slider" id="scaleSlider">
</div>
<style>
    #scaleWrapper{
       @apply flex content-center flex-col flex-wrap items-baseline;
    }
    #bubble {
        display: inline;
        @apply bg-gray-100 rounded-lg pl-2 pr-2 pb-0.5 pt-0.5 text-sm mb-1.5;
    }

    input[type=range] {
        @apply appearance-none  ml-5  rounded-full ;
    }

    input[type=range]:focus {
        @apply outline-none  rounded-full;
    }

    input[type=range]::-webkit-slider-runnable-track {
        @apply w-full h-1.5 cursor-pointer shadow-sm bg-gray-100 rounded-full ;
    }

    input[type=range]::-webkit-slider-thumb {
        @apply shadow-md h-3 w-3 rounded-full bg-sire-primary cursor-pointer appearance-none  ;
        margin-top: -0.16rem;

    }

    input[type=range]:focus::-webkit-slider-runnable-track {
        @apply bg-gray-100;
    }
</style>





