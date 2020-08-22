<template>
    <div id="search">
        <input v-on:keyup.enter="search" v-model="searchTerm" type="text" placeholder="paste in git url">
        <h2 v-if="isUrl(packName)">Dependencies for {{ packName }}</h2>
        <results v-bind:listings=deps title='Dependencies'></results>
        <results v-bind:listings=devdeps title='Dev Dependencies'></results>
    </div>
</template>

<script>
import Results from './Results.vue'

export default {
    name: 'Search',
    components: {
        Results
    },
    data () {
        return {
            searchTerm: '',
            deps: null,
            devdeps: null
        }
    },
    methods: {
        search: function () {
            fetch(this.packUrl)
                .then(res => res.json())
            .then(body => [this.deps, this.devdeps] = [body.dependencies, body.devDependencies])
        .catch(() => console.log('invalid url'))
        },
        isUrl: function (url) {
            if(url.includes('github.com')) {
                return true
            }else {
                return false
            }
        }
    },
    computed: {
        packUrl: function () {
            let rawUrl = 'https://raw.githubusercontent.com';
            let packUrlPartial = '/master/package.json';
            if(this.isUrl(this.searchTerm)){
                let splitted = this.searchTerm.split('github.com')
                return rawUrl + splitted[splitted.length - 1] + packUrlPartial
            }else {
                return ''
            }
        },
        packName: function () {
            if(this.isUrl(this.searchTerm)){
                let splitted = this.searchTerm.split('/')
                return splitted[splitted.length - 1]
            }else {
                return ''
            }
        }
    }
}
    
</script>

<style>
input[type=text] {
    width: 60vw;
    height: 4vh;
}


</style>
