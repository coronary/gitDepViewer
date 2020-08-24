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
    height: 150px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #2c3e50;
    padding: 5px;
    transition-duration: 0.5s;
}
.pack:hover{
    box-shadow: 2px 2px 4px grey;
}

.test {
    border: thick solid #2c3e50;
    margin-bottom: 2px;
}
</style>
