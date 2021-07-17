<script>
    import VirtualList from 'svelte-virtual-list';
    const things = [
        // these can be any values you like
        { name: 'one', number: 1 },
        { name: 'two', number: 2 },
        { name: 'three', number: 3 },
        // ...
        { name: 'six thousand and ninety-two', number: 6092 }
    ];

</script>



<div id="listViewWrapper">
    <VirtualList items={things} let:item>
        <p>{item.number}: {item.name}</p>
    </VirtualList>
</div>



<style>
    #listViewWrapper{
        @apply bg-white rounded-md h-1/2 w-full shadow-xl;
    }
</style>
