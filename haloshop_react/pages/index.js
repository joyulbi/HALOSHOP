import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import ProductCard from '../components/ProductCard';

const Home = () => {
  // 슬라이드 샘플 이미지 (나중에 props로 API 연결하면 됨)
  const bannerImages = [
    '/images/banner1.jpg',
    '/images/banner2.jpg',
    '/images/banner3.jpg'
  ];

  // 상품 샘플 데이터 (API 연결하면 됨)
  const products = [
    { id: 1, name: '상품1', image: '/images/product1.jpg', price: 50000 },
    { id: 2, name: '상품2', image: '/images/product2.jpg', price: 60000 },
    { id: 3, name: '상품3', image: '/images/product3.jpg', price: 70000 }
  ];

  // 슬라이드 설정
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div>
      {/* 네비게이션 */}
      <header>
        <nav>
          <Link href="/">홈</Link> | 
          <Link href="/items">상품</Link> | 
          <Link href="/donation">기부캠페인</Link> | 
          <Link href="/customer">고객센터</Link>
        </nav>
      </header>

      {/* 메인 슬라이드 */}
      <section className="banner">
        <Slider {...sliderSettings}>
          {bannerImages.map((img, idx) => (
            <div key={idx}>
              <img src={img} alt={`banner-${idx}`} style={{ width: '100%' }} />
            </div>
          ))}
        </Slider>
      </section>

      {/* 메인 상품 목록 */}
      <section className="product-list" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>

      {/* 사이드 퀵 메뉴 (고정) */}
      <div className="quick-menu" style={{ position: 'fixed', right: '20px', top: '200px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <button>💳</button>
        <button>🛒</button>
        <button>👤</button>
      </div>
    </div>
  );
};

export default Home;
