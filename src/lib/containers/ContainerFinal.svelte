<script lang="ts">
    import ThanksLogo from "../logos/ThanksLogo.svelte";
    import SocialMediaButton from "../button/SocialMediaButton.svelte";
    import {faFilePdf, faPrint} from "@fortawesome/free-solid-svg-icons";
    import DefaultButton from "../button/DefaultButton.svelte";
    import * as jsPDF from "jspdf";

    function printDiv(divName) {
     /*   const doc = new jsPDF();
        const elementHandler = {
            '#ignorePDF': function (element, renderer) {
                return true;
            }
        };
        const source = window.document.getElementsByTagName("body")[0];
        doc.fromHTML(
            source,
            15,
            15,
            {
                'width': 180,'elementHandlers': elementHandler
            });

        doc.output("dataurlnewwindow");
*/

    }


</script>
<div style="height: 100%" id="print">
    <div class="flex flex-col items-center">

        <ThanksLogo/>
        <span style="margin-bottom: 40px; margin-top:10px;text-align: center; font-weight: bold; font-size: large; opacity: 0.7">,dass Sie Sire verwendet haben.<br> Erzählen Sie gerne Ihren Freund*innen davon.</span>

        <div class="flex flex-wrap justify-center " style=" grid-gap: 1em;   justify-items: left;">

            <SocialMediaButton text="Twitter" icon=""/>
            <SocialMediaButton text="Facebook" icon=""/>
            <SocialMediaButton text="Reddit" icon=""/>
            <SocialMediaButton text="Discord" icon=""/>
            <div style="flex-basis: 100%; height: 0"></div>
            <SocialMediaButton text="WhatsApp" icon=""/>
            <SocialMediaButton text="Messenger" icon=""/>
            <SocialMediaButton text="Telegram" icon=""/>

        </div>
    </div>

    <div style="position: absolute; bottom: 20px;">
        <span  class="text-sire-primary text-lg "> Ihr fertiges Dokument</span><br>
     <div class="flex items-center " style="margin-top: 10px">
         <DefaultButton text="Herunterladen" inverted=true icon="{faFilePdf}"/>
         <span style="margin-left: 10px; margin-right: 10px">oder</span>
         <DefaultButton text="Drucken" inverted=true icon="{faPrint}" on:click={()=>printDiv("print")}/>
     </div>

    </div>
</div>
