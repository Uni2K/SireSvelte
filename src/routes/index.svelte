<script lang="ts">
    import PagePrototype from "../lib/page/PagePrototype.svelte";
    import ScaleSlider from "../lib/sliders/ScaleSlider.svelte";
    import ScaleButton from "../lib/button/ScaleButton.svelte";
    import TopArrow from "../lib/arrows/TopArrow.svelte";
    import {fade, fly} from 'svelte/transition';
    import ContainerWelcome from "../lib/containers/ContainerWelcome.svelte";
    import ContainerHeader from "../lib/containers/ContainerHeader.svelte";
    import ContainerEditing from "../lib/containers/ContainerEditing.svelte";
    import ContainerFinal from "../lib/containers/ContainerFinal.svelte";

    const enum ContainerTypes {
        Welcome, Editing, Header, Final
    }

    function navigate(event): void {
        currentContainer = event.detail.destination;
    }


    let currentScale;
    let pagePrototype;
    let currentContainer = ContainerTypes.Editing;


</script>

<svelte:head>
    <title>Sire Svelte</title>
</svelte:head>


<div>

    <div id="editor" class="split">
        <PagePrototype bind:this={pagePrototype} bind:scaleX={currentScale} bind:scaleY={currentScale}/>
        <div id="topArrow" transition:fade>
            <TopArrow/>
        </div>
        <div id="scaleSlider">
            <div style="margin-bottom: -6px;" on:click="{() => pagePrototype.reset()}">
                <ScaleButton/>
            </div>
            <div style="margin-left: -10px">
                <ScaleSlider bind:currentScale={currentScale}/>
            </div>
        </div>
    </div>


    <div id="content" class="split">
        {#if currentContainer === ContainerTypes.Welcome}
            <ContainerWelcome on:navigate={navigate}/>
        {:else if currentContainer === ContainerTypes.Header}
            <div transition:fly>
                <ContainerHeader on:navigate={navigate}/>
            </div>
        {:else if currentContainer === ContainerTypes.Editing}
            <div transition:fly>
                <ContainerEditing on:navigate={navigate}/>
            </div>
        {:else if currentContainer === ContainerTypes.Final}
            <div transition:fly>
                <ContainerFinal on:navigate={navigate}/>
            </div>
        {/if}


    </div>


</div>
<style>
    #scaleSlider {
        position: fixed;
        align-items: flex-end;
        display: flex;
        bottom: 2rem;
        left: 2rem;
        z-index: 1000;
    }

    #topArrow {
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
