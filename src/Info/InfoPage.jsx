import './InfoPage.css';

function Info() {
   return (
      <>
         <div className="info-img">
            <div className="info-header">
               <button type="submit">تواصل معنا </button>
               <div>
                  <nav>
                     <ul>
                        <li>الصفحه الرئيسيه</li>
                        <li>العقارات </li>
                        <li>العروض</li>
                        <li>عن أطلس </li>
                     </ul>
                  </nav>
               </div>
            </div>
            <div className="info-content">
               <div>
                  <h1>عقارات أطلس</h1>
                  <p>مجموعة من العقارات المعروضة بعناية بمعلومات واضحة لمساعدتك على اتخاذ قرارك بثقة</p>
               </div>
            </div>
         </div>
         {/* cards section */}
         <div className="info-cards">
            <div className="info-card">
               <div className="card-info">
                  <img src="/Frame 2085663204.png" alt="card" />
                  <div className="location">
                     <h2>الخرطوم الحي الصحافة </h2>
                     <span></span>
                  </div>
                  <p>البيع: ١.٧ مليون جنية سوداني </p>
               </div>
            </div>
            <div className="info-card">
               <div className="card-info">
                  <img src="/Frame 2085663204.png" alt="card" />
                  <div className="location">
                     <h2>الخرطوم الحي الصحافة </h2>
                     <span></span>
                  </div>
                  <p>البيع: ١.٧ مليون جنية سوداني </p>
               </div>
            </div>
            <div className="info-card">
               <div className="card-info">
                  <img src="/Frame 2085663204.png" alt="card" />
                  <div className="location">
                     <h2>الخرطوم الحي الصحافة </h2>
                     <span></span>
                  </div>
                  <p>البيع: ١.٧ مليون جنية سوداني </p>
               </div>
            </div>
         </div>
         {/* houses */}
         <div className="houses">
            <div className="houses-header">
               <select name="تصفيه" id="filter">
                  <option value="all">تصفيه</option>
                  <option value="for-sale">للبيع</option>
                  <option value="for-rent">للايجار</option>
               </select>
               <h1>عقارات أطلس</h1>
            </div>
            <div className='card-flex'>
               <div className="house-card">
                  <div className='home-card'>
                     <div className="home-info">
                        <h6>خبره واسعه في السوق</h6>
                        <span>تفقد العقارات</span>
                     </div>
                     <img src="\Frame 2085663186.png" alt="home-img" className="home-img" />
                  </div>
                  <div className='home-card'>
                     <div className="home-info">
                        <h6>خبره واسعه في السوق</h6>
                        <span>تفقد العقارات</span>
                     </div>
                     <img src="\Frame 2085663188.webp" alt="home-img" className="home-img" />
                  </div>
                  <div className='home-card'>
                     <div className="home-info">
                        <h6>خبره واسعه في السوق</h6>
                        <span>تفقد العقارات</span>
                     </div>
                     <img src="\Frame 2085663187.webp" alt="home-img" className="home-img" />
                  </div>
                  <div className='home-card'>
                     <div className="home-info">
                        <h6>خبره واسعه في السوق</h6>
                        <span>تفقد العقارات</span>
                     </div>
                     <img src="Frame 2085663189.webp" alt="home-img" className="home-img" />
                  </div>
                  <div className='home-card'>
                     <div className="home-info">
                        <h6>خبره واسعه في السوق</h6>
                        <span>تفقد العقارات</span>
                     </div>
                     <img src="Frame 2085663189.webp" alt="home-img" className="home-img" />
                  </div>
                  <div className='home-card'>
                     <div className="home-info">
                        <h6>خبره واسعه في السوق</h6>
                        <span>تفقد العقارات</span>
                     </div>
                     <img src="\Frame 2085663188.webp" alt="home-img" className="home-img" />
                  </div>
                  <div className='home-card'>
                     <div className="home-info">
                        <h6>خبره واسعه في السوق</h6>
                        <span>تفقد العقارات</span>
                     </div>
                     <img src="\Frame 2085663187.webp" alt="home-img" className="home-img" />
                  </div>
                  <div className='home-card'>
                     <div className="home-info">
                        <h6>خبره واسعه في السوق</h6>
                        <span>تفقد العقارات</span>
                     </div>
                     <img src="Frame 2085663189.webp" alt="home-img" className="home-img" />
                  </div>
               </div>
            </div>
            <div className='houses-btn'>
               <button >أبدء رحلتك العقارية</button>
            </div>
         </div>
      </>
   );
}

export default Info;