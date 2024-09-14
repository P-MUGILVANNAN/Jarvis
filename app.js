const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Chirrenthen...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Chirrenthen...");
    } else {
        speak("Good Evening Chirrenthen...");
    }
}

window.addEventListener('load', () => {
    speak("Initializing your Assistant Chirrenthen...");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "I'm here...";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello Sir, How May I Help You?");
    } else if (message.includes("open github")) {
        window.open("https://github.com/chirrenthen", "_blank");
        speak("Opening Github...");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open techiesms")) {
        window.open("https://techiesms.com", "_blank");
        speak("Opening Techiesms...");
    }else if (message.includes("open Wix")) {
        window.open("https://manage.wix.com/account/websites?referralAdditionalInfo=Route", "_blank");
        speak("Opening Wix Studio...");
    }
    else if (message.includes("open chatgpt")) {
        window.open("https://chatgpt.com/", "_blank");
        speak("Opening Chatgpt...");
    }
    else if (message.includes("open my website")) {
        window.open("https://chirrenthen13.wixsite.com/chirrenthen", "_blank");
        speak("Opening your Website...");
    }
    else if (message.includes("open arduino cloud")) {
        window.open("https://app.arduino.cc", "_blank");
        speak("Opening Arduino Cloud...");
    }
    else if (message.includes("open gemini")) {
        window.open("https://gemini.google.com/app?hl=en-IN", "_blank");
        speak("Opening Gemini AI...");
    }
    else if (message.includes("open techiesms youtube")) {
        window.open("https://www.youtube.com/techiesms", "_blank");
        speak("Opening Techiesms in youtube...");
    }
    else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } else if (message.includes('arduino')) {
        window.open('arduinoide:///');
        const finalText = "Opening ArduinoIde";
        speak(finalText);
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
}
