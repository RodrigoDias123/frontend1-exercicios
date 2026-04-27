

async function buscardados(breed) {
   try {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    if (!response.ok) {
        throw new Error('Breed not found');
    }
    const data = await response.json();
    return data.message;
   } catch (error) {
    throw error;
   }
}

document.getElementById('breed-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const breedInput = document.getElementById('breed');
    const errorElement = document.getElementById('error');
    const resultElement = document.getElementById('result');
    const dogImage = document.getElementById('dog-image');

    const breed = breedInput.value.trim().toLowerCase();
    errorElement.classList.add('hidden');
    resultElement.classList.add('hidden');

    try {
        const imageUrl = await buscardados(breed);
        dogImage.src = imageUrl;
        resultElement.classList.remove('hidden');
    } catch (error) {
        errorElement.textContent = error.message;
        errorElement.classList.remove('hidden');
    }
});



