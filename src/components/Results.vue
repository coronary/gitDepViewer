<template>
    <div class="test">
        <h3>{{ title }}</h3>
        <div id="results">
            <div class="pack" v-for="(ver, name) in listings" v-bind:key=name>
                <a v-bind:href=npm+name v-bind:packName=name target="_blank" v-on:click="getNpm">{{ name }}</a>
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
    justify-content: center;
}

.pack {
    margin: 5px;
    height: 150px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #2c3e50;
    
    padding: 5px;
}

.test {
    border: thick solid #2c3e50;
    margin-bottom: 2px;
}
</style>
