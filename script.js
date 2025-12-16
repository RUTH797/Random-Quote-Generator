<script>
   const quotes = [
        {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            text: "Life is what happens to you while you're busy making other plans.",
            author: "John Lennon"
        },
        {
            text: "In the middle of difficulty lies opportunity.",
            author: "Albert Einstein"
        },
        {
            text: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt"
        },
        {
            text: "It is during our darkest moments that we must focus to see the light.",
            author: "Aristotle"
        },
        {
            text: "Whoever is happy will make others happy too.",
            author: "Anne Frank"
        },
        {
            text: "You must be the change you wish to see in the world.",
            author: "Mahatma Gandhi"
        },
        {
            text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
            author: "Mother Teresa"
        },
        {
            text: "The only thing we have to fear is fear itself.",
            author: "Franklin D. Roosevelt"
        },
        {
            text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
            author: "Ralph Waldo Emerson"
        }
    ];
    
    // ============================================
    // STEP 2: CREATE HELPER FUNCTIONS
    // ============================================
    
    // This variable will store the index of the last displayed quote
    // We initialize it as -1 because no quote has been displayed yet
    let lastQuoteIndex = -1;
    
    // This variable counts how many quotes we've shown
    let quoteCount = 0;
    
    // This helper function gets a random number between 0 and max (exclusive)
    // We use Math.random() which gives us a decimal between 0 and 1
    // We multiply it by max to get a decimal between 0 and max
    // Math.floor() rounds DOWN to the nearest whole number
    function getRandomIndex(max) {
        return Math.floor(Math.random() * max);
    }
    
    // This function gets a random quote that's different from the last one
    function getRandomQuote() {
        let newIndex;
        
        // If we have more than 1 quote, we make sure not to repeat the last one
        if (quotes.length > 1) {
            // Keep generating random indices until we get one that's different from the last
            do {
                newIndex = getRandomIndex(quotes.length);
            } while (newIndex === lastQuoteIndex); // Repeat if it's the same as last time
        } else {
            // If we only have 1 quote, just use index 0
            newIndex = 0;
        }
        
        // Update lastQuoteIndex to remember this quote for next time
        lastQuoteIndex = newIndex;
        
        // Return the quote object at the random index
        return quotes[newIndex];
    }
    
    // ============================================
    // STEP 3: CREATE RENDER FUNCTION
    // ============================================
    
    // This function updates the webpage with a new random quote
    function renderQuote() {
        // Get a random quote object from our array
        const randomQuote = getRandomQuote();
        
        // Update the quote counter
        quoteCount++;
        
        // Find the HTML element with id="quote" and update its text
        document.getElementById("quote").textContent = `"${randomQuote.text}"`;
        
        // Find the HTML element with id="author-name" and update it
        document.getElementById("author-name").textContent = randomQuote.author;
        
        // Update the counter display
        document.getElementById("quote-counter").textContent = quoteCount;
        
        // Change the background color slightly for visual feedback
        // We'll cycle through different shades of our theme
        const quoteBox = document.querySelector(".quote-box");
        const hueValues = [60, 65, 55, 50]; // Different yellows
        const hueIndex = quoteCount % hueValues.length; // Cycle through array
        quoteBox.style.borderLeftColor = `hsl(${hueValues[hueIndex]}, 90%, 50%)`;
    }
    
    // ============================================
    // STEP 4: WIRE UP EVENT LISTENERS
    // ============================================
    
    // This function sets up all the event listeners
    function setupEventListeners() {
        // Find the button with id="next" in our HTML
        const nextButton = document.getElementById("next");
        
        // Add a click event listener to the button
        // When clicked, it will call the renderQuote function
        nextButton.addEventListener("click", renderQuote);
        
        // Add keyboard event listener for the spacebar
        // We listen to the entire document for key presses
        document.addEventListener("keydown", function(event) {
            // Check if the pressed key is the spacebar (key code 32)
            // Also check that we're not typing in an input field
            if (event.code === "Space" && event.target.tagName !== "INPUT") {
                // Prevent spacebar from scrolling the page
                event.preventDefault();
                
                // Simulate a button click to get a new quote
                nextButton.click();
                
                // Add a visual effect to show the spacebar worked
                nextButton.style.transform = "scale(0.95)";
                setTimeout(() => {
                    nextButton.style.transform = "";
                }, 100);
            }
        });
    }
    
    // ============================================
    // STEP 5: INITIALIZE THE APPLICATION
    // ============================================
    
    // When the webpage finishes loading, run this code
    document.addEventListener("DOMContentLoaded", function() {
        // Set up all our event listeners
        setupEventListeners();
        
        // Display the first quote immediately when page loads
        renderQuote();
        
        // Log a message to console for debugging (users won't see this)
        console.log("Random Quote Generator loaded successfully!");
        console.log("Press the button or spacebar to get a new quote.");
    });
</script>
