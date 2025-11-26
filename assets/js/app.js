const collections = [
  {
    id: 'hollow-knight',
    title: 'Hollow Knight',
    type: 'game',
    summary:
      'A curated collection created with Team Cherry, honoring the original Hollow Knight trilogy.',
    dropDate: 'Dec 08',
    formats: ['Apparel', 'Collectibles', 'Artbook'],
    about:
      'A Team Cherry–collaborated capsule honoring the original Hollow Knight trilogy.',
    logistics: [
      'Ships from Adelaide & LA hubs',
      'Limited to 1,500 sets worldwide',
      'Bundled Discord AMA with artists',
      'Carbon-neutral fulfillment',
    ],
    tags: ['Team Cherry', 'Limited', 'Collector'],
    heroImage: 'assets/images/hollow-knight.webp',
    items: [
      {
        name: 'The Shade figure',
        price: '$70',
        description: 'The Lord of The Shade figure.',
        image: 'assets/images/shade.png',
      },
      {
        name: 'Charms full set',
        price: '$120',
        description: 'All 40 magnetic charms in the set + 5 extra charms in a magnetic case.',
        image: 'assets/images/charms.jpg',
      },
      {
        name: "The Knight's nails",
        price: '$140',
        description: 'All four stages of the Knight\'s nails.(real life scale)',
        image: 'assets/images/nails.avif',
      },
    ],
  },
  {
    id: 'silksong',
    title: 'Silksong',
    type: 'game',
    summary:
      'A curated collection celebrating Silksong with exclusive apparel, accessories, and art.',
    dropDate: 'Jan 14',
    formats: ['Streetwear', 'Accessories', 'Artbook'],
    about:
      'A deluxe capsule co-developed with Team Cherry, celebrating Silksong with exclusive apparel, accessories, and high-end collectibles.',
    logistics: [
      'Pre-order closes Jan 30',
      'Ships worldwide in March',
      'Free refit alterations',
    ],
    tags: ['Team Cherry', 'Limited', 'Collector'],
    heroImage: 'assets/images/silksong.webp',
    items: [
      {
        name: 'Hornet figure',
        price: '$329.98',
        description: 'Hornet figure (Shaw).',
        image: 'assets/images/hornet.png',
      },
      {
        name: 'Hornet plush',
        price: '$38',
        description: 'Hornet plush (she wont bite).',
        image: 'assets/images/hornetplush.webp',
      },
      {
        name: 'Silksong map',
        price: '$20',
        description: 'incase you get lost.',
        image: 'assets/images/silksongmap.png',
      },
    ],
  },
  {
    id: 'hololive',
    title: 'hololive',
    type: 'vtuber',
    summary:
      'A cross-branch VTuber wardrobe featuring holoEN and holoJP generational collabs.',
    dropDate: 'LIVE',
    formats: ['Apparel', 'Accessories', 'Artbook'],
    about:
      'Fans can customize jersey patches to represent oshis from any branch. Manufactured with recycled polyester and glow-reactive threads for concert-ready fits.',
    logistics: [
      'Ships in 5-7 days worldwide',
      'Custom sizing available',
      'Bundled NFC fan card',
    ],
    tags: ['hololive', 'Idol', 'Collector'],
    heroImage: 'assets/images/hololive.png',
    items: [
      {
        name: 'Gawr Gura plush',
        price: '$50',
        description: 'A cute shark girl plushie.',
        image: 'assets/images/guraplush.webp',
      },
      {
        name: 'Inugami Korone Birthday 2025 keychains',
        price: '$10',
        description: 'Inugami Korone birthday 2025 keychains.',
        image: 'assets/images/Inugami Korone keychains.webp',
      },
      {
        name: 'hololive Collection vol.1',
        price: '$28',
        description: '1 of 5 figuries will be randomly included in the box.',
        image: 'assets/images/hololive collection vol.1.webp',
      },
    ],
  },
  {
    id: 'mrbeast',
    title: 'MrBeast Labs',
    type: 'creator',
    summary:
      'High-energy merch meets ARG puzzles—solve clues hidden in every garment for cash bounties.',
    dropDate: 'Dec 19',
    formats: ['Athleisure', 'Techwear'],
    about:
      'Each hoodie carries UV-reactive coordinates that unlock hidden YouTube missions. Winners split a community prize pool and receive lifetime free shipping tokens.',
    logistics: [
      'First 5,000 orders include puzzle patch',
      'Global tracked shipping',
      '24/7 fan concierge',
    ],
    tags: ['Creator', 'ARG', 'Giveaway'],
    heroImage: 'assets/images/mrbeast.png',
    cardImage: 'assets/images/MrBeast_Lab_logo.jpg',
    items: [
      {
        name: 'MRBEAST X JLAB HEADPHONES',
        price: '$110',
        description: 'UV-reactive grid hoodie hiding ARG coordinates and NFC tap tag.',
        image: 'assets/images/mrbeast.png',
      },
      {
        name: 'Puzzle Patch Set',
        price: '$25',
        description: 'Mystery trio of woven patches that reveal cipher pieces under blacklight.',
        image: 'assets/images/hololive.png',
      },
      {
        name: 'Crew Challenge Tee',
        price: '$40',
        description: 'Heavyweight tee with reflective Challenge crest and sponsor accents.',
        image: 'assets/images/deltarune.png',
      },
    ],
  },
  {
    id: 'minecraft',
    title: 'Minecraft',
    type: 'game',
    summary:
      'Get ready to show off your love for Minecraft with officially curated Minecraft apparel, accessories, and drinkware.',
    dropDate: 'Dec 02',
    formats: ['Tools', 'Desk', 'Bags'],
    about:
      'Patchwork bomber jackets use tactile redstone wiring embroidery, while modular desk trays snap together with magnetic studs for cable-free setups.',
    logistics: [
      'EU & US fulfillment centers',
      'Lifetime repair program',
      'Creator royalty splits',
    ],
    tags: ['Sandbox', 'Desk setup', 'Repairable'],
    heroImage: 'assets/images/Minecraft-Logo.png',
    cardImage: 'assets/images/minecraf.jpg',
    items: [
      {
        name: 'Redstone Bomber',
        price: '$140',
        description: 'Quilted bomber with tactile redstone embroidery and removable velcro glyphs.',
        image: 'assets/images/minecraft.png',
      },
      {
        name: 'Automation Desk Trays',
        price: '$58',
        description: 'Magnetic walnut trays sized for switches, keycaps, and mini-fig storage.',
        image: 'assets/images/hololive.png',
      },
      {
        name: 'Axolotl Sling Bag',
        price: '$62',
        description: 'Water-resistant sling with plush axolotl zipper pull and cable caddy pockets.',
        image: 'assets/images/deltarune.png',
      },
    ],
  },
  {
    id: 'undertale',
    title: 'Undertale',
    type: 'game',
    summary:
      'Shop official UNDERTALE t-shirts, long-sleeved shirts, jackets, books, lapel pins, games, plushes, figurines, posters, music, home & office goods.',
    dropDate: 'Nov 30',
    formats: ['Apparel', 'Music boxes', 'Charms'],
    about:
      'Featuring Toby Fox-approved arrangements and reversible knitwear referencing every route ending.',
    logistics: [
      'Numbered authenticity card',
      'Ships from Chicago & Tokyo',
      'Complimentary gift wrap',
    ],
    tags: ['Anniversary', 'Cozy', 'Music'],
    heroImage: 'assets/images/undertale-logo.png',
    cardImage: 'assets/images/undertale.jpg',
    items: [
      {
        name: 'Determination Varsity',
        price: '$150',
        description: 'Reversible varsity knit featuring sigils from every pacifist and genocide route.',
        image: 'assets/images/undertale.png',
      },
      {
        name: 'Heart Locket Music Box',
        price: '$70',
        description: 'Wind-up music box playing “His Theme” with brass inlay and felt lining.',
        image: 'assets/images/deltarune.png',
      },
      {
        name: 'Sprite Charm Set',
        price: '$32',
        description: 'Stainless steel mini-charms of the full party with lobster clasps.',
        image: 'assets/images/hollow-knight.webp',
      },
    ],
  },
];

const gridEl = document.getElementById('collectionsGrid');
const searchInput = document.getElementById('collectionSearch');
const filterChips = document.querySelectorAll('.chip');

const renderCollections = (list) => {
  if (!gridEl) return;
  if (!list.length) {
    gridEl.innerHTML = `<p>No universes match your filter. Try another tag.</p>`;
    return;
  }

  const html = list
    .map(
      (col) => `
      <article class="collection-card">
        <img src="${col.cardImage ?? col.heroImage}" alt="${col.title}" loading="lazy" />
        <div>
          <p class="eyebrow">${col.type === 'game' ? 'Game' : col.type === 'vtuber' ? 'VTuber' : 'Creator'}</p>
          <h3>${col.title}</h3>
          <p>${col.summary}</p>
        </div>
        <div class="tags">
          ${col.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <a class="more" href="universe.html?id=${col.id}">Enter shop</a>
      </article>
    `
    )
    .join('');

  gridEl.innerHTML = html;
};

const applyFilters = () => {
  if (!gridEl) return;
  const activeChip = document.querySelector('.chip.active');
  const filterType = activeChip?.dataset.filter ?? 'all';
  const query = searchInput?.value.trim().toLowerCase() ?? '';

  const filtered = collections.filter((col) => {
    const matchesType = filterType === 'all' ? true : col.type === filterType;
    const inText =
      !query ||
      col.title.toLowerCase().includes(query) ||
      col.summary.toLowerCase().includes(query) ||
      col.tags.some((tag) => tag.toLowerCase().includes(query));

    return matchesType && inText;
  });

  renderCollections(filtered);
};

const initIndexPage = () => {
  if (!gridEl) return;
  renderCollections(collections);

  filterChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      filterChips.forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      applyFilters();
    });
  });

  searchInput?.addEventListener('input', () => {
    applyFilters();
  });
};

const qs = (id) => document.getElementById(id);

const fillUniversePage = () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const universe = collections.find((col) => col.id === id) ?? collections[0];

  qs('universeTitle').textContent = universe.title;
  qs('universeSummary').textContent = universe.summary;
  qs('universeType').textContent =
    universe.type === 'game' ? 'Game drop' : universe.type === 'vtuber' ? 'VTuber drop' : 'Creator drop';
  qs('universeDropDate').textContent = universe.dropDate;
  qs('universeFormats').textContent = universe.formats.join(' · ');
  qs('universeImage').src = universe.heroImage;
  qs('universeImage').alt = universe.title;
  qs('universeAbout').textContent = universe.about;

  const logisticsList = qs('universeLogistics');
  logisticsList.innerHTML = universe.logistics.map((item) => `<li>${item}</li>`).join('');

  const itemsContainer = qs('universeItems');
  itemsContainer.innerHTML = universe.items
    .map(
      (item) => `
      <article class="collection-card">
        <img src="${item.image}" alt="${item.name}" />
        <div>
          <h3>${item.name}</h3>
          <p class="item-desc">${item.description ?? ''}</p>
          <p class="price">${item.price}</p>
        </div>
        <a class="more" href="#">Add to bag</a>
      </article>
    `
    )
    .join('');
};

const init = () => {
  const page = document.body.dataset.page;
  if (page === 'index') {
    initIndexPage();
  } else if (page === 'universe') {
    fillUniversePage();
  }
};

document.addEventListener('DOMContentLoaded', init);

