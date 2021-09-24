<template>
    <div class="time-line-block">
        <div class="time-line"></div>
        <div class="xp-block">
            <div class="card-xp">
                <div class="card-xp-content">
                    <h6>2021 - Loading Desenvlvimento Jr.<br><em>Diretor Presidente</em></h6>
                    <p>
                        Atuando nos aspecto mais gerencial, como gerenciamento de processos de negócios (BPM) e desenvolvimento e estudo de novos produtos e serviços para o mercado local, além do exercício da liderança e gerenciamento de pessoas bem como aspectos legais no quesito jurídico e contábil relacionados a uma empresa júnior.
                    </p>
                </div>
            </div>
            <div class="card-xp">
                <div class="card-xp-content">
                    <h6>2020 - Programa de Bolsas de Estímulo ao Empreendedorismo Inovador | PROINTER UFC<br><em>Desenvolvedor Web</em></h6>
                    <p>
                        Bolsista voluntário em um projeto de empreendedorismo, responsável pelo desenvolvimento de uma plataforma web que seria usada para captar leads e servir de gateway de contratação do serviço prestado.
                    </p>
                </div>
            </div>
            <div class="card-xp">
                <div class="card-xp-content">
                    <h6>2020 - Loading Desenvlvimento Jr.<br><em>Diretor de Projetos</em></h6>
                    <p>
                        Atuando como scrum master nas equipes de desenvolvedores para implementar soluções web para clientes externos e no desenvolvimento de produtos internos, além de ser responsável pelos testes, deploys e revisões de código.
                    </p>
                </div>
            </div>
            <div class="card-xp">
                <div class="card-xp-content">
                    <h6>2018 e 2019 - Loading Desenvlvimento Jr.<br><em>Desenvolvedor Web</em></h6>
                    <p>
                        Experiência no desenvolvimento de sites simples de conteúdo estático, e dinâmico com o 
                        auxilio de frameworks.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Experiences"
}
</script>
<style>
.time-line-block{
    display: flex;
    justify-content: space-between;
}
.time-line {
    display: block;
    width: 10px;
    height: 650px;
    background-color: gray;
}
.xp-block{
    width: 100%;
}
.card-xp{
    width: 100%;
    background-color: lightsteelblue;
    text-align: left;
    margin-bottom: 10px;
}
.card-xp-content{
    padding: 1rem;
}
.card-xp p{
    font-size: 0.8rem;
}
.card-xp h6{
    margin: 0;
    font-size: 0.8rem;
}
</style>