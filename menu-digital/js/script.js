const menuData = [
  {category: "Jus & Smoothies", items:[
    {name:"Orange", price:"10 DH"},
    {name:"Pomme/Banane Au Lait", price:"10 DH"},
    {name:"Banane/Pomme/Orange", price:"13 DH"},
    {name:"Avocat Au Lait", price:"15 DH"},
    {name:"Avocat Orange", price:"18 DH"},
    {name:"Mangue", price:"18 DH"},
    {name:"Fraise", price:"18 DH"},
    {name:"Ananas", price:"18 DH"},
    {name:"Panache Au Lait", price:"16 DH"},
    {name:"Panache Orange", price:"18 DH"},
    {name:"Royale", price:"22 DH"},
    {name:"Za3za3", price:"30 DH"}
  ]},
  {category:"Smoothies & Café", items:[
    {name:"Summer Smoothie", price:"22 DH"},
    {name:"Smoothie Berry", price:"20 DH"},
    {name:"Ice Café", price:"18 DH"},
    {name:"Café Glace Crème", price:"18 DH"},
    {name:"Milky Chocolat", price:"22 DH"},
    {name:"Ditox", price:"20 DH"}
  ]},
  {category:"Desserts", items:[
    {name:"Salade Fruits", price:"15 DH"},
    {name:"Crème au Fruits", price:"15 DH"},
    {name:"Crêpe Simple", price:"18 DH"},
    {name:"Crêpe pop's", price:"32 DH"}
  ]},
  {category:"Tacos (S/M)", items:[
    {name:"Dinde", price:"33 / 43 DH"},
    {name:"Viande Haché", price:"35 / 45 DH"},
    {name:"Niggets", price:"33 / 43 DH"},
    {name:"Chicken", price:"33 / 43 DH"},
    {name:"Soussicce", price:"33 / 43 DH"},
    {name:"Thon", price:"33 / 43 DH"},
    {name:"Mixte", price:"38 / 48 DH"},
    {name:"Gratinés", price:"53 / 73 DH"},
    {name:"Poisson", price:"43 / 53 DH"},
    {name:"Cordon Bleu", price:"33 / 43 DH"},
    {name:"Poulet chinoise", price:"35 / 45 DH"}
  ]},
  {category:"Panini", items:[
    {name:"Dinde", price:"20 DH"},
    {name:"Soussicce", price:"20 DH"},
    {name:"Thon", price:"15 DH"},
    {name:"Chicken", price:"20 DH"},
    {name:"Nugget", price:"20 DH"},
    {name:"Viande Haché", price:"22 DH"},
    {name:"Mixte", price:"22 DH"}
  ]},
  {category:"Pasticcio", items:[
    {name:"Simple", price:"28 DH"},
    {name:"Dinde", price:"33 DH"},
    {name:"Viande Haché", price:"35 DH"},
    {name:"Pasticcio Fruit De Mer", price:"43 DH"},
    {name:"Pop's", price:"38 DH"}
  ]},
  {category:"Burger", items:[
    {name:"Chicken Burger (S/M)", price:"25 / 35 DH"},
    {name:"Cheeseburger (S/M)", price:"30 / 40 DH"},
    {name:"Cajon Burger (S/M)", price:"30 / 40 DH"}
  ]},
  {category:"Poulet Rott", items:[
    {name:"1/4", price:"35 DH"},
    {name:"1/2", price:"70 DH"},
    {name:"1 Complet", price:"140 DH"}
  ]},
  {category:"Plats", items:[
    {name:"Chicken American", price:"39 DH"},
    {name:"Viande hachée", price:"39 DH"},
    {name:"Pops", price:"43 DH"},
    {name:"Emincé Poulet", price:"43 DH"},
    {name:"Cordon Bleu", price:"43 DH"},
    {name:"Poisson", price:"65 DH"}
  ]}
];

const menuContainer = document.getElementById('menu');
const searchInput = document.getElementById('search');
const categoryFilter = document.getElementById('category-filter');
const categoryNav = document.getElementById('category-nav');
const orderWhatsApp = document.getElementById('order-whatsapp');

// Configure your WhatsApp number here (international format, no +):
const WHATSAPP_NUMBER = '212600000000'; // replace with actual number

function renderMenu(filterText = '', category = ''){
  menuContainer.innerHTML = '';
  const text = filterText.trim().toLowerCase();
  menuData.forEach(section=>{
    if(category && section.category !== category) return;
    const matchedItems = section.items.filter(it=>{
      return it.name.toLowerCase().includes(text) || it.price.toLowerCase().includes(text) || text === '';
    });
    if(matchedItems.length === 0) return;

    const card = document.createElement('article');
    card.className = 'card';
    const h = document.createElement('h3');
    h.textContent = section.category;
    card.appendChild(h);

    matchedItems.forEach(it=>{
      const row = document.createElement('div');
      row.className = 'item';
      const n = document.createElement('div'); n.className='name'; n.textContent = it.name;
      const p = document.createElement('div'); p.className='price'; p.textContent = it.price;
      row.appendChild(n); row.appendChild(p);
      card.appendChild(row);
    });

    menuContainer.appendChild(card);
  });
}

function populateCategories(){
  menuData.forEach(s=>{
    const opt = document.createElement('option');
    opt.value = s.category; opt.textContent = s.category;
    categoryFilter.appendChild(opt);

    const btn = document.createElement('button');
    btn.type = 'button'; btn.textContent = s.category;
    btn.addEventListener('click', ()=>{
      // toggle filter
      const isActive = btn.classList.contains('active');
      document.querySelectorAll('.category-nav button').forEach(b=>b.classList.remove('active'));
      categoryFilter.value = isActive ? '' : s.category;
      if(!isActive) btn.classList.add('active');
      renderMenu(searchInput.value, categoryFilter.value);
    });
    categoryNav.appendChild(btn);
  });
}

searchInput.addEventListener('input', e=> renderMenu(e.target.value, categoryFilter.value));
categoryFilter.addEventListener('change', e=> renderMenu(searchInput.value, e.target.value));

populateCategories();
renderMenu();

// Setup WhatsApp order link
function updateWhatsAppLink(){
  if(!orderWhatsApp) return;
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent('Bonjour, je voudrais commander. Voici le menu : ' + window.location.href);
  orderWhatsApp.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  orderWhatsApp.target = '_blank';
}
updateWhatsAppLink();

