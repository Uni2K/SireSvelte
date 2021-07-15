

<script>
    import DefaultButton from "../lib/button/DefaultButton.svelte";
    import DefaultLogo from "../lib/logos/DefaultLogo.svelte";
    import PagePrototype from "../lib/page/PagePrototype.svelte";
    import ScaleSlider from "../lib/sliders/ScaleSlider.svelte";
    import ScaleButton from "../lib/button/ScaleButton.svelte";
    import TopArrow from "../lib/arrows/TopArrow.svelte";
    import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'


    import {fade} from 'svelte/transition';

    let currentScale;

    let pagePrototype;
</script>

<svelte:head>
    <title>Sire Svelte</title>
</svelte:head>


<div>

    <div id="editor" class="split">
        <PagePrototype bind:this={pagePrototype} bind:scaleX={currentScale} bind:scaleY={currentScale}/>
        <div id="topArrow" transition:fade><TopArrow  /></div>
        <div id="scaleSlider">
           <div style="margin-bottom: -6px;"  on:click="{() => pagePrototype.reset()}"> <ScaleButton /></div>
            <div style="margin-left: -10px"><ScaleSlider  bind:currentScale={currentScale}/></div>
        </div>
    </div>



    <div id="content" class="split">

        <div style="margin-bottom: 1rem">
            <DefaultLogo/>
        </div>

        <div style="margin-bottom: 2rem">
            <span style="margin-bottom: 1rem" class="text-xl text-gray-700 opacity-50"> Erstellen Sie jetzt Ihr:</span>
            <div class="text-2xl"><span class=" text-sire-primary text-opacity-30">Notiz</span> <span class=" text-sire-primary">Anschreiben</span> <span class=" text-sire-primary text-opacity-50">Kündigung</span> <span class=" text-sire-primary text-opacity-20">Bewerbungsschreiben</span>
            </div>

        </div>


        <div>
            <DefaultButton text={"Anmelden"} icon={faDoorOpen}/>
        </div>

    </div>


</div>
<style>
    #scaleSlider{
        position: fixed;
        align-items: flex-end;
        display: flex;
       bottom: 2rem;
        left: 2rem;
        z-index: 1000;
    }
    #topArrow{
        position: fixed;
        align-items: flex-end;
        display: flex;
        top: 2rem;
        left: 2rem;
        z-index: 1000;
        width: 100px;
        height: 100px;
    }
    .split {
        height: 100%;
        width: 100%;
        position: fixed;
        z-index: 1;
        top: 0;
        overflow-x: hidden;
    }

    #editor {
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    #content {
        right: 0;
        width: 50%;
        z-index: 1000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;


    }

</style>
