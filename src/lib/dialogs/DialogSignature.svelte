<script>

    import SignaturePad from "signature_pad";
    import {onMount} from "svelte";

    export let message;

    onMount(async () => {
        const canvas = document.querySelector("canvas");
        const signaturePad = new SignaturePad(canvas);
        signaturePad.on();
    });


</script>

<div>
    <span > <b>Signatur hinzufügen</b></span>

    


<div>
    <canvas id="signaturePad">


    </canvas>


</div>
</div>
