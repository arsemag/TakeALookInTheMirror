<html>



<body>
  

    <script>
        // Define sets of questions and answers
        const questionSet = [
            { type: 'question', content: 'What is the capital of France?' },
            { type: 'question', content: 'What is the largest mammal?' },
            { type: 'question', content: 'Who wrote "Romeo and Juliet"?' }
        ];

        const answerSet = [
            { type: 'answer', content: 'Paris' },
            { type: 'answer', content: 'Blue whale' },
            { type: 'answer', content: 'William Shakespeare' }
        ];

        // Combine question and answer sets
        const cardSet = [...questionSet, ...answerSet, ...answerSet]; // Duplicate answers to create wrong answers

        let flippedCards = []; // Array to store flipped cards

        function createCard(card) {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.classList.add(card.type);
            cardElement.innerHTML = `<span class="hidden">${card.content}</span>`;
            cardElement.addEventListener('click', () => flipCard(cardElement));
            return cardElement;
        }

        function flipCard(cardElement) {
            if (!flippedCards.includes(cardElement)) {
                cardElement.classList.add('flipped');
                flippedCards.push(cardElement);

                if (flippedCards.length === 2) {
                    setTimeout(() => {
                        checkMatch();
                    }, 1000);
                }
            }
        }

        function checkMatch() {
            const [card1, card2] = flippedCards;

            if (card1.querySelector('span').innerHTML === card2.querySelector('span').innerHTML) {
                // Match found
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                card1.classList.add('answer');
                card2.classList.add('answer');
            } else {
                // No match
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                card1.classList.add('wrong-answer');
                card2.classList.add('wrong-answer');
            }

            flippedCards = [];
        }

        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        function initializeGame() {
            const gameBoard = document.getElementById('game-board');
            shuffle(cardSet);

            cardSet.forEach(card => {
                const cardElement = createCard(card);
                gameBoard.appendChild(cardElement);
            });
        }

        initializeGame();
    </script>
</body>

</html>