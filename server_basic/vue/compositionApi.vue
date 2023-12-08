<template>
    <div>
        <button @click="increaseCount"> Increase </button>
        <p>Count : {{ count }}</p>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
    setup() {
        const count = ref(0)

        const increaseCount = () => {
            count.value++
        }

        onMounted(() => {
            console.log('Mounted: ', coount.value);
        })

        return {
            count,
            increaseCount
        }

    }
}



</script>