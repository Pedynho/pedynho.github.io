<template>
    <div>
        <div class="list-block">
            <div class="project-card">
                <a href="https://loadingjr.com">Site - Loading Desenvolvimento Jr.</a>
                <p>Site institucional da empresa júnior do curso de engenharia de computação da UFC campus Sobral</p>
                <div class="project-tecs">
                    <fa :icon="['fab','js']" size="2x"/>
                    <fa :icon="['fab','php']" size="2x"/>
                    <fa :icon="['fab','css3']" size="2x"/>
                    <fa :icon="['fab','html5']" size="2x"/>
                    <fa :icon="['fab','bootstrap']" size="2x"/>
                </div>
            </div>
            <div class="project-card">
                <a href="https://nostalgic-babbage-08d2d7.netlify.app">Web App - Tokofome.</a>
                <p>Web app para realizar pedidos de alimentos, com o resumo do pedido indo para o whatsapp do vendedor</p>
                <div class="project-tecs">
                    <fa :icon="['fab','vuejs']" size="2x"/>
                    <fa :icon="['fab','node-js']" size="2x"/>
                    <fa :icon="['fab','js']" size="2x"/>
                    <fa :icon="['fab','css3']" size="2x"/>
                    <fa :icon="['fab','html5']" size="2x"/>
                </div>
            </div>
            <div class="project-card">
                <a href="https://www.support.tec.br">E-commerce - Support Informática.</a>
                <p>Loja virtual de peças, periféricos para computadores, gráfica e artigos de escritório em geral</p>
                <div class="project-tecs">
                    <fa :icon="['fab','wordpress']" size="2x"/>
                    <fa :icon="['fab','aws']" size="2x"/>
                    <fa :icon="['fab','php']" size="2x"/>
                    <fa :icon="['fab','css3']" size="2x"/>
                    <fa :icon="['fab','html5']" size="2x"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Projects",
    data(){
        return {
        }
    }
}
</script>
<style>
.project-card{
    padding: 10px;
    background-color: var(--background-card);
    border: 1px solid gray;
    margin-bottom: 10px;
}
.project-card a{
    margin: 0;
    color: var(--font-color);
    font-weight: bold;
    text-decoration: none;
    font-size: 0.8rem;
}
.project-card p{
    font-size: 0.8rem;
}
.project-tecs{
    display: flex;
    flex-wrap: wrap;
}
.project-tecs svg{
    margin: 10px;
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