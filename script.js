if (window.location.pathname.includes('animate.html')) {
    const mainImage = document.getElementById('mainImage');
    
    if (mainImage) {
        function changeImage() {
            const imageFiles = ['s1.png','s2.png','s3.png','s4.png'];
            const randomIndex = Math.floor(Math.random() * imageFiles.length);
            mainImage.src = `../image/${imageFiles[randomIndex]}`;
        }
        
        mainImage.src = '../image/s1.png';
        mainImage.addEventListener("click", changeImage);
        mainImage.style.cursor = 'pointer';
    }

}


const topicTitles = document.querySelectorAll('.makeuppalette');

function revealTopicText(event) {
    const makeupItem = event.target.closest('.makeup-item');
    
    if (makeupItem) {
        const extraText = makeupItem.querySelector('.extra-text');
        
        if (extraText) {
            const isHidden = extraText.classList.contains('hidden');
            
            if (isHidden) {
                extraText.classList.remove('hidden');
                extraText.classList.add('revealed');
            } else {
                extraText.classList.add('hidden');
                extraText.classList.remove('revealed');
            }
        }
    }
}

topicTitles.forEach(title => {
    title.addEventListener('click', revealTopicText);
    title.style.cursor = 'pointer'; 
});


const dailyFactBox = document.getElementById("dailyMood"); 

if (dailyFactBox) {
  const d = new Date();
  let day = d.getDay();

  let fact = "";

    if (day === 0) {
    fact = "Well, today is Sunday. SEIZE the last chance to finish the HW and stop crying!";
  } else if (day === 1) {
    fact = "Today is a terrible Monday, I want to kill myself!";
  } else if (day === 2) {
    fact = "Get used to it. Take a deep breath on Tuesday.";
  } else if (day === 3) {
    fact = "Congrat! It's Wednesday! Half of the week had passed!";
  } else if (day === 4) {
    fact = "Smile! Today is Thursday, maybe we can skip the last class?";
  } else if (day === 5) {
    fact = "TGIF!!! We are almost there!";
  } else if (day === 6) {
    fact = "Saturaday, the best day of the week --- said by no one";
  }

  dailyFactBox.textContent = fact;}


document.addEventListener('DOMContentLoaded', function() {
    const d = new Date();
    const day = d.getDay();
    
    const dayColors = ["#FFE4E1","#FFFACD","#E0FFFF","#F0FFF0", "#F5F5DC","#F0E68C", "#D8BFD8"];
    
    document.body.style.backgroundColor = dayColors[day];
});


