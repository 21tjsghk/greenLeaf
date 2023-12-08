<template>
    <div>
        <button @click="increaseCount">Increase Count</button>
        <p>Count: {{ count }}</p>
    </div>
</template>

<script>

export default {
    data() {
        return {
            count: 0
        }
    },
    mounted() {
        console.log('Mounted:', this.count)
    },
    methods: {
        increaseCount() {
            this.count++
        }
    }



}



</script>