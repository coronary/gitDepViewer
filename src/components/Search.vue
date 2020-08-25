<template>
    <div id="search">
        <input v-on:keyup.enter="search" v-model="searchTerm" type="text" placeholder="GIT URL">
        <button v-if="deps || devdeps" id="clear" type="button" v-on:click="clear">Clear</button>
        <h2 v-if="deps || devdeps">Dependencies for {{ packName }}</h2>
        <results v-if="deps" v-bind:listings=deps title='Dependencies'></results>
        <results v-if="devdeps" v-bind:listings=devdeps title='Dev Dependencies'></results>
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
        clear: function () {
            this.deps = null
            this.devdeps = null
            this.searchTerm = ''
        },
        search: function () {
            fetch(this.packUrl)
                .then(res => res.json())
            .then(body => [this.deps, this.devdeps] = [body.dependencies, body.devDependencies])
                .catch(() => {
                    alert('Invalid url or no package.json')
                    console.log('invalid url')
                })
        },
        isUrl: function (url) {
            let re = /github.com\/.+\/.+/
            if(re.test(url)) {
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
    text-align: center;
    margin-bottom: 20px;
}
#clear {
    margin-left: 3px;
    height: 4vh;
}


</style>
