import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-14 pb-14">
      <div className="topBanner">
        <div className="topBannerTitle">
          🎉&nbsp;
          <Link className="topBannerTitleText" href={`/filter/all`}>
            新知实验室 1.0 已推出!
          </Link>
          &nbsp;🥳
        </div>
      </div>
      <div className="hero_syme" data-theme="dark">
        <div className="heroInner">
          <h1 className="tagLine">
            <Image
              src={"https://docusaurus.io/img/docusaurus_keytar.svg"}
              alt=""
              width={200}
              height={200}
              className="heroLogo"
            />
            <span className="heroTitleTextHtml_zYwv">
              让 <b>学习</b> 成为 <b>习惯</b>，是提升<b> 个人知识 </b>和
              <b> 技能水平 </b>的关键。
            </span>
          </h1>
          <div className="indexCtas">
            <Link href={`/filter/all`}>
              <div className="primaryBtn">开始学习</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer">
        所有视频和文字资源均来自互联网，仅供内部交流使用
      </div>
    </main>
  );
}
