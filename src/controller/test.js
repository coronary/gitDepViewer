export default function poopFetch(url) {
    console.log('requesting')
        fetch(url)
            .then(res => res.json())
        .then(body =>{
            //this.deps = body.dependencies
            //this.devdeps = body.devDependencies
            return [body.dependencies, body.devDependencies]
        })
        .catch(() => console.log('invalid url'))

}
