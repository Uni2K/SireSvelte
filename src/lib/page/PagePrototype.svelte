<svelte:window bind:innerHeight={wrapperHeight}  bind:innerWidth={wrapperWidth}/>


<script>
    import {tweened} from 'svelte/motion';
    import {fly} from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';

    let visible = false;

    const stiffness = 1;
    const damping = 0.2;
    const wheelStepFraction = 1;
    export let scaleX = 100;
    const animatedScale = tweened(1, {
        duration: 150,
        easing: cubicOut
    });
    $: animatedScale.set(scaleX/100);
    let wrapperHeight = 0;
    let wrapperWidth = 0;
    let topOffset;
    let leftOffset;



    let negativeLimit;

    //page dimensions
    let pageHeight;
    let pageWidth;
    $: {
        pageWidth = wrapperWidth * 0.9 *0.5* (scaleX / 100);
        pageHeight = pageWidth / 0.7;
        leftOffset = (wrapperWidth * 0.5-pageWidth)/2;
    }



    $:topOffset = wrapperHeight * 0.20;//20% of the window
    $:negativeLimit = wrapperHeight * 0.20 + (pageHeight - wrapperHeight * 0.80); //20% of the window


    let coords;
    setTimeout(() => {
        //closure problems when using the div height
        if (topOffset !== undefined) {
            visible = true;
            coords = tweened({x: leftOffset, y: topOffset}, {
                stiffness: stiffness,
                damping: damping,
                duration: 200,
            });
        }
    }, 1000);

    export function reset(){
        scaleX=100;
        coords.update(($coords) => {
            return ({
                x: $coords.x,
                y: topOffset
            })
        });




    }

    function handlePanStart() {
        coords.stiffness = coords.damping = 1;
    }

    function handlePanMove(event) {


        coords.update(($coords) => {
            let cY = $coords.y + event.detail.dy;
            if (cY < -negativeLimit) {
                cY = -negativeLimit;
            }
            if (cY > topOffset) {
                cY = topOffset;
            }

            return ({
                x: $coords.x,
                y: cY
            })
        });
    }

    function handlePanEnd(event) {
        coords.stiffness = stiffness;
        coords.damping = damping;
    }

    function handleWheel(event) {
        coords.update(($coords) => {

            let cY = $coords.y - event.deltaY * wheelStepFraction;
            if (cY < -negativeLimit) {
                cY = -negativeLimit;
            }
            if (cY > topOffset) {
                cY = topOffset;
            }
            console.log(cY, topOffset);

            return ({
                x: $coords.x,
                y: cY
            })
        });

        // event.preventDefault();
    }

    function pannable(node) {
        let x;
        let y;

        function handleMousedown(event) {
            x = event.clientX;
            y = event.clientY;

            node.dispatchEvent(new CustomEvent('panstart', {
                detail: {x, y}
            }));

            window.addEventListener('mousemove', handleMousemove);
            window.addEventListener('mouseup', handleMouseup);
        }

        function handleMousemove(event) {
            const dx = event.clientX - x;
            const dy = event.clientY - y;
            x = event.clientX;
            y = event.clientY;

            node.dispatchEvent(new CustomEvent('panmove', {
                detail: {x, y, dx, dy}
            }));
        }

        function handleMouseup(event) {
            x = event.clientX;
            y = event.clientY;

            node.dispatchEvent(new CustomEvent('panend', {
                detail: {x, y}
            }));

            window.removeEventListener('mousemove', handleMousemove);
            window.removeEventListener('mouseup', handleMouseup);
        }

        node.addEventListener('mousedown', handleMousedown);
        node.addEventListener("wheel", handleWheel, {passive: true});
        return {
            destroy() {
                node.removeEventListener('mousedown', handleMousedown);
            }
        };
    }

</script>


{#if visible}

    <div transition:fly="{{ y: 200, duration: 1000 }}" bind:clientWidth={wrapperWidth} bind:clientHeight={wrapperHeight}
         id="scrollWrapper"
         use:pannable
         on:panstart={handlePanStart}
         on:panmove={handlePanMove}
         on:panend={handlePanEnd}>
        <div class="flex justify-start align-middle h-screen ">
            <div class="page"
                 style="height:{pageHeight}px; width:{pageWidth}px; transform:translate({$coords.x}px,{$coords.y}px) scale({$animatedScale},{$animatedScale})
	"></div>
        </div>
    </div>
{/if}
<style>
    #scrollWrapper {
        overflow-x: hidden;
        overflow-y: hidden;
        height: 100%;
        width: 100%;

    }


    .page {
        transform-origin: center center;
        background: cadetblue;
        display: block;
        box-shadow: 0 0 1.5cm rgba(0, 0, 0, 0.5);
    }


</style>


