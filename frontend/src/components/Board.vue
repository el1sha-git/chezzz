<template>
    <div class="chess">
        <div class="chess__board" v-bind:style="{width: board_width+'px', height: board_width+'px'}">
            <div class="row" v-for="row in Array(8).keys()" v-bind:key="row">
                <div v-bind:style="[(row+cell) %2 == 0 ? {'background-color': '#3c3c3c'} : {backgroundColor: '#c2c2c2'}]"
                class="cell" v-for="cell in Array(8).keys()" v-bind:key="cell">
    <!-- {{columns[cell]}}{{row+1 }}  -->
                <p class="figure" v-html="get_figure(cell, row)"></p>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            board_width: 600,
            columns: ["a", "b", "c", "d", "e", "f", "g", "h"],
        }
    },
    methods:{
        get_figure(x, y){
            let raw_str = this.$store.state.game_state.split("/")[y];
            let str = "";
            let i;
            let j;
            for (i = 0; i < raw_str.length; i++){
                if(Number.isInteger(raw_str[i]/1)){
                    for(j = 0; j < raw_str[i]/1; j++){
                        str += "0"
                    }
                }else{
                    str+=raw_str[i];
                }
            }
            return this.$store.state.figure_unicode[str[x]]
            }
        
    }
}
</script>

<style lang="scss" scoped>

.chess__board{
    display: flex;
    flex-direction: column-reverse;
    // flex-shrink: 1;
}

.row{
    display: flex;
    flex-shrink: 1;
    height: 100%;
}
.cell{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 1;
    flex-grow: 1;
    width: 50px;
    height: 100%;
    // color: red;
    background-position: center;
    background-size: cover;
}

.figure{
    font-size: 35px;
    font-weight: 600;
}
.figure:hover{
    cursor:pointer;
}
.figure::selection{
    color: inherit;
    background-color: inherit
}
</style>