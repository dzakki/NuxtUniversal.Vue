<template>
	<div>
		<h1>Halaman location</h1>
		<h2>Nama: {{items.location}}</h2>
		<h2>Weight: {{items.weight}}</h2>
	</div>
</template>
<script>
	import { mapState } from 'vuex'

	export default{
		computed: mapState([ 'items' ]),
        async fetch({store, params}){
        	await store.dispatch('load_items', 'pokemon/'+params.location)
        }
	}
</script>