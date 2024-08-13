export const navigation = {
    categories: [
      {
        id: 'category',
        name: 'Category',
        featured: [
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: 'https://toyzone.in/cdn/shop/collections/friction-toys.jpg?v=1659594955',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Plushies',
            href: '/',
            imageSrc: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492908079/300/492908079-1.jpeg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'toys',
            name: 'Toys & Games',
            items: [
              { name: 'Action games & toys', id:"Action"},
              { name: 'Games & Puzzles', id:"Games"},
              { name: 'Soft Toys', id: 'Soft' },
              { name: 'Infant & Pre-School Toys', id: 'Infant' },
              { name: 'Dolls & Playsets', id: 'Dolls' },
              { name: 'Construction & Building Toys', id: 'Construction' },
              { name: 'Activity Kits & Toys', id: 'Activity' },
            ],
          },
          {
            id: '',
            name: 'Sports & Oudoor',
            items: [
              { name: 'Outdoor Sports', id: 'Outdoor' },
              { name: 'Indoor Sports', id: 'Indoor' },
              { name: 'Outdoor Leisure', id: 'Leisure' },
              { name: 'Play Structures', id: 'Play' },
            ],
          },
          {
            id: 'Ride-Ons & Cycles',
            name: 'Ride-Ons & Cycles',
            items: [
              { name: 'Ride-Ons', id: 'Ride' },
              { name: 'Scooters', id: 'Scooters' },
              { name: 'Cycles & Tricycles', id: 'Cycles' },
            ],
          },
        ],
      },
      {
        id: 'Characters',
        name: 'Characters',
        featured: [
          {
            name: 'LEGO',
            id: '#',
            imageSrc: 'https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/494423887/665/494423887-1_5154.webp',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Barbie',
            id: '#',
            imageSrc: 'https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/494423744/300/494423744-1_3686.webp',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'Cartoon',
            name: 'Cartoon',
            items: [
              { name: 'Spiderman', id: 'Spiderman' },
              { name: 'Ironman', id: 'Ironman' },
              { name: 'Doraemon', id: 'Doraemon' },
              { name: 'Shinchan', id: 'Shinchan' },
              { name: 'Batman', id: 'Batman' },
              { name: 'Oggy', id: 'Oggy' },
              { name: 'Tom and Jerry', id: 'Tom' },
              
            ],
          },
          {
            id: 'Anime',
            name: 'Anime',
            items: [
              { name: 'Naruto', id: 'Naruto' },
              { name: 'One piece', id: 'piece' },
              { name: 'Jujutsu kaisen', id: 'jujutsu' },
              { name: 'Demon slayer', id: 'demon' },
              { name: 'Solo leveling', id: 'solo' },
              { name: 'Silent voice', id: 'silent' },
            ],
          },
          {
            id: 'Fantasy',
            name: 'Fantasy',
            items: [
              { name: 'Harry potter', id: 'harry' },
              { name: 'Toy Story', id: 'Story' },
              { name: 'The Cabbage Fairy', id: 'Cabbage' },
              { name: 'Dragon warrior', id: 'warrior' },
            ],
          },
        ],
      },
    ],
    pages: [
      { name: 'Company', id: '/' },
      { name: 'Stores', id: '/' },
    ],
  }