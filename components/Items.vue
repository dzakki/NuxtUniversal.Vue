<template>
  <div class="container">
    Data {{ page }}
    <ul class="list-group  list-group-flush">
    	<li class="list-group-item disabled" aria-disabled="true">List name</li>
    	<li class="list-group-item" v-for="(item, index) in items.results" :key="index">
            <nuxt-link :to="'/' + page + '/' + item.name">
                {{ index + 1 }} | {{ item.name }} 
            </nuxt-link>
	    </li>
    </ul>
  </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default{
        computed: mapState([ 'items' ]),
        props: [ 'page' ]
    }
</script>