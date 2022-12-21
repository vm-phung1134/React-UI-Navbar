import Navbar from "./Navbar/Navbar";
import "./HeaderStyle.css";
function Header() {
  return (
    <header>
      <Navbar />
      <div className="intro">
        <div className="intro-poster">
          <img src="https://i.ytimg.com/vi/tQ6OfF3QLEk/maxresdefault.jpg" />
        </div>
        <div className="intro-content">
          <h2>WELLCOME TO, MY WEBSITE FILMS </h2>
          <p>
            Một trang website chuyên lừa đảo và đầy nội dung chờ bạn khám phá.
            Cùng với những câu truyện hấp dẫn và kịch tính và khuôn bật cảm xúc
            mới...
          </p>
          <button className="btn">XEM THÊM</button>
        </div>
      </div>
    </header>
  );
}
export default Header;
