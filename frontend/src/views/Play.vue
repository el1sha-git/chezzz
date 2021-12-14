<template>
    <div class="play">
        <div class="play__board">
            <Board/>
        </div>
    </div>
</template>

<script>
import Board from "@/components/Board.vue"

export default {
    data() {
        return {
            
        }
    },
    components:{
        Board
    }
}
</script>

<style lang="scss" scoped>
.play{
    display: flex;
    min-height: 100vh;
}

.play__board{
    display: flex;
    align-items: center;
    padding: 0% 100px;
}
</style>

