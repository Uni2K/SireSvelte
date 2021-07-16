<script lang="ts">
    import DefaultLogo from "../logos/DefaultLogo.svelte";
    import DefaultButton from "../button/DefaultButton.svelte";
    import {faDoorOpen} from '@fortawesome/free-solid-svg-icons'
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function navigate() {
        dispatch('navigate', {
            destination: 3
        });
    }




</script>
<div style="margin-bottom: 1rem">
    <DefaultLogo/>
</div>

<div style="margin-bottom: 2rem">
    <span style="margin-bottom: 1rem" class="text-xl text-gray-700 opacity-50"> Erstellen Sie jetzt Ihr:</span>
    <div class="text-2xl"><span class=" text-sire-primary text-opacity-30">Notiz</span> <span
            class=" text-sire-primary">Anschreiben</span> <span class=" text-sire-primary text-opacity-50">Kündigung</span>
        <span class=" text-sire-primary text-opacity-20">Bewerbungsschreiben</span>
    </div>

</div>


<div>
    <DefaultButton text={"Anmelden"} icon={faDoorOpen} on:click={navigate}/>
</div>
