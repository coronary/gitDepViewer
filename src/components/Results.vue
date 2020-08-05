<template>
    <div id="results">
        <ul>
            <h3 v-if='listings'>{{ title }}</h3>
            <!--<h3 v-else>No Dependencies</h3>-->
            <!--<p v-for="(ver, name) in listings" v-bind:key=name><a v-bind:href=npm+name target="_blank">{{ name }}</a></p>-->
            <p v-for="(ver, name) in listings" v-bind:key=name><span v-bind:href=npm+name v-bind:packName=name target="_blank" v-on:click="getNpm">{{ name }}</span></p>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'Results',
    data () {
        return {
            npm: 'https://www.npmjs.com/package/'
        }
    },
    props: {
        listings: Object,
        title: String
    },
    methods: {
        getNpm: function (event) {
            let url = event.target.attributes.packName.value
            return fetch(`http://localhost:8000?packName=${url}`)
                    .then(res => res.json())
                    .then(json => console.log(json))
        }
    },
}

</script>

<style>


</style>
