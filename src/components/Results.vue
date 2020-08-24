<template>
    <div class="test">
        <h3>{{ title }}</h3>
        <div id="results">
                <a class="pack" v-for="(ver, name) in listings" v-bind:key=name v-bind:href=npm+name v-bind:packName=name target="_blank">{{ name }}</a>
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
}

</script>

<style>
#results {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

a {
    color: inherit;
}

.pack {
    margin: 5px;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #2c3e50;
}

.test {
    border: thick solid #2c3e50;
    margin-bottom: 2px;
}

@media only screen and (min-width: 300px) {
    .pack:hover{
        box-shadow: 2px 2px 4px grey;
    }
    .pack {
        margin: 5px;
        height: 105px;
        width: 105px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #2c3e50;
        padding: 5px;
        transition-duration: 0.5s;
    }
}

</style>
