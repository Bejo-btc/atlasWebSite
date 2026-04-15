function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src="\image 5.jpg" alt="logo" />
        </div>
        <div className='footer-info'>
          <div>
            <p className="text">شركه متخصصه في التسويق والخدمات العقاريه . تمتلك خبره واسعه في سوق العقارات . نلتزم بتقديم حلول عقاريه موثوقه تلبي احتياجات عملائنا . هدنا هو تبسيط رحله البحث عن العقار وتحقيق أفضل قيمه لعملائنا</p>
          </div>
          <div>
            <span className="foo-number">+249969929157</span>
            <h6>العنوان الرئيسي</h6>
            <p>الخرطوم , حي الصحافه
              <br />
              كل يوم من الساعه 8 صباحا حتى ال 4مساء  </p>
          </div>

        </div>
        <div className='footer-grid'>
          <ul style={{ padding: "10px" }}>
            <li><a href="#">Feacbook</a></li>
            <li><a href="#">Instgram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Youtube</a></li>
          </ul>
          <span> جميع الحقوق محفوظه</span>
          <button>تواصل معنا</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;