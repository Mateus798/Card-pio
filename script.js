document.addEventListener('DOMContentLoaded', () => {
    const cartButton = document.getElementById('cart-button');
    const cartContainer = document.getElementById('cart-container');
    const closeCartButton = document.getElementById('close-cart');
    const clearCartButton = document.getElementById('clear-cart');
    const cartItems = document.getElementById('cart-items');
    const menuSection = document.getElementById('menu');
    
    let cart = [];

    // Array de alimentos populares com imagens
    const foodItems = [
        { id: '1', name: 'Pizza', description: 'Pizza com queijo e tomate', image: 'https://static.itdg.com.br/images/360-240/cf2da6aff0dead381432a891fc23e06e/shutterstock-378226756.jpg' },
        { id: '2', name: 'Hambúrguer', description: 'Hambúrguer com carne, queijo e alface', image: 'https://guiadacozinha.com.br/wp-content/uploads/2019/11/hamburguer-mexicano.jpg' },
        { id: '3', name: 'Sushi', description: 'Sushi com salmão e abacate', image: 'https://imagens.f5news.com.br/noticias/2023/09/thumbe-conheca-adaptacoes-b_2023-09-15180722.jpg' },
        { id: '4', name: 'Salada', description: 'Salada com frango grelhado e molho Caesar', image: 'https://static.itdg.com.br/images/360-240/d8fa256da2431f35d207c3489e11973c/346244-original.jpg' },
        { id: '5', name: 'Lasanha', description: 'Lasanha de carne com queijo', image: 'https://img.freepik.com/fotos-gratis/lasanha-tradicional-com-um-rico-molho-bolognese_60438-3536.jpg' },
        { id: '6', name: 'Cachorro-quente', description: 'Cachorro-quente com salsicha e molho', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTFjlFWSFIq2DyzT7FItSqolw1QZe6q0OcGA&s' },
        { id: '7', name: 'Omelete', description: 'Omelete com cogumelos e queijo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO99QVXPsWXvodmhJbZ2uitH8_GJdKd1nXYA&s' },
        { id: '8', name: 'Burrito', description: 'Burrito recheado com carne e vegetais', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCv15bM-kEzOPcg4F6YEiphJrENsOE-zxUow&s' },
        { id: '9', name: 'Arroz de Pato', description: 'Arroz com pato e especiarias', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuBIvUrI8EqfGgozOK3fO3X7z6fyZrY6C2Gw&s' },
        { id: '10', name: 'Bife à Parmegiana', description: 'Bife empanado com molho de tomate e queijo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREMVTFgcywuAmjgHvAkFBdLRHUfy8kE82LFA&s' },
        { id: '11', name: 'Churrasco', description: 'Churrasco com carne grelhada', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIU8dh5xi2tmB5_5uCYEL_BPZb9MAFc1Filw&s' },
    ];

    // Função para renderizar os alimentos
    function renderFoodItems() {
        menuSection.innerHTML = foodItems.map(item => `
            <div class="card">
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <button onclick="addToCart('${item.id}', '${item.name}')">Adicionar ao Carrinho</button>
            </div>
        `).join('');
    }

    // Função para adicionar ao carrinho
    window.addToCart = function(id, name) {
        cart.push({ id, name });
        updateCartDisplay();
    };

    // Função para atualizar a exibição do carrinho
    function updateCartDisplay() {
        cartItems.innerHTML = cart.map(item => `
            <li>${item.name} <button onclick="removeFromCart('${item.id}')">Remover</button></li>
        `).join('');
        cartButton.textContent = `Carrinho (${cart.length})`;
    }

    // Função para remover do carrinho
    window.removeFromCart = function(id) {
        cart = cart.filter(item => item.id !== id);
        updateCartDisplay();
    };

    cartButton.addEventListener('click', () => {
        cartContainer.classList.toggle('hidden');
        updateCartDisplay();
    });

    closeCartButton.addEventListener('click', () => {
        cartContainer.classList.add('hidden');
    });

    clearCartButton.addEventListener('click', () => {
        cart = [];
        updateCartDisplay();
    });

    // Renderiza os itens de comida quando a página carrega
    renderFoodItems();
});
