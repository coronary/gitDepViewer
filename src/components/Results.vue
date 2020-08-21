<template>
    <div>
        <h3>{{ title }}</h3>
        <div id="results">
            <div class="packtitle" v-for="(ver, name) in listings" v-bind:key=name>
                <span v-bind:href=npm+name v-bind:packName=name target="_blank" v-on:click="getNpm">{{ name }}</span>
            </div>
        </div>
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
#results {
    display: flex;
    flex-wrap: wrap;
}

.packtitle {
    margin: 5px;
    min-height: 150px;
    min-width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
}


</style>
