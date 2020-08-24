<template>
    <div class="results">
        <div class="title" v-on:click="collapse">
            <h3>{{title}}</h3>
        </div>
        <div id="results" v-bind:style='{"max-height": (isActive? "":"0")}'>
                <a class="pack" v-for="(ver, name) in listings" v-bind:key=name v-bind:href=npm+name v-bind:packName=name target="_blank">{{ name }}</a>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Results',
    data () {
        return {
            npm: 'https://www.npmjs.com/package/',
            isActive: true
        }
    },
    methods: {
        collapse: function () {
            this.isActive = !this.isActive
        }
    },
    props: {
        listings: Object,
        title: String
    },
}

</script>

<style>
.title > h3 {
    margin-right: 5px;
}

#results {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

a {
    color: inherit;
}
.title:hover {
    background-color: #2c4e70;
}

.title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 3rem;
    width: 100%;
    color: white;
    background-color: #2c3e50;
}

.pack {
    margin: 5px;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: inherit;
}

.results {
    overflow: hidden;
    border-top-style: none;
    border: thick solid #2c3e50;
    margin-bottom: 2px;
}

@media only screen and (min-width: 300px) {
    .pack:hover{
        box-shadow: 2px 2px 4px grey;
    }
    .pack {
        height: 105px;
        width: 140px;
        padding: 5px;
        transition-duration: 0.5s;
    }
}

</style>
