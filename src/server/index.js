const express = require('express');

const app = express();

app.use(express.static('dist'));
app.get('/api/phones', (req, res) => {
  const mockedData = [
    {
      id: 1,
      name: 'Iphone 7',
      description: 'Apple iPhone 7 smartphone was launched in September 2016. The phone comes with a 4.70-inch '
        + 'touchscreen display with a resolution of 750 pixels by 1334 pixels at a PPI of 326 pixels per inch. '
        + 'Apple iPhone 7 price in India starts from Rs. 39,489.',
      imgUrl: 'images/iphone7.png',
      screen: '4.70',
      resolution: '750x1334 pixels',
      ram: '2GB',
      storage: '32GB'
    },
    {
      id: 2,
      name: 'Iphone 8',
      description: 'The iPhone 8 is the eighth generation of Apple\'s popular iPhone mobile smartphone device '
        + 'and the successor to the iPhone 7.',
      imgUrl: 'images/iphone8.png',
      screen: '4.70',
      resolution: '750x1334 pixels',
      ram: '2GB',
      storage: '64GB'
    },
    {
      id: 3,
      name: 'Samsung Galaxy S9+',
      description: 'The S9+ has a dual-lens camera setup on the back, like on the Galaxy Note 8, while the S9 '
        + 'only has a single camera on the back. Both phones have a Dual Aperture rear camera which can switch '
        + 'between f/1.5 and f/2.4, depending on lighting conditions.',
      imgUrl: 'images/s9+.png',
      screen: '6.20',
      resolution: '1440x2960 pixels',
      ram: '6GB',
      storage: '64GB'
    },
    {
      id: 4,
      name: 'Samsung Galaxy S9',
      description: 'Samsung Galaxy S9. Samsung Galaxy S9 smartphone was launched in March 2018. '
        + 'The phone comes with a 5.80-inch touchscreen display with a resolution of 1440 pixels by 2960 pixels '
        + 'at a PPI of 568 pixels per inch.',
      imgUrl: 'images/s9.png',
      screen: '6.20',
      resolution: '1440x2960 pixels',
      ram: '4GB',
      storage: '64GB'
    },
    {
      id: 5,
      name: 'Nokia 5.1 Plus',
      description: 'Nokia 5.1 Plus smartphone was launched in August 2018. The phone comes with a 5.86-inch '
        + 'touchscreen display with a resolution of 720 pixels by 1520 pixels. The Nokia 5.1 Plus is powered by '
        + '1.8GHz octa-core processor and it comes with 3GB of RAM.',
      imgUrl: 'images/nokia_5_1_plus.jpg',
      screen: '5.86',
      resolution: '720x1520 pixels',
      ram: '3GB',
      storage: '32GB'
    },
    {
      id: 6,
      name: 'Huawei P20 Pro',
      description: 'HUAWEI’s P series has always been a pioneer of smartphone photography. Now the HUAWEI P20 '
        + 'Pro is once again leading the way with the revolutionary Leica Triple Camera, where aesthetic '
        + 'vision meets an advanced camera system that shines a light on intelligent photography.',
      imgUrl: 'images/huawei_p20_pro.png',
      screen: '6.10',
      resolution: '1080x2240 pixels',
      ram: '6GB',
      storage: '128GB'
    },

  ];
  res.setHeader('Content-Type', 'application/json');
  setTimeout(() => {
    res.send(JSON.stringify(mockedData));
  }, 2000);
});
app.listen(8080, () => console.log('Listening on port 8080!'));
