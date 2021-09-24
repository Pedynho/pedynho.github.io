<template>
    <div>
        <div class="list-block">
            <div class="head-list">
                <h3>Ferramentas</h3>
                <span>*cada '%' equivale ao nível de familiaridade</span>
            </div>
            <div class="label-bar">
                <h5>HTML + CSS</h5>
                <div class="bar">
                    <div class="level-bar" :style="html"><span>90%</span></div>
                </div>
            </div>
            <div class="label-bar">
                <h5>JavaScript</h5>
                <div class="bar">
                    <div class="level-bar" :style="js"><span>80%</span></div>
                </div>
            </div>
            <div class="label-bar">
                <h5>PHP</h5>
                <div class="bar">
                    <div class="level-bar" :style="php"><span>70%</span></div>
                </div>
            </div>
            <div class="label-bar">
                <h5>Python</h5>
                <div class="bar">
                    <div class="level-bar" :style="python"><span>60%</span></div>
                </div>
            </div>
            <div class="label-bar">
                <h5>Vue.js</h5>
                <div class="bar">
                    <div class="level-bar" :style="vue"><span>75%</span></div>
                </div>
            </div>
            <div class="label-bar">
                <h5>Code Igniter</h5>
                <div class="bar">
                    <div class="level-bar" :style="codeigniter"><span>70%</span></div>
                </div>
            </div>
            <div class="label-bar">
                <h5>Node Js</h5>
                <div class="bar">
                    <div class="level-bar" :style="node"><span>50%</span></div>
                </div>
            </div>            
            <div class="label-bar">
                <h5>Firebase</h5>
                <div class="bar">
                    <div class="level-bar" :style="firebase"><span>65%</span></div>
                </div>
            </div>
            <div class="label-bar">
                <h5>MySQL</h5>
                <div class="bar">
                    <div class="level-bar" :style="mysql"><span>60%</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Stacks",
    data(){
        return {
            js: 'width: 80%',
            php: 'width: 70%',
            python: 'width: 60%',
            html: 'width: 90%',
            vue: 'width: 75%',
            node: 'width: 50%',
            codeigniter: 'width: 70%',
            mysql: 'width: 60%',
            firebase: 'width: 65%'
        }
    }
}
</script>
<style>
.label-bar h5{
    margin: 0;
    margin-top: 5px;
}
.bar{
    background-color: rgb(231, 231, 231);
    height: 20px;
    border: 1px solid black;
}
.level-bar{
    background-color: lightsteelblue;
    height: 20px;
    text-align: center;
}
.list-block{
    margin-bottom: 25px;
}
.head-list h3{
    margin: 0;
}
.head-list span{
    font-size: 0.6em;
}
</style>