<template>
  <div class="container">
    <Items :page="'pokemon'"></Items>
  </div>
</template>

<script>
    import Items from '~/components/Items.vue'

    export default{
        components: {
            Items
        },
        async fetch({store}){
        	await store.dispatch('load_items', 'pokemon')
        }
    }
</script>