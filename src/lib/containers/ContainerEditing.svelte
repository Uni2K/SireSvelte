<script>
    import ActionButton from "../button/ActionButton.svelte";
    import {faCheck, faFont, faHeading, faUndoAlt, faPen, faImage} from "@fortawesome/free-solid-svg-icons";
    import DefaultButton from "../button/DefaultButton.svelte";
    import EditingList from "../lists/EditingList.svelte";
    import Modal from 'svelte-simple-modal';
    import DialogSignature from "../dialogs/DialogSignature.svelte";
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();
    import { writable } from 'svelte/store';
    const modal = writable(null);
    import { bind } from 'svelte-simple-modal';




    function navigate() {
        dispatch('navigate', {
            destination: 3
        });
    }

    const openSignatureModal = () => {
        modal.set(bind(DialogSignature,{ message: 'custom name'}), )
    };



</script>


<div style="width: 100%;position: absolute; left:0px; bottom: 40px; top: 0;">
    <div id="topContainer">
        <ActionButton text="Schriftart" icon="{faFont}"/>
        <span></span>
        <ActionButton text="Zurücksetzen" icon="{faUndoAlt}"/>
        <span></span>
        <ActionButton text="Header" icon="{faHeading}"/>
    </div>
    <div id="mainContainer">

            <EditingList/>




        <div style="margin-top: auto; margin-bottom: 30px; ">
            <DefaultButton text="Unterschrift hinzufügen"  icon="{faPen}" on:click={()=>openSignatureModal()}/><br>
            <DefaultButton text="Bild hochladen"  icon="{faImage}"/>
        </div>

        <div >
            <div style="float:right">
                <DefaultButton text="Fertigstellen" inverted=true icon="{faCheck}" on:click={navigate}/>
            </div>
        </div>


    </div>
</div>
<Modal show={$modal} />
<style>

    #topContainer {
        @apply mt-32;
    }

    #mainContainer {
        @apply bg-gray-100 rounded-sm w-3/4 mt-1.5 h-4/5 flex flex-col p-6;
    }

    span {
        margin-right: 0.375rem;
    }
</style>
