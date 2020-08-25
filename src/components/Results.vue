<template>
    <div class="results">
        <div class="title" v-on:click="isActive = !isActive">
            <h3>{{title}}:</h3>
            <h3>{{packNum}}</h3>
        </div>
        <transition name="smooth">
            <div id="results" v-show="isActive">
                    <a class="pack" v-for="(ver, name) in listings" v-bind:key=name v-bind:href=npm+name v-bind:packName=name target="_blank">{{ name }}</a>
            </div>
        </transition>
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
    computed : {
        packNum: function () {
            return Object.keys(this.listings).length
        },
    },
    props: {
        listings: Object,
        title: String
    },
}

</script>

<style>

.smooth-enter-active, .smooth-leave-active {
  transition: all .3s ease;
}
.smooth-enter, .smooth-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}

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
