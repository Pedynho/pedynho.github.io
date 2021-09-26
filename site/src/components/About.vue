<template>
    <div class="about-me">
        <span>
            <fa :icon="['fas','user']"/> Pedro Afonso Gomes Moura
        </span>
        <span>
            <fa :icon="['fas','phone']"/> (85) 9 9263-4628
        </span>
        <span>
            <fa :icon="['fas','envelope']"/> pedromourapc@gmail.com
        </span>
        <span>
            <fa :icon="['fas','map-marked-alt']"/> Itapajé, Ceará, Brasil
        </span>
        <p>
            Graduando em engenharia de computação na UFC campus Sobral, no décimo semestre, 
            desde o início da graduação (2016) estudando e praticando desenvolvimento web, 
            facilidade em se comunicar e aprender, proativo e sempre buscando manter a 'casa' 
            limpa e organizada quando o assunto é código.
        </p>
    </div>
</template>
<script>
export default {
    name: 'About'
}
</script>
<style>
.about-me{
    display: flex;
    flex-direction: column;
    font-size: 1.1em;
    padding: 1rem;
    border: 1px solid black;
    background-color: var(--background-card);
}
.about-me span{
    padding: 5px;
}
@media screen and (max-width: 500px) {
    .about-me {
        font-size: 0.8em;
    }
}
</style>