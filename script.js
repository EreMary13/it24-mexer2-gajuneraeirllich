const loadBtn = document.getElementById('loadBtn');
const postsContainer = document.getElementById('postsContainer');
const errorMsg = document.getElementById('errorMsg');

loadBtn.addEventListener('click', async () => {
    postsContainer.innerHTML = '';
    errorMsg.classList.add('hidden');

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        // Get the first 10 posts
        data.slice(0, 10).forEach(post => {
            const card = document.createElement('div');
            card.className = 'user-card';
            card.innerHTML = '<h3>' + post.title + '</h3><p>' + post.body + '</p>';
            postsContainer.appendChild(card);
        });

    } catch (error) {
        errorMsg.textContent = 'Failed to load posts.';
        errorMsg.classList.remove('hidden');
    }
});