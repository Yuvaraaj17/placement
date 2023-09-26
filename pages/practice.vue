<template>
    <div class="flex flex-col w-full h-full overflow-x-scroll overflow-y-scroll">
        <div class="h-1/4">Welcome To Practice Section</div>
        <div id="topic-container" class="h-3/4 grid grid-cols-3">
            <div class="topic">Quantitative Aptitude
                <div class="description">
                    <ul>
                        <li>Topic-Wise Tests</li>
                        <li>Full length Mock-Test</li>
                        <li>Puzzle Questions</li>
                    </ul>
                    <span class="readmore">Read more...</span>
                </div>
            </div>
            <div class="topic">Core Concepts
                <div class="description">
                    <ul>
                        <li>Computer Networks</li>
                        <li>Operating Systems</li>
                        <li>Software Engineering</li>
                    </ul>
                    <span class="readmore">Read more...</span>
                </div>
            </div>
            <div class="topic">Programming
                <div class="description pl-8">
                    <ul>
                        <li>C Programming</li>
                        <li>Java Programming</li>
                        <li>Python Programming</li>
                        
                    </ul>
                    <span class="readmore">Read more...</span>
                </div>
            </div>
            <div class="topic">Psychomtery
                <div class="description">
                    <ul>
                        <li>Abstract Reasoning</li>
                        <li>Situation Reaction</li>
                        <li>Personality Traits</li>
                    </ul>
                    <span class="readmore">Read more...</span>
                </div>
            </div>
            <div class="topic">Soft Skills
                <div class="description">
                    <ul>
                        <li>Technical Interview</li>
                        <li>HR Interview</li>
                        <li>Group Discussion</li>
                    </ul>
                    <span class="readmore">Read more...</span>
                </div>
            </div>
            <div class="topic">Verbal Reasoning
                <div class="description">
                    <ul>
                        <li>Error Correction</li>
                        <li>Synonyms</li>
                        <li>Reading Comprehension</li>
                    </ul>
                    <span class="readmore">Read more...</span>
                </div>
            </div>
            <div class="topic">One</div>
            <div class="topic">Two</div>
            <div class="topic">Three</div>




        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "main-layout",

})
</script>
<style scoped>
.topic {
    height: 250px;
    color: rgb(233, 30, 99);
    background-color: white;
    box-shadow: 0px 0px 7px rgb(206, 206, 206);
    border-radius: 8px;
    padding-left: 30px;
    padding-top: 25px;
    font-size: 23px;
    font-family: Poppins;
    font-weight: 550;

}

.description {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: 10%;
    padding-top: 20px;
    padding-left: 32px;
    padding-right: 15px;
    font-weight: 500;
    font-family: 'Segoe UI';
    color: rgb(37, 37, 37);
    font-size: 20px;
    gap: 10px;

}
.readmore{
    display: flex;
    font-size: large;
    color: grey;
    justify-content: flex-end;
    padding-right: 20px;
    
}

.description ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.description ul li::before {

    display: inline-block;
    justify-content: center;
    align-items: center;
    content: "";
    width: 7px;
    /* Diameter of the circle */
    height: 7px;
    /* Diameter of the circle */
    background-color: black;
    /* Color of the circle */
    border-radius: 50%;
    /* Make it a circle */
    margin-right: 10px;
    margin-bottom: 3px;
    /* Spacing between the circle and text */
}

::-webkit-scrollbar {

    width: 10px;
    border-radius: 15px;
    background-color: #f5f5f5;
    /* Background color of the track */
}

/* Style the scrollbar thumb (the draggable part) */
::-webkit-scrollbar-thumb {
    background-color: lightcoral;
    /* Color of the thumb */
    border-radius: 15px;
    /* Rounded corners for the thumb */
}</style>