<template>
    <div id="search">
        <input v-on:keyup.enter="search" v-model="searchTerm" type="text" placeholder="paste in git url">
        <h2 v-if="packName">Dependencies for {{ packName }}</h2>
        <ul>
            <h3 v-if="deps">Dependencies</h3>
            <h3 v-else>No Dependencies</h3>
            <li v-for="(ver, name) in deps" v-bind:key=name>{{ name }}: {{ ver}}</li>
            <h3 v-if="devdeps">Dev Dependencies</h3>
            <h3 v-else>No Dev Dependencies</h3>
            <li v-for="(ver, name) in devdeps" v-bind:key=name>{{ name }}: {{ ver}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Search',
    data () {
        return {
            searchTerm: '',
            rawUrl: 'https://raw.githubusercontent.com',
            packUrlPartial: '/master/package.json',
            npm: 'https://www.npmjs.com/package/',
            deps: null,
            devdeps: null
        }
    },
    methods: {
        search: function () {
            console.log('requesting')
            this.deps = null
            this.devdeps = null
                fetch(this.packUrl)
                    .then(res => res.json())
                .then(body =>{
                    this.deps = body.dependencies
                    this.devdeps = body.devDependencies
                })
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
            if(this.isUrl(this.searchTerm)){
                let splitted = this.searchTerm.split('github.com')
                return this.rawUrl + splitted[splitted.length - 1] + this.packUrlPartial
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

</style>
